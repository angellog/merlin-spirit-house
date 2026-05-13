import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex min-h-[60vh] items-center">
      <div className="mx-auto max-w-lg px-6 text-center">
        <span className="text-6xl">✦</span>
        <h1 className="mt-6 font-[family-name:var(--font-heading)] text-4xl font-bold text-gold-primary">
          Lost Your Way?
        </h1>
        <p className="mt-4 font-[family-name:var(--font-serif)] italic text-lg text-text-secondary">
          This page doesn&apos;t exist. Sometimes the spirits lead us somewhere
          unexpected — let&apos;s get you back on the path.
        </p>
        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <Link
            href="/"
            className="inline-flex h-12 items-center justify-center rounded bg-gradient-to-r from-gold-primary to-gold-light px-8 text-sm font-[family-name:var(--font-heading)] font-semibold uppercase tracking-wider text-[#0A0A12] transition-all hover:shadow-[0_0_35px_rgba(201,168,76,0.6)]"
          >
            Return Home
          </Link>
          <Link
            href="/consultation"
            className="inline-flex h-12 items-center justify-center rounded-full border border-gold-dim px-8 text-sm font-semibold text-text-primary transition-all hover:border-gold-primary hover:text-gold-primary"
          >
            Get Help Now
          </Link>
        </div>
      </div>
    </section>
  );
}
