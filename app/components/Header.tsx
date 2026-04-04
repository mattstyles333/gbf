"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { navItems, siteConfig } from "../content";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    if (mobileOpen) {
      document.body.classList.add("mobile-nav-open");
    } else {
      document.body.classList.remove("mobile-nav-open");
    }
    return () => document.body.classList.remove("mobile-nav-open");
  }, [mobileOpen]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50" style={{ background: "var(--header-bg)" }}>
      <div className="section-container flex items-center justify-between h-16 lg:h-20">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-8 h-8 rounded bg-ocean-500 flex items-center justify-center">
            <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" className="w-5 h-5">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
              <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
            </svg>
          </div>
          <div>
            <span className="text-white font-bold text-lg tracking-tight leading-none">
              {siteConfig.name}
            </span>
            <span className="hidden sm:block text-ocean-300 text-xs tracking-widest uppercase">
              {siteConfig.tagline}
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <div key={item.href} className="relative">
              {item.children ? (
                <div
                  className="relative"
                  onMouseEnter={() => setActiveDropdown(item.href)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    href={item.href}
                    className="flex items-center gap-1 px-3 py-2 text-sm text-ocean-100 hover:text-white transition-colors rounded"
                  >
                    {item.label}
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </Link>
                  {activeDropdown === item.href && (
                    <div className="absolute top-full left-0 mt-1 w-56 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden" style={{ background: "var(--header-bg)", backdropFilter: "blur(8px)" }}>
                      <div className="py-1">
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="block px-4 py-2 text-sm text-ocean-100 hover:text-white hover:bg-ocean-800 transition-colors"
                          >
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
                  className="px-3 py-2 text-sm text-ocean-100 hover:text-white transition-colors rounded"
                >
                  {item.label}
                </Link>
              )}
            </div>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <a
            href={`tel:${siteConfig.phoneUSA.replace(/[^0-9+]/g, "")}`}
            className="text-sm text-ocean-200 hover:text-white transition-colors"
          >
            {siteConfig.phoneUSA}
          </a>
          <Link href="/book" className="btn-primary text-sm">
            Check Availability
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden p-2 text-white rounded"
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

      {/* Mobile Nav */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-ocean-800" style={{ background: "var(--header-bg)" }}>
          <nav className="section-container py-4 space-y-1">
            {navItems.map((item) => (
              <div key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="block px-3 py-2 text-ocean-100 hover:text-white hover:bg-ocean-800 rounded transition-colors"
                >
                  {item.label}
                </Link>
                {item.children && (
                  <div className="pl-6 space-y-1 mt-1">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        onClick={() => setMobileOpen(false)}
                        className="block px-3 py-1.5 text-sm text-ocean-300 hover:text-white transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-4 border-t border-ocean-800 mt-4">
              <a
                href={`tel:${siteConfig.phoneUSA.replace(/[^0-9+]/g, "")}`}
                className="block px-3 py-2 text-ocean-200"
              >
                {siteConfig.phoneUSA}
              </a>
              <Link href="/book" onClick={() => setMobileOpen(false)} className="btn-primary mt-2 mx-3">
                Check Availability
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
