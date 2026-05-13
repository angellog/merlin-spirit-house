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
              className="rounded-2xl bg-elevated border-2 border-whatsapp/30 p-8 text-center transition-all hover:border-whatsapp/60"
            >
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp/10">
                <svg className="h-7 w-7 text-whatsapp" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              </div>
              <h3 className="mt-4">WhatsApp</h3>
              <p className="mt-2 text-sm text-text-muted">Primary — Fastest response</p>
              <p className="mt-2 font-semibold text-whatsapp">{clientWhatsapp}</p>
            </a>

            <a
              href={`mailto:${clientEmail}`}
              className="rounded-2xl bg-elevated border border-gold-dim/30 p-8 text-center transition-all hover:border-gold-primary/50"
            >
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-gold-primary/10">
                <span className="text-2xl text-gold-primary">✉</span>
              </div>
              <h3 className="mt-4">Email</h3>
              <p className="mt-2 text-sm text-text-muted">Detailed inquiries welcome</p>
              <p className="mt-2 font-semibold text-gold-primary">{clientEmail}</p>
            </a>

            <button
              className="rounded-2xl bg-elevated border border-gold-dim/30 p-8 text-center transition-all hover:border-gold-primary/50"
            >
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-gold-primary/10">
                <span className="text-2xl text-gold-primary">💬</span>
              </div>
              <h3 className="mt-4">Live Chat</h3>
              <p className="mt-2 text-sm text-text-muted">Click the chat bubble below</p>
              <p className="mt-2 font-semibold text-gold-primary">Available Now</p>
            </button>
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
              <div className="rounded-2xl border border-gold-dim/20 bg-surface overflow-hidden">
                <div className="relative h-48 w-full">
                  <Image
                    src="/images/contact/location-exterior.jpg"
                    alt="Our Sacred Space"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface to-transparent" />
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-bold text-text-primary font-[family-name:var(--font-heading)]">Location &amp; Info</h3>

                  <div className="mt-8 space-y-6">
                    <div>
                      <p className="text-xs uppercase tracking-wider text-text-muted">Location</p>
                      <p className="mt-1 text-sm text-text-primary">{clientLocation}</p>
                    </div>

                    <div>
                      <p className="text-xs uppercase tracking-wider text-text-muted">Availability</p>
                      <p className="mt-1 text-sm text-text-primary">24 hours a day, 7 days a week</p>
                    </div>

                    <div>
                      <p className="text-xs uppercase tracking-wider text-text-muted">Response Time</p>
                      <p className="mt-1 text-sm text-text-primary">Typically within a few hours via WhatsApp. Email responses within 24 hours.</p>
                    </div>

                    <div>
                      <p className="text-xs uppercase tracking-wider text-text-muted">Distance Healing</p>
                      <p className="mt-1 text-sm text-text-primary">Available worldwide. Physical presence is not required for most spiritual work.</p>
                    </div>

                    <div className="rounded-xl border border-whatsapp/20 bg-whatsapp/5 p-4">
                      <p className="text-sm text-whatsapp">
                        For the fastest response, reach out on WhatsApp directly.
                      </p>
                      <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-2 inline-flex h-10 items-center justify-center rounded-full bg-whatsapp px-5 text-sm font-semibold text-white transition-all hover:brightness-110"
                      >
                        Open WhatsApp
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
