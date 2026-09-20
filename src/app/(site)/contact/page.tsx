import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
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

      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/hero/ritual-altar.jpg"
            alt="Contact Context"
            fill
            className="object-cover opacity-10"
          />
          <div className="bg-stars absolute inset-0 opacity-20" />
        </div>
        <div className="bg-gradient-to-b from-deepnight via-deepnight/90 to-deepnight absolute inset-0" />

        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-gold-primary">
              Get in Touch
            </p>
            <h1>
              Contact {clientTitle} {clientName} — Available 24/7
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-text-secondary">
              Whether you are facing a crisis, seeking guidance, or simply curious about what spiritual healing can offer, you are welcome here. Reach out any time.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3 max-w-4xl mx-auto">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-2xl bg-elevated/50 backdrop-blur-xl border border-white/10 p-6 md:p-8 text-center transition-all hover:border-whatsapp/50 hover:shadow-2xl hover:shadow-whatsapp/10"
            >
              <div className="relative z-10">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp/10 mb-4 transition-transform group-hover:scale-110">
                  <svg className="h-7 w-7 text-whatsapp" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                </div>
                <h3 className="mt-0 text-lg">WhatsApp</h3>
                <p className="mt-2 text-xs text-text-muted">Primary — Fastest response</p>
                <p className="mt-2 text-sm font-semibold text-whatsapp md:text-base">{clientWhatsapp}</p>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:animate-shimmer" />
            </a>

            <a
              href={`mailto:${clientEmail}`}
              className="group relative overflow-hidden rounded-2xl bg-elevated/50 backdrop-blur-xl border border-white/10 p-6 md:p-8 text-center transition-all hover:border-gold-primary/50 hover:shadow-2xl hover:shadow-gold-primary/10"
            >
              <div className="relative z-10">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-gold-primary/10 mb-4 transition-transform group-hover:scale-110">
                  <span className="text-2xl text-gold-primary">✉</span>
                </div>
                <h3 className="mt-0 text-lg">Email</h3>
                <p className="mt-2 text-xs text-text-muted">Detailed inquiries welcome</p>
                <p className="mt-2 text-sm font-semibold text-gold-primary break-all md:text-base">{clientEmail}</p>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:animate-shimmer" />
            </a>

            <div
              className="group relative overflow-hidden rounded-2xl bg-elevated/50 backdrop-blur-xl border border-white/10 p-6 md:p-8 text-center transition-all hover:border-gold-primary/50 hover:shadow-2xl hover:shadow-gold-primary/10"
            >
              <div className="relative z-10">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-gold-primary/10 mb-4 transition-transform group-hover:scale-110">
                  <span className="text-2xl text-gold-primary">💬</span>
                </div>
                <h3 className="mt-0 text-lg">Live Chat</h3>
                <p className="mt-2 text-xs text-text-muted">Click the chat bubble below</p>
                <p className="mt-2 text-sm font-semibold text-gold-primary md:text-base">Available Now</p>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:animate-shimmer" />
            </div>
          </div>

          <div className="mt-24 grid gap-16 lg:grid-cols-5">
            <div className="lg:col-span-3">
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-gold-primary">
                Send a Message
              </p>
              <h2>Describe Your Situation</h2>
              <p className="mt-4 text-text-secondary">
                Fill out the form below and {clientTitle} {clientName} will respond personally, typically within a few hours.
              </p>
              <div className="mt-10">
                <ContactForm />
              </div>
            </div>

            <div className="lg:col-span-2">
              <div className="rounded-2xl border border-white/10 bg-elevated/50 backdrop-blur-xl overflow-hidden shadow-2xl">
                <div className="relative h-48 w-full">
                  <Image
                    src="/images/contact/location-exterior.jpg"
                    alt="Our Sacred Space"
                    fill
                    className="object-cover opacity-80"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-deepnight/90 to-transparent" />
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-bold text-text-primary font-[family-name:var(--font-heading)]">Location &amp; Info</h3>

                  <div className="mt-8 space-y-6">
                    <div className="flex items-start gap-3">
                      <span className="text-gold-primary mt-0.5">📍</span>
                      <div>
                        <p className="text-[0.65rem] uppercase tracking-wider text-gold-dim">Location</p>
                        <p className="mt-0.5 text-sm text-text-primary">{clientLocation}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <span className="text-gold-primary mt-0.5">⏰</span>
                      <div>
                        <p className="text-[0.65rem] uppercase tracking-wider text-gold-dim">Availability</p>
                        <p className="mt-0.5 text-sm text-text-primary">24 hours a day, 7 days a week</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <span className="text-gold-primary mt-0.5">⚡</span>
                      <div>
                        <p className="text-[0.65rem] uppercase tracking-wider text-gold-dim">Response Time</p>
                        <p className="mt-0.5 text-sm text-text-primary">Typically within hours via WhatsApp</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <span className="text-gold-primary mt-0.5">🌍</span>
                      <div>
                        <p className="text-[0.65rem] uppercase tracking-wider text-gold-dim">Distance Healing</p>
                        <p className="mt-0.5 text-sm text-text-primary">Available worldwide. No travel required.</p>
                      </div>
                    </div>

                    <div className="mt-8 pt-8 border-t border-white/5">
                      <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative overflow-hidden flex w-full items-center justify-center gap-2 rounded-full bg-whatsapp px-6 py-3.5 text-sm font-bold uppercase tracking-widest text-white transition-all hover:scale-[1.02]"
                      >
                        <span className="relative z-10">Instant WhatsApp</span>
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:animate-shimmer" />
                      </a>
                    </div>
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
