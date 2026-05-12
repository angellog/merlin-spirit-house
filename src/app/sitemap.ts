import type { MetadataRoute } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://merlinspirithouse.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    "",
    "/about",
    "/love-spells",
    "/voodoo-spells",
    "/money-spells",
    "/protection-spells",
    "/traditional-healing",
    "/spirit-blessings",
    "/curse-removal",
    "/testimonials",
    "/consultation",
    "/contact",
    "/faq",
    "/blog",
    "/privacy-policy",
    "/disclaimer",
  ];

  const blogPosts = [
    "how-voodoo-love-spells-work",
    "signs-you-have-a-curse-or-spiritual-attack",
    "west-african-vodun-origins-of-voodoo",
    "how-to-bring-back-a-lost-lover",
    "generational-curses-how-to-break-them",
    "money-spells-that-work",
    "what-is-hoodoo-rootwork-explained",
    "haitian-vodou-loa-rituals-traditions",
    "traditional-healing-uganda",
    "how-to-choose-legitimate-spiritual-healer",
  ];

  return [
    ...staticPages.map((path) => ({
      url: `${siteUrl}${path}`,
      lastModified: new Date(),
      changeFrequency: path === "" ? ("yearly" as const) : ("monthly" as const),
      priority: path === "" ? 1 : path.includes("-spells") || path === "/consultation" ? 0.9 : 0.7,
    })),
    ...blogPosts.map((slug) => ({
      url: `${siteUrl}/blog/${slug}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.6,
    })),
  ];
}
