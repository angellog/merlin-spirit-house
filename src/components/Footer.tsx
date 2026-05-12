import Link from "next/link";
import { cleanWhatsappNumber } from "@/lib/whatsapp";

const brandName = "Merlin Spirit House";
const clientName = process.env.NEXT_PUBLIC_CLIENT_NAME || "Ndaula";
const clientTitle = process.env.NEXT_PUBLIC_CLIENT_TITLE || "Prof.";
const clientWhatsapp = process.env.NEXT_PUBLIC_CLIENT_WHATSAPP || "+256788546704";
const clientEmail = process.env.NEXT_PUBLIC_CLIENT_EMAIL || "contact@merlinspirithouse.com";
const clientLocation = process.env.NEXT_PUBLIC_CLIENT_LOCATION || "Kampala, Uganda";
const clientTagline = process.env.NEXT_PUBLIC_CLIENT_TAGLINE || "Ancient Power. Real Results.";

const serviceLinks = [
  { href: "/love-spells", label: "Love Spells" },
  { href: "/binding-spells", label: "Binding Spells" },
  { href: "/voodoo-spells", label: "Voodoo Spells" },
  { href: "/money-spells", label: "Money Spells" },
  { href: "/protection-spells", label: "Protection Spells" },
  { href: "/traditional-healing", label: "Traditional Healing" },
  { href: "/spirit-blessings", label: "Spirit Blessings" },
  { href: "/curse-removal", label: "Curse Removal" },
];

const quickLinks = [
  { href: "/about", label: "About" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/blog", label: "Blog" },
  { href: "/faq", label: "FAQ" },
  { href: "/consultation", label: "Consultation" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-[var(--color-gold-dim)] bg-[var(--color-bg-elevated)]">
      <div className="mx-auto max-w-7xl px-4 py-12 md:px-6 md:py-16">
        <div className="grid gap-8 md:grid-cols-2 md:gap-12 lg:grid-cols-4">
          <div>
            <Link
              href="/"
              className="flex items-center gap-2 text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--color-gold-primary)]"
            >
              <span className="text-xl">✦</span>
              <span>{brandName}</span>
            </Link>
            <p className="mt-2 text-sm text-[var(--color-gold-dim)]">
              {clientTagline}
            </p>
            <p className="mt-4 text-sm leading-relaxed text-[var(--color-text-muted)]">
              Traditional spiritual healer and voodoo practitioner. Serving
              clients worldwide with authentic ancestral spiritual work.
            </p>
            <div className="mt-6 flex gap-4">
              <a
                href={`https://wa.me/${cleanWhatsappNumber(clientWhatsapp)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-gold-primary)]"
                aria-label="WhatsApp"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
              </a>
            </div>
          </div>

          <div>
            <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-[var(--color-text-primary)] md:mb-4 md:text-sm">
              Services
            </h3>
            <ul className="flex flex-col gap-2 md:gap-3">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-xs text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-gold-primary)] md:text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-[var(--color-text-primary)] md:mb-4 md:text-sm">
              Quick Links
            </h3>
            <ul className="flex flex-col gap-2 md:gap-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-xs text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-gold-primary)] md:text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-[var(--color-text-primary)] md:mb-4 md:text-sm">
              Contact
            </h3>
            <ul className="flex flex-col gap-2 text-xs text-[var(--color-text-muted)] md:gap-3 md:text-sm">
              <li>
                <span className="mr-2">📱</span>
                <a
                  href={`https://wa.me/${cleanWhatsappNumber(clientWhatsapp)}`}
                  className="transition-colors hover:text-[var(--color-gold-primary)]"
                >
                  WhatsApp: {clientWhatsapp}
                </a>
              </li>
              <li>
                <span className="mr-2">📧</span>
                <a
                  href={`mailto:${clientEmail}`}
                  className="transition-colors hover:text-[var(--color-gold-primary)]"
                >
                  {clientEmail}
                </a>
              </li>
              <li>
                <span className="mr-2">📍</span>
                {clientLocation}
              </li>
              <li>
                <span className="mr-2">⏰</span>
                Available 24/7
              </li>
              <li>
                <span className="mr-2">💬</span>
                Live Chat: Available on site
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-[var(--color-gold-dim)]/30 pt-6 md:mt-12 md:pt-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-xs text-[var(--color-text-muted)]">
              &copy; {new Date().getFullYear()} {brandName}. All Rights
              Reserved.{" "}
              <Link
                href="/privacy-policy"
                className="transition-colors hover:text-[var(--color-gold-primary)]"
              >
                Privacy Policy
              </Link>{" "}
              |{" "}
              <Link
                href="/disclaimer"
                className="transition-colors hover:text-[var(--color-gold-primary)]"
              >
                Disclaimer
              </Link>
            </p>
            <p className="text-xs text-[var(--color-text-muted)]">
              Spiritual services are for guidance and spiritual balance only.
              Results are not guaranteed.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
