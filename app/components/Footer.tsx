import Link from "next/link";
import { siteConfig, navItems } from "../content";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="text-white" style={{ background: "var(--slate-900)" }}>
      <div className="section-container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <h3 className="text-lg font-bold mb-4">{siteConfig.name}</h3>
            <p className="text-ocean-200 text-sm leading-relaxed">
              World-class bonefishing on the pristine flats of North Caicos, Turks &amp; Caicos Islands. Experienced guides, comfortable lodge, and unforgettable fishing.
            </p>
            <div className="mt-4 flex gap-3">
              <a
                href="https://www.tripadvisor.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <img
                  src="https://www.tripadvisor.com/img/cdsi/img2/branding/tripadvisor_logo_transp_340x80-18034-2.png"
                  alt="TripAdvisor"
                  className="h-6 opacity-70 hover:opacity-100 transition-opacity"
                />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-ocean-400 mb-4">
              Explore
            </h4>
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-ocean-200 hover:text-white transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Fishing */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-ocean-400 mb-4">
              Fishing
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href="/fishing" className="text-sm text-ocean-200 hover:text-white transition-colors">
                  Guided Fishing
                </Link>
              </li>
              <li>
                <Link href="/diy" className="text-sm text-ocean-200 hover:text-white transition-colors">
                  DIY Bonefishing
                </Link>
              </li>
              <li>
                <Link href="/fishing/north-caicos" className="text-sm text-ocean-200 hover:text-white transition-colors">
                  North Caicos Flats
                </Link>
              </li>
              <li>
                <Link href="/fishing/bottle-creek" className="text-sm text-ocean-200 hover:text-white transition-colors">
                  Bottle Creek Reserve
                </Link>
              </li>
              <li>
                <Link href="/learn/seasons" className="text-sm text-ocean-200 hover:text-white transition-colors">
                  Fishing Seasons
                </Link>
              </li>
              <li>
                <Link href="/learn/bonefish-flies" className="text-sm text-ocean-200 hover:text-white transition-colors">
                  Bonefish Flies
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-ocean-400 mb-4">
              Contact
            </h4>
            <ul className="space-y-3 text-sm text-ocean-200">
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
              <li className="pt-1">{siteConfig.address}</li>
            </ul>
          </div>
        </div>

        {/* Affiliated company */}
        <div className="mt-12 pt-8 border-t border-ocean-800">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="text-ocean-300 text-sm">
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
            <p className="text-ocean-500 text-xs">
              &copy; {currentYear} {siteConfig.name}. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
