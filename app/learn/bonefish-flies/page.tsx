import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "../../components/PageHero";
import BookingCTA from "../../components/BookingCTA";

export const metadata: Metadata = {
  title: "Bonefish Flies — Best Patterns for Turks & Caicos",
  description:
    "The best bonefish flies for the Turks & Caicos: Crazy Charlie, Gotcha, Merkin, Clouser Minnows, and when to use each pattern.",
  alternates: {
    canonical: "/learn/bonefish-flies/",
  },
};

export default function BonefishFliesPage() {
  return (
    <>
      <PageHero
        title="Bonefish Flies"
        subtitle="The best fly patterns for bonefishing in the Turks & Caicos — and when to use each one."
      />
      <section className="py-16 sm:py-20" style={{ background: "var(--background)" }}>
        <div className="section-container">
          <div className="max-w-3xl mx-auto">
            <p className="text-slate-500 text-lg leading-relaxed mb-10">
              Bonefish in the Turks &amp; Caicos are typically found in shallow, clear
              saltwater flats, and they feed on a variety of small crustaceans, mollusks,
              and fish. When fly fishing for bonefish, it&apos;s important to use a fly
              that imitates these food sources — small, lightweight, and subtle.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {[
                {
                  name: "Crazy Charlie",
                  desc: "A classic — and famous — bonefish fly that should always hold prime position in the fly box. Imitates small, sand-colored crustaceans. Deadly on the flats of the Caicos Bank.",
                  colors: "Pink/white, tan, beige — sizes #4–#6",
                  image: "/images/gbf/Crazy-Charlie.jpg",
                },
                {
                  name: "Gotcha",
                  desc: "Another classic. Smaller and sparser is often the best choice. Works in virtually any color combination — pink/white is one of the most productive.",
                  colors: "Pink/white, chartreuse/white, tan — sizes #4–#6",
                  image: null,
                },
                {
                  name: "Crab Flies",
                  desc: "Mimic small crabs, a major food source for bonefish. Typically fished on the bottom, kicking up sand to attract attention. Essential for spooky fish.",
                  colors: "Tan, brown, olive — sizes #2–#6",
                  image: null,
                },
                {
                  name: "Shrimp Flies",
                  desc: "Like crab flies, shrimp flies mimic a key food source. Usually tied with rabbit fur or deer hair and retrieved with more of a jigging motion.",
                  colors: "Pink, tan, white — sizes #4–#8",
                  image: null,
                },
                {
                  name: "Clouser Minnows",
                  desc: "Versatile streamers effective for many species including bonefish. The tyer can be creative with wing size, color combinations, and flash.",
                  colors: "Any — vary for conditions",
                  image: null,
                },
                {
                  name: "Merkin",
                  desc: "A type of crab fly designed to mimic small, tan-colored crabs. Less well known but can be deadly on cloudy days when bonefish rely more on vibration than sight.",
                  colors: "Tan, olive, cream — sizes #4–#6",
                  image: null,
                },
                {
                  name: "Tingler",
                  desc: "Designed to imitate small, transparent shrimp that are a major food source. Typically tied with synthetic materials in a variety of colours.",
                  colors: "White, pink, chartreuse — sizes #4–#8",
                  image: null,
                },
                {
                  name: "Permit Flies",
                  desc: "Larger, flashier flies for bigger bonefish or when targeting permit. Also useful when bonefish are in deeper water or more selective.",
                  colors: "Tan/white, yellow/white — sizes #2–#4",
                  image: null,
                },
              ].map((fly, i) => (
                <div key={i} className="card p-6">
                  <div className="flex items-start gap-4">
                    {fly.image && (
                      <div className="relative w-16 h-16 rounded overflow-hidden shrink-0">
                        <Image
                          src={fly.image}
                          alt={fly.name}
                          fill
                          className="object-cover"
                          sizes="64px"
                        />
                      </div>
                    )}
                    <div>
                      <h3 className="font-bold text-foreground mb-1">{fly.name}</h3>
                      <p className="text-slate-500 text-sm leading-relaxed mb-2">{fly.desc}</p>
                      <p className="text-xs text-ocean-600 font-semibold">{fly.colors}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Tips */}
            <div className="card p-8">
              <h2 className="text-xl font-bold mb-4">General Fly Selection Tips</h2>
              <ul className="space-y-3 text-slate-500 text-sm leading-relaxed">
                <li className="flex items-start gap-2">
                  <span className="text-ocean-400 mt-1">+</span>
                  Start with small, subtle flies and move to larger, flashier patterns if the bonefish are not responding.
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-ocean-400 mt-1">+</span>
                  Pay attention to the tides and time of day — bonefish feed more actively during certain tides.
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-ocean-400 mt-1">+</span>
                  Have a variety of flies in your box and be prepared to switch based on conditions.
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-ocean-400 mt-1">+</span>
                  The bonefish on these flats have never seen a fly before and are not shy — confident presentations work well.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <BookingCTA />
    </>
  );
}
