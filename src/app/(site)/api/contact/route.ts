import { NextResponse } from "next/server";
import { contactSchema } from "@/lib/contact-schema";

const RESEND_ENDPOINT = "https://api.resend.com/emails";

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function POST(request: Request) {
  let parsed;
  try {
    parsed = contactSchema.safeParse(await request.json());
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  if (!parsed.success) {
    return NextResponse.json(
      { error: parsed.error.issues[0]?.message ?? "Invalid submission." },
      { status: 400 }
    );
  }

  const { name, contactMethod, contactValue, situation } = parsed.data;

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL;

  // Without mail configured there is no way to deliver this. Saying so is the
  // only honest option: the previous code returned success for submissions it
  // discarded, so visitors believed they had made contact when they had not.
  // The form turns this status into a prompt to use WhatsApp instead.
  if (!apiKey || !to || !from) {
    console.error(
      "[contact] mail not configured; missing:",
      [
        !apiKey && "RESEND_API_KEY",
        !to && "CONTACT_TO_EMAIL",
        !from && "CONTACT_FROM_EMAIL",
      ]
        .filter(Boolean)
        .join(", ")
    );
    return NextResponse.json(
      { error: "mail_not_configured" },
      { status: 503 }
    );
  }

  const isWhatsapp = contactMethod === "whatsapp";
  const subject = `New enquiry from ${name} (${isWhatsapp ? "WhatsApp" : "Email"})`;

  const lines = [
    `Name: ${name}`,
    `Preferred contact: ${isWhatsapp ? "WhatsApp" : "Email"}`,
    `Reach them on: ${contactValue}`,
    "",
    "Situation:",
    situation,
  ];

  const html = `
    <h2>New enquiry</h2>
    <p><strong>Name:</strong> ${escapeHtml(name)}</p>
    <p><strong>Preferred contact:</strong> ${isWhatsapp ? "WhatsApp" : "Email"}</p>
    <p><strong>Reach them on:</strong> ${escapeHtml(contactValue)}</p>
    <h3>Situation</h3>
    <p style="white-space:pre-wrap">${escapeHtml(situation)}</p>
  `;

  try {
    const response = await fetch(RESEND_ENDPOINT, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [to],
        subject,
        text: lines.join("\n"),
        html,
        // Only a valid email address belongs in reply_to; a WhatsApp number
        // here would make the mail unreplyable.
        ...(contactMethod === "email" ? { reply_to: contactValue } : {}),
      }),
    });

    if (!response.ok) {
      // Log the provider's reason, never the enquirer's details.
      const detail = await response.text().catch(() => "");
      console.error(
        `[contact] Resend rejected the send: ${response.status} ${detail.slice(0, 300)}`
      );
      return NextResponse.json({ error: "send_failed" }, { status: 502 });
    }
  } catch (error) {
    console.error("[contact] could not reach Resend:", error);
    return NextResponse.json({ error: "send_failed" }, { status: 502 });
  }

  // Deliberately no logging of name, contact details or situation: these are
  // sensitive personal disclosures, and shared hosting logs are not a safe
  // place for them.
  return NextResponse.json({ success: true }, { status: 200 });
}
