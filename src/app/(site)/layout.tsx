import { Cinzel, EB_Garamond, Inter } from "next/font/google";
import ConditionalSanityLive from "@/components/ConditionalSanityLive";
import AnnouncementBar from "@/components/AnnouncementBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import MobileStickyBar from "@/components/MobileStickyBar";
import JivochatProvider from "@/components/JivochatProvider";
import Analytics from "@/components/Analytics";
import ConversionTracking from "@/components/ConversionTracking";
import "../globals.css";

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

export default function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <body
      className={`${cinzel.variable} ${ebGaramond.variable} ${inter.variable} min-h-full flex flex-col bg-[var(--color-bg-deepnight)] antialiased`}
    >
      <Analytics />
      <ConversionTracking />
      <AnnouncementBar />
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
      <WhatsAppFloat />
      <MobileStickyBar />
      <JivochatProvider />
      <ConditionalSanityLive />
    </body>
  );
}
