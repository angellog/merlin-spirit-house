import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { getPosts, getResolvedSiteSettings } from "@/sanity/lib/fetch";

export async function generateMetadata(): Promise<Metadata> {
  const settings = await getResolvedSiteSettings();
  return {
    title: "Spiritual Wisdom & Guidance",
    description: `Explore articles on voodoo, love spells, traditional healing, generational curses, and spiritual wisdom from ${settings.clientTitle} ${settings.clientName}.`,
    alternates: { canonical: `${settings.clientDomain}/blog` },
    openGraph: {
      title: "Spiritual Wisdom & Guidance",
      description: `Explore articles on voodoo, love spells, traditional healing, generational curses, and spiritual wisdom from ${settings.clientTitle} ${settings.clientName}.`,
      url: `${settings.clientDomain}/blog`,
    },
  };
}

export default async function BlogPage() {
  const [settings, posts] = await Promise.all([
    getResolvedSiteSettings(),
    getPosts(),
  ]);

  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Spiritual Wisdom & Guidance",
    description: `Articles on voodoo, love spells, traditional healing, generational curses, and spiritual wisdom from ${settings.clientTitle} ${settings.clientName}.`,
    url: `${settings.clientDomain}/blog`,
    blogPost: (posts || []).map((post, i) => ({
      "@type": "BlogPosting",
      headline: post.title,
      url: `${settings.clientDomain}/blog/${post.slug}`,
      author: {
        "@type": "Person",
        name: `${settings.clientTitle} ${settings.clientName}`,
      },
      datePublished: post.publishedAt,
      position: i + 1,
    })),
  };

  return (
    <>
      <JsonLd data={blogSchema} />

      <section className="bg-stars py-24 text-center px-6">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-gold-primary)]">
          Knowledge &amp; Wisdom
        </p>
        <h1>Spiritual Wisdom &amp; Guidance</h1>
        <p className="mt-6 max-w-2xl mx-auto text-lg text-[var(--color-text-secondary)]">
          Articles, teachings, and insights from {settings.clientTitle} {settings.clientName} on voodoo, traditional healing, love spells, curses, and the ancient spiritual arts.
        </p>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {(posts || []).map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group bg-[var(--color-bg-surface)] border border-[var(--color-gold-dim)]/20 rounded-lg overflow-hidden transition-all hover:border-[var(--color-gold-primary)]/40"
              >
                <div className="bg-[var(--color-bg-elevated)] h-48 flex items-center justify-center">
                  <span className="text-4xl text-[var(--color-gold-dim)]">⚜</span>
                </div>
                <div className="p-6">
                  <p className="text-xs text-[var(--color-gold-primary)] uppercase tracking-wider font-semibold">
                    {post.categories?.[0]?.title || "General"}
                  </p>
                  <h3 className="mt-2 text-lg font-semibold text-[var(--color-text-primary)] font-[family-name:var(--font-heading)] group-hover:text-[var(--color-gold-primary)] transition-colors">
                    {post.title}
                  </h3>
                  <p className="mt-1 text-xs text-[var(--color-text-muted)]">
                    {post.publishedAt?.split("T")[0]}
                  </p>
                  <p className="mt-3 text-sm text-[var(--color-text-secondary)] line-clamp-3 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <span className="mt-4 inline-block text-sm font-semibold text-[var(--color-gold-primary)] transition-colors group-hover:text-[var(--color-gold-light)]">
                    Read More →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
