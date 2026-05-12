import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://merlinspirithouse.com"
  ),
  title: {
    default:
      "Merlin Spirit House — Voodoo Spell Caster & Traditional Spiritual Healer",
    template: "%s | Merlin Spirit House",
  },
  description:
    "Real voodoo spells, love spell casting, protection rituals & traditional healing. 25+ years experience. WhatsApp consultations available 24/7.",
  keywords: [
    "voodoo spells",
    "love spells",
    "spiritual healer",
    "traditional healing",
    "curse removal",
    "protection spells",
    "money spells",
    "spiritual consultation",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Merlin Spirit House",
  },
  twitter: {
    card: "summary_large_image",
  },
  alternates: {
    canonical: process.env.NEXT_PUBLIC_SITE_URL || "https://merlinspirithouse.com",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      {children}
    </html>
  );
}
