import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import PortableTextRenderer from "@/components/PortableTextRenderer";
import { cleanWhatsappNumber } from "@/lib/whatsapp";
import { getPost, getPosts, getResolvedSiteSettings } from "@/sanity/lib/fetch";

function portableTextToPlainText(blocks: any[]): string {
  if (!blocks) return "";
  return blocks
    .filter((block: any) => block._type === "block")
    .map((block: any) =>
      block.children?.map((child: any) => child.text ?? "").join("") ?? ""
    )
    .join(" ");
}

export async function generateStaticParams() {
  const posts = await getPosts();
  return (posts || []).map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const [post, settings] = await Promise.all([
    getPost(slug),
    getResolvedSiteSettings(),
  ]);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `${settings.clientDomain}/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `${settings.clientDomain}/blog/${post.slug}`,
      type: "article",
    },
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const [post, settings, allPosts] = await Promise.all([
    getPost(slug),
    getResolvedSiteSettings(),
    getPosts(),
  ]);

  if (!post) {
    const { notFound } = await import("next/navigation");
    notFound();
  }

  const { clientTitle, clientName, clientYears, clientWhatsapp, clientDomain } = settings;
  const whatsappUrl = `https://wa.me/${cleanWhatsappNumber(clientWhatsapp)}?text=${encodeURIComponent(`Hello ${clientTitle} ${clientName}, I read your article about ${post.title} and I would like a consultation.`)}`;

  const blogPostingSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.publishedAt,
    dateModified: post.publishedAt,
    author: {
      "@type": "Person",
      name: post.author?.name || `${clientTitle} ${clientName}`,
      jobTitle: "Traditional Spiritual Healer & Voodoo Practitioner",
      url: `${clientDomain}/about`,
    },
    publisher: {
      "@type": "Organization",
      name: "Merlin Spirit House",
      url: clientDomain,
    },
    url: `${clientDomain}/blog/${post.slug}`,
    mainEntityOfPage: `${clientDomain}/blog/${post.slug}`,
    articleSection: post.categories?.[0]?.title,
    keywords: post.categories?.map((c) => c.title).join(", "),
  };

  const faqs = post.faqItems || [];
  const faqSchema = faqs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: portableTextToPlainText(faq.answer),
      },
    })),
  } : null;

  const relatedPosts = (allPosts || [])
    .filter((p) => p.slug !== slug)
    .slice(0, 3);

  return (
    <>
      <JsonLd data={blogPostingSchema} />
      {faqSchema && <JsonLd data={faqSchema} />}

      <article className="py-24">
        <div className="mx-auto max-w-3xl px-6">
          <p className="mb-4 text-xs text-[var(--color-gold-primary)] uppercase tracking-wider font-semibold">
            {post.categories?.[0]?.title || "General"}
          </p>
          <h1>{post.title}</h1>
          <p className="mt-4 text-sm text-[var(--color-text-muted)]">
            By {post.author?.name || `${clientTitle} ${clientName}`} · {post.publishedAt?.split("T")[0]}
          </p>

          <div className="mt-4 flex flex-wrap gap-2">
            {post.categories?.map((cat) => (
              <span
                key={cat.slug}
                className="inline-block rounded-full bg-[var(--color-bg-surface)] border border-[var(--color-gold-dim)]/20 px-3 py-1 text-xs text-[var(--color-gold-primary)]"
              >
                {cat.title}
              </span>
            ))}
          </div>

          <div className="mt-12 prose-invert max-w-none text-[var(--color-text-secondary)] leading-relaxed [&_h2]:text-[var(--color-text-primary)] [&_h2]:font-[family-name:var(--font-heading)] [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:mt-12 [&_h2]:mb-6 [&_h3]:text-[var(--color-gold-primary)] [&_h3]:font-semibold [&_h3]:mt-8 [&_h3]:mb-4 [&_p]:mb-6 [&_a]:text-[var(--color-gold-primary)] [&_a]:underline [&_a]:hover:text-[var(--color-gold-light)] [&_strong]:text-[var(--color-text-primary)] [&_strong]:font-semibold [&_ul]:mb-6 [&_ul]:space-y-2 [&_li]:mb-2 [&_hr]:border-[var(--color-gold-dim)]/20 [&_hr]:my-12">
            <PortableTextRenderer value={post.body || []} />
          </div>

          {faqs.length > 0 && (
            <div className="mt-16">
              <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-[var(--color-text-primary)]">Frequently Asked Questions</h2>
              <div className="mt-8 space-y-4">
                {faqs.map((faq, i) => (
                  <details
                    key={i}
                    className="group border border-[var(--color-gold-dim)]/20 bg-[var(--color-bg-surface)]"
                  >
                    <summary className="flex cursor-pointer items-center justify-between p-5 font-[family-name:var(--font-heading)] text-sm font-semibold text-[var(--color-text-primary)] transition-colors hover:text-[var(--color-gold-primary)]">
                      {faq.question}
                      <span className="ml-4 text-[var(--color-gold-primary)] transition-transform group-open:rotate-45 text-xl">+</span>
                    </summary>
                    <div className="border-t border-[var(--color-gold-dim)]/20 px-5 pb-5 pt-4">
                      <PortableTextRenderer value={faq.answer} />
                    </div>
                  </details>
                ))}
              </div>
            </div>
          )}

          <div className="mt-16 rounded-2xl bg-[var(--color-bg-elevated)] border border-[var(--color-gold-dim)]/40 p-8 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-gold-primary)]">
              Need Personal Guidance?
            </p>
            <h3 className="mt-4 text-xl font-semibold text-[var(--color-text-primary)]">
              {clientTitle} {clientName} Can Help With Your Situation Directly
            </h3>
            <p className="mt-3 text-[var(--color-text-secondary)]">
              Every situation is unique. Get a free, confidential consultation and find out exactly what spiritual work can do for you.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 items-center justify-center rounded-full bg-[var(--color-whatsapp)] px-8 text-sm font-semibold text-white transition-all hover:brightness-110"
              >
                <svg className="mr-2 h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.038 2.149.002 1.135.826 2.129 1.213 2.678.388.549 2.285 3.674 5.603 5.162.783.338 1.392.539 1.866.689.784.249 1.497.214 2.061.131.628-.099 1.927-.787 2.199-1.553.272-.767.272-1.424.194-1.553-.075-.149-.273-.223-.57-.371z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.5.5 0 00.612.638l4.694-1.358A11.955 11.955 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.387 0-4.607-.798-6.382-2.143l-.446-.345-3.138.908.929-3.005-.381-.48A9.945 9.945 0 012 12C2 6.486 6.486 2 12 2s10 4.486 10 10-4.486 10-10 10z"/></svg>
                WhatsApp Now
              </a>
              <Link
                href="/consultation"
                className="inline-flex h-12 items-center justify-center rounded-full border border-[var(--color-gold-primary)]/40 px-8 text-sm font-semibold text-[var(--color-gold-primary)] transition-all hover:bg-[var(--color-gold-primary)]/10"
              >
                Book a Consultation
              </Link>
            </div>
          </div>

          <div className="mt-16 rounded-2xl bg-[var(--color-bg-surface)] border border-[var(--color-gold-dim)]/20 p-8">
            <div className="flex flex-col items-center gap-6 sm:flex-row">
              <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-[var(--color-bg-elevated)] border-2 border-[var(--color-gold-primary)]/30">
                <span className="text-3xl text-[var(--color-gold-dim)]">⚜</span>
              </div>
              <div>
                <p className="text-xs text-[var(--color-gold-primary)] uppercase tracking-wider font-semibold">About the Author</p>
                <p className="mt-1 font-[family-name:var(--font-heading)] text-lg font-semibold text-[var(--color-text-primary)]">
                  {post.author?.name || `${clientTitle} ${clientName}`}
                </p>
                <p className="text-sm text-[var(--color-text-muted)]">
                  Traditional Spiritual Healer &amp; Voodoo Practitioner · {post.author?.yearsExperience || clientYears}+ Years of Experience
                </p>
                <Link
                  href="/about"
                  className="mt-2 inline-block text-sm font-semibold text-[var(--color-gold-primary)] hover:underline"
                >
                  Learn More →
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-16">
            <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-[var(--color-text-primary)]">Related Articles</h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-3">
              {relatedPosts.map((related) => (
                <Link
                  key={related.slug}
                  href={`/blog/${related.slug}`}
                  className="group bg-[var(--color-bg-surface)] border border-[var(--color-gold-dim)]/20 rounded-lg overflow-hidden transition-all hover:border-[var(--color-gold-primary)]/40"
                >
                  <div className="bg-[var(--color-bg-elevated)] h-32 flex items-center justify-center">
                    <span className="text-2xl text-[var(--color-gold-dim)]">⚜</span>
                  </div>
                  <div className="p-4">
                    <p className="text-xs text-[var(--color-gold-primary)] uppercase tracking-wider font-semibold">
                      {related.categories?.[0]?.title || "General"}
                    </p>
                    <p className="mt-1 text-sm font-semibold text-[var(--color-text-primary)] font-[family-name:var(--font-heading)] group-hover:text-[var(--color-gold-primary)] transition-colors line-clamp-2">
                      {related.title}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
