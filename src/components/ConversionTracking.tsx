"use client";

import { useEffect } from "react";

/**
 * Sends conversion and engagement events to GA4.
 *
 * This previously ran as an inline next/script with `afterInteractive`, whose
 * body waited for `DOMContentLoaded`. That event has already fired by the time
 * Next injects an afterInteractive script, so the listener was registered for
 * an event that never came again and no event was ever sent. Verified in a
 * real browser: the script was present, the links were there, a click
 * dispatched, and gtag received nothing.
 *
 * Running in an effect removes the timing question entirely, and delegating
 * from `document` means links rendered by a later client-side navigation are
 * covered too — the old code bound listeners once, to the first page's links.
 */
export default function ConversionTracking() {
  useEffect(() => {
    function sendEvent(name: string, params: Record<string, unknown>) {
      if (typeof window.gtag === "function") {
        window.gtag("event", name, params);
      }
    }

    // Delegated, so it survives client-side navigation.
    function onClick(event: MouseEvent) {
      const target = event.target as HTMLElement | null;
      const link = target?.closest?.("a");
      if (!link) return;

      const href = link.getAttribute("href") ?? "";

      // The old code read a `data-page` attribute that nothing in the codebase
      // ever set, so every event was labelled "unknown_page". The pathname is
      // always correct and needs no markup.
      const page = window.location.pathname;

      if (href.includes("wa.me")) {
        sendEvent("whatsapp_click", {
          event_category: "Conversion",
          event_label: page,
          page_path: page,
        });
      } else if (href.startsWith("tel:")) {
        sendEvent("phone_click", {
          event_category: "Conversion",
          event_label: page,
          page_path: page,
        });
      } else if (href.startsWith("mailto:")) {
        sendEvent("email_click", {
          event_category: "Conversion",
          event_label: page,
          page_path: page,
        });
      }
    }

    const depths = [25, 50, 75, 90];
    const reached = new Set<number>();

    function onScroll() {
      // A page shorter than the viewport makes this denominator zero, which
      // previously produced NaN/Infinity and could mark every depth at once.
      const scrollable = document.body.scrollHeight - window.innerHeight;
      if (scrollable <= 0) return;

      const pct = Math.round((window.scrollY / scrollable) * 100);
      for (const depth of depths) {
        if (pct >= depth && !reached.has(depth)) {
          reached.add(depth);
          sendEvent("scroll_depth", {
            event_category: "Engagement",
            event_label: `${depth}%`,
            page_path: window.location.pathname,
          });
        }
      }
    }

    document.addEventListener("click", onClick);
    window.addEventListener("scroll", onScroll, { passive: true });

    // Fire once in case the page is loaded already scrolled (a restored
    // position, or an anchor link).
    onScroll();

    return () => {
      document.removeEventListener("click", onClick);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return null;
}
