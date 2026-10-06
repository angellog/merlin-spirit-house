"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactFormSchema, type ContactFormData } from "@/lib/contact-schema";
import { cleanWhatsappNumber } from "@/lib/whatsapp";

type SubmitState = "idle" | "success" | "unavailable" | "error";

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: { contactMethod: "whatsapp" },
  });

  // react-hook-form's isSubmitSuccessful only means the submit handler
  // resolved, not that the server accepted anything. Relying on it showed the
  // "Message Received" panel for submissions the API had rejected outright,
  // so success is tracked from the actual response instead.
  const [submitState, setSubmitState] = useState<SubmitState>("idle");

  const clientTitle = process.env.NEXT_PUBLIC_CLIENT_TITLE || "The Healer";
  const whatsapp = cleanWhatsappNumber(
    process.env.NEXT_PUBLIC_CLIENT_WHATSAPP || ""
  );
  const whatsappUrl = whatsapp
    ? `https://wa.me/${whatsapp}?text=${encodeURIComponent(
        "Hello, I tried to send a message through your website but it did not go through."
      )}`
    : null;

  const onSubmit = async (data: ContactFormData) => {
    const { honeypot, ...payload } = data;
    if (honeypot) return;

    try {
      const res = await fetch("/api/contact/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        setSubmitState("success");
        reset();
        return;
      }

      // 503 means mail is not configured on the server. The enquirer should be
      // sent to WhatsApp rather than told to try again on a form that cannot
      // work yet.
      setSubmitState(res.status === 503 ? "unavailable" : "error");
    } catch {
      setSubmitState("error");
    }
  };

  if (submitState === "success") {
    return (
      <div className="rounded-2xl border-2 border-gold-primary bg-surface p-8 text-center">
        <span className="text-4xl">✨</span>
        <h3 className="mt-4 font-[family-name:var(--font-heading)] text-xl font-semibold text-text-primary">
          Message Received
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-text-secondary">
          Your message has been received. {clientTitle} will respond personally,
          typically within a few hours.
        </p>
        <button
          onClick={() => {
            setSubmitState("idle");
            reset();
          }}
          className="mt-4 text-sm font-medium text-gold-primary transition-colors hover:underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div>
        <label
          htmlFor="name"
          className="mb-2 block text-sm font-medium text-text-primary"
        >
          Name
        </label>
        <input
          id="name"
          type="text"
          {...register("name")}
          className="w-full rounded-xl border border-white/10 bg-[var(--color-surface-alt)] px-4 py-3 text-sm text-[var(--color-foreground)] placeholder:text-text-muted transition-colors focus:border-gold-primary focus:outline-none focus:ring-1 focus:ring-gold-primary"
          placeholder="Your name"
        />
        {errors.name && (
          <p className="mt-1 text-xs text-red-400">{errors.name.message}</p>
        )}
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label
            htmlFor="contactMethod"
            className="mb-2 block text-sm font-medium text-text-primary"
          >
            Contact Method
          </label>
          <select
            id="contactMethod"
            {...register("contactMethod")}
            className="w-full rounded-xl border border-white/10 bg-[var(--color-surface-alt)] px-4 py-3 text-sm text-[var(--color-foreground)] transition-colors focus:border-gold-primary focus:outline-none focus:ring-1 focus:ring-gold-primary"
          >
            <option value="whatsapp">WhatsApp</option>
            <option value="email">Email</option>
          </select>
        </div>

        <div>
          <label
            htmlFor="contactValue"
            className="mb-2 block text-sm font-medium text-text-primary"
          >
            Your Number / Email
          </label>
          <input
            id="contactValue"
            type="text"
            {...register("contactValue")}
            className="w-full rounded-xl border border-white/10 bg-[var(--color-surface-alt)] px-4 py-3 text-sm text-[var(--color-foreground)] placeholder:text-text-muted transition-colors focus:border-gold-primary focus:outline-none focus:ring-1 focus:ring-gold-primary"
            placeholder="Your WhatsApp number or email"
          />
          {errors.contactValue && (
            <p className="mt-1 text-xs text-red-400">
              {errors.contactValue.message}
            </p>
          )}
        </div>
      </div>

      <div>
        <label
          htmlFor="situation"
          className="mb-2 block text-sm font-medium text-text-primary"
        >
          Briefly describe your situation
        </label>
        <textarea
          id="situation"
          rows={5}
          {...register("situation")}
          className="w-full rounded-xl border border-white/10 bg-[var(--color-surface-alt)] px-4 py-3 text-sm text-[var(--color-foreground)] placeholder:text-text-muted transition-colors focus:border-gold-primary focus:outline-none focus:ring-1 focus:ring-gold-primary"
          placeholder="Tell me about your situation and what kind of help you are seeking..."
        />
        {errors.situation && (
          <p className="mt-1 text-xs text-red-400">{errors.situation.message}</p>
        )}
      </div>

      <div className="absolute overflow-hidden opacity-0 h-0 w-0" aria-hidden="true">
        <label htmlFor="honeypot">Do not fill this</label>
        <input
          id="honeypot"
          type="text"
          {...register("honeypot")}
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      {(submitState === "unavailable" || submitState === "error") && (
        <div
          role="alert"
          className="rounded-xl border border-red-400/40 bg-red-400/10 p-4 text-sm leading-relaxed text-red-200"
        >
          {submitState === "unavailable" ? (
            <>
              <strong className="block text-red-100">
                This form is not able to send right now.
              </strong>
              <span className="mt-1 block">
                Your message was not sent, and we would rather tell you than
                leave you waiting for a reply that never comes.
                {whatsappUrl ? " Please reach us on WhatsApp instead — it is the fastest way." : ""}
              </span>
            </>
          ) : (
            <>
              <strong className="block text-red-100">
                Your message could not be sent.
              </strong>
              <span className="mt-1 block">
                Something went wrong on our side. Please try again in a moment
                {whatsappUrl ? ", or reach us on WhatsApp" : ""}.
              </span>
            </>
          )}
          {whatsappUrl && (
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex h-10 items-center justify-center rounded-full px-5 text-xs font-semibold uppercase tracking-wider text-[#0A0A12]"
              style={{ background: "#25D366" }}
            >
              Message on WhatsApp
            </a>
          )}
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="inline-flex h-12 items-center justify-center rounded-full bg-gradient-to-r from-gold-primary to-gold-light px-8 font-[family-name:var(--font-heading)] text-sm font-semibold uppercase tracking-wider text-[#0A0A12] transition-all hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-50"
      >
        {isSubmitting ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}
