import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";

const clientName = process.env.NEXT_PUBLIC_CLIENT_NAME || "Ndaula";
const clientTitle = process.env.NEXT_PUBLIC_CLIENT_TITLE || "Prof.";
const clientYears = process.env.NEXT_PUBLIC_CLIENT_YEARS || "25";
const clientWhatsapp = process.env.NEXT_PUBLIC_CLIENT_WHATSAPP || "+256788546704";
const clientLocation = process.env.NEXT_PUBLIC_CLIENT_LOCATION || "Kampala, Uganda";
const clientDomain = process.env.NEXT_PUBLIC_SITE_URL || "https://merlinspirithouse.com";

export const metadata: Metadata = {
  title: `About ${clientTitle} ${clientName} — ${clientYears} Years of Spiritual Healing | Merlin Spirit House`,
  description: `Learn about ${clientTitle} ${clientName}, a traditional spiritual healer born into a lineage of Ugandan healers with over ${clientYears} years of practice serving clients worldwide.`,
  alternates: { canonical: "/about/" },
  openGraph: {
    title: `About ${clientTitle} ${clientName} — ${clientYears} Years of Spiritual Healing`,
    description: `Learn about ${clientTitle} ${clientName}, a traditional spiritual healer born into a lineage of Ugandan healers with over ${clientYears} years of practice serving clients worldwide.`,
  },
};

export default function AboutPage() {
  const whatsappUrl = `https://wa.me/${clientWhatsapp.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(`Hello ${clientTitle} ${clientName}, I would like to book a private consultation.`)}`;

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: `${clientTitle} ${clientName}`,
    jobTitle: "Traditional Spiritual Healer & Voodoo Practitioner",
    description: `Born into a lineage of traditional healers, ${clientTitle} ${clientName} has practiced ancestral spiritual healing for over 25 years, serving international clients from Uganda, Kenya, UK, USA, Canada, South Africa, and Australia.`,
    url: `${clientDomain}/about/`,
    worksFor: {
      "@type": "Organization",
      name: "Merlin Spirit House",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Kampala",
      addressCountry: "UG",
    },
    knowsAbout: ["Voodoo", "Love Spells", "Traditional Healing", "Curse Removal", "Spiritual Protection", "Ancestral Work", "Herbal Medicine", "West African Vodun"],
    sameAs: [
      `https://wa.me/${clientWhatsapp.replace(/[^0-9]/g, "")}`,
    ],
  };

  const profileSchema = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    name: `${clientTitle} ${clientName} — Spiritual Healer Profile`,
    url: `${clientDomain}/about`,
    mainEntity: {
      "@type": "Person",
      name: `${clientTitle} ${clientName}`,
      jobTitle: "Traditional Spiritual Healer",
    },
  };

  return (
    <>
      <JsonLd data={personSchema} />
      <JsonLd data={profileSchema} />

      <section className="min-h-[60vh] bg-stars flex flex-col items-center justify-center text-center px-6 py-24">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-gold-primary">
          About the Healer
        </p>
        <h1 className="max-w-4xl">
          About {clientTitle} {clientName} — {clientYears} Years of Spiritual Healing
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed font-[family-name:var(--font-serif)] italic text-text-secondary">
          Born into a sacred lineage of traditional healers in the heart of Uganda, called by the spirits to restore balance, mend broken bonds, and illuminate the path forward.
        </p>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-start">
            <div className="flex justify-center">
              <div className="relative">
                <div className="h-[500px] w-full max-w-md rounded-2xl bg-elevated border-2 border-gold-primary/30 overflow-hidden">
                  <div className="flex h-full items-center justify-center text-text-muted">
                    <span className="text-6xl">⚜</span>
                  </div>
                </div>
                <div className="absolute -bottom-3 -right-3 h-[500px] w-full max-w-md rounded-2xl border-2 border-gold-primary/20 -z-10" />
              </div>
            </div>

            <div className="space-y-8">
              <h2>The Origin Story</h2>
              <p className="text-lg leading-relaxed text-text-secondary">
                I was born into a family where the calling to heal was not chosen but inherited — passed down through generations of revered spiritual practitioners rooted in the ancient soils of Uganda. From a young age, the signs were unmistakable: vivid dreams that foretold events, an uncanny sensitivity to the energies around people and places, and the quiet guidance of ancestral voices that spoke through ritual and prayer.
              </p>
              <p className="text-lg leading-relaxed text-text-secondary">
                Under the tutelage of elder healers within my family lineage, I spent years mastering the sacred arts of West African Vodun — from the preparation of traditional herbal remedies and the casting of protective spells to the intricate rituals of voodoo and ancestral communion. The training was rigorous, demanding not only knowledge of herbs, roots, and sacred objects but also a deep understanding of the spiritual laws that govern the unseen world.
              </p>
              <p className="text-lg leading-relaxed text-text-secondary">
                What began as a duty to the ancestors has become my lifelong mission: to bring healing, clarity, and restoration to those who suffer — whether from broken relationships, spiritual attacks, generational curses, or the weight of unseen forces. Today, I serve clients across Africa, Europe, North America, the Middle East, and beyond. The old ways carry power that no distance can diminish.
              </p>

              <div className="grid gap-6 sm:grid-cols-3 pt-4">
                <div className="rounded-xl bg-surface border border-gold-dim/30 p-6 text-center">
                  <p className="font-[family-name:var(--font-heading)] text-3xl font-bold text-gold-primary">{clientYears}+</p>
                  <p className="mt-2 text-sm text-text-muted">Years of Practice</p>
                </div>
                <div className="rounded-xl bg-surface border border-gold-dim/30 p-6 text-center">
                  <p className="font-[family-name:var(--font-heading)] text-3xl font-bold text-gold-primary">8+</p>
                  <p className="mt-2 text-sm text-text-muted">Countries Served</p>
                </div>
                <div className="rounded-xl bg-surface border border-gold-dim/30 p-6 text-center">
                  <p className="font-[family-name:var(--font-heading)] text-3xl font-bold text-gold-primary">7</p>
                  <p className="mt-2 text-sm text-text-muted">Spiritual Services</p>
                </div>
              </div>

              <div className="mt-8 space-y-4">
                <h3>Countries Where I Have Helped Clients</h3>
                <p className="text-text-secondary">Uganda, Kenya, South Africa, Nigeria, United Kingdom, United States, Canada, Australia, Dubai, Saudi Arabia, Germany, and the Netherlands.</p>
              </div>

              <div className="mt-8 space-y-4">
                <h3>Services I Offer</h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    { label: "Love Spells", href: "/love-spells/" },
                    { label: "Voodoo Rituals", href: "/voodoo-spells/" },
                    { label: "Money Spells", href: "/money-spells/" },
                    { label: "Protection & Cleansing", href: "/protection-spells/" },
                    { label: "Traditional Healing", href: "/traditional-healing/" },
                    { label: "Curse Removal", href: "/curse-removal/" },
                    { label: "Spirit Blessings", href: "/spirit-blessings/" },
                  ].map((s) => (
                    <Link
                      key={s.href}
                      href={s.href}
                      className="rounded-full border border-gold-dim/40 bg-surface px-4 py-1.5 text-xs text-gold-primary transition-colors hover:border-gold-primary hover:bg-gold-primary/10"
                    >
                      {s.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <hr className="divider-gold" />

      <section className="py-24">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-gold-primary">
            What Sets This Practice Apart
          </p>
          <h2>Why Clients Trust {clientTitle} {clientName}</h2>
          <div className="mt-12 grid gap-8 sm:grid-cols-2">
            <div className="rounded-2xl bg-surface border border-gold-dim/20 p-8 text-left">
              <span className="text-2xl text-gold-primary">◈</span>
              <h3 className="mt-4">Inherited Spiritual Authority</h3>
              <p className="mt-3 text-text-secondary">Unlike those who learn from books alone, {clientName} carries the power of an unbroken ancestral lineage — a spiritual authority that cannot be taught, only inherited.</p>
            </div>
            <div className="rounded-2xl bg-surface border border-gold-dim/20 p-8 text-left">
              <span className="text-2xl text-gold-primary">◈</span>
              <h3 className="mt-4">Distance Is No Barrier</h3>
              <p className="mt-3 text-text-secondary">Spiritual energy transcends physical distance. Clients in London, Dubai, Toronto, and Sydney receive the same powerful results as those who sit in the healing room in {clientLocation}.</p>
            </div>
            <div className="rounded-2xl bg-surface border border-gold-dim/20 p-8 text-left">
              <span className="text-2xl text-gold-primary">◈</span>
              <h3 className="mt-4">Absolute Confidentiality</h3>
              <p className="mt-3 text-text-secondary">Every consultation, every ritual, every word shared is held in the strictest confidence. Your privacy is sacrosanct — this is not merely policy, it is spiritual law.</p>
            </div>
            <div className="rounded-2xl bg-surface border border-gold-dim/20 p-8 text-left">
              <span className="text-2xl text-gold-primary">◈</span>
              <h3 className="mt-4">Results That Speak</h3>
              <p className="mt-3 text-text-secondary">The proof is in the lives transformed — relationships restored, curses broken, businesses revived, protection established. The work speaks for itself, and the testimonials confirm it.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-surface">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-gold-primary">
            Take the First Step
          </p>
          <h2>Book a Private Consultation</h2>
          <p className="mt-4 text-lg text-text-secondary">
            The initial consultation is free and completely confidential. Share your situation and discover what spiritual guidance can do for you.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-14 items-center justify-center rounded-full bg-whatsapp px-8 font-[family-name:var(--font-heading)] text-sm font-semibold uppercase tracking-wider text-white transition-all hover:brightness-110 animate-pulse-whatsapp"
            >
              <svg className="mr-2 h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.038 2.149.002 1.135.826 2.129 1.213 2.678.388.549 2.285 3.674 5.603 5.162.783.338 1.392.539 1.866.689.784.249 1.497.214 2.061.131.628-.099 1.927-.787 2.199-1.553.272-.767.272-1.424.194-1.553-.075-.149-.273-.223-.57-.371z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.5.5 0 00.612.638l4.694-1.358A11.955 11.955 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.387 0-4.607-.798-6.382-2.143l-.446-.345-3.138.908.929-3.005-.381-.48A9.945 9.945 0 012 12C2 6.486 6.486 2 12 2s10 4.486 10 10-4.486 10-10 10z"/></svg>
              WhatsApp Now
            </a>
            <Link
              href="/consultation"
              className="inline-flex h-14 items-center justify-center rounded-full border-2 border-gold-primary px-8 font-[family-name:var(--font-heading)] text-sm font-semibold uppercase tracking-wider text-gold-primary transition-all hover:bg-gold-primary hover:text-deepnight"
            >
              Book Consultation
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
