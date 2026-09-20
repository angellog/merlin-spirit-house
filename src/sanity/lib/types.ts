export interface SanityImage {
  _type: "image"
  asset: { _ref: string; _type: "reference" }
  hotspot?: { x: number; y: number; height: number; width: number }
  crop?: { top: number; bottom: number; left: number; right: number }
  alt?: string
}

export interface SanitySlug {
  _type: "slug"
  current: string
}

export interface Testimonial {
  _id: string
  name: string
  location?: string
  quote: string
  rating?: number
  featured?: boolean
  service?: { title: string; slug: SanitySlug }
}

export interface FaqItem {
  _id: string
  question: string
  answer: any[]
  global?: boolean
  services?: { title: string; slug: SanitySlug }[]
}

export interface ServicePage {
  _id: string
  title: string
  slug: SanitySlug
  metaDescription?: string
  seoH1?: string
  heroImage?: SanityImage
  subheading?: string
  icon?: string
  badge?: string
  whatsappPreFill?: string
  whatIsSection?: any[]
  whoNeedsSection?: string[]
  howHealerWorks?: any[]
  whatToExpect?: any[]
  processSteps?: string[]
  testimonials?: Testimonial[]
  faqItems?: FaqItem[]
  conversionCopy?: {
    heading?: string
    body?: string
  }
  relatedServices?: { title: string; slug: SanitySlug }[]
  sortOrder?: number
}

export interface Post {
  _id: string
  title: string
  slug: string
  publishedAt: string
  excerpt?: string
  mainImage?: SanityImage
  categories?: { title: string; slug: string }[]
  body?: any[]
  faqItems?: FaqItem[]
  relatedPosts?: {
    title: string
    slug: string
    excerpt?: string
    mainImage?: SanityImage
    publishedAt: string
  }[]
  author?: {
    _id: string
    name: string
    title?: string
    image?: SanityImage
    bio?: any[]
    yearsExperience?: number
  }
}

export interface Category {
  _id: string
  title: string
  slug: string
  description?: string
  focus?: string
}

export interface Person {
  _id: string
  name: string
  title?: string
  slug?: SanitySlug
  image?: SanityImage
  bio?: any[]
  yearsExperience?: number
}

export interface ConsultationPage {
  _id: string
  heroCopy?: string
  whatHappensCopy?: any[]
  whatYouLearn?: string[]
  privacyGuarantee?: any[]
  guaranteeCopy?: string
  responseTimeText?: string
  availabilityText?: string
}

export interface SiteSettings {
  _id: string
  clientName: string
  clientTitle?: string
  clientWhatsapp?: string
  clientEmail?: string
  clientLocation?: string
  clientYears?: number
  clientDomain?: string
  clientTagline?: string
  clientOrigin?: any[]
  ga4Id?: string
  socialLinks?: {
    facebook?: string
    instagram?: string
    youtube?: string
    tikTok?: string
    telegram?: string
  }
  disclaimerText?: string
  jivoWidgetId?: string
  jivoProactiveMessage?: string
  jivoEnabled?: boolean
  ogImage?: SanityImage
  announcementText?: string
  howItWorksSteps?: { title: string; description: string }[]
}

export interface ResolvedSiteSettings {
  clientName: string
  clientTitle: string
  clientWhatsapp: string
  clientEmail: string
  clientLocation: string
  clientYears: number
  clientDomain: string
  clientTagline: string
  clientOrigin?: any[]
  ga4Id: string
  socialLinks: {
    facebook: string
    instagram: string
    youtube: string
    tikTok: string
    telegram: string
  }
  disclaimerText: string
  jivoWidgetId: string
  jivoProactiveMessage: string
  jivoEnabled: boolean
  announcementText: string
  howItWorksSteps: { title: string; description: string }[]
}
