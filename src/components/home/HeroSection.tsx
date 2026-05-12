import Link from "next/link";
import { cleanWhatsappNumber } from "@/lib/whatsapp";

const CLIENT_NAME = process.env.NEXT_PUBLIC_CLIENT_NAME ?? "";
const CLIENT_TITLE = process.env.NEXT_PUBLIC_CLIENT_TITLE ?? "";
const CLIENT_WHATSAPP = process.env.NEXT_PUBLIC_CLIENT_WHATSAPP ?? "";
const CLIENT_YEARS = process.env.NEXT_PUBLIC_CLIENT_YEARS ?? "";
const CLIENT_TAGLINE = process.env.NEXT_PUBLIC_CLIENT_TAGLINE ?? "";

const WHATSAPP_URL = `https://wa.me/${cleanWhatsappNumber(CLIENT_WHATSAPP)}?text=${encodeURIComponent(
  `Hello ${CLIENT_TITLE} ${CLIENT_NAME}, I need your help.`
)}`;

export default function HeroSection() {
  return (
    <section className="relative flex min-h-[100svh] items-center justify-center">
      <div className="bg-stars absolute inset-0" />
      <div className="bg-[var(--color-bg-deepnight)]/75 absolute inset-0" />

      <div className="relative z-10 mx-auto max-w-4xl px-4 py-16 text-center md:px-6 md:py-0">
        <p className="mb-4 font-[family-name:var(--font-heading)] text-[0.65rem] uppercase tracking-[0.15em] text-[var(--color-gold-primary)] md:mb-6 md:text-[0.75rem] md:tracking-[0.2em]">
          ✦ Trusted Traditional Healer &amp; Voodoo Practitioner ✦
        </p>

        <h1 className="mb-3 bg-gradient-to-r from-[var(--color-gold-primary)] to-[var(--color-gold-light)] bg-clip-text font-[family-name:var(--font-heading)] text-[clamp(2.2rem,9vw,5.5rem)] font-bold text-transparent leading-[1.1] md:mb-4">
          {CLIENT_TITLE} {CLIENT_NAME}
        </h1>

        <h2 className="mb-4 font-[family-name:var(--font-serif)] text-[1.15rem] italic text-[var(--color-text-primary)] md:mb-6 md:text-[1.5rem]">
          {CLIENT_TAGLINE}
        </h2>

        <p className="mx-auto mb-6 max-w-[580px] text-[0.95rem] leading-relaxed text-[var(--color-text-secondary)] md:mb-10 md:text-[1.05rem]">
          For {CLIENT_YEARS} years, {CLIENT_TITLE} {CLIENT_NAME} has reunited
          lost lovers, broken generational curses, attracted wealth, and
          shielded the innocent from spiritual attack. Whatever darkness you
          face — real help is one message away.
        </p>

        <div className="flex flex-col gap-3 md:flex-row md:flex-wrap md:justify-center md:gap-4">
          <Link
            href="/consultation/"
            className="inline-block bg-gradient-to-r from-[var(--color-gold-primary)] to-[var(--color-gold-light)] px-6 py-3.5 font-[family-name:var(--font-heading)] text-[0.85rem] font-bold uppercase tracking-wider text-[var(--color-bg-deepnight)] shadow-[0_0_20px_rgba(201,168,76,0.4)] transition-shadow hover:shadow-[0_0_30px_rgba(201,168,76,0.6)] md:px-8 md:py-4 md:text-sm"
          >
            ✦ Begin Your Consultation
          </Link>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-[#25D366] px-6 py-3.5 font-[family-name:var(--font-heading)] text-[0.85rem] font-bold uppercase tracking-wider text-white shadow-lg transition-shadow hover:shadow-[0_0_20px_rgba(37,211,102,0.4)] md:px-8 md:py-4 md:text-sm"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Message on WhatsApp
          </a>
        </div>

        <div className="mt-6 flex flex-wrap justify-center gap-x-4 gap-y-1 text-[0.7rem] text-[var(--color-gold-dim)] md:mt-8 md:gap-6 md:text-xs">
          <span>{CLIENT_YEARS}+ Years Experience</span>
          <span>100% Confidential</span>
          <span>Available 24/7</span>
          <span>Live Chat Available</span>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce-slow md:bottom-8">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="var(--color-gold-primary)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-7 w-7 md:h-8 md:w-8"
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </div>
    </section>
  );
}
