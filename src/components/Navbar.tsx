"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cleanWhatsappNumber } from "@/lib/whatsapp";

const serviceLinks = [
  { href: "/love-spells", label: "Love Spells" },
  { href: "/binding-spells", label: "Binding Spells" },
  { href: "/voodoo-spells", label: "Voodoo Spells" },
  { href: "/money-spells", label: "Money Spells" },
  { href: "/protection-spells", label: "Protection Spells" },
  { href: "/traditional-healing", label: "Traditional Healing" },
  { href: "/spirit-blessings", label: "Spirit Blessings" },
  { href: "/curse-removal", label: "Curse Removal" },
];

const navLinks = [
  { href: "/", label: "Home" },
  { href: "#services", label: "Services", hasDropdown: true },
  { href: "/about", label: "About" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const dropdownTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const whatsapp = process.env.NEXT_PUBLIC_CLIENT_WHATSAPP || "";
  const tagline = process.env.NEXT_PUBLIC_CLIENT_TAGLINE || "";
  const brandName = "Merlin Spirit House";

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    setMobileOpen(false);
    setDropdownOpen(false);
  }, [pathname]);

  const handleDropdownEnter = () => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    setDropdownOpen(true);
  };

  const handleDropdownLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => setDropdownOpen(false), 150);
  };

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(href + "/");
  };

  return (
    <nav
      className="border-b border-white/5 bg-elevated/90 backdrop-blur-md shadow-lg"
    >
      <div className="mx-auto flex h-14 md:h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
        <div className="flex items-center gap-2">
          <Link
            href="/"
            className="flex items-center gap-2 font-[family-name:var(--font-heading)] text-lg font-bold text-gold-primary whitespace-nowrap"
          >
            <span>✦</span>
            <span className="hidden sm:inline">{brandName}</span>
            <span className="sm:hidden">Merlin</span>
          </Link>
          {tagline && (
            <span className="hidden text-[0.7rem] text-text-muted lg:inline">
              {tagline}
            </span>
          )}
        </div>

        <div className="flex items-center gap-3 lg:gap-6">
          {/* Mobile WhatsApp Button */}
          <a
            href={`https://wa.me/${cleanWhatsappNumber(whatsapp)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex lg:hidden items-center justify-center rounded-full bg-whatsapp px-3.5 py-1.5 text-[0.75rem] font-bold text-white transition-all active:scale-95 shadow-lg"
          >
            WhatsApp
          </a>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-6 font-[family-name:var(--font-body)] text-[0.9rem] lg:flex">
            {navLinks.map((link) =>
              link.hasDropdown ? (
                <div
                  key={link.href}
                  ref={dropdownRef}
                  className="relative"
                  onMouseEnter={handleDropdownEnter}
                  onMouseLeave={handleDropdownLeave}
                >
                  <button
                    type="button"
                    className={`flex items-center gap-1 transition-colors hover:text-gold-primary ${
                      pathname.startsWith("/love-spells") ||
                      pathname.startsWith("/binding-spells") ||
                      pathname.startsWith("/voodoo-spells") ||
                      pathname.startsWith("/money-spells") ||
                      pathname.startsWith("/protection-spells") ||
                      pathname.startsWith("/traditional-healing") ||
                      pathname.startsWith("/spirit-blessings") ||
                      pathname.startsWith("/curse-removal")
                        ? "text-gold-primary"
                        : "text-text-secondary"
                    }`}
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                  >
                    {link.label} <span className="text-xs">▾</span>
                  </button>
                  {dropdownOpen && (
                    <div
                      className="absolute left-0 top-full mt-2 w-56 rounded-lg border border-white/10 bg-elevated py-2 shadow-2xl"
                      onMouseEnter={handleDropdownEnter}
                      onMouseLeave={handleDropdownLeave}
                    >
                      {serviceLinks.map((svc) => (
                        <Link
                          key={svc.href}
                          href={svc.href}
                          className={`block px-4 py-2 text-[0.85rem] transition-colors hover:bg-white/5 hover:text-gold-primary ${
                            isActive(svc.href)
                              ? "text-gold-primary"
                              : "text-text-secondary"
                          }`}
                          onClick={() => setDropdownOpen(false)}
                        >
                          {svc.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`transition-colors hover:text-gold-primary ${
                    isActive(link.href)
                      ? "text-gold-primary"
                      : "text-text-secondary"
                  }`}
                >
                  {link.label}
                </Link>
              )
            )}

            <a
              href={`https://wa.me/${cleanWhatsappNumber(whatsapp)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="relative group overflow-hidden rounded-full bg-whatsapp px-5 py-2 text-[0.85rem] font-semibold text-white transition-all hover:scale-105 active:scale-95"
            >
              <span className="relative z-10">WhatsApp Now</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:animate-shimmer" />
            </a>
          </div>

          <button
            type="button"
            className="flex h-11 w-11 items-center justify-center rounded-full text-gold-primary transition-all bg-white/5 active:bg-white/10 lg:hidden border border-white/10"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
            >
              {mobileOpen ? (
                <path d="M6 6l12 12M6 18L18 6" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div
          className="fixed inset-0 top-0 z-[10001] flex flex-col bg-deepnight lg:hidden overflow-hidden"
        >
          <div className="absolute inset-0 bg-stars opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-b from-deepnight via-deepnight/95 to-surface" />
          
          <div className="relative z-10 flex h-14 md:h-16 items-center justify-between px-4 sm:px-6 border-b border-white/5">
            <Link
              href="/"
              className="font-[family-name:var(--font-heading)] text-lg font-bold text-gold-primary"
              onClick={() => setMobileOpen(false)}
            >
              ✦ Merlin
            </Link>
            <button
              type="button"
              className="flex h-10 w-10 items-center justify-center rounded-lg text-text-secondary transition-colors hover:text-gold-primary"
              onClick={() => setMobileOpen(false)}
              aria-label="Close menu"
            >
              <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M6 6l18 18M6 24L24 6" /></svg>
            </button>
          </div>

          <nav className="relative z-10 flex flex-1 flex-col items-center justify-center gap-6 overflow-y-auto px-6 py-12 font-[family-name:var(--font-heading)]">
            {navLinks.map((link) =>
              link.hasDropdown ? (
                <div key={link.href} className="w-full text-center">
                  <button
                    type="button"
                    className="text-2xl font-bold text-gold-primary py-2"
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                  >
                    {link.label} {dropdownOpen ? "▴" : "▾"}
                  </button>
                  {dropdownOpen && (
                    <div className="mt-4 flex flex-col gap-4">
                      {serviceLinks.map((svc) => (
                        <Link
                          key={svc.href}
                          href={svc.href}
                          className="text-lg text-text-secondary hover:text-gold-light transition-colors"
                          onClick={() => setMobileOpen(false)}
                        >
                          {svc.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-2xl font-bold transition-colors ${
                    isActive(link.href) ? "text-gold-primary" : "text-text-primary"
                  }`}
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              )
            )}

            <div className="mt-8 w-full max-w-xs">
              <a
                href={`https://wa.me/${cleanWhatsappNumber(whatsapp)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full items-center justify-center gap-3 rounded-full bg-whatsapp px-8 py-4 text-lg font-bold text-white shadow-2xl transition-all active:scale-95"
              >
                Message Professor Ndaula
              </a>
            </div>
          </nav>
        </div>
      )}
    </nav>
  );
}
