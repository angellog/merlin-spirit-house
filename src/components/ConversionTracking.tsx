"use client";

import Script from "next/script";

export default function ConversionTracking() {
  return (
    <Script id="conversion-tracking" strategy="afterInteractive">
      {`
        document.addEventListener('DOMContentLoaded', function() {
          document.querySelectorAll('a[href*="wa.me"]').forEach(function(btn) {
            btn.addEventListener('click', function() {
              if (typeof gtag === 'function') {
                gtag('event', 'whatsapp_click', {
                  event_category: 'Conversion',
                  event_label: btn.closest('[data-page]') ? btn.closest('[data-page]').dataset.page : 'unknown_page'
                });
              }
            });
          });

          var scrollTracked = {25: false, 50: false, 75: false, 90: false};
          window.addEventListener('scroll', function() {
            var scrollPct = Math.round((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100);
            Object.keys(scrollTracked).forEach(function(depth) {
              if (scrollPct >= depth && !scrollTracked[depth]) {
                scrollTracked[depth] = true;
                if (typeof gtag === 'function') {
                  gtag('event', 'scroll_depth', {event_category: 'Engagement', event_label: depth + '%'});
                }
              }
            });
          });
        });
      `}
    </Script>
  );
}
