import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import PageHero from "../../components/PageHero";
import BookingCTA from "../../components/BookingCTA";

export const metadata: Metadata = {
  title: "Fishing Seasons — Turks & Caicos",
  description:
    "Bonefishing seasons in the Turks & Caicos: weather conditions, water temperature, and what to expect from autumn through summer.",
  alternates: {
    canonical: "/learn/seasons/",
  },
};

export default function SeasonsPage() {
  return (
    <>
      <PageHero
        title="Fishing Seasons"
        subtitle="What to expect from each season on the bonefish flats of the Caicos Islands."
      />
      <section className="py-16 sm:py-20" style={{ background: "var(--background)" }}>
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            {/* Calendar Image */}
            <div className="relative h-64 sm:h-80 rounded-xl overflow-hidden mb-12 shadow-xl">
              <Image
                src="https://www.greatbonefishing.com/wp-content/uploads/2012/10/seasons-top.jpg"
                alt="Turks and Caicos fishing seasons"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 75vw"
              />
            </div>

            {/* Seasons */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {[
                {
                  season: "Autumn",
                  color: "bg-amber-50 border-amber-200",
                  titleColor: "text-amber-700",
                  desc: "Excellent time for large bonefish. Conditions are generally pleasant, although there is a chance for late hurricanes or cool weather.",
                  temp: "Avg. high: 80°F / Low: 70°F",
                },
                {
                  season: "Winter",
                  color: "bg-ocean-50 border-ocean-200",
                  titleColor: "text-ocean-700",
                  desc: "The best time for tailing fish. Daytime temperatures in the 70s, night time in the 60s. Weather may vary through cool, cloudy, windy, or rainy spells.",
                  temp: "Avg. high: 77°F / Low: 66°F",
                },
                {
                  season: "Spring",
                  color: "bg-green-50 border-green-200",
                  titleColor: "text-green-700",
                  desc: "Warm water and calm winds stimulate the bonefish to school together. It's exciting for the angler — lots of fish and opportunities to cast at larger specimens on the flats.",
                  temp: "Avg. high: 82°F / Low: 72°F",
                },
                {
                  season: "Summer",
                  color: "bg-orange-50 border-orange-200",
                  titleColor: "text-orange-700",
                  desc: "Classic tailing time for bonefish in the cool of early morning and late evening. Midday sun can be intense but the fishing can be outstanding.",
                  temp: "Avg. high: 88°F / Low: 78°F",
                },
              ].map((s, i) => (
                <div key={i} className={`card p-6 ${s.color} border`}>
                  <h3 className={`text-lg font-bold mb-2 ${s.titleColor}`}>
                    {s.season}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-3">
                    {s.desc}
                  </p>
                  <p className="text-xs text-slate-400 font-medium uppercase tracking-wider">
                    {s.temp}
                  </p>
                </div>
              ))}
            </div>

            {/* Bonefish Season */}
            <div className="card p-8">
              <h2 className="text-2xl font-bold mb-4">Peak Bonefishing Season</h2>
              <p className="text-slate-500 leading-relaxed mb-4">
                The peak bonefishing season in the Turks &amp; Caicos runs from{" "}
                <strong className="text-foreground">November through June</strong>.
                These months offer the most consistent weather, water conditions, and
                bonefish activity. Any time of year can produce excellent fishing, but
                this window is the most reliable.
              </p>
              <p className="text-slate-500 leading-relaxed">
                Bonefish are &quot;resident&quot; in numbers year-round in the Caicos Islands —
                unlike some destinations where they migrate in and out seasonally. This
                means that any time of year can be a great time to fish if conditions
                are right and you&apos;re willing to adapt to the weather.
              </p>
            </div>

            <div className="mt-8 text-center">
              <Link href="/learn/bonefish-season" className="btn-outline !text-ocean-700 !border-ocean-400 hover:!bg-ocean-50">
                Bonefish Spawning Season &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>
      <BookingCTA />
    </>
  );
}
