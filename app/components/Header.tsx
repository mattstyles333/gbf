"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { navItems, siteConfig, type NavItem } from "../content";

function renderDropdownChildren(
  children: NavItem[],
  onSelect: () => void,
  isMobile = false
) {
  const items: React.ReactNode[] = [];
  let lastGroup: string | undefined;

  children.forEach((child) => {
    const group = child.group;

    if (group !== lastGroup) {
      if (group) {
        const groupKey = `group-${group}`;
        if (isMobile) {
          items.push(
            <div key={groupKey} className="mt-4 first:mt-0">
              <div className="px-6 py-1.5 text-xs font-semibold uppercase tracking-widest text-ocean-500/80">
                {group}
              </div>
            </div>
          );
        } else {
          items.push(
            <div key={groupKey} className="mt-3 first:mt-0">
              <div className="px-4 py-1 text-xs font-semibold uppercase tracking-widest text-ocean-500/80">
                {group}
              </div>
            </div>
          );
        }
      }
      lastGroup = group;
    }

    if (isMobile) {
      items.push(
        <Link
          key={child.href}
          href={child.href}
          onClick={onSelect}
          className="block pl-6 pr-4 py-2.5 text-sm text-ocean-300 hover:text-white hover:bg-ocean-800/40 transition-colors"
        >
          {child.label}
        </Link>
      );
    } else {
      items.push(
        <Link
          key={child.href}
          href={child.href}
          onClick={onSelect}
          className="block px-4 py-2.5 text-sm text-ocean-300 hover:text-white hover:bg-ocean-800/70 transition-colors"
        >
          {child.label}
        </Link>
      );
    }
  });

  return items;
}

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.body.classList.toggle("mobile-nav-open", mobileOpen);
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

  function handleMobileToggle(event: React.PointerEvent<HTMLButtonElement>) {
    event.preventDefault();
    event.stopPropagation();
    setMobileOpen((open) => !open);
  }

  return (
    <header className="sticky top-0 left-0 right-0 z-50 bg-ocean-950/92 backdrop-blur-md border-b border-white/10 shadow-lg shadow-ocean-950/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-3 h-16 lg:h-20">
        <Link
          href="/"
          className="flex min-w-0 items-center gap-3 group"
          onClick={closeMobile}
        >
          <span className="relative flex h-10 w-10 flex-shrink-0 items-center justify-center overflow-hidden lg:h-11 lg:w-11">
            <Image
              src="/logo.svg"
              alt="Great Bone Fishing logo"
              fill
              sizes="44px"
              className="object-contain saturate-125 contrast-110 brightness-110 drop-shadow-[0_0_1px_rgba(255,255,255,0.98)] drop-shadow-[0_0_4px_rgba(255,255,255,0.45)]"
              priority
            />
          </span>
          <div className="min-w-0 max-w-[calc(100vw-7.5rem)] sm:max-w-none sm:flex-none">
            <span className="block truncate text-lg font-bold tracking-tight leading-none text-white sm:text-base">
              {siteConfig.name}
            </span>
            <span className="hidden 2xl:block text-ocean-400 text-xs tracking-widest uppercase leading-none mt-0.5 whitespace-nowrap">
              {siteConfig.tagline}
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-0.5 xl:gap-1" ref={dropdownRef}>
          {navItems.map((item) => (
            <div key={item.href} className="relative">
              {item.children ? (
                <div className="relative">
                  <button
                    onClick={() =>
                      setOpenDropdown(openDropdown === item.href ? null : item.href)
                    }
                    className="flex items-center gap-1 whitespace-nowrap px-3 py-2 text-sm font-medium text-ocean-200 hover:text-white transition-colors rounded-lg hover:bg-ocean-800/50 xl:px-4"
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
                    <div className="absolute top-full left-0 mt-2 w-60 bg-ocean-900 border border-ocean-700/50 rounded-xl shadow-xl shadow-ocean-950/50 overflow-hidden animate-fadeIn">
                      <div className="py-2">
                        {renderDropdownChildren(item.children, () => setOpenDropdown(null))}
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  href={item.href}
                  className="whitespace-nowrap px-3 py-2 text-sm font-medium text-ocean-200 hover:text-white transition-colors rounded-lg hover:bg-ocean-800/50 xl:px-4"
                >
                  {item.label}
                </Link>
              )}
            </div>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3 xl:gap-4">
          <a
            href={`tel:${siteConfig.phoneUSA.replace(/[^0-9+]/g, "")}`}
            className="whitespace-nowrap rounded-lg border border-white/10 px-3 py-2 text-sm font-medium text-ocean-200 hover:text-white hover:bg-ocean-800/40 transition-colors"
          >
            Call
          </a>
          <Link
            href="/book"
            className="btn-primary whitespace-nowrap px-5 text-sm font-semibold shadow-lg shadow-ocean-900/30"
          >
            Book
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          className="relative z-10 shrink-0 rounded-lg p-2 -mr-2 text-ocean-200 hover:text-white hover:bg-ocean-800/40 transition-colors touch-manipulation lg:hidden"
          onPointerUp={handleMobileToggle}
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
        <div className="lg:hidden absolute left-0 right-0 top-full z-40 h-[calc(100dvh-4rem)] overflow-y-auto border-t border-white/10 bg-ocean-950/98 backdrop-blur-sm animate-fadeIn">
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
                      <div className="mt-1 space-y-0.5 animate-fadeIn">
                        {renderDropdownChildren(item.children, closeMobile, true)}
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
              <Link
                href="/book"
                onClick={closeMobile}
                className="btn-primary w-full text-center font-semibold py-3.5"
              >
                Book
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
