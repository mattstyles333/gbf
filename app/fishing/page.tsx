import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import PageHero from "../components/PageHero";
import BookingCTA from "../components/BookingCTA";
import { fishingSpots } from "../content";

export const metadata: Metadata = {
  title: "Guided Bonefishing — Turks & Caicos",
  description:
    "Guided bonefishing on North Caicos with local guides, classic flats skiffs, clear water, and easy access to productive flats.",
  alternates: {
    canonical: "/fishing/",
  },
};

export default function FishingPage() {
  return (
    <>
      <PageHero
        title="Guided Bonefishing"
        subtitle="World-class bonefishing on the pristine flats of the Caicos Islands. Experienced local guides, classic flats skiffs, and crystal-clear sight-fishing."
      />

      {/* Overview */}
      <section className="py-16 sm:py-20" style={{ background: "var(--background)" }}>
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">
                Fish the Flats of North Caicos
              </h2>
              <div className="space-y-4 text-slate-500 leading-relaxed">
                <p>
                  Whether we fish from the boat or wade the shallow waters of the tidal
                  flats, fly-fishing for bonefish in the Turks &amp; Caicos is an
                  exciting, unforgettable experience. Our guides are trained and certified
                  to ensure that it is also a safe and positive one.
                </p>
                <p>
                  The productive flats are only minutes from the launch, so you spend
                  more time casting and less time running. Classic flats skiffs let
                  anglers pole quietly into range of sighted fish, whether you prefer
                  to wade or fish from the bow.
                </p>
                <p>
                  While many anglers focus on Providenciales, our program is built
                  around quieter, less-pressured water near Bottle Creek and North
                  Caicos where fish see very little traffic.
                </p>
              </div>
              <div className="mt-6">
                <Link href="/fishing/guided-day" className="text-ocean-700 font-semibold hover:underline">
                  What to expect on a guided day &rarr;
                </Link>
              </div>
            </div>
            <div className="relative h-80 sm:h-96 rounded-xl overflow-hidden shadow-2xl">
              <Image
                src="/images/gallery/sightfishing-for-bonefish.jpg"
                alt="Guided bonefishing in Turks & Caicos"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Tackle */}
      <section className="py-16 sm:py-20" style={{ background: "var(--card-bg)" }}>
        <div className="section-container">
          <h2 className="text-3xl font-bold text-center mb-12">
            Recommended Tackle
          </h2>
          <p className="max-w-3xl mx-auto text-center text-slate-500 text-lg mb-10">
            Want the full breakdown on rods, leaders, flies, footwear, and what we can provide?
            See the dedicated <Link href="/learn/tackle-and-gear" className="text-ocean-700 font-semibold hover:underline">tackle and gear guide</Link>.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Fly Tackle",
                items: [
                  "9' rod, 7 or 8 weight for bonefish",
                  "9' rod, 9 or 10 weight for permit/barracuda",
                  "Reel with minimum 150 yards backing",
                  "Smooth, functional drag system",
                  "Weight-forward floating line",
                ],
                image: "/images/gbf/IMG_0247p.jpg",
              },
              {
                title: "Leaders & Tippet",
                items: [
                  "Abrasion-resistant saltwater leader material",
                  "9'–12' leaders, 8lb–12lb tippet",
                  "#2 wire or shock tippet for barracuda",
                  "Fly patterns: #4, #6, #8",
                  "Colors: off-white, brown, beige, yellow, green, pink",
                ],
                image: "/images/gbf/IMG_0251.jpg",
              },
              {
                title: "Spin Tackle",
                items: [
                  "7-foot stiff rod balanced for 8–12lb test",
                  "Smooth drag reel with 150+ yard capacity",
                  "Light artificial jigs — varied colors",
                  "Grub tails with weighted head",
                  "White, pink, or chartreuse colors",
                ],
                image: "/images/gbf/IMG_0250.jpg",
              },
            ].map((tackle, i) => (
              <div key={i} className="card overflow-hidden">
                <div className="relative h-40 w-full">
                  <Image
                    src={tackle.image}
                    alt={tackle.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold mb-3">{tackle.title}</h3>
                  <ul className="space-y-1.5">
                    {tackle.items.map((item, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-slate-500">
                        <span className="text-ocean-400 mt-0.5">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="py-16 sm:py-20" style={{ background: "var(--background)" }}>
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold">
              Prime Fishing Locations
            </h2>
            <p className="mt-4 text-slate-500 max-w-2xl mx-auto">
              We fish the remote waters around Bottle Creek, North Caicos — some of the
              least-pressured bonefish habitat in the Caribbean.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {fishingSpots.map((spot) => (
              <Link key={spot.slug} href={`/fishing/${spot.slug}`} className="card group">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={spot.imageUrl}
                    alt={spot.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold mb-2 group-hover:text-ocean-600 transition-colors">
                    {spot.name}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-4">
                    {spot.description.slice(0, 100)}...
                  </p>
                  <ul className="space-y-1 mb-4">
                    {spot.highlights.slice(0, 3).map((h, i) => (
                      <li key={i} className="flex items-center gap-2 text-xs text-slate-400">
                        <span className="text-ocean-400">+</span> {h}
                      </li>
                    ))}
                  </ul>
                  <span className="text-ocean-600 font-semibold text-sm group-hover:underline">
                    Learn more &rarr;
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Bonefish Behavior */}
      <section className="py-16 sm:py-20" style={{ background: "var(--card-bg)" }}>
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">The Bonefish Around Bottle Creek</h2>
            <p className="text-slate-500 text-lg leading-relaxed mb-8">
              The bonefish here are plentiful and aggressive feeders. Tides, season,
              moon, and weather all play into their feeding patterns, so experience
              matters. Our guides have fished the area their whole lives and are always
              happy to share their knowledge.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="card p-8">
              <h3 className="text-lg font-bold mb-3">Schools (2–4 lb)</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                When the tide is moving, you can typically expect to see schools of
                bonefish in the 2–4lb class moving across the flats in search of a
                meal. These provide non-stop action and are ideal for building
                confidence on the fly.
              </p>
            </div>
            <div className="card p-8">
              <h3 className="text-lg font-bold mb-3">Larger Singles &amp; Pairs</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                Much larger bonefish can approach double figures and can take you into
                your backing before you have time to adjust your drag. Make certain your
                knots and line connections are strong — these large fish will test your
                equipment to breaking.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Links to Learn */}
      <section className="py-12" style={{ background: "var(--ocean-700)" }}>
        <div className="section-container">
          <div className="flex flex-wrap gap-6 justify-center">
            <Link href="/learn/seasons" className="text-white font-semibold hover:text-ocean-200 transition-colors">
              Fishing Seasons &rarr;
            </Link>
            <Link href="/learn/bonefish-flies" className="text-white font-semibold hover:text-ocean-200 transition-colors">
              Bonefish Flies &rarr;
            </Link>
            <Link href="/learn/tackle-and-gear" className="text-white font-semibold hover:text-ocean-200 transition-colors">
              Tackle &amp; Gear &rarr;
            </Link>
            <Link href="/fishing/guided-day" className="text-white font-semibold hover:text-ocean-200 transition-colors">
              Guided Day &rarr;
            </Link>
            <Link href="/learn/catch-and-release" className="text-white font-semibold hover:text-ocean-200 transition-colors">
              Catch &amp; Release &rarr;
            </Link>
            <Link href="/book" className="text-white font-semibold hover:text-ocean-200 transition-colors">
              Book &rarr;
            </Link>
          </div>
        </div>
      </section>

      <BookingCTA />
    </>
  );
}
