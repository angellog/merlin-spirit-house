import HeroSection from "@/components/home/HeroSection";
import SocialProofStrip from "@/components/home/SocialProofStrip";
import AboutTeaser from "@/components/home/AboutTeaser";
import ServicesGrid from "@/components/home/ServicesGrid";
import HowItWorks from "@/components/home/HowItWorks";
import FeaturedTestimonials from "@/components/home/FeaturedTestimonials";
import UrgencyBlock from "@/components/home/UrgencyBlock";
import FAQPreview from "@/components/home/FAQPreview";
import JsonLd from "@/components/JsonLd";
import { getResolvedSiteSettings, getServicePages, getFeaturedTestimonials, getGlobalFaqs, getTestimonials, getPerson } from "@/sanity/lib/fetch";
import { cleanWhatsappNumber } from "@/lib/whatsapp";

export default async function HomePage() {
  const [settings, services, testimonials, featuredTestimonials, globalFaqs, person] = await Promise.all([
    getResolvedSiteSettings(),
    getServicePages(),
    getTestimonials(),
    getFeaturedTestimonials(),
    getGlobalFaqs(),
    getPerson(),
  ]);

  const waNumber = cleanWhatsappNumber(settings.clientWhatsapp);

  const socialProofSnippets = (testimonials || []).slice(0, 6).map((t) => ({
    stars: "★★★★★",
    text: t.quote.length > 60 ? t.quote.slice(0, 57) + "..." : t.quote,
    name: t.name,
    location: t.location || "",
  }));

  const serviceCards = (services || []).map((s) => ({
    icon: s.icon || "✦",
    title: s.title,
    body: s.subheading || "",
    href: `/${s.slug.current}`,
    badge: s.badge,
  }));

  const howItWorksSteps = settings.howItWorksSteps.map((step, i) => ({
    number: `0${i + 1}`,
    title: step.title,
    desc: step.description,
  }));

  const featuredT = (featuredTestimonials || []).slice(0, 3).map((t) => ({
    quote: t.quote,
    name: t.name,
    location: t.location || "",
  }));

  const faqItems = (globalFaqs || []).slice(0, 6).map((f) => ({
    question: f.question,
    answer: f.answer
      ?.map((block: any) => block.children?.map((c: any) => c.text).join("") ?? "")
      .join(" ") || "",
  }));

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Merlin Spirit House",
    description: "Traditional spiritual healer and voodoo practitioner offering love spells, curse removal, protection rituals, and ancestral healing. Serving clients worldwide.",
    url: settings.clientDomain,
    telephone: settings.clientWhatsapp,
    email: settings.clientEmail,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Kampala",
      addressCountry: "UG",
    },
    openingHours: "Mo-Su 00:00-23:59",
    priceRange: "$$",
    image: `${settings.clientDomain}/opengraph-image.png`,
    sameAs: [
      `https://wa.me/${waNumber}`,
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Spiritual Services",
      itemListElement: (services || []).map((s) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: s.title },
      })),
    },
  };

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: `${settings.clientTitle} ${settings.clientName}`,
    jobTitle: "Traditional Spiritual Healer & Voodoo Practitioner",
    description: `Born into a lineage of traditional healers, ${settings.clientTitle} ${settings.clientName} has practiced ancestral spiritual healing for over ${settings.clientYears} years, serving international clients from Uganda, Kenya, UK, USA, Canada, South Africa, and Australia.`,
    url: `${settings.clientDomain}/about/`,
    image: `${settings.clientDomain}/opengraph-image.png`,
    worksFor: {
      "@type": "Organization",
      name: "Merlin Spirit House",
      url: settings.clientDomain,
    },
    knowsAbout: (services || []).map((s) => s.title).concat(["Ancestral Spiritual Work", "West African Vodun"]),
    sameAs: [
      `https://wa.me/${waNumber}`,
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Kampala",
      addressCountry: "UG",
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <>
      <JsonLd data={localBusinessSchema} />
      <JsonLd data={personSchema} />
      <JsonLd data={faqSchema} />
      <HeroSection
        clientTitle={settings.clientTitle}
        clientName={settings.clientName}
        clientWhatsapp={settings.clientWhatsapp}
        clientYears={settings.clientYears}
        clientTagline={settings.clientTagline}
      />
      <SocialProofStrip snippets={socialProofSnippets} />
      <AboutTeaser
        clientTitle={settings.clientTitle}
        clientName={settings.clientName}
        clientYears={settings.clientYears}
        clientOrigin={settings.clientOrigin}
      />
      <ServicesGrid services={serviceCards} />
      <HowItWorks
        steps={howItWorksSteps}
        clientTitle={settings.clientTitle}
        clientName={settings.clientName}
      />
      <FeaturedTestimonials testimonials={featuredT} />
      <UrgencyBlock
        clientTitle={settings.clientTitle}
        clientName={settings.clientName}
        clientWhatsapp={settings.clientWhatsapp}
      />
      <FAQPreview faqs={faqItems} />
    </>
  );
}
