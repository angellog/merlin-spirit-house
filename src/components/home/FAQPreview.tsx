import Link from "next/link";

interface FAQPreviewProps {
  faqs: Array<{ question: string; answer: string }>;
}

export default function FAQPreview({ faqs }: FAQPreviewProps) {
  return (
    <section className="px-4 py-16 md:px-6 md:py-24">
      <div className="mx-auto max-w-3xl">
        <h2 className="mb-8 text-center font-[family-name:var(--font-heading)] text-2xl text-[var(--color-gold-light)] md:mb-12 md:text-4xl">
          Common Questions
        </h2>

        <div className="space-y-2 md:space-y-0 md:divide-y md:divide-[var(--color-gold-dim)]/30">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="group rounded-lg border border-[var(--color-gold-dim)]/20 bg-[var(--color-bg-surface)] md:rounded-none md:border-0"
            >
              <summary className="flex cursor-pointer items-center justify-between py-4 pl-4 pr-3 text-sm font-[family-name:var(--font-heading)] text-[var(--color-text-primary)] hover:text-[var(--color-gold-primary)] md:py-4 md:text-base [&::-webkit-details-marker]:hidden">
                {faq.question}
                <span className="ml-3 shrink-0 text-lg text-[var(--color-gold-primary)] transition-transform group-open:rotate-45">+</span>
              </summary>
              <div className="border-t border-[var(--color-gold-dim)]/20 px-4 pb-4 pt-3 md:border-0 md:pb-4">
                <p className="text-xs text-[var(--color-text-secondary)] md:text-sm">
                  {faq.answer}
                </p>
              </div>
            </details>
          ))}
        </div>

        <div className="mt-8 text-center md:mt-12">
          <Link
            href="/faq/"
            className="text-sm text-[var(--color-gold-primary)] transition-colors hover:text-[var(--color-gold-light)] md:text-base"
          >
            See All FAQs →
          </Link>
        </div>
      </div>
    </section>
  );
}
