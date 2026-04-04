import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "../components/PageHero";
import BookingCTA from "../components/BookingCTA";

export const metadata: Metadata = {
  title: "Bonefishing Lodge — Turks & Caicos",
  description:
    "Stay on Bottle Creek in one- and two-bedroom waterfront units, just steps from the flats. Lodge packages start at $1,250 per person.",
  alternates: {
    canonical: "/lodge/",
  },
};

export default function LodgePage() {
  return (
    <>
      <PageHero
        title="Bonefishing Lodge"
        subtitle="Stay directly on the flats of Bottle Creek, North Caicos. Our lodge puts you steps from some of the best bonefish water in the islands."
      />
      <section className="py-16 sm:py-20" style={{ background: "var(--background)" }}>
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <p className="text-ocean-600 font-semibold uppercase tracking-widest text-sm mb-3">
                Our Lodge — 2025 Season
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold mb-5">
                Right Across From the Flats
              </h2>
              <p className="text-slate-500 text-lg leading-relaxed mb-6">
                Stay at our comfortable waterfront lodge in Turks &amp; Caicos, located
                directly across from some of the best bonefish
                flats in the region. The newly constructed lodge consists of several one
                and two bedroom units. Each is air-conditioned and fully furnished and
                equipped with its own kitchen, bathroom, and deck or patio overlooking the
                flats of Bottle Creek.
              </p>
              <p className="text-slate-500 text-lg leading-relaxed">
                The lodge is located directly on the shore of Bottle Creek. The grounds
                slope gently to the water where you will find the flats boats and fishing
                kayaks. It is directly across from one of the most productive flats — so
                you can choose your time based on tides and fish for as long as you like.
              </p>
            </div>
            <div className="relative h-80 sm:h-96 rounded-xl overflow-hidden shadow-2xl">
              <Image
                src="/images/gbf/Bonefish-Fishing-Lodge.jpg"
                alt="Bonefish Lodge location on Bottle Creek"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>

          {/* Gallery */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 mb-16">
              {[
                { src: "/images/gbf/Lodge-Bedroom-1.jpg", alt: "Lodge bedroom" },
                { src: "/images/gbf/Lodge-Bath.jpg", alt: "Lodge bathroom" },
                { src: "/images/gbf/Double-Room.jpg", alt: "Double room" },
                { src: "/images/gbf/Bonefish-Fishing-Lodge.jpg", alt: "Bonefish Lodge" },
                { src: "/images/gbf/Balcony.jpg", alt: "Lodge balcony" },
              ].map((img, i) => (
              <div key={i} className="relative h-32 rounded-lg overflow-hidden">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                  sizes="20vw"
                />
              </div>
            ))}
          </div>

          {/* Package */}
          <div className="card p-8 sm:p-12 mb-16">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-6 mb-8">
              <div>
                <p className="text-ocean-600 font-semibold uppercase tracking-widest text-sm mb-2">
                  Featured Package
                </p>
                <h2 className="text-2xl sm:text-3xl font-bold">
                  4 Nights / 3 Days at the Lodge
                </h2>
              </div>
              <div className="text-right">
                <div className="text-3xl font-bold text-ocean-700">$1,250</div>
                <div className="text-slate-400 text-sm">per person + 12% TCI tax</div>
                <div className="text-slate-400 text-xs mt-1">Based on 2 sharing</div>
              </div>
            </div>
            <p className="text-slate-500 text-lg leading-relaxed mb-6">
              Our introductory package for two anglers is to stay for four nights at
              the lodge (double accommodation) with three days exploring and fishing the
              flats of Bottle Creek.
            </p>
            <p className="text-slate-500 leading-relaxed mb-8">
              The first day is guided on one of our flats boats — where you will be
              shown around the most productive areas given the tide and design a strategy
              for fishing self-guided in our fishing kayaks for the following day. The
              third fishing day is back on a flats boat with a guide.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <h3 className="font-bold mb-3">What&apos;s Included</h3>
                <ul className="space-y-2">
                  {[
                    "4 nights lodge accommodation",
                    "Guided & self-guided fishing days",
                    "Transfers to/from Sandy Point",
                    "Breakfast and lunch (guided day)",
                    "Cleaning fee",
                    "Kayak rental",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                      <svg className="w-4 h-4 text-ocean-500 mt-1 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-bold mb-3">Extra Days</h3>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-ocean-500 mt-1 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Additional guided day: <strong>$1,050/day</strong>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-ocean-500 mt-1 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Additional self-guided day: <strong>$205/person/day</strong>
                  </li>
                </ul>
                <h3 className="font-bold mb-3 mt-6">Minimum Stay</h3>
                <p className="text-sm text-slate-600">Three nights minimum.</p>
              </div>
            </div>
          </div>

          {/* Other Accommodation */}
          <div id="other-accommodation">
            <h2 className="text-3xl font-bold mb-8">Other Accommodation Options</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="card overflow-hidden">
                <div className="relative h-56">
                  <Image
                    src="/images/gbf/Driveway-2.jpg"
                    alt="Villa Dolce Vita"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs uppercase tracking-wider text-ocean-600 font-semibold">
                      Luxury Beachfront Villa
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-3">Villa Dolce Vita</h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-4">
                    A Mediterranean-inspired luxury villa nestled in a cove of velvety
                    white sand and pristine turquoise water. Three separate buildings,
                    a 50+ ft infinity pool, outdoor dining, and spectacular ocean views.
                    The ultimate private escape.
                  </p>
                </div>
              </div>
              <div className="card overflow-hidden">
                <div className="relative h-56 bg-slate-200">
                  <Image
                    src="/images/gbf/PelicanBeachHotel.gif"
                    alt="Pelican Beach Hotel"
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs uppercase tracking-wider text-ocean-600 font-semibold">
                      Hotel
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-3">Pelican Beach Hotel</h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-4">
                    Long-established hotel in Whitby, North Caicos, directly on Pelican
                    Beach. Comfortable rooms, restaurant with local seafood, and the
                    famous Barracuda beach bar. Run by Clifford and Susie Gardiner.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <BookingCTA />
    </>
  );
}
