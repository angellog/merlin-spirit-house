"use client";

interface AnnouncementBarProps {
  clientWhatsapp: string;
  announcementText?: string;
}

export default function AnnouncementBar({ clientWhatsapp, announcementText }: AnnouncementBarProps) {
  const handleLiveChat = () => {
    if (typeof window !== "undefined" && window.jivo_api) {
      window.jivo_api.open();
    }
  };

  return (
    <div
      className="flex h-8 w-full items-center justify-center gap-2 bg-[var(--color-gold-primary)] px-2 text-[0.65rem] font-[family-name:var(--font-body)] md:h-9 md:gap-4 md:text-[0.8rem]"
      style={{ zIndex: 1001 }}
    >
      <span className="font-semibold text-[#0A0A12]">
        {announcementText || "Free Consultation 24/7"} —{" "}
        {clientWhatsapp ? (
          <a
            href={`tel:${clientWhatsapp}`}
            className="underline decoration-1 underline-offset-2 hover:no-underline md:decoration-2"
          >
            {clientWhatsapp}
          </a>
        ) : (
          "N/A"
        )}
      </span>
      <span className="text-[#0A0A12]/40">|</span>
      <button
        onClick={handleLiveChat}
        className="font-semibold text-[#0A0A12] underline decoration-1 underline-offset-2 transition hover:no-underline md:decoration-2"
      >
        Live Chat
      </button>
    </div>
  );
}
