import Link from "next/link";
import Image from "next/image";

const CLIENT_TITLE = process.env.NEXT_PUBLIC_CLIENT_TITLE ?? "";
const CLIENT_NAME = process.env.NEXT_PUBLIC_CLIENT_NAME ?? "";

const services = [
  {
    icon: "♥",
    image: "/images/services/love-spells.jpg",
    title: "Love & Relationship Spells",
    body: "Bring back a lost lover, stop a separation, bind two hearts, or attract new love into your life.",
    href: "/love-spells",
    badge: "Most Requested",
  },
  {
    icon: "⧫",
    image: "/images/hero/ritual-altar.jpg",
    title: "Binding Spells",
    body: "Tie a lover to you, seal a commitment, or bind someone from harming you.",
    href: "/binding-spells",
    badge: "Popular",
  },
  {
    icon: "✦",
    image: "/images/services/voodoo-rituals.jpg",
    title: "Authentic Voodoo Rituals",
    body: "Real voodoo rooted in West African tradition. Not the Hollywood version — the ancient, powerful original.",
    href: "/voodoo-spells",
  },
  {
    icon: "◈",
    title: "Money & Prosperity Spells",
    body: "Open financial doors, clear debt blockages, attract business and career opportunities.",
    href: "/money-spells",
  },
  {
    icon: "⬡",
    image: "/images/services/protection-spells.jpg",
    title: "Protection & Cleansing",
    body: "Spiritual shields against attacks, jealousy, evil eye, and negative forces sent against you.",
    href: "/protection-spells",
  },
  {
    icon: "🌿",
    image: "/images/services/traditional-healing.jpg",
    title: "Traditional African Healing",
    body: "Ancestral connection, herbal healing, and spiritual balance rooted in the old ways.",
    href: "/traditional-healing",
  },
  {
    icon: "⊘",
    title: "Curse & Hex Removal",
    body: "Break generational curses, remove hexes placed by enemies, and restore your natural fortune.",
    href: "/curse-removal",
  },
  {
    icon: "🕊",
    title: "Spirit Blessings",
    body: "Invite the spirits to bless your home, business, relationships, and life path.",
    href: "/spirit-blessings",
  },
];

export default function ServicesGrid() {
  return (
    <section id="services" className="px-4 py-16 md:px-6 md:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 text-center md:mb-12">
          <h2 className="mb-3 font-[family-name:var(--font-heading)] text-2xl text-gold-light md:mb-4 md:text-4xl">
            How I Can Help You
          </h2>
          <p className="text-sm font-[family-name:var(--font-serif)] italic text-text-secondary md:text-base">
            Every service is performed personally. Nothing is delegated.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 md:gap-8">
          {services.map((s) => (
            <div
              key={s.href}
              className="group relative flex flex-col overflow-hidden rounded-lg border border-gold-dim bg-surface transition-all hover:border-gold-primary hover:shadow-[0_0_25px_rgba(201,168,76,0.15)]"
            >
              <div className="relative h-48 w-full overflow-hidden">
                {s.image ? (
                  <Image
                    src={s.image}
                    alt={s.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center bg-elevated text-4xl opacity-40">
                    {s.icon}
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-surface to-transparent" />
                {s.badge && (
                  <span className="absolute right-3 top-3 rounded-full bg-gold-primary px-2 py-0.5 text-[0.65rem] font-bold uppercase tracking-wider text-deepnight md:px-3 md:py-1">
                    {s.badge}
                  </span>
                )}
              </div>

              <div className="flex flex-1 flex-col p-5 md:p-6">
                <h3 className="mb-2 font-[family-name:var(--font-heading)] text-base font-bold text-gold-light transition-colors group-hover:text-gold-primary md:text-lg">
                  {s.title}
                </h3>
                <p className="mb-4 flex-1 text-xs leading-relaxed text-text-secondary md:text-sm">
                  {s.body}
                </p>
                <Link
                  href={s.href}
                  className="text-xs font-bold uppercase tracking-wider text-gold-primary transition-colors hover:text-gold-light md:text-sm"
                >
                  Learn More →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
