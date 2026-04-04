import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import BookingCTA from "./components/BookingCTA";
import { siteConfig, fishingSpots } from "./content";

export const metadata: Metadata = {
  title: `${siteConfig.name} — World-Class Bonefishing in Turks & Caicos`,
};

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://www.greatbonefishing.com/wp-content/uploads/2018/12/cropped-fishing-along-the-mangroves.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/85 via-slate-900/55 to-transparent" />
        <div className="relative z-10 section-container py-32">
          <div className="max-w-2xl">
            <p className="text-ocean-300 uppercase tracking-widest text-sm font-semibold mb-4">
              Turks &amp; Caicos Islands
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Bonefishing at Its{" "}
              <span className="text-ocean-400">Absolute Best</span>
            </h1>
            <p className="text-ocean-100 text-lg sm:text-xl leading-relaxed mb-8">
              Fish the pristine flats of North Caicos with local guides who have
              spent their lives on these waters. Untouched fisheries, crystal-clear
              water, and bonefish that have never seen a fly.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/book" className="btn-primary text-lg px-8 py-4">
                Check Availability
              </Link>
              <Link href="/fishing" className="btn-outline text-lg px-8 py-4">
                Learn About the Fishing
              </Link>
            </div>
            <div className="mt-12 flex items-center gap-6">
              <a
                href={`tel:${siteConfig.phoneUSA.replace(/[^0-9+]/g, "")}`}
                className="flex items-center gap-2 text-white hover:text-ocean-300 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="font-semibold">{siteConfig.phoneUSA}</span>
              </a>
              <span className="text-ocean-400">|</span>
              <a
                href={`tel:${siteConfig.phoneTCI.replace(/[^0-9+]/g, "")}`}
                className="text-ocean-200 hover:text-white transition-colors"
              >
                TCI: {siteConfig.phoneTCI}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Value Props */}
      <section className="py-16 sm:py-20" style={{ background: "var(--card-bg)" }}>
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                ),
                title: "Remote, Untouched Flats",
                desc: "We fish the waters around Bottle Creek, North Caicos — far from tourist crowds. These bonefish have rarely seen a fly or lure.",
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                ),
                title: "Crystal-Clear Sight Fishing",
                desc: "The gin-clear flats of the Caicos Bank give you every advantage. Spot tailing bonefish, sight-cast to cruising singles, and watch the take.",
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                ),
                title: "Double-Digit Potential",
                desc: "Schools of 2–4 lb fish are common. Larger singles and pairs cruise the skinny water — and on a good day, double-digit bonefish are within reach.",
              },
            ].map((item, i) => (
              <div key={i} className="card p-8 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-ocean-100 text-ocean-600 mb-5">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-slate-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Where We Fish */}
      <section className="py-16 sm:py-20" style={{ background: "var(--background)" }}>
        <div className="section-container">
          <div className="text-center mb-12">
            <p className="text-ocean-600 font-semibold uppercase tracking-widest text-sm mb-3">
              Our Fishing Territory
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold">Where We Fly-Fish</h2>
            <p className="mt-4 text-slate-500 max-w-2xl mx-auto text-lg">
              Based on Bottle Creek in North Caicos, we have access to vast,
              largely unfished flats across the Caicos Bank.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {fishingSpots.map((spot) => (
              <Link key={spot.slug} href={`/fishing/${spot.slug}`} className="card group">
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={spot.imageUrl}
                    alt={spot.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-ocean-600 transition-colors">
                    {spot.name}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-4">
                    {spot.description.slice(0, 120)}...
                  </p>
                  <span className="text-ocean-600 font-semibold text-sm group-hover:underline">
                    Learn more &rarr;
                  </span>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/fishing" className="btn-primary">
              Full Fishing Overview
            </Link>
          </div>
        </div>
      </section>

      {/* Lodge Preview */}
      <section className="py-16 sm:py-20" style={{ background: "var(--card-bg)" }}>
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-ocean-600 font-semibold uppercase tracking-widest text-sm mb-3">
                On-Site Lodge
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold mb-5">
                Stay Right on the Flats
              </h2>
              <p className="text-slate-500 text-lg leading-relaxed mb-6">
                Our newly built lodge sits directly on Bottle Creek, across from one of
                the most productive bonefish flats in the islands. One and two bedroom
                units with full kitchens, air conditioning, and private decks overlooking
                the water.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "4-night / 3-day packages from $1,250pp",
                  "Guided and self-guided days combined",
                  "Kayak rental included",
                  "Breakfast and lunch on guided days",
                  "Minutes from the best fishing",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-600">
                    <svg className="w-5 h-5 text-ocean-500 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-4">
                <Link href="/lodge" className="btn-primary">
                  Lodge &amp; Packages
                </Link>
                <Link href="/rates" className="btn-outline !text-ocean-700 !border-ocean-400 hover:!bg-ocean-50">
                  View Rates
                </Link>
              </div>
            </div>
            <div className="relative h-80 sm:h-96 rounded-xl overflow-hidden shadow-2xl">
              <Image
                src="https://www.greatbonefishing.com/wp-content/uploads/2019/03/Lodge-Location.jpg"
                alt="Bonefish Lodge on Bottle Creek"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* DIY */}
      <section className="py-16 sm:py-20" style={{ background: "var(--background)" }}>
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-80 sm:h-96 rounded-xl overflow-hidden shadow-2xl">
              <Image
                src="https://www.greatbonefishing.com/wp-content/uploads/2018/07/Flatsmin.jpeg"
                alt="DIY bonefishing in Turks & Caicos"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div>
              <p className="text-ocean-600 font-semibold uppercase tracking-widest text-sm mb-3">
                Self-Guided Fishing
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold mb-5">
                Explore at Your Own Pace
              </h2>
              <p className="text-slate-500 text-lg leading-relaxed mb-6">
                For experienced anglers who prefer to find their own water, our DIY
                bonefishing option offers full independence. Rent kayaks, get a
                briefing from your guide on day one, then head out on your own.
              </p>
              <Link href="/diy" className="btn-primary">
                DIY Bonefishing Options
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Rates */}
      <section className="py-16 sm:py-20" style={{ background: "var(--card-bg)" }}>
        <div className="section-container">
          <div className="text-center mb-12">
            <p className="text-ocean-600 font-semibold uppercase tracking-widest text-sm mb-3">
              Transparent Pricing
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold">Guided Fishing Rates</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="card p-8">
              <h3 className="text-xl font-bold mb-2">Full-Day Guided Trip</h3>
              <div className="flex items-baseline gap-2 mb-4">
                <span className="text-4xl font-bold text-ocean-700">$700</span>
                <span className="text-slate-400">+ 12% TCI tax</span>
              </div>
              <p className="text-slate-500 text-sm mb-6">
                Up to two guests. Includes guided fishing on classic flats skiff
                and all tackle and equipment.
              </p>
              <ul className="space-y-2">
                {["7:30am – 2:00pm", "Flats skiff with expert guide", "All tackle and gear", "Fishing license available ($15/day)", "$175 deposit to confirm"].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                    <svg className="w-4 h-4 text-ocean-500 mt-1 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="card p-8">
              <h3 className="text-xl font-bold mb-2">4-Night / 3-Day Lodge Package</h3>
              <div className="flex items-baseline gap-2 mb-4">
                <span className="text-4xl font-bold text-ocean-700">$1,250</span>
                <span className="text-slate-400">per person + 12% TCI tax</span>
              </div>
              <p className="text-slate-500 text-sm mb-6">
                Based on two anglers sharing. Includes lodge accommodation, guided and
                self-guided days, and kayaks.
              </p>
              <ul className="space-y-2">
                {["4 nights lodge (dbl occupancy)", "1 guided day + 2 DIY kayak days", "Breakfast and lunch", "Kayak rental", "Sandy Point transfers"].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                    <svg className="w-4 h-4 text-ocean-500 mt-1 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="text-center mt-10">
            <Link href="/rates" className="btn-outline !text-ocean-700 !border-ocean-400 hover:!bg-ocean-50">
              Full Rate Details
            </Link>
          </div>
        </div>
      </section>

      <BookingCTA />
    </>
  );
}
