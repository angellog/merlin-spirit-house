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
      <AnnouncementBar />
      <Navbar />
      <div className="h-16" /> {/* Spacer for fixed Navbar */}
      <main className="flex-1">{children}</main>
      <Footer />
      <WhatsAppFloat />
      <MobileStickyBar />
      <JivochatProvider />
      <ConditionalSanityLive />
    </div>
  );
}
