import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import FaqAccordion from "@/components/FaqAccordion";
import { cleanWhatsappNumber } from "@/lib/whatsapp";
import { getGlobalFaqs, getResolvedSiteSettings } from "@/sanity/lib/fetch";

function portableTextToPlainText(blocks: any[]): string {
  if (!blocks) return "";
  return blocks
    .filter((block: any) => block._type === "block")
    .map((block: any) =>
      block.children?.map((child: any) => child.text ?? "").join("") ?? ""
    )
    .join("\n");
}

export async function generateMetadata(): Promise<Metadata> {
  const settings = await getResolvedSiteSettings();
  const { clientTitle, clientName, clientDomain } = settings;
  return {
    title: `FAQ — Voodoo, Spells & Spiritual Healing | ${clientTitle} ${clientName}`,
    description: `Honest answers to the most common questions about voodoo, spell casting, and spiritual healing with ${clientTitle} ${clientName}.`,
    openGraph: {
      title: `FAQ — Voodoo, Spells & Spiritual Healing`,
      description: `Honest answers to the most common questions about voodoo, spell casting, and spiritual healing with ${clientTitle} ${clientName}.`,
      url: `${clientDomain}/faq`,
    },
  };
}

export default async function FAQPage() {
  const [settings, faqs] = await Promise.all([
    getResolvedSiteSettings(),
    getGlobalFaqs(),
  ]);

  const { clientTitle, clientName, clientWhatsapp } = settings;
  const items = faqs ?? [];
  const whatsappUrl = `https://wa.me/${cleanWhatsappNumber(clientWhatsapp)}?text=${encodeURIComponent(`Hello ${clientTitle} ${clientName}, I have a question not covered in your FAQ.`)}`;

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: portableTextToPlainText(faq.answer),
      },
    })),
  };

  return (
    <>
      <JsonLd data={faqSchema} />

      <section className="py-24">
        <div className="mx-auto max-w-4xl px-6">
          <div className="text-center mb-16">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-gold-primary)]">
              Questions &amp; Answers
            </p>
            <h1>
              Frequently Asked Questions About Voodoo, Spells &amp; Spiritual Healing
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-[var(--color-text-secondary)]">
              Honest answers to the questions people ask most. If your question is not here, reach out directly — no question is too strange or too small.
            </p>
          </div>

          <FaqAccordion faqs={items} />

          <div className="mt-20 rounded-2xl bg-[var(--color-bg-surface)] border border-[var(--color-gold-dim)]/20 p-10 text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-gold-primary)]">
              Still Have Questions?
            </p>
            <h2>Ask Directly</h2>
            <p className="mt-4 text-[var(--color-text-secondary)]">
              No question is too unusual or too personal. {clientTitle} {clientName} is available to answer anything — honestly and confidentially.
            </p>
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-14 items-center justify-center rounded-full bg-[var(--color-whatsapp)] px-8 font-[family-name:var(--font-heading)] text-sm font-semibold uppercase tracking-wider text-white transition-all hover:brightness-110 animate-pulse-whatsapp"
              >
                <svg className="mr-2 h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.038 2.149.002 1.135.826 2.129 1.213 2.678.388.549 2.285 3.674 5.603 5.162.783.338 1.392.539 1.866.689.784.249 1.497.214 2.061.131.628-.099 1.927-.787 2.199-1.553.272-.767.272-1.424.194-1.553-.075-.149-.273-.223-.57-.371z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.5.5 0 00.612.638l4.694-1.358A11.955 11.955 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.387 0-4.607-.798-6.382-2.143l-.446-.345-3.138.908.929-3.005-.381-.48A9.945 9.945 0 012 12C2 6.486 6.486 2 12 2s10 4.486 10 10-4.486 10-10 10z"/></svg>
                WhatsApp Now
              </a>
              <Link
                href="/consultation"
                className="inline-flex h-14 items-center justify-center rounded-full border-2 border-[var(--color-gold-primary)] px-8 font-[family-name:var(--font-heading)] text-sm font-semibold uppercase tracking-wider text-[var(--color-gold-primary)] transition-all hover:bg-[var(--color-gold-primary)] hover:text-[var(--color-bg-deepnight)]"
              >
                Free Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
