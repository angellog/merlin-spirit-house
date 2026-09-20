import { cache } from "react"
import { client } from "./client"
import {
  SITE_SETTINGS_QUERY,
  SERVICE_PAGES_QUERY,
  SERVICE_PAGE_QUERY,
  POSTS_QUERY,
  POST_QUERY,
  TESTIMONIALS_QUERY,
  FEATURED_TESTIMONIALS_QUERY,
  FAQ_ITEMS_QUERY,
  GLOBAL_FAQS_QUERY,
  CONSULTATION_QUERY,
  PERSON_QUERY,
  SERVICE_SLUGS_QUERY,
  POST_SLUGS_QUERY,
} from "./queries"
import type {
  SiteSettings,
  ServicePage,
  Post,
  Testimonial,
  FaqItem,
  ConsultationPage,
  Person,
  ResolvedSiteSettings,
} from "./types"

function sanityFetch<T>(query: string, params?: Record<string, string>): Promise<T | null> {
  if (!client) return Promise.resolve(null)
  return client.fetch<T>(query, params).catch(() => null)
}

export const getSiteSettings = cache(() => sanityFetch<SiteSettings>(SITE_SETTINGS_QUERY))

export const getServicePages = cache(() => sanityFetch<ServicePage[]>(SERVICE_PAGES_QUERY))

export const getServicePage = cache((slug: string) =>
  sanityFetch<ServicePage>(SERVICE_PAGE_QUERY, { slug })
)

export const getPosts = cache(() => sanityFetch<Post[]>(POSTS_QUERY))

export const getPost = cache((slug: string) =>
  sanityFetch<Post>(POST_QUERY, { slug })
)

export const getTestimonials = cache(() => sanityFetch<Testimonial[]>(TESTIMONIALS_QUERY))

export const getFeaturedTestimonials = cache(() =>
  sanityFetch<Testimonial[]>(FEATURED_TESTIMONIALS_QUERY)
)

export const getFaqItems = cache(() => sanityFetch<FaqItem[]>(FAQ_ITEMS_QUERY))

export const getGlobalFaqs = cache(() => sanityFetch<FaqItem[]>(GLOBAL_FAQS_QUERY))

export const getConsultation = cache(() => sanityFetch<ConsultationPage>(CONSULTATION_QUERY))

export const getPerson = cache(() => sanityFetch<Person>(PERSON_QUERY))

export const getServiceSlugs = cache(() =>
  sanityFetch<{ slug: string }[]>(SERVICE_SLUGS_QUERY)
)

export const getPostSlugs = cache(() =>
  sanityFetch<{ slug: string }[]>(POST_SLUGS_QUERY)
)

export async function getResolvedSiteSettings(): Promise<ResolvedSiteSettings> {
  const settings = await getSiteSettings()

  return {
    clientName: settings?.clientName ?? process.env.NEXT_PUBLIC_CLIENT_NAME ?? "Ndaula",
    clientTitle: settings?.clientTitle ?? process.env.NEXT_PUBLIC_CLIENT_TITLE ?? "Prof.",
    clientWhatsapp: settings?.clientWhatsapp ?? process.env.NEXT_PUBLIC_CLIENT_WHATSAPP ?? "+256788546704",
    clientEmail: settings?.clientEmail ?? process.env.NEXT_PUBLIC_CLIENT_EMAIL ?? "contact@merlinspirithouse.com",
    clientLocation: settings?.clientLocation ?? process.env.NEXT_PUBLIC_CLIENT_LOCATION ?? "Kampala, Uganda",
    clientYears: settings?.clientYears ?? Number(process.env.NEXT_PUBLIC_CLIENT_YEARS) ?? 25,
    clientDomain: settings?.clientDomain ?? process.env.NEXT_PUBLIC_SITE_URL ?? "https://merlinspirithouse.com",
    clientTagline: settings?.clientTagline ?? process.env.NEXT_PUBLIC_CLIENT_TAGLINE ?? "Ancient Power. Real Results.",
    clientOrigin: settings?.clientOrigin ?? undefined,
    ga4Id: settings?.ga4Id ?? process.env.NEXT_PUBLIC_GA4_ID ?? "",
    socialLinks: {
      facebook: settings?.socialLinks?.facebook ?? "",
      instagram: settings?.socialLinks?.instagram ?? "",
      youtube: settings?.socialLinks?.youtube ?? "",
      tikTok: settings?.socialLinks?.tikTok ?? "",
      telegram: settings?.socialLinks?.telegram ?? "",
    },
    disclaimerText: settings?.disclaimerText ?? "Spiritual services are offered for guidance and spiritual balance. Results may vary.",
    jivoWidgetId: settings?.jivoWidgetId ?? process.env.NEXT_PUBLIC_JIVO_WIDGET_ID ?? "oHCYuB3HL7",
    jivoProactiveMessage: settings?.jivoProactiveMessage ?? "Hi! Need help? Chat with us now.",
    jivoEnabled: settings?.jivoEnabled ?? true,
    announcementText: settings?.announcementText ?? "Free consultation available now — WhatsApp or Live Chat",
    howItWorksSteps: settings?.howItWorksSteps ?? [
      { title: "Reach Out", description: "Contact me via WhatsApp or the consultation page. Describe your situation in full detail." },
      { title: "Spiritual Reading", description: "I perform a deep spiritual assessment to identify the root cause and determine the right course of action." },
      { title: "The Work Begins", description: "I perform the required rituals, spells, or cleansings on your behalf. Distance is no barrier." },
      { title: "Results Follow", description: "Most clients experience shifts within 7-21 days. I stay with you until the work is complete." },
    ],
  }
}
