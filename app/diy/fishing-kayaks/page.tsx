import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import PageHero from "../../components/PageHero";
import BookingCTA from "../../components/BookingCTA";

export const metadata: Metadata = {
  title: "Fishing Kayaks — Guided-First Bonefishing Access",
  description:
    "Fishing kayaks available in 11ft and 14ft sizes at the Bonefish Lodge, recommended for experienced anglers after a guided day.",
  alternates: {
    canonical: "/diy/fishing-kayaks/",
  },
  openGraph: {
    title: "Fishing Kayaks — Guided-First Bonefishing Access",
    description: "Fishing kayaks at the Bonefish Lodge for experienced anglers after a guided day and local water briefing.",
    images: [
      {
        url: "/images/gbf/Manta_Ray.png",
        width: 1200,
        height: 630,
        alt: "Fishing kayaks for bonefishing in Turks & Caicos",
      },
    ],
  },
};

export default function FishingKayaksPage() {
  return (
    <>
      <PageHero
        title="Fishing Kayaks"
        subtitle="Kayak access is best for experienced anglers after a guided day and local water briefing."
      />
      <section className="py-16 sm:py-20" style={{ background: "var(--background)" }}>
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
            <div>
              <h2 className="text-3xl font-bold mb-5">
                Kayak Fishing for Bonefish
              </h2>
              <p className="text-slate-500 text-lg leading-relaxed mb-5">
                Fishing from a kayak can be useful once you understand the local water,
                but we recommend booking a guided day first. Your guide can show you the
                safe routes, productive flats, and timing that make kayak access worthwhile.
              </p>
              <p className="text-slate-500 leading-relaxed mb-6">
                These kayaks are available for experienced anglers staying at the lodge or
                renting separately when conditions and experience line up. They are not a
                substitute for local guidance if you are new to Bottle Creek.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/book" className="btn-primary">
                  Book Guided Trip First
                </Link>
                <Link href="/diy/guided-vs-diy" className="btn-outline !text-ocean-700 !border-ocean-400">
                  Guided First Advice
                </Link>
              </div>
            </div>
            <div className="relative h-80 sm:h-96 rounded-xl overflow-hidden shadow-2xl">
              <Image
                src="/images/gbf/Manta_Ray.png"
                alt="Fishing Kayaks in Turks & Caicos"
                fill
                className="object-contain"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>

          {/* Benefits */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[
              { title: "Useful After Guidance", desc: "A guided day helps you understand where kayak access makes sense and where it does not." },
              { title: "Quiet Approach", desc: "No motor noise helps once you already know how to position around wind, tide, and fish movement." },
              { title: "Local Access", desc: "Launch directly from the lodge when conditions, tide, and experience make kayak fishing appropriate." },
              { title: "Extra Water Time", desc: "Best used as an add-on after guided fishing, not as the main plan for first-time guests." },
              { title: "Experienced Anglers", desc: "Suited to anglers who can read flats, wade safely, and handle changing conditions independently." },
              { title: "Catch & Release Friendly", desc: "Staying close to the water helps with careful bonefish handling and quick release." },
            ].map((benefit, i) => (
              <div key={i} className="card p-6">
                <h3 className="font-bold mb-2">{benefit.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{benefit.desc}</p>
              </div>
            ))}
          </div>

          {/* Rates */}
          <div className="card p-8 max-w-lg">
            <h3 className="text-xl font-bold mb-4">Kayak Rental Rates</h3>
            <p className="text-sm text-slate-500 leading-relaxed mb-4">
              We recommend using kayak access after a guided day so you know the safe routes,
              tides, and flats worth fishing.
            </p>
            <div className="space-y-3 text-sm text-slate-600">
              <div className="flex justify-between items-center py-2 border-b border-slate-100">
                <span>Kayak Rental (non-lodge guests)</span>
                <strong className="text-ocean-700">$110/day + tax</strong>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-slate-100">
                <span>Available Sizes</span>
                <span>11ft and 14ft</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-slate-100">
                <span>Location</span>
                <span>Launch from the lodge</span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span>Included</span>
                <span>Paddles, life vest</span>
              </div>
            </div>
            <Link href="/book" className="btn-primary w-full justify-center mt-6">
              Start With a Guided Booking
            </Link>
          </div>
        </div>
      </section>
      <BookingCTA />
    </>
  );
}
