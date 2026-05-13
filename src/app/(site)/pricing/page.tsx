import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { cleanWhatsappNumber } from "@/lib/whatsapp";

const clientName = process.env.NEXT_PUBLIC_CLIENT_NAME || "Ndaula";
const clientTitle = process.env.NEXT_PUBLIC_CLIENT_TITLE || "Prof.";
const clientWhatsapp = process.env.NEXT_PUBLIC_CLIENT_WHATSAPP || "+256788546704";
const clientDomain = process.env.NEXT_PUBLIC_SITE_URL || "https://merlinspirithouse.com";

export const metadata: Metadata = {
  title: "Spiritual Healing Pricing & Packages | Free Consultation | Merlin Spirit House",
  description: `Free initial consultation with ${clientTitle} ${clientName}. Basic rituals from $97, full spiritual work from $297. No hidden fees. WhatsApp ${clientWhatsapp}.`,
  alternates: { canonical: "/pricing/" },
};

const tiers = [
  {
    name: "Starter Consultation",
    price: "Free",
    featured: false,
    features: [
      "20-minute WhatsApp assessment",
      "Situation diagnosis",
      "Recommended service path",
    ],
    cta: "Book Free Consultation",
    ctaHref: "/consultation/",
  },
  {
    name: "Basic Ritual",
    price: "From $97",
    featured: false,
    features: [
      "Single-focus spell or cleansing",
      "7–14 day timeline",
      "1 follow-up check-in",
    ],
    cta: "Get Started",
    ctaHref: "whatsapp",
  },
  {
    name: "Full Spiritual Work",
    price: "From $297",
    featured: true,
    features: [
      "Complex multi-layer work (love, curse, money)",
      "14–30 day timeline",
      "Ongoing support throughout",
    ],
    cta: "Begin Your Work",
    ctaHref: "whatsapp",
  },
  {
    name: "Deep Ancestral Work",
    price: "Custom Quote",
    featured: false,
    features: [
      "Generational curse removal",
      "Spirit communication and blessing",
      "Full ancestral alignment",
      "Timeline varies",
    ],
    cta: "Discuss Your Case",
    ctaHref: "whatsapp",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Spiritual Healing & Voodoo Spell Casting",
  provider: {
    "@type": "Person",
    name: "Prof. Ndaula",
  },
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
    description: "Free initial consultation — no obligation",
  },
};

export default function PricingPage() {
  const waNumber = cleanWhatsappNumber(clientWhatsapp);
  const whatsappBaseUrl = `https://wa.me/${waNumber}?text=${encodeURIComponent(`Hello ${clientTitle} ${clientName}, I am interested in your spiritual services.`)}`;

  return (
    <>
      <JsonLd data={serviceSchema} />

      <section className="py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center mb-16">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-gold-primary">
              Transparent Pricing
            </p>
            <h1>Spiritual Healing Pricing &amp; Packages</h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-text-secondary">
              Every journey begins with a free consultation. {clientTitle} {clientName} will assess your situation and recommend the right path — with full transparency on cost before any work begins.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {tiers.map((tier) => {
              const href = tier.ctaHref === "whatsapp" ? whatsappBaseUrl : tier.ctaHref;
              const isWhatsapp = tier.ctaHref === "whatsapp";

              return (
                <div
                  key={tier.name}
                  className={`relative rounded-2xl border p-8 flex flex-col ${
                    tier.featured
                      ? "border-transparent bg-gradient-to-b from-gold-primary/20 to-surface ring-2 ring-gold-primary/60"
                      : "border-gold-dim bg-surface"
                  }`}
                >
                  {tier.featured && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-gold-primary to-gold-dim px-4 py-1 text-xs font-semibold uppercase tracking-wider text-deepnight font-[family-name:var(--font-heading)]">
                      Most Popular
                    </span>
                  )}

                  <h3 className="font-[family-name:var(--font-heading)] text-xl font-semibold text-text-primary">
                    {tier.name}
                  </h3>

                  <p className="mt-4 text-3xl font-bold font-[family-name:var(--font-heading)] text-gold-primary">
                    {tier.price}
                  </p>

                  <ul className="mt-8 space-y-3 flex-1">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <span className="mt-0.5 shrink-0 text-gold-primary">◈</span>
                        <span className="text-sm text-text-secondary font-[family-name:var(--font-serif)]">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href={href}
                    target={isWhatsapp ? "_blank" : undefined}
                    rel={isWhatsapp ? "noopener noreferrer" : undefined}
                    className={`mt-8 inline-flex h-12 w-full items-center justify-center rounded-full text-sm font-semibold uppercase tracking-wider font-[family-name:var(--font-heading)] transition-all ${
                      tier.featured
                        ? "bg-gradient-to-r from-gold-primary to-gold-dim text-deepnight hover:brightness-110"
                        : "border-2 border-gold-primary text-gold-primary hover:bg-gold-primary hover:text-deepnight"
                    }`}
                  >
                    {isWhatsapp && (
                      <svg className="mr-2 h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.038 2.149.002 1.135.826 2.129 1.213 2.678.388.549 2.285 3.674 5.603 5.162.783.338 1.392.539 1.866.689.784.249 1.497.214 2.061.131.628-.099 1.927-.787 2.199-1.553.272-.767.272-1.424.194-1.553-.075-.149-.273-.223-.57-.371z" />
                        <path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.5.5 0 00.612.638l4.694-1.358A11.955 11.955 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.387 0-4.607-.798-6.382-2.143l-.446-.345-3.138.908.929-3.005-.381-.48A9.945 9.945 0 012 12C2 6.486 6.486 2 12 2s10 4.486 10 10-4.486 10-10 10z" />
                      </svg>
                    )}
                    {tier.cta}
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 bg-surface">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <span className="text-4xl text-gold-primary">◈</span>
          <h2 className="mt-6 font-[family-name:var(--font-heading)] text-2xl font-semibold text-gold-primary">
            No Hidden Fees. No Surprises.
          </h2>
          <p className="mt-4 text-lg text-text-secondary font-[family-name:var(--font-serif)]">
            The full cost is explained before any work begins.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href={whatsappBaseUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-14 items-center justify-center rounded-full bg-whatsapp px-8 font-[family-name:var(--font-heading)] text-sm font-semibold uppercase tracking-wider text-white transition-all hover:brightness-110 animate-pulse-whatsapp"
            >
              <svg className="mr-2 h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.038 2.149.002 1.135.826 2.129 1.213 2.678.388.549 2.285 3.674 5.603 5.162.783.338 1.392.539 1.866.689.784.249 1.497.214 2.061.131.628-.099 1.927-.787 2.199-1.553.272-.767.272-1.424.194-1.553-.075-.149-.273-.223-.57-.371z" />
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.5.5 0 00.612.638l4.694-1.358A11.955 11.955 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.387 0-4.607-.798-6.382-2.143l-.446-.345-3.138.908.929-3.005-.381-.48A9.945 9.945 0 012 12C2 6.486 6.486 2 12 2s10 4.486 10 10-4.486 10-10 10z" />
              </svg>
              WhatsApp {clientTitle} {clientName}
            </a>
            <Link
              href="/consultation/"
              className="inline-flex h-14 items-center justify-center rounded-full border-2 border-gold-primary px-8 font-[family-name:var(--font-heading)] text-sm font-semibold uppercase tracking-wider text-gold-primary transition-all hover:bg-gold-primary hover:text-deepnight"
            >
              Free Consultation
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
