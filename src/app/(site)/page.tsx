import HeroSection from "@/components/home/HeroSection";
import SocialProofStrip from "@/components/home/SocialProofStrip";
import AboutTeaser from "@/components/home/AboutTeaser";
import ServicesGrid from "@/components/home/ServicesGrid";
import HowItWorks from "@/components/home/HowItWorks";
import FeaturedTestimonials from "@/components/home/FeaturedTestimonials";
import UrgencyBlock from "@/components/home/UrgencyBlock";
import FAQPreview from "@/components/home/FAQPreview";
import JsonLd from "@/components/JsonLd";

const clientName = process.env.NEXT_PUBLIC_CLIENT_NAME || "Ndaula";
const clientTitle = process.env.NEXT_PUBLIC_CLIENT_TITLE || "Prof.";
const clientWhatsapp = process.env.NEXT_PUBLIC_CLIENT_WHATSAPP || "+256788546704";
const clientLocation = process.env.NEXT_PUBLIC_CLIENT_LOCATION || "Kampala, Uganda";
const clientDomain = process.env.NEXT_PUBLIC_SITE_URL || "https://merlinspirithouse.com";

export default function HomePage() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Merlin Spirit House",
    description: "Traditional spiritual healer and voodoo practitioner offering love spells, curse removal, protection rituals, and ancestral healing. Serving clients worldwide.",
    url: clientDomain,
    telephone: clientWhatsapp,
    email: "contact@merlinspirithouse.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Kampala",
      addressCountry: "UG",
    },
    openingHours: "Mo-Su 00:00-23:59",
    priceRange: "$$",
    image: `${clientDomain}/opengraph-image.png`,
    sameAs: [
      `https://wa.me/${clientWhatsapp.replace(/[^0-9]/g, "")}`,
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Spiritual Services",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Love Spells" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Binding Spells" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Voodoo Rituals" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Money Spells" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Protection Spells" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Curse Removal" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Traditional Healing" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Spirit Blessings" } },
      ],
    },
  };

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: `${clientTitle} ${clientName}`,
    jobTitle: "Traditional Spiritual Healer & Voodoo Practitioner",
    description: `Born into a lineage of traditional healers, ${clientTitle} ${clientName} has practiced ancestral spiritual healing for over 25 years, serving international clients from Uganda, Kenya, UK, USA, Canada, South Africa, and Australia.`,
    url: `${clientDomain}/about/`,
    image: `${clientDomain}/opengraph-image.png`,
    worksFor: {
      "@type": "Organization",
      name: "Merlin Spirit House",
      url: clientDomain,
    },
    knowsAbout: [
      "Love Spells",
      "Binding Spells",
      "Voodoo Rituals",
      "Money Spells",
      "Protection Spells",
      "Curse Removal",
      "Traditional African Healing",
      "Spirit Blessings",
      "Ancestral Spiritual Work",
      "West African Vodun",
    ],
    sameAs: [
      `https://wa.me/${clientWhatsapp.replace(/[^0-9]/g, "")}`,
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
    mainEntity: [
      {
        "@type": "Question",
        name: "Do voodoo spells really work?",
        acceptedAnswer: {
          "@type": "Answer",
          text: `In my 25 years of practice, I have witnessed remarkable transformations. Voodoo is not a parlor trick — it is an ancient spiritual tradition rooted in West African Vodun. When performed by an experienced practitioner with genuine ancestral connection, the results speak for themselves.`,
        },
      },
      {
        "@type": "Question",
        name: "How long does it take to see results?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Most clients begin feeling a shift within 7 to 21 days. Some experience immediate relief, particularly with cleansing and protection work. Love spells and complex curse removal may take longer depending on the depth of the spiritual blockage.",
        },
      },
      {
        "@type": "Question",
        name: "Is the consultation really free?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Your first consultation is completely free with no obligation. I believe you should have clarity about your situation before making any commitment.",
        },
      },
      {
        "@type": "Question",
        name: "Is everything confidential?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Absolutely. Everything you share is held in complete confidence. I do not discuss, disclose, or share any client's situation with any third party, ever. Your privacy is sacred.",
        },
      },
      {
        "@type": "Question",
        name: "How much does it cost?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Your first consultation is completely free. After that, the cost depends on the type and complexity of the spiritual work needed. I will always explain the full cost before any work begins — no hidden fees, no surprises.",
        },
      },
      {
        "@type": "Question",
        name: "Can you help people who are not in Uganda?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Spiritual work transcends physical distance. I work with clients across the world — the UK, USA, Canada, South Africa, Australia, and many other countries. Distance does not diminish the power of the work.",
        },
      },
    ],
  };

  return (
    <>
      <JsonLd data={localBusinessSchema} />
      <JsonLd data={personSchema} />
      <JsonLd data={faqSchema} />
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
