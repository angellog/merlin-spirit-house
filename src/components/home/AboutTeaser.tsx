import Link from "next/link";
import Image from "next/image";

const CLIENT_NAME = process.env.NEXT_PUBLIC_CLIENT_NAME ?? "";
const CLIENT_TITLE = process.env.NEXT_PUBLIC_CLIENT_TITLE ?? "";
const CLIENT_YEARS = process.env.NEXT_PUBLIC_CLIENT_YEARS ?? "";

export default function AboutTeaser() {
  return (
    <section className="px-4 py-16 md:px-6 md:py-24">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-8 lg:flex-row lg:items-start lg:gap-12">
        <div className="flex w-full items-center justify-center lg:w-2/5">
          <div className="relative aspect-[3/4] w-full max-w-[280px] overflow-hidden rounded border-2 border-gold-primary bg-surface shadow-[0_0_40px_rgba(201,168,76,0.25)] md:max-w-sm">
            <Image
              src="/images/portrait/prof-ndaula-full.jpg"
              alt={`${CLIENT_TITLE} ${CLIENT_NAME}`}
              fill
              className="object-cover transition-transform duration-700 hover:scale-110"
              sizes="(max-width: 768px) 280px, 384px"
            />
          </div>
        </div>

        <div className="w-full lg:w-3/5">
          <h2 className="mb-4 font-[family-name:var(--font-heading)] text-2xl text-gold-light md:mb-6 md:text-4xl">
            Who Is {CLIENT_TITLE} {CLIENT_NAME}?
          </h2>

          <p className="mb-3 text-sm text-text-secondary leading-relaxed md:mb-4 md:text-base">
            Born into a lineage of traditional healers, {CLIENT_TITLE}{" "}
            {CLIENT_NAME} received ancestral gifts that most cannot learn from
            books.
          </p>

          <p className="mb-4 text-sm text-text-secondary leading-relaxed md:mb-6 md:text-base">
            Over {CLIENT_YEARS} years, clients from Uganda, Kenya, South
            Africa, the UK, the USA, and beyond have sought guidance — and
            found it.
          </p>

          <Link
            href="/about/"
            className="text-sm text-gold-primary transition-colors hover:text-gold-light md:text-base"
          >
            Read the Full Story →
          </Link>

          <div className="mt-6 flex flex-wrap gap-4 text-xs text-text-muted md:mt-8 md:gap-8 md:text-sm">
            <span>🌍 International Clients</span>
            <span>🕯 {CLIENT_YEARS}+ Years Practice</span>
            <span>✦ Ancient Lineage</span>
            <span>🔒 100% Private</span>
          </div>
        </div>
      </div>
    </section>
  );
}
