"use client";

import { useState } from "react";
import PortableTextRenderer from "@/components/PortableTextRenderer";

interface FaqAccordionProps {
  faqs: Array<{ question: string; answer: any[] }>;
}

export default function FaqAccordion({ faqs }: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="space-y-3">
      {faqs.map((faq, i) => (
        <details
          key={i}
          open={openIndex === i}
          onToggle={(e) => {
            if ((e.target as HTMLDetailsElement).open) {
              setOpenIndex(i);
            } else if (openIndex === i) {
              setOpenIndex(null);
            }
          }}
          className="group rounded-xl bg-[var(--color-bg-surface)] border border-[var(--color-gold-dim)]/20 overflow-hidden"
        >
          <summary className="flex cursor-pointer items-center justify-between gap-4 p-6 text-lg font-semibold text-[var(--color-text-primary)] font-[family-name:var(--font-heading)] transition-colors hover:text-[var(--color-gold-primary)] list-none [&::-webkit-details-marker]:hidden">
            <span>{faq.question}</span>
            <span className="shrink-0 text-[var(--color-gold-primary)] transition-transform group-open:rotate-45 text-2xl leading-none">+</span>
          </summary>
          <div className="px-6 pb-6 text-[var(--color-text-secondary)] leading-relaxed">
            <PortableTextRenderer value={faq.answer} />
          </div>
        </details>
      ))}
    </div>
  );
}
