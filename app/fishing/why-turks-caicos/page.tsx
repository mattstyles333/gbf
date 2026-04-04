import type { Metadata } from "next";
import PageHero from "../../components/PageHero";
import BookingCTA from "../../components/BookingCTA";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Why Fish Turks & Caicos for Bonefish?",
  description:
    "Discover why Turks & Caicos is considered one of the world's premier bonefish destinations. Pristine flats, clear water, and experienced guides.",
  alternates: {
    canonical: "/fishing/why-turks-caicos/",
  },
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
                Why Bottle Creek Stands Out
              </h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                Bottle Creek and the nearby flats, creeks, and estuaries of North Caicos offer a rare mix of hard wading bottom, clear water, and very light fishing pressure. Fish here are aggressive, the water is easy to read, and the access is remarkably straightforward.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Unlike heavily pressured destinations in the Bahamas or Florida Keys, the North Caicos fishery still feels quiet and underfished. Our guides at Bottle Creek have watched these waters for decades and know how the fish move through the flats, channels, and mangrove edges.
              </p>
              <p className="text-slate-600 leading-relaxed mt-4">
                The attraction is not just the fish count. Bonefish here are visual, fast, and challenging,
                which makes every good shot memorable whether you are wading ankle-deep water or casting from the bow.
              </p>
            </div>
            <div className="bg-ocean-50 rounded-2xl p-8 border border-ocean-100">
              <h3 className="text-xl font-heading font-bold text-slate-900 mb-4">
                By the Numbers
              </h3>
              <ul className="space-y-3">
                {[
                  { stat: "Minutes", label: "from the dock to our productive flats and channels" },
                  { stat: "2–4 lbs", label: "common school fish on moving water" },
                  { stat: "2–6 lbs", label: "average bonefish size on our flats" },
                  { stat: "10+ lbs", label: "occasional larger fish in singles and pairs" },
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
                  desc: "The waters we fish around Bottle Creek and North Caicos see very little pressure. These bonefish are not conditioned like fish in crowded destinations.",
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
                  desc: "Bottle Creek remains lightly developed and naturally productive, with healthy flats, mangrove edges, and protected water that support a strong fishery.",
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
