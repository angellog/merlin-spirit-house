import React from "react";

const countries = [
  { name: "Uganda", flag: "🇺🇬", power: "high" },
  { name: "DR Congo", flag: "🇨🇩", power: "high" },
  { name: "South Africa", flag: "🇿🇦", power: "high" },
  { name: "Kenya", flag: "🇰🇪", power: "high" },
  { name: "Tanzania", flag: "🇹🇿", power: "high" },
  { name: "Nigeria", flag: "🇳🇬", power: "high" },
  { name: "Zimbabwe", flag: "🇿🇼", power: "medium" },
  { name: "Malawi", flag: "🇲🇼", power: "medium" },
  { name: "Cameroon", flag: "🇨🇲", power: "medium" },
  { name: "Gabon", flag: "🇬🇦", power: "medium" },
  { name: "Rwanda", flag: "🇷🇼", power: "medium" },
  { name: "Burundi", flag: "🇧🇮", power: "low" },
  { name: "Zambia", flag: "🇿🇲", power: "low" },
  { name: "United Kingdom", flag: "🇬🇧", power: "low" },
  { name: "United States", flag: "🇺🇸", power: "low" },
  { name: "Canada", flag: "🇨🇦", power: "low" },
  { name: "Australia", flag: "🇦🇺", power: "low" },
  { name: "Dubai (UAE)", flag: "🇦🇪", power: "low" },
  { name: "Saudi Arabia", flag: "🇸🇦", power: "low" },
  { name: "Netherlands", flag: "🇳🇱", power: "low" },
  { name: "Germany", flag: "🇩🇪", power: "low" },
];

export default function GlobalAuthority() {
  return (
    <section className="bg-surface/50 border-y border-gold-dim/10 py-6 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 mb-4">
        <p className="text-center text-[0.65rem] uppercase tracking-[0.25em] text-gold-dim">
          Global Spiritual Influence & Trusted Practice
        </p>
      </div>
      
      <div className="relative flex overflow-x-hidden">
        <div className="animate-marquee whitespace-nowrap flex items-center gap-12 py-2">
          {countries.map((c, i) => (
            <div key={i} className="flex items-center gap-3 group cursor-default">
              <span className="text-2xl filter drop-shadow-[0_0_8px_rgba(201,168,76,0.3)] transition-transform group-hover:scale-125">
                {c.flag}
              </span>
              <span className="text-sm font-medium text-text-muted group-hover:text-gold-primary transition-colors">
                {c.name}
              </span>
            </div>
          ))}
          {/* Duplicate for seamless loop */}
          {countries.map((c, i) => (
            <div key={`dup-${i}`} className="flex items-center gap-3 group cursor-default">
              <span className="text-2xl filter drop-shadow-[0_0_8px_rgba(201,168,76,0.3)] transition-transform group-hover:scale-125">
                {c.flag}
              </span>
              <span className="text-sm font-medium text-text-muted group-hover:text-gold-primary transition-colors">
                {c.name}
              </span>
            </div>
          ))}
        </div>

        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-deepnight to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-deepnight to-transparent z-10" />
      </div>
    </section>
  );
}
