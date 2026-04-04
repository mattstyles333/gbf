import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import PageHero from "../../components/PageHero";
import BookingCTA from "../../components/BookingCTA";

export const metadata: Metadata = {
  title: "Fishing Kayaks — DIY Bonefishing in Turks & Caicos",
  description:
    "Fishing kayaks available for rent in 11ft and 14ft sizes at the Bonefish Lodge. Perfect for self-guided bonefishing on the flats of North Caicos.",
  alternates: {
    canonical: "/diy/fishing-kayaks/",
  },
};

export default function FishingKayaksPage() {
  return (
    <>
      <PageHero
        title="Fishing Kayaks"
        subtitle="Explore the pristine bonefish flats of North Caicos at your own pace from a kayak."
      />
      <section className="py-16 sm:py-20" style={{ background: "var(--background)" }}>
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
            <div>
              <h2 className="text-3xl font-bold mb-5">
                Kayak Fishing for Bonefish
              </h2>
              <p className="text-slate-500 text-lg leading-relaxed mb-5">
                Fishing for bonefish from a kayak offers several distinct advantages,
                making it an exciting and rewarding way to pursue these elusive fish.
                When staying at the lodge, we have kayaks available for DIY fishing.
              </p>
              <p className="text-slate-500 leading-relaxed mb-6">
                These kayaks are perfect for anglers who want to explore the nearby
                bonefishing flats on their own or enjoy the surrounding waters at their
                leisure. Paddle out to some of the best fishing spots just a short
                distance from the lodge, giving you flexibility and independence to
                enhance your fishing adventure.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/book" className="btn-primary">
                  Book Kayak Rental
                </Link>
                <Link href="/diy" className="btn-outline !text-ocean-700 !border-ocean-400">
                  DIY Overview
                </Link>
              </div>
            </div>
            <div className="relative h-80 sm:h-96 rounded-xl overflow-hidden shadow-2xl">
              <Image
                src="https://www.greatbonefishing.com/wp-content/uploads/2013/01/Manta_Ray.png"
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
              { title: "Access Shallow Water", desc: "Bonefish are found in shallow flats that can be difficult to reach even with our boats. Kayaks go where motors can't." },
              { title: "Quiet & Stealthy", desc: "No motor noise means a stealthier approach. Get closer to bonefish without spooking them." },
              { title: "Mobile & Flexible", desc: "Navigate narrow channels, coastlines, and across flats easily. Adjust position based on fish behavior or tide." },
              { title: "Cost-Effective", desc: "No guide fees or gas costs. Significantly reduces the per-day cost of fishing the flats." },
              { title: "More Fishing Time", desc: "Launch directly from the lodge with good flats starting directly opposite. Easy in and out." },
              { title: "Catch & Release Friendly", desc: "Close to the water makes handling bonefish for photos and release efficient and less harmful to the fish." },
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
            <div className="space-y-3 text-sm text-slate-600">
              <div className="flex justify-between items-center py-2 border-b border-slate-100">
                <span>Kayak Rental (non-lodge guests)</span>
                <strong className="text-ocean-700">$110/day</strong>
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
              Check Availability
            </Link>
          </div>
        </div>
      </section>
      <BookingCTA />
    </>
  );
}
