import type { Metadata } from "next";

// faq/page.tsx is a client component (it owns the accordion state), and a
// client component cannot export `metadata`. Declaring it on the route's
// layout is the idiomatic way to give such a page a title, description and
// canonical without splitting the component apart.

const clientName = process.env.NEXT_PUBLIC_CLIENT_NAME || "Ndaula";
const clientTitle = process.env.NEXT_PUBLIC_CLIENT_TITLE || "Prof.";

export const metadata: Metadata = {
  title: `Frequently Asked Questions — Spells, Healing & Consultations`,
  description: `Straight answers about voodoo spells, love spells, curse removal, timescales, confidentiality and pricing, from ${clientTitle} ${clientName}. Free consultation available 24/7.`,
  keywords: [
    "do voodoo spells work",
    "how long do love spells take",
    "is spell casting confidential",
    "spiritual healer questions",
    "curse removal questions",
  ],
  openGraph: {
    title: `Frequently Asked Questions | ${clientTitle} ${clientName}`,
    description: `Straight answers about spells, healing, timescales, confidentiality and pricing.`,
    url: `/faq/`,
  },
  alternates: { canonical: `/faq/` },
};

export default function FaqLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
