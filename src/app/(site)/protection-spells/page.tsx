import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import { getServicePage, getResolvedSiteSettings } from "@/sanity/lib/fetch";

const SLUG = "protection-spells";

export async function generateMetadata(): Promise<Metadata> {
  const [service, settings] = await Promise.all([
    getServicePage(SLUG),
    getResolvedSiteSettings(),
  ]);
  if (!service) return {};
  return {
    title: service.seoH1 || `${service.title} — ${settings.clientTitle} ${settings.clientName}`,
    description: service.metaDescription || undefined,
    alternates: { canonical: `/${SLUG}/` },
  };
}

export default async function ProtectionSpellsPage() {
  const [service, settings] = await Promise.all([
    getServicePage(SLUG),
    getResolvedSiteSettings(),
  ]);
  if (!service) notFound();

  const leadParagraph = `I am ${settings.clientTitle} ${settings.clientName}, and for over ${settings.clientYears} years I have helped thousands of people with ${service.title.toLowerCase()}. ${service.subheading || ""}`;

  return (
    <ServicePageTemplate
      title={service.title}
      seoH1={service.seoH1 || service.title}
      subheading={service.subheading || ""}
      leadParagraph={leadParagraph}
      whatsappPreFill={service.whatsappPreFill || `Hello%20${settings.clientTitle}%20${settings.clientName}%2C%20I%20need%20help%20with%20${service.title.toLowerCase()}`}
      icon={service.icon}
      badge={service.badge}
      whatIsSection={service.whatIsSection || []}
      whoNeedsSection={service.whoNeedsSection || []}
      processSteps={service.processSteps || []}
      whatToExpect={service.whatToExpect || []}
      testimonials={service.testimonials?.map((t: any) => ({ name: t.name, location: t.location || "", quote: t.quote, rating: t.rating || 5 })) || []}
      faqItems={service.faqItems?.map((f: any) => ({ question: f.question, answer: f.answer })) || []}
      relatedServices={service.relatedServices?.map((r: any) => ({ title: r.title, href: `/${r.slug}/` })) || []}
      conversionCopy={service.conversionCopy || { heading: "", body: "" }}
      clientWhatsapp={settings.clientWhatsapp}
      clientYears={settings.clientYears}
    />
  );
}
