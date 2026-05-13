import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Disclaimer",
  description: "Disclaimer regarding spiritual healing services offered by Merlin Spirit House.",
};

export default function DisclaimerPage() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-3xl px-6">
        <h1>Disclaimer</h1>

        <div className="mt-12 space-y-8">
          <div className="rounded-2xl border-2 border-gold-primary/40 bg-surface p-8">
            <p className="text-lg leading-relaxed text-text-primary font-[family-name:var(--font-serif)] italic">
              Spiritual services are offered for guidance and spiritual balance. Results may vary. No specific outcome is guaranteed.
            </p>
          </div>

          <div className="space-y-6 text-text-secondary leading-relaxed">
            <p>
              The spiritual healing, consultation, and ritual services provided through this website are intended for spiritual guidance, emotional support, and personal insight. These services are rooted in traditional African spiritual practice and are offered as an alternative or complementary approach to personal well-being.
            </p>
            <p>
              Results from spiritual work cannot be guaranteed with absolute certainty. The effectiveness of any ritual, spell, or spiritual practice depends on numerous factors including the nature of the situation, the individuals involved, and spiritual forces beyond human control. Testimonials and success stories shared on this website represent individual experiences and are not a guarantee that you will achieve the same results.
            </p>
            <p>
              Our services are not a substitute for professional medical, psychological, legal, or financial advice. If you are experiencing a medical or psychiatric emergency, please contact your healthcare provider or emergency services immediately. Spiritual healing should be viewed as complementary to — not a replacement for — conventional professional care.
            </p>
            <p>
              By engaging our services, you acknowledge that you do so voluntarily and assume full responsibility for any decisions made based on the guidance received. You understand that spiritual practices involve an element of faith and that outcomes cannot be scientifically verified in all cases.
            </p>
            <p>
              All consultations and communications are treated as confidential, but we cannot guarantee the security of information transmitted over the internet. You are encouraged to share only what you are comfortable disclosing.
            </p>
            <p>
              The content on this website — including articles, blog posts, and descriptions of services — is provided for informational purposes only and should not be construed as professional advice of any kind. The information presented reflects traditional spiritual beliefs and practices and is not presented as scientifically validated fact.
            </p>
            <p>
              Payment for spiritual services is for the time, expertise, and materials involved in the practice. No refund is guaranteed, though legitimate concerns will be addressed on a case-by-case basis. Prices and availability of services may change without notice.
            </p>
            <p>
              By using this website and engaging our services, you agree to this disclaimer in its entirety. If you do not agree, please do not use our services.
            </p>
          </div>

          <div className="pt-4">
            <Link
              href="/"
              className="inline-flex h-12 items-center justify-center rounded-full border-2 border-gold-primary px-8 font-[family-name:var(--font-heading)] text-sm font-semibold uppercase tracking-wider text-gold-primary transition-all hover:bg-gold-primary hover:text-deepnight"
            >
              Return Home
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
