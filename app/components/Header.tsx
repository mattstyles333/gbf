"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { navItems, siteConfig } from "../content";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (mobileOpen) {
      document.body.classList.add("mobile-nav-open");
    } else {
      document.body.classList.remove("mobile-nav-open");
    }
    return () => document.body.classList.remove("mobile-nav-open");
  }, [mobileOpen]);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setOpenDropdown(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  function toggleMobileDropdown(href: string) {
    setMobileExpanded(mobileExpanded === href ? null : href);
  }

  function closeMobile() {
    setMobileOpen(false);
    setMobileExpanded(null);
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-ocean-950/95 backdrop-blur-sm border-b border-ocean-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 lg:h-20">
        <Link href="/" className="flex items-center gap-3 group flex-shrink-0" onClick={closeMobile}>
          <div className="w-9 h-9 rounded bg-gradient-to-br from-ocean-400 to-ocean-600 flex items-center justify-center shadow-sm">
            <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={1.5} className="w-5 h-5">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
              <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
            </svg>
          </div>
          <div>
            <span className="text-white font-bold text-lg tracking-tight leading-none block">
              {siteConfig.name}
            </span>
            <span className="hidden sm:block text-ocean-400 text-xs tracking-widest uppercase leading-none mt-0.5">
              {siteConfig.tagline}
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-0.5" ref={dropdownRef}>
          {navItems.map((item) => (
            <div key={item.href} className="relative">
              {item.children ? (
                <div className="relative">
                  <button
                    onClick={() => setOpenDropdown(openDropdown === item.href ? null : item.href)}
                    className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-ocean-200 hover:text-white transition-colors rounded-lg hover:bg-ocean-800/50"
                  >
                    {item.label}
                    <svg
                      className={`w-3.5 h-3.5 transition-transform duration-200 ${openDropdown === item.href ? "rotate-180" : ""}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {openDropdown === item.href && (
                    <div className="absolute top-full left-0 mt-2 w-56 bg-ocean-900 border border-ocean-700/50 rounded-xl shadow-xl shadow-ocean-950/50 overflow-hidden animate-fadeIn">
                      <div className="py-2">
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            onClick={() => setOpenDropdown(null)}
                            className="flex items-center px-4 py-2.5 text-sm text-ocean-300 hover:text-white hover:bg-ocean-800/70 transition-colors"
                          >
                            <span className="w-1 h-1 rounded-full bg-ocean-500 mr-3 flex-shrink-0" />
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  href={item.href}
                  className="px-4 py-2 text-sm font-medium text-ocean-200 hover:text-white transition-colors rounded-lg hover:bg-ocean-800/50"
                >
                  {item.label}
                </Link>
              )}
            </div>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <a
            href={`tel:${siteConfig.phoneUSA.replace(/[^0-9+]/g, "")}`}
            className="text-sm font-medium text-ocean-300 hover:text-white transition-colors"
          >
            {siteConfig.phoneUSA}
          </a>
          <Link href="/book" className="btn-primary text-sm font-semibold shadow-lg shadow-ocean-900/30">
            Check Availability
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden p-2 -mr-2 text-ocean-200 hover:text-white transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 top-16 bg-ocean-950/98 backdrop-blur-sm z-30 animate-fadeIn overflow-y-auto">
          <nav className="px-4 py-6 space-y-1">
            {navItems.map((item) => (
              <div key={item.href}>
                {item.children ? (
                  <div>
                    <button
                      onClick={() => toggleMobileDropdown(item.href)}
                      className="flex items-center justify-between w-full px-4 py-3 text-left text-ocean-100 hover:text-white hover:bg-ocean-800/40 rounded-lg transition-colors"
                    >
                      <span className="font-medium">{item.label}</span>
                      <svg
                        className={`w-4 h-4 text-ocean-400 transition-transform duration-200 ${mobileExpanded === item.href ? "rotate-180" : ""}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {mobileExpanded === item.href && (
                      <div className="mt-1 ml-4 pl-4 border-l border-ocean-700/50 space-y-0.5 animate-fadeIn">
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            onClick={closeMobile}
                            className="block px-4 py-2.5 text-sm text-ocean-300 hover:text-white hover:bg-ocean-800/30 rounded-lg transition-colors"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    onClick={closeMobile}
                    className="block px-4 py-3 text-ocean-100 hover:text-white hover:bg-ocean-800/40 rounded-lg transition-colors font-medium"
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
            <div className="pt-6 border-t border-ocean-800 mt-6 space-y-3">
              <a
                href={`tel:${siteConfig.phoneUSA.replace(/[^0-9+]/g, "")}`}
                className="flex items-center gap-3 px-4 py-3 text-ocean-300 hover:text-white transition-colors"
              >
                <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="font-medium">{siteConfig.phoneUSA}</span>
              </a>
              <Link href="/book" onClick={closeMobile} className="btn-primary w-full text-center font-semibold py-3.5">
                Check Availability
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
