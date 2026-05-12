import HeroSection from "@/components/home/HeroSection";
import SocialProofStrip from "@/components/home/SocialProofStrip";
import AboutTeaser from "@/components/home/AboutTeaser";
import ServicesGrid from "@/components/home/ServicesGrid";
import HowItWorks from "@/components/home/HowItWorks";
import FeaturedTestimonials from "@/components/home/FeaturedTestimonials";
import UrgencyBlock from "@/components/home/UrgencyBlock";
import FAQPreview from "@/components/home/FAQPreview";
import JsonLd from "@/components/JsonLd";

const clientName = process.env.NEXT_PUBLIC_CLIENT_NAME || "Prof. Amara Kato";
const clientTitle = process.env.NEXT_PUBLIC_CLIENT_TITLE || "Prof.";
const clientWhatsapp = process.env.NEXT_PUBLIC_CLIENT_WHATSAPP || "+256740712638";
const clientLocation = process.env.NEXT_PUBLIC_CLIENT_LOCATION || "Kampala, Uganda";
const clientDomain = process.env.NEXT_PUBLIC_SITE_URL || "https://merlinspirithouse.com";

export default function HomePage() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: `${clientName} Spiritual Healer`,
    description: `Traditional African healer and voodoo spell caster based in ${clientLocation}. Specialising in love spells, voodoo rituals, protection, curse removal, and spiritual healing. Available worldwide.`,
    url: clientDomain,
    telephone: clientWhatsapp,
    address: {
      "@type": "PostalAddress",
      addressLocality: clientLocation,
      addressCountry: "UG",
    },
    openingHours: "Mo-Su 00:00-23:59",
    priceRange: "$$",
    areaServed: "Worldwide",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Spiritual Services",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Love Spells" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Voodoo Rituals" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Money Spells" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Protection Spells" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Curse Removal" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Traditional Healing" } },
      ],
    },
  };

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: clientName,
    jobTitle: "Traditional Spiritual Healer & Voodoo Practitioner",
    url: `${clientDomain}/about`,
  };

  return (
    <>
      <JsonLd data={localBusinessSchema} />
      <JsonLd data={personSchema} />
      <HeroSection />
      <SocialProofStrip />
      <AboutTeaser />
      <ServicesGrid />
      <HowItWorks />
      <FeaturedTestimonials />
      <UrgencyBlock />
      <FAQPreview />
    </>
  );
}
