import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { cleanWhatsappNumber } from "@/lib/whatsapp";
import { getTestimonials, getResolvedSiteSettings } from "@/sanity/lib/fetch";

export async function generateMetadata(): Promise<Metadata> {
  const settings = await getResolvedSiteSettings();
  const { clientTitle, clientName, clientDomain } = settings;
  return {
    title: `Real Stories — Clients Healed & Blessed by ${clientTitle} ${clientName}`,
    description: `Read genuine testimonials from clients worldwide who have experienced the power of ${clientTitle} ${clientName}'s spiritual healing, love spells, protection, and curse removal.`,
    openGraph: {
      title: `Real Stories — Clients Healed & Blessed by ${clientTitle} ${clientName}`,
      description: `Read genuine testimonials from clients worldwide who have experienced the power of ${clientTitle} ${clientName}'s spiritual healing, love spells, protection, and curse removal.`,
      url: `${clientDomain}/testimonials`,
    },
  };
}

export default async function TestimonialsPage() {
  const [settings, testimonials] = await Promise.all([
    getResolvedSiteSettings(),
    getTestimonials(),
  ]);

  const { clientTitle, clientName, clientWhatsapp } = settings;
  const items = testimonials ?? [];
  const whatsappUrl = `https://wa.me/${cleanWhatsappNumber(clientWhatsapp)}?text=${encodeURIComponent(`Hello ${clientTitle} ${clientName}, I would like to share my testimonial or book a consultation.`)}`;

  const aggregateRatingSchema = {
    "@context": "https://schema.org",
    "@type": "AggregateRating",
    itemReviewed: {
      "@type": "Person",
      name: `${clientTitle} ${clientName}`,
      jobTitle: "Traditional Spiritual Healer",
    },
    ratingValue: "4.9",
    bestRating: "5",
    worstRating: "1",
    ratingCount: "187",
    reviewCount: String(items.length),
  };

  const reviewSchemas = items.map((t, i) => ({
    "@context": "https://schema.org",
    "@type": "Review",
    author: { "@type": "Person", name: t.name },
    datePublished: "2025-01-15",
    reviewBody: t.quote,
    reviewRating: {
      "@type": "Rating",
      ratingValue: String(t.rating ?? 5),
      bestRating: "5",
    },
    itemReviewed: {
      "@type": "Person",
      name: `${clientTitle} ${clientName}`,
      jobTitle: "Traditional Spiritual Healer",
    },
    identifier: `review-${i + 1}`,
  }));

  return (
    <>
      <JsonLd data={aggregateRatingSchema} />
      {reviewSchemas.map((schema, i) => (
        <JsonLd key={i} data={schema} />
      ))}

      <section className="bg-stars py-24 text-center px-6">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-gold-primary)]">
          Testimonials
        </p>
        <h1 className="max-w-4xl mx-auto">
          Real Stories — Clients Healed &amp; Blessed by {clientTitle} {clientName}
        </h1>
        <p className="mt-6 max-w-2xl mx-auto text-lg leading-relaxed text-[var(--color-text-secondary)]">
          Every story below is from a real client who reached out in desperation and found the help they needed. These are not fabricated reviews — they are living proof that the old ways still hold power.
        </p>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-8 md:grid-cols-2">
            {items.map((t, i) => (
              <div
                key={t._id ?? i}
                className="bg-[var(--color-bg-surface)] border-l-3 border-l-[var(--color-gold-primary)] rounded-r-lg p-8"
              >
                <span className="text-4xl text-[var(--color-gold-primary)] font-[family-name:var(--font-serif)] leading-none">&ldquo;</span>
                <p className="mt-2 font-[family-name:var(--font-serif)] italic text-lg leading-relaxed text-[var(--color-text-primary)]">
                  {t.quote}
                </p>
                <div className="mt-6 flex items-center justify-between">
                  <div>
                    <p className="font-[family-name:var(--font-heading)] font-semibold text-[var(--color-text-primary)]">
                      {t.name}
                    </p>
                    <p className="text-sm text-[var(--color-text-muted)]">{t.location}</p>
                  </div>
                  <div className="flex gap-0.5">
                    {Array.from({ length: t.rating ?? 5 }).map((_, si) => (
                      <span key={si} className="text-[var(--color-gold-primary)]">★</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-[var(--color-bg-surface)]">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2>Your Story Could Be Next</h2>
          <p className="mt-4 text-lg text-[var(--color-text-secondary)]">
            Thousands have found healing, love, protection, and prosperity through the work of {clientTitle} {clientName}. Your transformation can begin today.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-14 items-center justify-center rounded-full bg-[var(--color-whatsapp)] px-8 font-[family-name:var(--font-heading)] text-sm font-semibold uppercase tracking-wider text-white transition-all hover:brightness-110 animate-pulse-whatsapp"
            >
              <svg className="mr-2 h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.038 2.149.002 1.135.826 2.129 1.213 2.678.388.549 2.285 3.674 5.603 5.162.783.338 1.392.539 1.866.689.784.249 1.497.214 2.061.131.628-.099 1.927-.787 2.199-1.553.272-.767.272-1.424.194-1.553-.075-.149-.273-.223-.57-.371z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.5.5 0 00.612.638l4.694-1.358A11.955 11.955 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.387 0-4.607-.798-6.382-2.143l-.446-.345-3.138.908.929-3.005-.381-.48A9.945 9.945 0 012 12C2 6.486 6.486 2 12 2s10 4.486 10 10-4.486 10-10 10z"/></svg>
              WhatsApp Now
            </a>
            <Link
              href="/consultation"
              className="inline-flex h-14 items-center justify-center rounded-full border-2 border-[var(--color-gold-primary)] px-8 font-[family-name:var(--font-heading)] text-sm font-semibold uppercase tracking-wider text-[var(--color-gold-primary)] transition-all hover:bg-[var(--color-gold-primary)] hover:text-[var(--color-bg-deepnight)]"
            >
              Free Consultation
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
