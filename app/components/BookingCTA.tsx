import Link from "next/link";
import { siteConfig } from "../content";

export default function BookingCTA({
  title = "Ready to Fish?",
  subtitle = "Reach out to plan your Turks & Caicos bonefishing trip.",
  showPhone = true,
  centered = false,
}: {
  title?: string;
  subtitle?: string;
  showPhone?: boolean;
  centered?: boolean;
}) {
  return (
    <section className="pt-12 sm:pt-16" style={{ background: "var(--footer-bg)" }}>
      <div className="section-container">
        <div className="rounded-[2rem] border border-white/10 bg-[linear-gradient(135deg,rgba(23,79,93,0.96),rgba(6,25,35,0.98))] px-6 py-8 shadow-2xl shadow-black/20 sm:px-10 sm:py-10 lg:px-12">
          <div
            className={`flex flex-col gap-8 ${centered ? "items-center text-center" : "lg:flex-row lg:items-center lg:justify-between"}`}
          >
            <div className={centered ? "max-w-2xl" : "max-w-2xl"}>
              <p className="text-sand-300 text-xs font-semibold uppercase tracking-[0.24em] mb-3">
                Book Your Trip
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">{title}</h2>
              <p className={`text-ocean-100 text-lg leading-relaxed ${centered ? "max-w-xl mx-auto" : ""}`}>
                {subtitle}
              </p>
            </div>

            <div className={`flex flex-col gap-4 ${centered ? "items-center" : "lg:items-end"}`}>
              <div className={`flex flex-wrap gap-4 ${centered ? "justify-center" : ""}`}>
                <Link
                  href="/book"
                  className="inline-flex items-center rounded-xl bg-sand-400 px-6 py-3.5 text-sm font-semibold text-ocean-950 transition hover:bg-sand-300"
                >
                  Book
                </Link>
                {showPhone && (
                  <a
                    href={`tel:${siteConfig.phoneUSA.replace(/[^0-9+]/g, "")}`}
                    className="inline-flex items-center rounded-xl border border-white/18 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
                  >
                    {siteConfig.phoneUSA}
                  </a>
                )}
              </div>
              <div className={`flex flex-wrap gap-x-4 gap-y-2 text-sm text-ocean-100 ${centered ? "justify-center" : "lg:justify-end"}`}>
                <a href={`tel:${siteConfig.phoneTCI.replace(/[^0-9+]/g, "")}`} className="hover:text-white transition-colors">
                  TCI: {siteConfig.phoneTCI}
                </a>
                <span className="text-white/20">|</span>
                <a href={`mailto:${siteConfig.email}`} className="hover:text-white transition-colors">
                  {siteConfig.email}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
