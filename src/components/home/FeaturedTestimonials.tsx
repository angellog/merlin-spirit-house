import Link from "next/link";

const CLIENT_TITLE = process.env.NEXT_PUBLIC_CLIENT_TITLE ?? "";

const testimonials = [
  {
    quote: `I had completely given up on my marriage. After working with ${CLIENT_TITLE}, my husband returned within three weeks, changed and loving. I cannot explain what happened — but it worked.`,
    name: "Grace N.",
    location: "Kenya",
  },
  {
    quote: `My business had been stuck for two years. After the money ritual, a contract I had been waiting on for months came through in eight days. I am not superstitious, but I believe now.`,
    name: "David O.",
    location: "South Africa",
  },
  {
    quote: "I felt something dark following me everywhere I went. Bad luck, broken relationships, illness. The cleansing changed everything. I feel like myself again for the first time in years.",
    name: "Amina J.",
    location: "United Kingdom",
  },
];

export default function FeaturedTestimonials() {
  return (
    <section className="px-4 py-16 md:px-6 md:py-24">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-8 text-center font-[family-name:var(--font-heading)] text-2xl text-[var(--color-gold-light)] md:mb-12 md:text-4xl">
          Lives Changed. Love Restored. Blessings Received.
        </h2>

        <div className="grid gap-4 md:grid-cols-3 md:gap-8">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="relative rounded-r-lg border-l-3 border-l-[var(--color-gold-primary)] bg-[var(--color-bg-surface)] p-5 md:p-8"
            >
              <span className="absolute left-4 top-4 font-serif text-4xl leading-none text-[var(--color-gold-primary)]/20 md:text-6xl">
                &ldquo;
              </span>
              <p className="font-[family-name:var(--font-serif)] text-[0.9rem] italic text-[var(--color-text-primary)] md:text-[1.05rem]">
                {t.quote}
              </p>
              <div className="mt-4 md:mt-6">
                <span className="font-medium text-[var(--color-text-primary)]">
                  {t.name}
                </span>
                <span className="ml-2 text-xs text-[var(--color-text-muted)] md:text-sm">
                  {t.location}
                </span>
                <div className="mt-1 text-xs text-[var(--color-gold-primary)] md:text-sm">
                  ★★★★★
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center md:mt-12">
          <Link
            href="/testimonials/"
            className="text-sm text-[var(--color-gold-primary)] transition-colors hover:text-[var(--color-gold-light)] md:text-base"
          >
            Read All Testimonials →
          </Link>
        </div>
      </div>
    </section>
  );
}
