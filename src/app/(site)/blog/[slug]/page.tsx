import type { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote/rsc";
import JsonLd from "@/components/JsonLd";
import { cleanWhatsappNumber } from "@/lib/whatsapp";

const clientName = process.env.NEXT_PUBLIC_CLIENT_NAME || "Ndaula";
const clientTitle = process.env.NEXT_PUBLIC_CLIENT_TITLE || "Prof.";
const clientYears = process.env.NEXT_PUBLIC_CLIENT_YEARS || "13";
const clientWhatsapp = process.env.NEXT_PUBLIC_CLIENT_WHATSAPP || "+256788546704";
const clientDomain = process.env.NEXT_PUBLIC_SITE_URL || "https://merlinspirithouse.com";

const blogDir = path.join(process.cwd(), "content/blog");

interface Frontmatter {
  title: string;
  slug: string;
  date: string;
  author: string;
  excerpt: string;
  category: string;
  tags: string[];
  seo_title: string;
  seo_description: string;
  canonical: string;
}

function getPost(slug: string) {
  const filePath = path.join(blogDir, `${slug}.mdx`);
  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);
  return { frontmatter: data as Frontmatter, content };
}

function getAllSlugs() {
  const files = fs.readdirSync(blogDir).filter((f) => f.endsWith(".mdx"));
  return files.map((f) => f.replace(/\.mdx$/, ""));
}

function extractFaqs(content: string): { question: string; answer: string }[] {
  const faqs: { question: string; answer: string }[] = [];
  const parts = content.split(/#{2,3}\s+/);
  for (const part of parts) {
    const boldMatch = part.match(/^\*\*(.+?)\*\*\s*\n([\s\S]+)/);
    if (boldMatch) {
      const question = boldMatch[1].replace(/\*\*/g, "").trim();
      const answer = boldMatch[2].replace(/\*\*/g, "").replace(/\n{2,}/g, " ").trim();
      if (question.endsWith("?")) {
        faqs.push({ question, answer });
      }
    }
  }
  return faqs.slice(0, 5);
}

export async function generateStaticParams() {
  const slugs = getAllSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const { frontmatter } = getPost(slug);
  return {
    title: frontmatter.seo_title || frontmatter.title,
    description: frontmatter.seo_description || frontmatter.excerpt,
    alternates: { canonical: frontmatter.canonical },
    openGraph: {
      title: frontmatter.seo_title || frontmatter.title,
      description: frontmatter.seo_description || frontmatter.excerpt,
      url: `${clientDomain}/blog/${frontmatter.slug}`,
      type: "article",
    },
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const { frontmatter, content } = getPost(slug);
  const faqs = extractFaqs(content);

  const whatsappNumber = cleanWhatsappNumber(clientWhatsapp);
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(`Hello ${clientTitle} ${clientName}, I read your article about ${frontmatter.title} and I would like a consultation.`)}`;

  const blogPostingSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: frontmatter.title,
    description: frontmatter.seo_description || frontmatter.excerpt,
    datePublished: frontmatter.date,
    dateModified: frontmatter.date,
    author: {
      "@type": "Person",
      name: frontmatter.author,
      jobTitle: "Traditional Spiritual Healer & Voodoo Practitioner",
      url: `${clientDomain}/about`,
    },
    publisher: {
      "@type": "Organization",
      name: "Merlin Spirit House",
      url: clientDomain,
    },
    url: `${clientDomain}/blog/${frontmatter.slug}`,
    mainEntityOfPage: `${clientDomain}/blog/${frontmatter.slug}`,
    articleSection: frontmatter.category,
    keywords: frontmatter.tags?.join(", "),
  };

  const faqSchema = faqs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  } : null;

  return (
    <>
      <JsonLd data={blogPostingSchema} />
      {faqSchema && <JsonLd data={faqSchema} />}

      <article className="py-24">
        <div className="mx-auto max-w-3xl px-6">
          <p className="mb-4 text-xs text-gold-primary uppercase tracking-wider font-semibold">
            {frontmatter.category}
          </p>
          <h1>{frontmatter.title}</h1>
          <p className="mt-4 text-sm text-text-muted">
            By {frontmatter.author} · {frontmatter.date}
          </p>

          <div className="mt-4 flex flex-wrap gap-2">
            {frontmatter.tags?.map((tag) => (
              <span
                key={tag}
                className="inline-block rounded-full bg-surface border border-gold-dim/20 px-3 py-1 text-xs text-gold-primary"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="mt-12 prose-invert max-w-none text-text-secondary leading-relaxed [&_h2]:text-text-primary [&_h2]:font-[family-name:var(--font-heading)] [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:mt-12 [&_h2]:mb-6 [&_h3]:text-gold-primary [&_h3]:font-semibold [&_h3]:mt-8 [&_h3]:mb-4 [&_p]:mb-6 [&_a]:text-gold-primary [&_a]:underline [&_a]:hover:text-gold-light [&_strong]:text-text-primary [&_strong]:font-semibold [&_ul]:mb-6 [&_ul]:space-y-2 [&_li]:mb-2 [&_hr]:border-gold-dim/20 [&_hr]:my-12">
            <MDXRemote source={content} />
          </div>

          <div className="mt-16 rounded-2xl bg-elevated border border-gold-dim/40 p-8 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold-primary">
              Need Personal Guidance?
            </p>
            <h3 className="mt-4 text-xl font-semibold text-text-primary">
              {clientTitle} {clientName} Can Help With Your Situation Directly
            </h3>
            <p className="mt-3 text-text-secondary">
              Every situation is unique. Get a free, confidential consultation and find out exactly what spiritual work can do for you.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 items-center justify-center rounded-full bg-whatsapp px-8 text-sm font-semibold text-white transition-all hover:brightness-110"
              >
                <svg className="mr-2 h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.038 2.149.002 1.135.826 2.129 1.213 2.678.388.549 2.285 3.674 5.603 5.162.783.338 1.392.539 1.866.689.784.249 1.497.214 2.061.131.628-.099 1.927-.787 2.199-1.553.272-.767.272-1.424.194-1.553-.075-.149-.273-.223-.57-.371z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.5.5 0 00.612.638l4.694-1.358A11.955 11.955 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.387 0-4.607-.798-6.382-2.143l-.446-.345-3.138.908.929-3.005-.381-.48A9.945 9.945 0 012 12C2 6.486 6.486 2 12 2s10 4.486 10 10-4.486 10-10 10z"/></svg>
                WhatsApp Now
              </a>
              <Link
                href="/consultation"
                className="inline-flex h-12 items-center justify-center rounded-full border border-gold-primary/40 px-8 text-sm font-semibold text-gold-primary transition-all hover:bg-gold-primary/10"
              >
                Book a Consultation
              </Link>
            </div>
          </div>

          <div className="mt-16 rounded-2xl bg-surface border border-gold-dim/20 p-8">
            <div className="flex flex-col items-center gap-6 sm:flex-row">
              <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-elevated border-2 border-gold-primary/30">
                <span className="text-3xl text-gold-dim">⚜</span>
              </div>
              <div>
                <p className="text-xs text-gold-primary uppercase tracking-wider font-semibold">About the Author</p>
                <p className="mt-1 font-[family-name:var(--font-heading)] text-lg font-semibold text-text-primary">
                  {clientTitle} {clientName}
                </p>
                <p className="text-sm text-text-muted">
                  Traditional Spiritual Healer &amp; Voodoo Practitioner · {clientYears}+ Years of Experience
                </p>
                <Link
                  href="/about"
                  className="mt-2 inline-block text-sm font-semibold text-gold-primary hover:underline"
                >
                  Learn More →
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-16">
            <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-text-primary">Related Articles</h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-3">
              {getAllSlugs()
                .filter((s) => s !== slug)
                .slice(0, 3)
                .map((s) => {
                  const related = getPost(s);
                  return (
                    <Link
                      key={s}
                      href={`/blog/${s}`}
                      className="group bg-surface border border-gold-dim/20 rounded-lg overflow-hidden transition-all hover:border-gold-primary/40"
                    >
                      <div className="bg-elevated h-32 flex items-center justify-center">
                        <span className="text-2xl text-gold-dim">⚜</span>
                      </div>
                      <div className="p-4">
                        <p className="text-xs text-gold-primary uppercase tracking-wider font-semibold">
                          {related.frontmatter.category}
                        </p>
                        <p className="mt-1 text-sm font-semibold text-text-primary font-[family-name:var(--font-heading)] group-hover:text-gold-primary transition-colors line-clamp-2">
                          {related.frontmatter.title}
                        </p>
                      </div>
                    </Link>
                  );
                })}
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
