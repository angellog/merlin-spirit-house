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
        <h2 className="mb-8 text-center font-[family-name:var(--font-heading)] text-2xl text-gold-light md:mb-12 md:text-4xl">
          Lives Changed. Love Restored. Blessings Received.
        </h2>

        <div className="grid gap-4 md:grid-cols-3 md:gap-8">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="relative rounded-r-lg border-l-3 border-l-gold-primary bg-surface p-5 md:p-8"
            >
              <span className="absolute left-4 top-4 font-serif text-4xl leading-none text-gold-primary/20 md:text-6xl">
                &ldquo;
              </span>
              <p className="font-[family-name:var(--font-serif)] text-[0.9rem] italic text-text-primary md:text-[1.05rem]">
                {t.quote}
              </p>
              <div className="mt-4 md:mt-6">
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-medium text-text-primary">
                    {t.name}
                  </span>
                  <div className="flex items-center gap-1 rounded-full bg-success/10 px-2 py-0.5 text-[0.6rem] font-bold uppercase tracking-wider text-success">
                    <svg className="h-2.5 w-2.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Verified
                  </div>
                </div>
                <span className="text-xs text-text-muted md:text-sm">
                  {t.location}
                </span>
                <div className="mt-1 text-xs text-gold-primary md:text-sm">
                  ★★★★★
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center md:mt-12">
          <Link
            href="/testimonials/"
            className="text-sm text-gold-primary transition-colors hover:text-gold-light md:text-base"
          >
            Read All Testimonials →
          </Link>
        </div>
      </div>
    </section>
  );
}
