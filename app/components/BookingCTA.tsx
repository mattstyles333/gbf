import Link from "next/link";
import { siteConfig } from "../content";

export default function BookingCTA({
  title = "Ready to Fish?",
  subtitle = "Check availability for your Turks & Caicos bonefishing trip.",
  showPhone = true,
  centered = false,
}: {
  title?: string;
  subtitle?: string;
  showPhone?: boolean;
  centered?: boolean;
}) {
  return (
    <section
      className="py-16 sm:py-20"
      style={{ background: "var(--ocean-600)" }}
    >
      <div className={`section-container ${centered ? "text-center" : ""}`}>
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">{title}</h2>
        <p className={`text-ocean-100 mb-8 text-lg ${centered ? "max-w-xl mx-auto" : ""}`}>
          {subtitle}
        </p>
        <div className={`flex flex-wrap gap-4 ${centered ? "justify-center" : ""}`}>
          <Link href="/book" className="btn-primary bg-white !text-ocean-700 hover:!bg-ocean-50">
            Check Availability
          </Link>
          {showPhone && (
            <a
              href={`tel:${siteConfig.phoneUSA.replace(/[^0-9+]/g, "")}`}
              className="btn-outline"
            >
              {siteConfig.phoneUSA}
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
