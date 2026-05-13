import Link from "next/link";
import Image from "next/image";
import PortableTextRenderer from "@/components/PortableTextRenderer";
import JsonLd from "@/components/JsonLd";
import { cleanWhatsappNumber } from "@/lib/whatsapp";

interface ServicePageTemplateProps {
  title: string;
  seoH1: string;
  subheading: string;
  leadParagraph: string;
  whatsappPreFill: string;
  whatIsSection: any[];
  whoNeedsSection: string[];
  processSteps: string[];
  whatToExpect: any[];
  testimonials: Array<{
    name: string;
    location: string;
    quote: string;
    rating: number;
  }>;
  faqItems: Array<{ question: string; answer: any[] }>;
  relatedServices: Array<{ title: string; href: string }>;
  conversionCopy: { heading: string; body: string };
  icon?: string;
  badge?: string;
  heroImage?: string;
}

const CLIENT_WHATSAPP = process.env.NEXT_PUBLIC_CLIENT_WHATSAPP ?? "";
const CLIENT_YEARS = process.env.NEXT_PUBLIC_CLIENT_YEARS ?? "";

export default function ServicePageTemplate({
  title,
  seoH1,
  subheading,
  leadParagraph,
  whatsappPreFill,
  whatIsSection,
  whoNeedsSection,
  processSteps,
  whatToExpect,
  testimonials,
  faqItems,
  relatedServices,
  conversionCopy,
  icon,
  badge,
  heroImage,
}: ServicePageTemplateProps) {
  const whatsappUrl = `https://wa.me/${cleanWhatsappNumber(CLIENT_WHATSAPP)}?text=${whatsappPreFill}`;

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer
          .map((block: any) =>
            block.children?.map((c: any) => c.text).join("") ?? ""
          )
          .join(" "),
      },
    })),
  };

  return (
    <>
      <JsonLd data={faqSchema} />

      <section className="relative flex min-h-[60vh] items-center justify-center overflow-hidden">
        {heroImage && (
          <div className="absolute inset-0">
            <Image
              src={heroImage}
              alt={seoH1}
              fill
              priority
              className="object-cover opacity-30"
            />
          </div>
        )}
        <div className="bg-stars absolute inset-0 opacity-20" />
        <div className="bg-gradient-to-b from-bg-deepnight/60 via-bg-deepnight/80 to-bg-deepnight absolute inset-0" />

        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
          {icon && (
            <span className="mb-4 block text-4xl">{icon}</span>
          )}
          <h1 className="mb-4 bg-gradient-to-r from-gold-primary to-gold-light bg-clip-text font-[family-name:var(--font-heading)] text-[clamp(2rem,5vw,3.5rem)] font-bold text-transparent">
            {seoH1}
          </h1>
          <p className="mb-8 font-[family-name:var(--font-serif)] text-[1.25rem] italic text-text-primary">
            {subheading}
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/consultation/"
              className="inline-block bg-gradient-to-r from-gold-primary to-gold-light px-8 py-4 font-[family-name:var(--font-heading)] text-sm font-bold uppercase tracking-wider text-bg-deepnight shadow-[0_0_20px_rgba(201,168,76,0.4)] transition-shadow hover:shadow-[0_0_30px_rgba(201,168,76,0.6)]"
            >
              ✦ Begin Your Consultation
            </Link>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-whatsapp px-8 py-4 font-[family-name:var(--font-heading)] text-sm font-bold uppercase tracking-wider text-white shadow-lg transition-shadow hover:shadow-[0_0_20px_rgba(37,211,102,0.4)]"
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
        </div>

        {badge && (
          <span className="absolute top-8 right-8 z-10 bg-gradient-to-r from-gold-primary to-gold-light px-4 py-2 font-[family-name:var(--font-heading)] text-xs font-bold uppercase tracking-wider text-bg-deepnight shadow-[0_0_12px_rgba(201,168,76,0.5)]">
            {badge}
          </span>
        )}
      </section>

      <section className="py-16 px-6">
        <div className="mx-auto max-w-4xl">
          <p className="font-[family-name:var(--font-serif)] text-[1.15rem] leading-[1.85] text-text-primary">
            {leadParagraph}
          </p>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-8 font-[family-name:var(--font-heading)] text-[clamp(1.5rem,3.5vw,2.5rem)] font-semibold text-text-primary">
            What Are {title} and How Do They Work?
          </h2>
          <PortableTextRenderer value={whatIsSection} />
          <hr className="divider-gold" />
        </div>
      </section>

      <section className="py-24 px-6 bg-bg-elevated">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-10 font-[family-name:var(--font-heading)] text-[clamp(1.5rem,3.5vw,2.5rem)] font-semibold text-text-primary">
            Who This Is For
          </h2>
          <ul className="space-y-0">
            {whoNeedsSection.map((item, i) => (
              <li
                key={i}
                className="py-3 border-b border-gold-dim/20 text-text-secondary"
              >
                <span className="text-gold-primary mr-3">✦</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-10 font-[family-name:var(--font-heading)] text-[clamp(1.5rem,3.5vw,2.5rem)] font-semibold text-text-primary">
            How the Process Works
          </h2>
          <ol className="space-y-8">
            {processSteps.map((step, i) => (
              <li key={i} className="flex gap-6">
                <span className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-full bg-gold-primary/20 text-gold-primary font-[family-name:var(--font-heading)] font-bold text-lg">
                  {i + 1}
                </span>
                <p className="text-text-secondary leading-relaxed pt-2">{step}</p>
              </li>
            ))}
          </ol>
          <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-gold-dim">
            <span>✦ {CLIENT_YEARS}+ Years Experience</span>
            <span>✦ 100% Confidential</span>
            <span>✦ Personal Attention</span>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-bg-elevated">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-8 font-[family-name:var(--font-heading)] text-[clamp(1.5rem,3.5vw,2.5rem)] font-semibold text-text-primary">
            What to Expect
          </h2>
          <PortableTextRenderer value={whatToExpect} />
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-12 text-center font-[family-name:var(--font-heading)] text-[clamp(1.5rem,3.5vw,2.5rem)] font-semibold text-gold-light">
            Client Experiences with {title}
          </h2>
          <div className="grid gap-8 md:grid-cols-2">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="relative rounded-r-lg border-l-3 border-l-gold-primary bg-bg-surface p-6"
              >
                <span className="absolute left-4 top-4 font-serif text-6xl leading-none text-gold-primary/20">
                  &ldquo;
                </span>
                <p className="font-[family-name:var(--font-serif)] italic text-[1.05rem] text-text-primary">
                  {t.quote}
                </p>
                <div className="mt-4">
                  <span className="font-medium text-text-primary">
                    {t.name}
                  </span>
                  <span className="ml-2 text-sm text-text-muted">
                    {t.location}
                  </span>
                  <div className="mt-1 text-sm text-gold-primary">
                    {"★".repeat(t.rating)}
                    {"☆".repeat(5 - t.rating)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-bg-elevated">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-10 font-[family-name:var(--font-heading)] text-[clamp(1.5rem,3.5vw,2.5rem)] font-semibold text-text-primary">
            Frequently Asked Questions About {title}
          </h2>
          <div className="space-y-4">
            {faqItems.map((item, i) => (
              <details
                key={i}
                className="group border border-gold-dim/20 bg-bg-surface"
              >
                <summary className="flex cursor-pointer items-center justify-between p-5 font-[family-name:var(--font-heading)] text-sm font-semibold text-text-primary transition-colors hover:text-gold-primary">
                  {item.question}
                  <span className="ml-4 text-gold-primary transition-transform group-open:rotate-45 text-xl">
                    +
                  </span>
                </summary>
                <div className="border-t border-gold-dim/20 px-5 pb-5 pt-4">
                  <PortableTextRenderer value={item.answer} />
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-8 font-[family-name:var(--font-heading)] text-[clamp(1.25rem,3vw,2rem)] font-semibold text-text-primary">
            Related Services
          </h2>
          <div className="flex flex-wrap gap-4">
            {relatedServices.map((service, i) => (
              <Link
                key={i}
                href={service.href}
                className="inline-block border border-gold-dim/30 bg-bg-surface px-6 py-3 font-[family-name:var(--font-heading)] text-sm font-semibold text-gold-primary transition-colors hover:bg-gold-primary/10"
              >
                ✦ {service.title}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-4 font-[family-name:var(--font-heading)] text-[clamp(1.5rem,3.5vw,2.5rem)] font-semibold text-gold-primary">
            {conversionCopy.heading}
          </h2>
          <p className="mb-8 text-text-primary text-lg leading-relaxed">
            {conversionCopy.body}
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Link
              href="/consultation/"
              className="inline-block bg-gradient-to-r from-gold-primary to-gold-light px-8 py-4 font-[family-name:var(--font-heading)] text-sm font-bold uppercase tracking-wider text-bg-deepnight shadow-[0_0_20px_rgba(201,168,76,0.4)] transition-shadow hover:shadow-[0_0_30px_rgba(201,168,76,0.6)]"
            >
              ✦ Begin Your Consultation
            </Link>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-whatsapp px-8 py-4 font-[family-name:var(--font-heading)] text-sm font-bold uppercase tracking-wider text-white shadow-lg transition-shadow hover:shadow-[0_0_20px_rgba(37,211,102,0.4)]"
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

          <p className="mb-6 font-[family-name:var(--font-heading)] text-xl text-gold-primary">
            {CLIENT_WHATSAPP}
          </p>

          <div className="flex flex-wrap justify-center gap-6 text-xs text-gold-dim">
            <span>🔒 100% Confidential &amp; Secure</span>
            <span>⚡ Typically responds within 1 hour</span>
          </div>
        </div>
      </section>
    </>
  );
}
