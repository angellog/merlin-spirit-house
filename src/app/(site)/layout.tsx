import ConditionalSanityLive from "@/components/ConditionalSanityLive";
import AnnouncementBar from "@/components/AnnouncementBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import MobileStickyBar from "@/components/MobileStickyBar";
import JivochatProvider from "@/components/JivochatProvider";
import Analytics from "@/components/Analytics";
import ConversionTracking from "@/components/ConversionTracking";

export default function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col min-h-full">
      <Analytics />
      <ConversionTracking />
      <header className="fixed top-0 left-0 right-0 z-[10000] bg-deepnight shadow-2xl">
        <AnnouncementBar />
        <Navbar />
      </header>
      <div className="h-[88px] md:h-[100px]" /> {/* Spacer for combined fixed Header (h-8/9 + h-14/16) */}
      <main className="flex-1">{children}</main>
      <Footer />
      <WhatsAppFloat />
      <MobileStickyBar />
      <JivochatProvider />
      <ConditionalSanityLive />
    </div>
  );
}
