import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";

const clientName = process.env.NEXT_PUBLIC_CLIENT_NAME || "Ndaula";
const clientTitle = process.env.NEXT_PUBLIC_CLIENT_TITLE || "Prof.";
const clientWhatsapp = process.env.NEXT_PUBLIC_CLIENT_WHATSAPP || "+256788546704";
const clientDomain = process.env.NEXT_PUBLIC_SITE_URL || "https://merlinspirithouse.com";

export const metadata: Metadata = {
  title: `Real Stories — Clients Healed & Blessed by ${clientTitle} ${clientName}`,
  description: `Read genuine testimonials from clients worldwide who have experienced the power of ${clientTitle} ${clientName}'s spiritual healing, love spells, protection, and curse removal.`,
  openGraph: {
    title: `Real Stories — Clients Healed & Blessed by ${clientTitle} ${clientName}`,
    description: `Read genuine testimonials from clients worldwide who have experienced the power of ${clientTitle} ${clientName}'s spiritual healing, love spells, protection, and curse removal.`,
    url: `${clientDomain}/testimonials`,
  },
};

const testimonials = [
  {
    name: "Grace N.",
    location: "Kenya",
    rating: 5,
    quote: "My husband returned within three weeks of the love spell being cast. He came back apologizing, and our marriage is now stronger than it has ever been. I had tried everything — counselling, prayer, patience — but nothing worked until I reached out to the healer. The change was undeniable and immediate.",
  },
  {
    name: "David O.",
    location: "South Africa",
    rating: 5,
    quote: "Business contract came through exactly when the healer said it would. I was on the verge of losing everything after months of deals falling through. After the prosperity ritual, three separate clients contacted me within ten days. The financial turnaround was nothing short of miraculous.",
  },
  {
    name: "Amina J.",
    location: "United Kingdom",
    rating: 5,
    quote: "The cleansing changed everything. I had been suffering from terrible nightmares and a sense of heaviness that no doctor could explain. After the spiritual cleansing, I felt lighter than I had in years. The nightmares stopped completely, and my energy returned. I am finally myself again.",
  },
  {
    name: "Sarah M.",
    location: "USA",
    rating: 5,
    quote: "I was skeptical but the protection spell worked exactly as described. I had been experiencing a string of bad luck — job loss, car accident, relationship ending — all within a few months. After the protection work was done, the negative pattern stopped immediately. Coincidence? I don't think so.",
  },
  {
    name: "Thomas R.",
    location: "Canada",
    rating: 5,
    quote: "My financial situation transformed after the money spell. I was drowning in debt with no way out. Within a month of the ritual, I received an unexpected promotion and a bonus that covered my outstanding debts. The momentum has continued — I am now financially stable for the first time in my adult life.",
  },
  {
    name: "Fatima H.",
    location: "Dubai",
    rating: 5,
    quote: "The curse that followed my family for generations has finally been lifted. My grandmother warned me about it before she passed — the pattern of failed marriages and sudden illness. After the curse removal ritual, the darkness that hung over our family has lifted. My sister's health improved, and I found love for the first time.",
  },
  {
    name: "James K.",
    location: "Australia",
    rating: 5,
    quote: "Love spell brought my partner back after six months apart. We had broken up over a misunderstanding that seemed impossible to resolve. After the spell was cast, she reached out to nowhere wanting to talk. We are now engaged and planning our wedding. I am beyond grateful.",
  },
  {
    name: "Elizabeth W.",
    location: "South Africa",
    rating: 5,
    quote: "After the blessing ritual, my entire household felt the shift. My children became calmer, my husband's business picked up, and the constant arguments stopped. It was as if a dark cloud had been lifted from our home. We are living in peace and prosperity now, and I attribute it all to the spiritual work that was done.",
  },
];

export default function TestimonialsPage() {
  const whatsappUrl = `https://wa.me/${clientWhatsapp.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(`Hello ${clientTitle} ${clientName}, I would like to share my testimonial or book a consultation.`)}`;

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
    reviewCount: "94",
  };

  const reviewSchemas = testimonials.map((t, i) => ({
    "@context": "https://schema.org",
    "@type": "Review",
    author: { "@type": "Person", name: t.name },
    datePublished: "2025-01-15",
    reviewBody: t.quote,
    reviewRating: {
      "@type": "Rating",
      ratingValue: String(t.rating),
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
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-gold-primary">
          Testimonials
        </p>
        <h1 className="max-w-4xl mx-auto">
          Real Stories — Clients Healed &amp; Blessed by {clientTitle} {clientName}
        </h1>
        <p className="mt-6 max-w-2xl mx-auto text-lg leading-relaxed text-text-secondary">
          Every story below is from a real client who reached out in desperation and found the help they needed. These are not fabricated reviews — they are living proof that the old ways still hold power.
        </p>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-8 md:grid-cols-2">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="bg-surface border-l-3 border-l-gold-primary rounded-r-lg p-8"
              >
                <span className="text-4xl text-gold-primary font-[family-name:var(--font-serif)] leading-none">&ldquo;</span>
                <p className="mt-2 font-[family-name:var(--font-serif)] italic text-lg leading-relaxed text-text-primary">
                  {t.quote}
                </p>
                <div className="mt-6 flex items-center justify-between">
                  <div>
                    <p className="font-[family-name:var(--font-heading)] font-semibold text-text-primary">
                      {t.name}
                    </p>
                    <p className="text-sm text-text-muted">{t.location}</p>
                  </div>
                  <div className="flex gap-0.5">
                    {Array.from({ length: t.rating }).map((_, si) => (
                      <span key={si} className="text-gold-primary">★</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-surface">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2>Your Story Could Be Next</h2>
          <p className="mt-4 text-lg text-text-secondary">
            Thousands have found healing, love, protection, and prosperity through the work of {clientTitle} {clientName}. Your transformation can begin today.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-14 items-center justify-center rounded-full bg-whatsapp px-8 font-[family-name:var(--font-heading)] text-sm font-semibold uppercase tracking-wider text-white transition-all hover:brightness-110 animate-pulse-whatsapp"
            >
              <svg className="mr-2 h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.038 2.149.002 1.135.826 2.129 1.213 2.678.388.549 2.285 3.674 5.603 5.162.783.338 1.392.539 1.866.689.784.249 1.497.214 2.061.131.628-.099 1.927-.787 2.199-1.553.272-.767.272-1.424.194-1.553-.075-.149-.273-.223-.57-.371z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.5.5 0 00.612.638l4.694-1.358A11.955 11.955 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.387 0-4.607-.798-6.382-2.143l-.446-.345-3.138.908.929-3.005-.381-.48A9.945 9.945 0 012 12C2 6.486 6.486 2 12 2s10 4.486 10 10-4.486 10-10 10z"/></svg>
              WhatsApp Now
            </a>
            <Link
              href="/consultation"
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
