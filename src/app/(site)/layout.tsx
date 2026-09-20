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
import { getResolvedSiteSettings, getServicePages } from "@/sanity/lib/fetch";
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

export default async function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [settings, services] = await Promise.all([
    getResolvedSiteSettings(),
    getServicePages(),
  ]);

  const serviceLinks = (services || []).map((s) => ({
    href: `/${s.slug.current}`,
    label: s.title,
  }));

  return (
    <body
      className={`${cinzel.variable} ${ebGaramond.variable} ${inter.variable} min-h-full flex flex-col bg-[var(--color-bg-deepnight)] antialiased`}
    >
      <Analytics />
      <ConversionTracking />
      <AnnouncementBar
        clientWhatsapp={settings.clientWhatsapp}
        announcementText={settings.announcementText}
      />
      <Navbar
        serviceLinks={serviceLinks}
        clientWhatsapp={settings.clientWhatsapp}
        clientTagline={settings.clientTagline}
      />
      <main className="flex-1">{children}</main>
      <Footer
        serviceLinks={serviceLinks}
        clientWhatsapp={settings.clientWhatsapp}
        clientEmail={settings.clientEmail}
        clientLocation={settings.clientLocation}
        clientTagline={settings.clientTagline}
      />
      <WhatsAppFloat
        clientWhatsapp={settings.clientWhatsapp}
        clientTitle={settings.clientTitle}
        clientName={settings.clientName}
      />
      <MobileStickyBar
        clientWhatsapp={settings.clientWhatsapp}
      />
      <JivochatProvider widgetId={settings.jivoWidgetId} />
      <ConditionalSanityLive />
    </body>
  );
}
