import type { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import JsonLd from "@/components/JsonLd";

const clientName = process.env.NEXT_PUBLIC_CLIENT_NAME || "Ndaula";
const clientTitle = process.env.NEXT_PUBLIC_CLIENT_TITLE || "Prof.";
const clientDomain = process.env.NEXT_PUBLIC_SITE_URL || "https://merlinspirithouse.com";

const blogDir = path.join(process.cwd(), "content/blog");

function getAllPosts() {
  const files = fs.readdirSync(blogDir).filter((f) => f.endsWith(".mdx"));
  const posts = files.map((file) => {
    const raw = fs.readFileSync(path.join(blogDir, file), "utf-8");
    const { data } = matter(raw);
    return {
      slug: data.slug || file.replace(/\.mdx$/, ""),
      title: data.title,
      date: data.date,
      excerpt: data.excerpt,
      category: data.category,
      seo_title: data.seo_title,
      seo_description: data.seo_description,
      canonical: data.canonical,
    };
  });
  posts.sort((a, b) => (a.date > b.date ? -1 : 1));
  return posts;
}

const posts = getAllPosts();

export const metadata: Metadata = {
  title: "Spiritual Wisdom & Guidance",
  description: `Explore articles on voodoo, love spells, traditional healing, generational curses, and spiritual wisdom from ${clientTitle} ${clientName}.`,
  alternates: { canonical: `${clientDomain}/blog` },
  openGraph: {
    title: "Spiritual Wisdom & Guidance",
    description: `Explore articles on voodoo, love spells, traditional healing, generational curses, and spiritual wisdom from ${clientTitle} ${clientName}.`,
    url: `${clientDomain}/blog`,
  },
};

export default function BlogPage() {
  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Spiritual Wisdom & Guidance",
    description: `Articles on voodoo, love spells, traditional healing, generational curses, and spiritual wisdom from ${clientTitle} ${clientName}.`,
    url: `${clientDomain}/blog`,
    blogPost: posts.map((post, i) => ({
      "@type": "BlogPosting",
      headline: post.title,
      url: `${clientDomain}/blog/${post.slug}`,
      author: {
        "@type": "Person",
        name: `${clientTitle} ${clientName}`,
      },
      datePublished: post.date,
      position: i + 1,
    })),
  };

  return (
    <>
      <JsonLd data={blogSchema} />

      <section className="bg-stars py-24 text-center px-6">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-gold-primary">
          Knowledge &amp; Wisdom
        </p>
        <h1>Spiritual Wisdom &amp; Guidance</h1>
        <p className="mt-6 max-w-2xl mx-auto text-lg text-text-secondary">
          Articles, teachings, and insights from {clientTitle} {clientName} on voodoo, traditional healing, love spells, curses, and the ancient spiritual arts.
        </p>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group bg-surface border border-gold-dim/20 rounded-lg overflow-hidden transition-all hover:border-gold-primary/40"
              >
                <div className="bg-elevated h-48 flex items-center justify-center">
                  <span className="text-4xl text-gold-dim">⚜</span>
                </div>
                <div className="p-6">
                  <p className="text-xs text-gold-primary uppercase tracking-wider font-semibold">
                    {post.category}
                  </p>
                  <h3 className="mt-2 text-lg font-semibold text-text-primary font-[family-name:var(--font-heading)] group-hover:text-gold-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="mt-1 text-xs text-text-muted">
                    {post.date}
                  </p>
                  <p className="mt-3 text-sm text-text-secondary line-clamp-3 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <span className="mt-4 inline-block text-sm font-semibold text-gold-primary transition-colors group-hover:text-gold-light">
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
