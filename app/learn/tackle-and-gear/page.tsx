import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import PageHero from "../../components/PageHero";
import BookingCTA from "../../components/BookingCTA";

export const metadata: Metadata = {
  title: "Bonefish Tackle & Gear — Turks & Caicos",
  description:
    "What tackle and gear to bring for bonefishing around Bottle Creek and North Caicos: rods, reels, lines, leaders, flies, wading gear, and sun protection.",
  alternates: {
    canonical: "/learn/tackle-and-gear/",
  },
  openGraph: {
    title: "Bonefish Tackle & Gear — Turks & Caicos",
    description:
      "What tackle and gear to bring for bonefishing around Bottle Creek and North Caicos: rods, reels, lines, leaders, flies, wading gear, and sun protection.",
    images: [
      {
        url: "/images/gallery/ideal-gear-for-bonefishing.jpg",
        width: 1360,
        height: 1020,
        alt: "Ideal bonefishing gear for North Caicos",
      },
    ],
  },
};

export default function TackleAndGearPage() {
  return (
    <>
      <PageHero
        title="Tackle & Gear"
        subtitle="A practical guide to rods, reels, leaders, flies, footwear, and what to bring for fishing Bottle Creek and the nearby North Caicos flats."
      />
      <section className="py-16 sm:py-20" style={{ background: "var(--background)" }}>
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-5">What Most Anglers Need</h2>
              <div className="space-y-4 text-slate-500 leading-relaxed">
                <p>
                  For bonefish, most anglers are best served by a 9-foot 7- or 8-weight setup,
                  a smooth drag reel with at least 150 yards of backing, and a weight-forward floating line.
                  If you also want to stay ready for barracuda or permit opportunities, bring a heavier 9- or 10-weight.
                </p>
                <p>
                  The fishery around Bottle Creek is visual and shallow, so practical flats gear matters just as much as your rod.
                  Good polarized glasses, light clothing, simple footwear, and leaders matched to the conditions will improve the trip immediately.
                </p>
                <p>
                  If you do not want to travel with fly gear, we can provide hire gear for <strong>$60 + tax</strong>.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link href="/rates#guided" className="btn-primary">See Guided Rates</Link>
                <Link href="/book" className="btn-outline !text-ocean-700 !border-ocean-400 hover:!bg-ocean-50">Book Inquiry</Link>
              </div>
            </div>
            <div className="relative h-80 sm:h-96 rounded-xl overflow-hidden shadow-2xl">
              <Image
                src="/images/gallery/ideal-gear-for-bonefishing.jpg"
                alt="Ideal bonefishing gear for North Caicos"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[
              {
                title: "Fly Tackle",
                items: [
                  "9' 7- or 8-weight for bonefish",
                  "9' 9- or 10-weight for permit or barracuda",
                  "Smooth drag reel with 150+ yards of backing",
                  "Weight-forward floating line",
                ],
              },
              {
                title: "Leaders & Flies",
                items: [
                  "9'–12' leaders, usually 8lb–12lb tippet",
                  "Abrasion-resistant saltwater material",
                  "Crazy Charlies, Gotchas, shrimp and crab patterns",
                  "Carry subtle natural colors plus a few brighter options",
                ],
              },
              {
                title: "Clothing & Wading",
                items: [
                  "Good polarized sunglasses are essential",
                  "Long-sleeve sun shirt, hat, neck cover, sunscreen",
                  "Light flats footwear or sandals with enough sole protection",
                  "Neoprene socks help reduce sand rub during longer wading sessions",
                ],
              },
            ].map((group) => (
              <div key={group.title} className="card p-6">
                <h3 className="text-xl font-bold mb-4">{group.title}</h3>
                <ul className="space-y-2">
                  {group.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-slate-600">
                      <span className="text-ocean-500 mt-0.5">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="card p-8 max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">Where This Fits Into Trip Planning</h2>
            <p className="text-slate-500 leading-relaxed mb-5">
              If you are booking a guided day, we can simplify your setup and keep the tackle piece easy.
              If you are planning a lodge package or DIY kayak trip, it helps to think through footwear, spare leaders,
              flies, and sun gear before you travel.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/fishing" className="text-ocean-700 font-semibold hover:underline">Guided fishing overview</Link>
              <Link href="/diy" className="text-ocean-700 font-semibold hover:underline">DIY fishing overview</Link>
              <Link href="/faq" className="text-ocean-700 font-semibold hover:underline">FAQ</Link>
            </div>
          </div>
        </div>
      </section>
      <BookingCTA title="Need Gear Help Before You Book?" subtitle="Tell us what you already own and whether you want to bring or hire gear, and we&apos;ll point you in the right direction." />
    </>
  );
}
