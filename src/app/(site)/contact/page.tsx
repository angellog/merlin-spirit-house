import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import ContactForm from "@/components/ContactForm";

const clientName = process.env.NEXT_PUBLIC_CLIENT_NAME || "Ndaula";
const clientTitle = process.env.NEXT_PUBLIC_CLIENT_TITLE || "Prof.";
const clientWhatsapp = process.env.NEXT_PUBLIC_CLIENT_WHATSAPP || "+256788546704";
const clientEmail = process.env.NEXT_PUBLIC_CLIENT_EMAIL || "info@merlinspirithouse.com";
const clientLocation = process.env.NEXT_PUBLIC_CLIENT_LOCATION || "Kampala, Uganda";
const clientDomain = process.env.NEXT_PUBLIC_SITE_URL || "https://merlinspirithouse.com";

export const metadata: Metadata = {
  title: `Contact ${clientTitle} ${clientName} — Available 24/7`,
  description: `Reach ${clientTitle} ${clientName} anytime via WhatsApp, email, or contact form. Available 24/7 for spiritual consultations worldwide. Based in ${clientLocation}.`,
  openGraph: {
    title: `Contact ${clientTitle} ${clientName} — Available 24/7`,
    description: `Reach ${clientTitle} ${clientName} anytime via WhatsApp, email, or contact form. Available 24/7 for spiritual consultations worldwide.`,
    url: `${clientDomain}/contact`,
  },
};

export default function ContactPage() {
  const whatsappUrl = `https://wa.me/${clientWhatsapp.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(`Hello ${clientTitle} ${clientName}, I would like to get in touch.`)}`;

  const contactPageSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: `Contact ${clientTitle} ${clientName}`,
    url: `${clientDomain}/contact`,
    mainEntity: {
      "@type": "Person",
      name: `${clientTitle} ${clientName}`,
      telephone: clientWhatsapp,
      email: clientEmail,
    },
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: `${clientName} Spiritual Healer`,
    telephone: clientWhatsapp,
    email: clientEmail,
    address: {
      "@type": "PostalAddress",
      addressLocality: clientLocation,
      addressCountry: "UG",
    },
    openingHours: "Mo-Su 00:00-23:59",
  };

  return (
    <>
      <JsonLd data={contactPageSchema} />
      <JsonLd data={localBusinessSchema} />

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-gold-primary)]">
              Get in Touch
            </p>
            <h1>
              Contact {clientTitle} {clientName} — Available 24/7
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-[var(--color-text-secondary)]">
              Whether you are facing a crisis, seeking guidance, or simply curious about what spiritual healing can offer, you are welcome here. Reach out any time.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3 max-w-4xl mx-auto">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl bg-[var(--color-bg-elevated)] border-2 border-[var(--color-whatsapp)]/30 p-8 text-center transition-all hover:border-[var(--color-whatsapp)]/60"
            >
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[var(--color-whatsapp)]/10">
                <svg className="h-7 w-7 text-[var(--color-whatsapp)]" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.038 2.149.002 1.135.826 2.129 1.213 2.678.388.549 2.285 3.674 5.603 5.162.783.338 1.392.539 1.866.689.784.249 1.497.214 2.061.131.628-.099 1.927-.787 2.199-1.553.272-.767.272-1.424.194-1.553-.075-.149-.273-.223-.57-.371z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.5.5 0 00.612.638l4.694-1.358A11.955 11.955 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.387 0-4.607-.798-6.382-2.143l-.446-.345-3.138.908.929-3.005-.381-.48A9.945 9.945 0 012 12C2 6.486 6.486 2 12 2s10 4.486 10 10-4.486 10-10 10z"/></svg>
              </div>
              <h3 className="mt-4">WhatsApp</h3>
              <p className="mt-2 text-sm text-[var(--color-text-muted)]">Primary — Fastest response</p>
              <p className="mt-2 font-semibold text-[var(--color-whatsapp)]">{clientWhatsapp}</p>
            </a>

            <a
              href={`mailto:${clientEmail}`}
              className="rounded-2xl bg-[var(--color-bg-elevated)] border border-[var(--color-gold-dim)]/30 p-8 text-center transition-all hover:border-[var(--color-gold-primary)]/50"
            >
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[var(--color-gold-primary)]/10">
                <span className="text-2xl text-[var(--color-gold-primary)]">✉</span>
              </div>
              <h3 className="mt-4">Email</h3>
              <p className="mt-2 text-sm text-[var(--color-text-muted)]">Detailed inquiries welcome</p>
              <p className="mt-2 font-semibold text-[var(--color-gold-primary)]">{clientEmail}</p>
            </a>

            <button
              className="rounded-2xl bg-[var(--color-bg-elevated)] border border-[var(--color-gold-dim)]/30 p-8 text-center transition-all hover:border-[var(--color-gold-primary)]/50"
            >
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[var(--color-gold-primary)]/10">
                <span className="text-2xl text-[var(--color-gold-primary)]">💬</span>
              </div>
              <h3 className="mt-4">Live Chat</h3>
              <p className="mt-2 text-sm text-[var(--color-text-muted)]">Click the chat bubble below</p>
              <p className="mt-2 font-semibold text-[var(--color-gold-primary)]">Available Now</p>
            </button>
          </div>

          <div className="mt-24 grid gap-16 lg:grid-cols-5">
            <div className="lg:col-span-3">
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-gold-primary)]">
                Send a Message
              </p>
              <h2>Describe Your Situation</h2>
              <p className="mt-4 text-[var(--color-text-secondary)]">
                Fill out the form below and {clientTitle} {clientName} will respond personally, typically within a few hours.
              </p>
              <div className="mt-10">
                <ContactForm />
              </div>
            </div>

            <div className="lg:col-span-2">
              <div className="rounded-2xl border border-[var(--color-gold-dim)]/20 bg-[var(--color-bg-surface)] p-8">
                <h3 className="text-xl font-bold text-[var(--color-text-primary)] font-[family-name:var(--font-heading)]">Location &amp; Info</h3>

                <div className="mt-8 space-y-6">
                  <div>
                    <p className="text-xs uppercase tracking-wider text-[var(--color-text-muted)]">Location</p>
                    <p className="mt-1 text-sm text-[var(--color-text-primary)]">{clientLocation}</p>
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-wider text-[var(--color-text-muted)]">Availability</p>
                    <p className="mt-1 text-sm text-[var(--color-text-primary)]">24 hours a day, 7 days a week</p>
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-wider text-[var(--color-text-muted)]">Response Time</p>
                    <p className="mt-1 text-sm text-[var(--color-text-primary)]">Typically within a few hours via WhatsApp. Email responses within 24 hours.</p>
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-wider text-[var(--color-text-muted)]">Distance Healing</p>
                    <p className="mt-1 text-sm text-[var(--color-text-primary)]">Available worldwide. Physical presence is not required for most spiritual work.</p>
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-wider text-[var(--color-text-muted)]">Confidentiality</p>
                    <p className="mt-1 text-sm text-[var(--color-text-primary)]">All consultations and communications are strictly confidential.</p>
                  </div>

                  <div className="rounded-xl border border-[var(--color-whatsapp)]/20 bg-[var(--color-whatsapp)]/5 p-4">
                    <p className="text-sm text-[var(--color-whatsapp)]">
                      For the fastest response, reach out on WhatsApp directly.
                    </p>
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 inline-flex h-10 items-center justify-center rounded-full bg-[var(--color-whatsapp)] px-5 text-sm font-semibold text-white transition-all hover:brightness-110"
                    >
                      Open WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
