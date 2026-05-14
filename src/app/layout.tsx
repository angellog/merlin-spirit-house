import type { Metadata } from "next";
import { Cinzel, EB_Garamond, Inter } from "next/font/google";
import "./globals.css";

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
});

const ebGaramond = EB_Garamond({
  variable: "--font-eb-garamond",
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["normal", "italic"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  display: "swap",
});

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
    "Real voodoo spells, love spell casting, protection rituals & traditional healing. 13+ years experience. WhatsApp consultations available 24/7.",
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
    <html lang="en" className={`${cinzel.variable} ${ebGaramond.variable} ${inter.variable} h-full antialiased`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className="min-h-full bg-deepnight text-text-secondary font-body">
        {children}
      </body>
    </html>
  );
}
