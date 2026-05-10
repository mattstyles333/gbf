import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "../components/PageHero";
import BookingCTA from "../components/BookingCTA";
import LodgeGallery from "./LodgeGallery";
import { siteConfig } from "../content";

const lodgeImages = [
  { src: "/images/gbf/Bonefish-Fishing-Lodge.jpg", alt: "Bonefish Lodge exterior on Bottle Creek", title: "Waterfront lodge exterior" },
  { src: "/images/gallery/lodge-bedroom-1.jpg", alt: "Lodge bedroom interior", title: "Private lodge bedroom" },
  { src: "/images/gbf/Double-Room.jpg", alt: "Double room inside the lodge", title: "Double room setup" },
  { src: "/images/gbf/Lodge-Bath.jpg", alt: "Lodge bathroom", title: "Private bathroom" },
  { src: "/images/gbf/Balcony.jpg", alt: "Balcony overlooking the water", title: "Deck and water views" },
];

export const metadata: Metadata = {
  title: "Bonefishing Lodge — Turks & Caicos",
  description:
    "Stay on Bottle Creek in one- and two-bedroom waterfront units, just steps from the flats. Lodge packages start at $1,250 per person.",
  alternates: {
    canonical: "/lodge/",
  },
  openGraph: {
    title: "Bonefishing Lodge — Turks & Caicos",
    description: "Stay on Bottle Creek in waterfront units, just steps from the flats. Lodge packages from $1,250 per person.",
    images: [
      {
        url: "/images/gbf/Bonefish-Fishing-Lodge.jpg",
        width: 1200,
        height: 630,
        alt: "Bonefish Lodge on Bottle Creek, North Caicos",
      },
    ],
  },
};

const lodgingBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LodgingBusiness",
  name: "Bonefish Lodge",
  description:
    "Waterfront bonefishing lodge on Bottle Creek, North Caicos with one- and two-bedroom units steps from productive flats.",
  url: `${siteConfig.baseUrl}/lodge/`,
  image: lodgeImages.map((image) => `${siteConfig.baseUrl}${image.src}`),
  telephone: [siteConfig.phoneUSA, siteConfig.phoneTCI],
  email: siteConfig.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Bottle Creek",
    addressLocality: "North Caicos",
    addressCountry: "TC",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "21.9162",
    longitude: "-71.9200",
  },
  amenityFeature: [
    { "@type": "LocationFeatureSpecification", name: "Waterfront Bottle Creek location", value: true },
    { "@type": "LocationFeatureSpecification", name: "Full kitchen", value: true },
    { "@type": "LocationFeatureSpecification", name: "Air conditioning", value: true },
    { "@type": "LocationFeatureSpecification", name: "Fishing kayak access", value: true },
  ],
  makesOffer: {
    "@type": "Offer",
    name: "4 Nights / 3 Days Bonefishing Lodge Package",
    price: "1250",
    priceCurrency: "USD",
    url: `${siteConfig.baseUrl}/lodge/#package`,
    availability: "https://schema.org/InStock",
    priceSpecification: {
      "@type": "UnitPriceSpecification",
      price: "1250",
      priceCurrency: "USD",
      unitText: "per person plus 12% TCI tax",
    },
    itemOffered: {
      "@type": "LodgingReservation",
      name: "4-night Bonefish Lodge package with guided and self-guided fishing",
    },
  },
};

export default function LodgePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(lodgingBusinessSchema) }}
      />
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
                Stay at our comfortable waterfront lodge in Turks &amp; Caicos, directly
                across from some of the best bonefish flats in the region. It is a practical,
                economical alternative to resort-style accommodation for anglers who care more
                about time on the water than polished excess. The lodge consists of one- and
                two-bedroom units, each air-conditioned and fully furnished with its own kitchen,
                bathroom, and deck or patio overlooking Bottle Creek.
              </p>
              <p className="text-slate-500 text-lg leading-relaxed">
                The lodge is located directly on the shore of Bottle Creek. The grounds
                slope gently to the water where you will find the flats boats and fishing
                kayaks. It is directly across from one of the most productive flats — so
                you can choose your time based on tides and fish for as long as you like.
                That proximity is especially useful in the early morning, when the skinny water
                is still cool and schools of tailing bonefish can push high onto the flats.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a href="#package" className="btn-primary">
                  See Lodge Package
                </a>
                <a href="#lodge-gallery" className="btn-outline !text-ocean-700 !border-ocean-400 hover:!bg-ocean-50">
                  Browse Photos
                </a>
              </div>
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

          <div id="lodge-gallery" className="mb-16">
            <div className="max-w-3xl mb-8">
              <p className="text-ocean-600 font-semibold uppercase tracking-widest text-sm mb-3">
                Lodge Photos
              </p>
              <h2 className="text-3xl font-bold mb-4">See the Rooms and Waterfront Setting</h2>
              <p className="text-slate-500 text-lg leading-relaxed">
                Browse the lodge rooms, deck views, and exterior setting on Bottle Creek.
                For a wider look at the fishery and day-to-day atmosphere, visit the full gallery.
              </p>
            </div>
            <LodgeGallery images={lodgeImages} />
            <div className="mt-5">
              <a href="/gallery" className="text-ocean-600 font-semibold hover:underline">
                View full photo gallery &rarr;
              </a>
            </div>
          </div>

          {/* Package */}
          <div id="package" className="card p-8 sm:p-12 mb-16">
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
            <div className="rounded-2xl border border-ocean-100 bg-ocean-50/70 p-5 mb-8">
              <p className="text-sm text-ocean-900 font-semibold mb-2">Good fit for</p>
              <p className="text-sm text-slate-600 leading-relaxed">
                Anglers who want a comfortable lodge base, one guided orientation day, and enough time
                to mix skiff fishing with independent sessions on the flats.
              </p>
            </div>
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
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="/book" className="btn-primary">Book This Package</a>
              <a href="/rates" className="btn-outline !text-ocean-700 !border-ocean-400 hover:!bg-ocean-50">Compare Rates</a>
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
