"use client";

import Link from "next/link";

const CLIENT_YEARS = process.env.NEXT_PUBLIC_CLIENT_YEARS ?? "";

const faqs = [
  {
    question: "Do voodoo spells really work?",
    answer: `In my ${CLIENT_YEARS} years of practice, I have witnessed remarkable transformations. Voodoo is not a parlor trick — it is an ancient spiritual tradition rooted in West African Vodun. When performed by an experienced practitioner with genuine ancestral connection, the results speak for themselves. Clients return because the work produces real change in their lives.`,
  },
  {
    question: "How long does it take to see results?",
    answer:
      "Most clients begin feeling a shift within 7 to 21 days. Some experience immediate relief, particularly with cleansing and protection work. Love spells and complex curse removal may take longer depending on the depth of the spiritual blockage. I remain available throughout the process.",
  },
  {
    question: "Is the consultation really free?",
    answer:
      "Yes. Your first consultation is completely free with no obligation. I believe you should have clarity about your situation before making any commitment. During this conversation, I will assess whether spiritual work can help you and explain what would be involved.",
  },
  {
    question: "Is everything confidential?",
    answer:
      "Absolutely. Everything you share is held in complete confidence. I do not discuss, disclose, or share any client's situation with any third party, ever. Your privacy is sacred.",
  },
  {
    question: "How much does it cost?",
    answer:
      "Your first consultation is completely free. After that, the cost depends on the type and complexity of the spiritual work needed. I will always explain the full cost before any work begins — no hidden fees, no surprises.",
  },
  {
    question: "Can you help people who are not in Uganda?",
    answer:
      "Yes. Spiritual work transcends physical distance. I work with clients across the world — the UK, USA, Canada, South Africa, Australia, and many other countries. Distance does not diminish the power of the work.",
  },
];

export default function FAQPreview() {
  return (
    <section className="px-4 py-16 md:px-6 md:py-24">
      <div className="mx-auto max-w-3xl">
        <h2 className="mb-8 text-center font-[family-name:var(--font-heading)] text-2xl text-gold-light md:mb-12 md:text-4xl">
          Common Questions
        </h2>

        <div className="space-y-2 md:space-y-0 md:divide-y md:divide-gold-dim/30">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="group rounded-lg border border-gold-dim/20 bg-surface md:rounded-none md:border-0"
            >
              <summary className="flex cursor-pointer items-center justify-between py-4 pl-4 pr-3 text-sm font-[family-name:var(--font-heading)] text-text-primary hover:text-gold-primary md:py-4 md:text-base [&::-webkit-details-marker]:hidden">
                {faq.question}
                <span className="ml-3 shrink-0 text-lg text-gold-primary transition-transform group-open:rotate-45">+</span>
              </summary>
              <div className="border-t border-gold-dim/20 px-4 pb-4 pt-3 md:border-0 md:pb-4">
                <p className="text-xs text-text-secondary md:text-sm">
                  {faq.answer}
                </p>
              </div>
            </details>
          ))}
        </div>

        <div className="mt-8 text-center md:mt-12">
          <Link
            href="/faq/"
            className="text-sm text-gold-primary transition-colors hover:text-gold-light md:text-base"
          >
            See All FAQs →
          </Link>
        </div>
      </div>
    </section>
  );
}
