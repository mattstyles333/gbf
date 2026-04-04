import Image from "next/image";
import Link from "next/link";
import { siteConfig, navItems } from "../content";

const tripAdvisorUrl =
  "https://www.tripadvisor.com/Attraction_Review-g656907-d12094913-Reviews-The_Great_Bonefishing_Company-North_Caicos_Turks_and_Caicos.html";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="text-white" style={{ background: "var(--footer-bg)" }}>
      <div className="section-container pt-8 pb-14 sm:pt-10 sm:pb-16">
        <div className="grid grid-cols-1 gap-12 border-t border-white/8 pt-10 md:grid-cols-[1.2fr_0.8fr_0.9fr_1fr]">
          {/* Brand */}
          <div className="max-w-sm">
            <h3 className="text-2xl font-bold text-white mb-4">{siteConfig.name}</h3>
            <p className="text-ocean-100 text-base leading-8">
              World-class bonefishing on the pristine flats of North Caicos, Turks &amp; Caicos Islands. Experienced guides, comfortable lodge, and unforgettable fishing.
            </p>
            <div className="mt-8 rounded-2xl border border-white/8 bg-white/4 p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-sand-300 mb-3">
                Trusted by Guests
              </p>
              <a
                href={tripAdvisorUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex flex-col items-start gap-3"
              >
                <Image
                  src="https://www.tripadvisor.com/img/cdsi/img2/branding/tripadvisor_logo_transp_340x80-18034-2.png"
                  alt="TripAdvisor"
                  width={170}
                  height={40}
                  className="h-7 w-auto opacity-90 hover:opacity-100 transition-opacity"
                />
                <span className="text-sm text-ocean-100 hover:text-white transition-colors">
                  Read guest reviews
                </span>
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.22em] text-sand-300 mb-5">
              Explore
            </h4>
            <ul className="space-y-3">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-base text-ocean-100 hover:text-white transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/gallery" className="text-base text-ocean-100 hover:text-white transition-colors">
                  Gallery
                </Link>
              </li>
            </ul>
          </div>

          {/* Fishing */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.22em] text-sand-300 mb-5">
              Fishing
            </h4>
            <ul className="space-y-3">
              <li>
                <Link href="/fishing" className="text-base text-ocean-100 hover:text-white transition-colors">
                  Guided Fishing
                </Link>
              </li>
              <li>
                <Link href="/diy" className="text-base text-ocean-100 hover:text-white transition-colors">
                  DIY Bonefishing
                </Link>
              </li>
              <li>
                <Link href="/fishing/north-caicos" className="text-base text-ocean-100 hover:text-white transition-colors">
                  North Caicos Flats
                </Link>
              </li>
              <li>
                <Link href="/fishing/bottle-creek" className="text-base text-ocean-100 hover:text-white transition-colors">
                  Bottle Creek Reserve
                </Link>
              </li>
              <li>
                <Link href="/learn/seasons" className="text-base text-ocean-100 hover:text-white transition-colors">
                  Fishing Seasons
                </Link>
              </li>
              <li>
                <Link href="/learn/bonefish-flies" className="text-base text-ocean-100 hover:text-white transition-colors">
                  Bonefish Flies
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.22em] text-sand-300 mb-5">
              Contact
            </h4>
            <ul className="space-y-4 text-base text-ocean-100">
              <li>
                <a
                  href={`tel:${siteConfig.phoneUSA.replace(/[^0-9+]/g, "")}`}
                  className="hover:text-white transition-colors"
                >
                  USA: {siteConfig.phoneUSA}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${siteConfig.phoneTCI.replace(/[^0-9+]/g, "")}`}
                  className="hover:text-white transition-colors"
                >
                  TCI: {siteConfig.phoneTCI}
                </a>
              </li>
              <li>
                <a href={`mailto:${siteConfig.email}`} className="hover:text-white transition-colors break-all">
                  {siteConfig.email}
                </a>
              </li>
              <li className="pt-2 text-ocean-200">{siteConfig.address}</li>
            </ul>
          </div>
        </div>

          {/* Affiliated company */}
        <div className="mt-12 pt-8 border-t border-white/8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="text-ocean-200 text-sm">
              <span className="font-semibold">Great Sailfishing:</span>{" "}
              <a
                href="https://www.greatsailfishing.com"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-white"
              >
                Offshore Billfishing in Guatemala
              </a>
            </div>
            <p className="text-ocean-300 text-xs">
              &copy; {currentYear} {siteConfig.name}. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
