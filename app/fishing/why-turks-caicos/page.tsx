import type { Metadata } from "next";
import PageHero from "../../components/PageHero";
import BookingCTA from "../../components/BookingCTA";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Why Turks & Caicos — World-Class Bonefishing in the Caribbean",
  description:
    "Discover why Turks & Caicos is considered one of the world's premier bonefish destinations. Pristine flats, clear water, and experienced guides.",
};

export default function WhyTurksCaicosPage() {
  return (
    <>
      <PageHero
        title="Why Turks & Caicos"
        subtitle="One of the Last Great Bonefish Destinations"
        description="The Turks & Caicos Islands offer a rare combination: pristine, largely unfished bonefish flats, gin-clear water for sight-fishing, and an established local guiding tradition. It's why we call it home."
      />

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-16">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl font-heading font-bold text-slate-900 mb-4">
                The Caicos Bank Advantage
              </h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                The Caicos Bank — a vast, shallow plateau of hard white sand and turtle grass — stretches for miles east of Providenciales and north of North Caicos. Bonefish here have never seen a fly. The fish are naive, the water is crystal clear, and the flats go on for miles.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Unlike heavily pressured destinations in the Bahamas or Florida Keys, the TCI bonefish population remains robust. Our guides at Bottle Creek have watched these flats for decades, and they show you exactly where the fish live — not just the tourist spots.
              </p>
            </div>
            <div className="bg-ocean-50 rounded-2xl p-8 border border-ocean-100">
              <h3 className="text-xl font-heading font-bold text-slate-900 mb-4">
                By the Numbers
              </h3>
              <ul className="space-y-3">
                {[
                  { stat: "50+ sq mi", label: "of accessible bonefish flats around North Caicos" },
                  { stat: "< 10%", label: "of the Caicos Bank has ever been fished" },
                  { stat: "2–6 lbs", label: "average bonefish size on our flats" },
                  { stat: "10+ lbs", label: "occasional large bonefish on the outer fringes" },
                ].map(({ stat, label }) => (
                  <li key={stat} className="flex gap-3">
                    <span className="text-ocean-600 font-bold text-lg flex-shrink-0">{stat}</span>
                    <span className="text-slate-600 text-sm">{label}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-heading font-bold text-slate-900 mb-6 text-center">
              What Makes This Fishery Different
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Sight Fishing",
                  desc: "The gin-clear water lets you spot bonefish before they spot you. Tailing fish in 6 inches of water are common.",
                },
                {
                  title: "Minimal Pressure",
                  desc: "Most of the Caicos Bank sees fewer than 100 angler-days per year. These bonefish haven't learned to evade flies.",
                },
                {
                  title: "Year-Round Fishing",
                  desc: "Bonefish are catchable every month. Peak seasons are spring and fall, but winter and summer offer excellent fishing too.",
                },
                {
                  title: "Local Expertise",
                  desc: "Our guides grew up on these flats. They read the water, the tides, and the fish in ways no guidebook can teach.",
                },
                {
                  title: "Pristine Environment",
                  desc: "The TCI has strict marine protections. The Caicos Reserve at Bottle Creek is a no-development zone, keeping the flats healthy.",
                },
                {
                  title: "Multiple Habitats",
                  desc: "Channels, creeks, open flats, grass beds, and sandy bottoms — all within minutes of the lodge. No long boat rides needed.",
                },
              ].map(({ title, desc }) => (
                <div key={title} className="bg-white rounded-xl p-6 shadow-sm border border-slate-100">
                  <h3 className="text-lg font-heading font-semibold text-slate-900 mb-2">{title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-ocean-800 to-ocean-950 rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-heading font-bold text-white mb-3">
              Ready to Fish These Flats?
            </h2>
            <p className="text-ocean-200 mb-6 max-w-lg mx-auto">
              Whether you want a guided day on the skiff or prefer to explore in a fishing kayak, we have options for every angler.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link href="/fishing" className="btn-primary">
                See Our Fishing Options
              </Link>
              <Link href="/rates" className="btn-outline">
                View Rates
              </Link>
            </div>
          </div>
        </div>
      </section>

      <BookingCTA />
    </>
  );
}
