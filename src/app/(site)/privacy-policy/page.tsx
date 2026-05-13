import type { Metadata } from "next";
import Link from "next/link";

const clientEmail = process.env.NEXT_PUBLIC_CLIENT_EMAIL || "info@merlinspirithouse.com";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for Merlin Spirit House. Learn how we collect, use, and protect your personal information.",
};

export default function PrivacyPolicyPage() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-3xl px-6">
        <h1>Privacy Policy</h1>
        <p className="mt-2 text-sm text-text-muted">Last updated: January 1, 2025</p>

        <div className="mt-12 space-y-12">
          <div>
            <h2>Information We Collect</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              When you contact us through our website, WhatsApp, email, or live chat, we may collect personal information including your name, email address, phone number, and details about your situation that you voluntarily provide. This information is collected only when you choose to share it with us and is necessary for providing our spiritual consultation services.
            </p>
          </div>

          <div>
            <h2>How We Use Information</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              The information you provide is used solely for the purpose of delivering spiritual consultation services, responding to your inquiries, scheduling sessions, and communicating with you about your consultation. We do not use your information for marketing purposes, nor do we sell, rent, or share your personal data with any third party for their own commercial use.
            </p>
          </div>

          <div>
            <h2>Data Storage</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              Personal information shared during consultations is stored securely and treated with the highest level of confidentiality. We retain your information only for as long as necessary to provide our services or as required by applicable law. You may request deletion of your personal data at any time by contacting us directly.
            </p>
          </div>

          <div>
            <h2>Cookies</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              Our website may use cookies and similar tracking technologies to improve your browsing experience, analyze site traffic, and understand how visitors interact with our content. You can control cookie preferences through your browser settings. Essential cookies are required for the website to function properly and cannot be disabled.
            </p>
          </div>

          <div>
            <h2>Third-Party Services</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              Our website uses the following third-party services:
            </p>
            <ul className="mt-4 space-y-3">
              <li className="flex items-start gap-3">
                <span className="mt-1 shrink-0 text-gold-primary">◈</span>
                <span className="text-text-secondary"><strong className="text-text-primary">Jivochat</strong> — Provides our live chat functionality. Jivochat may collect chat transcripts and basic visitor information as part of their service. Their privacy policy applies to data they collect independently.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 shrink-0 text-gold-primary">◈</span>
                <span className="text-text-secondary"><strong className="text-text-primary">Google Analytics</strong> — Helps us understand website traffic and usage patterns through anonymized data. Google Analytics uses cookies to collect information about how visitors use our site. This data is aggregated and does not personally identify individual visitors.</span>
              </li>
            </ul>
          </div>

          <div>
            <h2>Your Rights</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              Under applicable data protection regulations, including the General Data Protection Regulation (GDPR), you have the following rights regarding your personal data: the right to access, the right to rectification, the right to erasure, the right to restrict processing, the right to data portability, and the right to object to processing. To exercise any of these rights, please contact us using the details below.
            </p>
          </div>

          <div>
            <h2>Contact</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              For any questions or concerns about this privacy policy or how your data is handled, please contact us at <a href={`mailto:${clientEmail}`} className="text-gold-primary hover:underline">{clientEmail}</a> or visit our <Link href="/contact" className="text-gold-primary hover:underline">contact page</Link>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
