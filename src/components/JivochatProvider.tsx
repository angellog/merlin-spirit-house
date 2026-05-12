"use client";

import Script from "next/script";
import { useEffect } from "react";

export default function JivochatProvider() {
  const widgetId = process.env.NEXT_PUBLIC_JIVOCHAT_WIDGET_ID;

  if (!widgetId || widgetId === "your_widget_id_here") return null;

  return (
    <>
      <style>{`
        @media (max-width: 767px) {
          .jivo-btn {
            bottom: 116px !important;
            right: 16px !important;
          }
          .jivo-btn-label {
            display: none !important;
          }
        }
        @media (min-width: 768px) {
          .jivo-btn {
            bottom: 28px !important;
            right: 96px !important;
          }
        }
      `}</style>
      <Script
        src={`//code.jivosite.com/widget/${widgetId}`}
        strategy="afterInteractive"
      />
      <JivochatCallbacks />
    </>
  );
}

function JivochatCallbacks() {
  useEffect(() => {
    window.jivo_onLoadCallback = function () {
      if (window.jivo_api) {
        window.jivo_api.setWidgetColor("#C9A84C", "#0A0A12");
      }
    };

    window.jivo_onMessageSent = function () {
      if (typeof window.gtag === "function") {
        window.gtag("event", "live_chat_started", {
          event_category: "Conversion",
          event_label: "Live Chat",
        });
      }
    };

    window.jivo_onIntroduction = function () {
      if (typeof window.gtag === "function") {
        window.gtag("event", "live_chat_contact_info", {
          event_category: "Conversion",
          event_label: "Live Chat Contact Submitted",
        });
      }
    };
  }, []);

  return null;
}
