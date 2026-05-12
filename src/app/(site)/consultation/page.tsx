import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import ContactForm from "@/components/ContactForm";

const clientName = process.env.NEXT_PUBLIC_CLIENT_NAME || "Ndaula";
const clientTitle = process.env.NEXT_PUBLIC_CLIENT_TITLE || "Prof.";
const clientWhatsapp = process.env.NEXT_PUBLIC_CLIENT_WHATSAPP || "+256788546704";
const clientEmail = process.env.NEXT_PUBLIC_CLIENT_EMAIL || "info@merlinspirithouse.com";
const clientDomain = process.env.NEXT_PUBLIC_SITE_URL || "https://merlinspirithouse.com";

export const metadata: Metadata = {
  title: `Book a Private Consultation — Free & Confidential | ${clientTitle} ${clientName}`,
  description: `Book a free, private consultation with ${clientTitle} ${clientName}. No obligation, no pressure — just honest spiritual guidance. Available via WhatsApp, phone, or contact form.`,
  openGraph: {
    title: `Book a Private Consultation — Free & Confidential`,
    description: `Book a free, private consultation with ${clientTitle} ${clientName}. No obligation, no pressure — just honest spiritual guidance.`,
    url: `${clientDomain}/consultation`,
  },
};

export default function ConsultationPage() {
  const whatsappUrl = `https://wa.me/${clientWhatsapp.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(`Hello ${clientTitle} ${clientName}, I would like to book a free private consultation.`)}`;

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Private Spiritual Consultation",
    provider: {
      "@type": "Person",
      name: `${clientTitle} ${clientName}`,
      jobTitle: "Traditional Spiritual Healer",
    },
    description: `Free, confidential spiritual consultation with ${clientTitle} ${clientName}. Available worldwide via WhatsApp, phone, or contact form.`,
    areaServed: "Worldwide",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
    },
  };

  const contactPageSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: `Book a Consultation with ${clientTitle} ${clientName}`,
    url: `${clientDomain}/consultation`,
    mainEntity: {
      "@type": "Person",
      name: `${clientTitle} ${clientName}`,
      telephone: clientWhatsapp,
      email: clientEmail,
    },
  };

  return (
    <>
      <JsonLd data={serviceSchema} />
      <JsonLd data={contactPageSchema} />

      <section className="min-h-[70vh] bg-stars flex flex-col items-center justify-center text-center px-6 py-24">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-gold-primary)]">
          Free &amp; Confidential
        </p>
        <h1 className="max-w-4xl">
          Book a Private Consultation — It&apos;s Free
        </h1>
        <p className="mt-6 max-w-2xl text-xl leading-relaxed text-[var(--color-text-secondary)]">
          No obligation. No pressure. Just honest spiritual guidance from {clientTitle} {clientName}. Tell me what you are going through, and I will tell you what can be done.
        </p>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10 inline-flex h-14 items-center justify-center rounded-full bg-[var(--color-whatsapp)] px-8 font-[family-name:var(--font-heading)] text-sm font-semibold uppercase tracking-wider text-white transition-all hover:brightness-110 animate-pulse-whatsapp"
        >
          <svg className="mr-2 h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.038 2.149.002 1.135.826 2.129 1.213 2.678.388.549 2.285 3.674 5.603 5.162.783.338 1.392.539 1.866.689.784.249 1.497.214 2.061.131.628-.099 1.927-.787 2.199-1.553.272-.767.272-1.424.194-1.553-.075-.149-.273-.223-.57-.371z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.5.5 0 00.612.638l4.694-1.358A11.955 11.955 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.387 0-4.607-.798-6.382-2.143l-.446-.345-3.138.908.929-3.005-.381-.48A9.945 9.945 0 012 12C2 6.486 6.486 2 12 2s10 4.486 10 10-4.486 10-10 10z"/></svg>
          Start on WhatsApp
        </a>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-4xl px-6">
          <div className="text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-gold-primary)]">
              The Process
            </p>
            <h2>What Happens in a Consultation</h2>
          </div>
          <div className="mt-12 space-y-8 text-lg leading-relaxed text-[var(--color-text-secondary)]">
            <p>
              When you reach out, {clientTitle} {clientName} will personally review your situation — not an assistant, not an automated system, but the healer himself. You will describe what you are experiencing, whether it is a relationship crisis, financial hardship, a sense of spiritual attack, or something you cannot quite name. Everything you share is held in absolute confidentiality.
            </p>
            <p>
              Based on what you describe, {clientName} will perform a spiritual assessment — a reading of the energies, forces, and influences surrounding your situation. This is not guesswork or cold reading; it is a genuine spiritual evaluation rooted in decades of practice and ancestral authority. You will receive clear, honest feedback about what is happening and what can be done.
            </p>
            <p>
              If the situation calls for spiritual work — a ritual, a spell, a cleansing, or protection — you will be told exactly what is recommended and why. There is no pressure to proceed. You are free to take the guidance and decide in your own time. The consultation is free because {clientName} believes that everyone deserves honest spiritual guidance before making any commitment.
            </p>
          </div>
        </div>
      </section>

      <hr className="divider-gold" />

      <section className="py-24">
        <div className="mx-auto max-w-4xl px-6">
          <div className="text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-gold-primary)]">
              Insight &amp; Clarity
            </p>
            <h2>What You Will Learn</h2>
          </div>
          <ul className="mt-12 space-y-4 max-w-2xl mx-auto">
            {[
              "Whether spiritual forces are affecting your situation",
              "The root cause of recurring problems in your life",
              "Whether a curse, hex, or spiritual attack is present",
              "What specific spiritual work can address your situation",
              "A realistic timeline for seeing results",
              "Whether distance healing is suitable for your case",
              "An honest assessment of what is and is not possible",
              "The exact steps to move forward, if you choose to",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="mt-1 shrink-0 text-[var(--color-gold-primary)]">◈</span>
                <span className="text-lg text-[var(--color-text-secondary)]">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-24 bg-[var(--color-bg-surface)]">
        <div className="mx-auto max-w-5xl px-6">
          <div className="text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-gold-primary)]">
              Choose Your Method
            </p>
            <h2>How to Reach Out</h2>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            <div className="rounded-2xl bg-[var(--color-bg-elevated)] border-2 border-[var(--color-whatsapp)]/30 p-8 text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[var(--color-whatsapp)]/10">
                <svg className="h-8 w-8 text-[var(--color-whatsapp)]" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.038 2.149.002 1.135.826 2.129 1.213 2.678.388.549 2.285 3.674 5.603 5.162.783.338 1.392.539 1.866.689.784.249 1.497.214 2.061.131.628-.099 1.927-.787 2.199-1.553.272-.767.272-1.424.194-1.553-.075-.149-.273-.223-.57-.371z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.5.5 0 00.612.638l4.694-1.358A11.955 11.955 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.387 0-4.607-.798-6.382-2.143l-.446-.345-3.138.908.929-3.005-.381-.48A9.945 9.945 0 012 12C2 6.486 6.486 2 12 2s10 4.486 10 10-4.486 10-10 10z"/></svg>
              </div>
              <h3 className="mt-6">WhatsApp</h3>
              <p className="mt-2 text-[var(--color-text-muted)]">Recommended — Fastest response</p>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex h-12 items-center justify-center rounded-full bg-[var(--color-whatsapp)] px-6 text-sm font-semibold text-white transition-all hover:brightness-110"
              >
                Open WhatsApp
              </a>
            </div>
            <div className="rounded-2xl bg-[var(--color-bg-elevated)] border border-[var(--color-gold-dim)]/30 p-8 text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[var(--color-gold-primary)]/10">
                <span className="text-3xl text-[var(--color-gold-primary)]">📞</span>
              </div>
              <h3 className="mt-6">Phone / Voice Call</h3>
              <p className="mt-2 text-[var(--color-text-muted)]">Speak directly by voice</p>
              <a
                href={`tel:${clientWhatsapp}`}
                className="mt-4 inline-flex h-12 items-center justify-center rounded-full border border-[var(--color-gold-primary)] px-6 text-sm font-semibold text-[var(--color-gold-primary)] transition-all hover:bg-[var(--color-gold-primary)] hover:text-[var(--color-bg-deepnight)]"
              >
                Call Now
              </a>
            </div>
            <div className="rounded-2xl bg-[var(--color-bg-elevated)] border border-[var(--color-gold-dim)]/30 p-8 text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[var(--color-gold-primary)]/10">
                <span className="text-3xl text-[var(--color-gold-primary)]">✉</span>
              </div>
              <h3 className="mt-6">Contact Form</h3>
              <p className="mt-2 text-[var(--color-text-muted)]">Write your situation below</p>
              <a
                href="#consultation-form"
                className="mt-4 inline-flex h-12 items-center justify-center rounded-full border border-[var(--color-gold-primary)] px-6 text-sm font-semibold text-[var(--color-gold-primary)] transition-all hover:bg-[var(--color-gold-primary)] hover:text-[var(--color-bg-deepnight)]"
              >
                Scroll to Form
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="mx-auto max-w-3xl px-6">
          <div className="rounded-2xl border-2 border-[var(--color-gold-primary)]/40 bg-[var(--color-bg-surface)] p-8 text-center">
            <span className="text-3xl text-[var(--color-gold-primary)]">🔒</span>
            <h3 className="mt-4">Privacy Guarantee</h3>
            <p className="mt-3 text-[var(--color-text-secondary)]">
              Every consultation is strictly confidential. Your name, your situation, and everything you share is protected by sacred oath. No information is ever shared with third parties, stored in insecure systems, or used for any purpose beyond your healing.
            </p>
          </div>
        </div>
      </section>

      <section id="consultation-form" className="py-24 scroll-mt-24">
        <div className="mx-auto max-w-2xl px-6">
          <div className="text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-gold-primary)]">
              Send Your Message
            </p>
            <h2>Describe Your Situation</h2>
            <p className="mt-4 text-[var(--color-text-secondary)]">
              Fill out the form below and {clientTitle} {clientName} will respond personally, typically within a few hours.
            </p>
          </div>
          <div className="mt-10">
            <ContactForm />
          </div>
          <div className="mt-8 text-center">
            <p className="text-sm text-[var(--color-text-muted)]">Or reach out directly on WhatsApp:</p>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex h-14 items-center justify-center rounded-full bg-[var(--color-whatsapp)] px-8 font-[family-name:var(--font-heading)] text-sm font-semibold uppercase tracking-wider text-white transition-all hover:brightness-110 animate-pulse-whatsapp"
            >
              <svg className="mr-2 h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.038 2.149.002 1.135.826 2.129 1.213 2.678.388.549 2.285 3.674 5.603 5.162.783.338 1.392.539 1.866.689.784.249 1.497.214 2.061.131.628-.099 1.927-.787 2.199-1.553.272-.767.272-1.424.194-1.553-.075-.149-.273-.223-.57-.371z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.5.5 0 00.612.638l4.694-1.358A11.955 11.955 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.387 0-4.607-.798-6.382-2.143l-.446-.345-3.138.908.929-3.005-.381-.48A9.945 9.945 0 012 12C2 6.486 6.486 2 12 2s10 4.486 10 10-4.486 10-10 10z"/></svg>
              WhatsApp Direct
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[var(--color-bg-surface)]">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <p className="font-[family-name:var(--font-heading)] text-2xl font-semibold text-[var(--color-gold-primary)]">
            If you are unsatisfied with the initial consultation, you owe nothing.
          </p>
          <p className="mt-4 text-[var(--color-text-secondary)]">
            There is no risk. The consultation is free, confidential, and carries no obligation. Reach out and see for yourself.
          </p>
        </div>
      </section>
    </>
  );
}
