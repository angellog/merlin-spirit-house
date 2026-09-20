import Link from "next/link";

interface ServicesGridProps {
  services: Array<{ icon: string; title: string; body: string; href: string; badge?: string }>;
}

export default function ServicesGrid({ services }: ServicesGridProps) {
  return (
    <section className="px-4 py-16 md:px-6 md:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 text-center md:mb-12">
          <h2 className="mb-3 font-[family-name:var(--font-heading)] text-2xl text-[var(--color-gold-light)] md:mb-4 md:text-4xl">
            How I Can Help You
          </h2>
          <p className="text-sm font-[family-name:var(--font-serif)] italic text-[var(--color-text-secondary)] md:text-base">
            Every service is performed personally. Nothing is delegated.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
          {services.map((s) => (
            <div
              key={s.href}
              className="relative rounded-lg border border-[var(--color-gold-dim)] bg-[var(--color-bg-surface)] p-5 transition-all hover:border-[var(--color-gold-primary)] hover:shadow-[0_0_25px_rgba(201,168,76,0.15)] md:p-6"
            >
              {s.badge && (
                <span className="absolute right-3 top-3 rounded-full bg-[var(--color-gold-primary)]/20 px-2 py-0.5 text-[0.65rem] text-[var(--color-gold-primary)] md:right-4 md:top-4 md:px-3 md:py-1 md:text-xs">
                  {s.badge}
                </span>
              )}
              <div className="mb-2 text-2xl md:mb-3 md:text-3xl">{s.icon}</div>
              <h3 className="mb-1 text-sm font-[family-name:var(--font-heading)] text-[var(--color-gold-light)] md:mb-2 md:text-base">
                {s.title}
              </h3>
              <p className="mb-3 text-xs text-[var(--color-text-secondary)] md:mb-4 md:text-sm">
                {s.body}
              </p>
              <Link
                href={s.href}
                className="text-xs font-medium text-[var(--color-gold-primary)] transition-colors hover:text-[var(--color-gold-light)] md:text-sm"
              >
                Learn More →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
