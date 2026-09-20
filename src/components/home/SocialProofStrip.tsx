interface SocialProofStripProps {
  snippets: Array<{ stars: string; text: string; name: string; location: string }>;
}

export default function SocialProofStrip({ snippets }: SocialProofStripProps) {
  const allSnippets = [...snippets, ...snippets];

  return (
    <section className="border-y border-[var(--color-gold-dim)] bg-[var(--color-bg-surface)] py-3 md:py-4">
      <div className="animate-marquee flex min-w-max">
        {allSnippets.map((s, i) => (
          <div
            key={i}
            className="flex items-center gap-2 whitespace-nowrap px-5 text-[0.6rem] text-[var(--color-text-secondary)] md:gap-3 md:px-8 md:text-xs"
          >
            <span className="text-[var(--color-gold-primary)]">{s.stars}</span>
            <span>&ldquo;{s.text}&rdquo;</span>
            <span className="font-medium text-[var(--color-text-primary)]">
              — {s.name}, {s.location}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
