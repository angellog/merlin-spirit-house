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
      className="sticky top-0 z-50 border-b border-white/5 bg-elevated backdrop-blur-md"
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <div className="flex items-center gap-3">
          <Link
            href="/"
            className="flex items-center gap-2 font-[family-name:var(--font-heading)] text-xl font-bold text-gold-primary"
          >
            <span>✦</span>
            <span>{brandName}</span>
          </Link>
          {tagline && (
            <span className="hidden text-[0.7rem] text-text-muted lg:inline">
              {tagline}
            </span>
          )}
        </div>

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
            className="rounded-full bg-whatsapp px-5 py-2 text-[0.85rem] font-semibold text-white transition-all hover:brightness-110"
          >
            WhatsApp Now
          </a>
        </div>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-lg text-text-secondary transition-colors hover:text-gold-primary lg:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          <svg
            width="24"
            height="24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
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

      {mobileOpen && (
        <div
          className="fixed inset-0 top-0 z-[60] flex flex-col bg-deepnight lg:hidden"
        >
          <div className="flex h-16 items-center justify-between px-6">
            <Link
              href="/"
              className="font-[family-name:var(--font-heading)] text-xl font-bold text-gold-primary"
              onClick={() => setMobileOpen(false)}
            >
              ✦ {brandName}
            </Link>
            <button
              type="button"
              className="flex h-10 w-10 items-center justify-center rounded-lg text-text-secondary transition-colors hover:text-gold-primary"
              onClick={() => setMobileOpen(false)}
              aria-label="Close menu"
            >
              <svg
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              >
                <path d="M6 6l12 12M6 18L18 6" />
              </svg>
            </button>
          </div>

          <nav className="flex flex-1 flex-col gap-1 overflow-y-auto px-6 py-4 font-[family-name:var(--font-body)] text-[1rem]">
            {navLinks.map((link) =>
              link.hasDropdown ? (
                <div key={link.href}>
                  <button
                    type="button"
                    className={`flex w-full items-center justify-between py-3 transition-colors hover:text-gold-primary ${
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
                    <div className="ml-4 flex flex-col gap-1 border-l border-white/10 pl-4">
                      {serviceLinks.map((svc) => (
                        <Link
                          key={svc.href}
                          href={svc.href}
                          className={`py-2 text-[0.9rem] transition-colors hover:text-gold-primary ${
                            isActive(svc.href)
                              ? "text-gold-primary"
                              : "text-text-secondary"
                          }`}
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
                  className={`py-3 transition-colors hover:text-gold-primary ${
                    isActive(link.href)
                      ? "text-gold-primary"
                      : "text-text-secondary"
                  }`}
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              )
            )}

            <div className="mt-4">
              <a
                href={`https://wa.me/${cleanWhatsappNumber(whatsapp)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full items-center justify-center gap-2 rounded-full bg-whatsapp px-5 py-3 text-[0.95rem] font-semibold text-white transition-all hover:brightness-110"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                WhatsApp Now
              </a>
            </div>
          </nav>
        </div>
      )}
    </nav>
  );
}
