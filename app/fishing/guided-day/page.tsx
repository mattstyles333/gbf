import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import PageHero from "../../components/PageHero";
import BookingCTA from "../../components/BookingCTA";

export const metadata: Metadata = {
  title: "What to Expect on a Guided Bonefishing Day",
  description:
    "What a guided bonefishing day around Bottle Creek looks like: your guide, schedule, wading and skiff mix, target species, and how the day is tailored to the angler.",
  alternates: {
    canonical: "/fishing/guided-day/",
  },
  openGraph: {
    title: "What to Expect on a Guided Bonefishing Day",
    description:
      "What a guided bonefishing day around Bottle Creek looks like: your guide, schedule, wading and skiff mix, target species.",
    images: [
      {
        url: "/images/gallery/darel-bonefishing-on-the-flats.jpg",
        width: 1200,
        height: 630,
        alt: "Guided bonefishing day with Darrel around Bottle Creek",
      },
    ],
  },
};

export default function GuidedDayPage() {
  return (
    <>
      <PageHero
        title="Guided Day Expectations"
        subtitle="What a typical day with Darrel looks like, how we approach the water, and why guided bonefishing around Bottle Creek is such a memorable way to fish."
      />
      <section className="py-16 sm:py-20" style={{ background: "var(--background)" }}>
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-5">Your Primary Guide: Darrel</h2>
              <div className="space-y-4 text-slate-500 leading-relaxed">
                <p>
                  Darrel is our primary guide and a true Bottle Creek local. He has been fishing the flats
                  and guiding these waters for decades and knows the creeks, channels, sandy wading bottom,
                  and feeding lanes better than anyone out there.
                </p>
                <p>
                  When the calendar is especially busy we may use additional guides, but Darrel sets the tone
                  for the fishery and the way we approach it. If you have a specific goal for the day, just tell him.
                  The trip is customizable and we will try to put you on the fish you want to target.
                </p>
              </div>
            </div>
            <div className="relative h-80 sm:h-96 rounded-xl overflow-hidden shadow-2xl">
              <Image
                src="/images/gallery/darel-bonefishing-on-the-flats.jpg"
                alt="Darrel guiding on the flats near Bottle Creek"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <div className="card p-6 lg:col-span-2">
              <h2 className="text-2xl font-bold mb-4">How the Day Usually Flows</h2>
              <div className="space-y-4 text-slate-500 leading-relaxed">
                <p>
                  The day usually starts with a <strong>7:30am departure</strong>. We fish until around <strong>2:00pm</strong>,
                  which keeps the day productive without forcing a rushed return and usually allows guests coming from Provo
                  to get back on the <strong>4:00pm ferry</strong>.
                </p>
                <p>
                  In many cases we like to begin by wading and sight-fishing first, with Darrel right by your side in calf-deep
                  water over firm sandy bottom. Once we have covered that water, we may shift to fishing from the skiff in slightly
                  deeper or softer terrain and keep moving until we find the bonefish you&apos;re after.
                </p>
                <p>
                  Nothing is locked in. If you prefer more wading, more time on the bow, or want to chase a certain type of water,
                  say so early and we&apos;ll shape the day around that.
                </p>
              </div>
            </div>

            <div className="card p-6">
              <h3 className="text-xl font-bold mb-4">Typical Timeline</h3>
              <ul className="space-y-3 text-sm text-slate-600">
                {[
                  "7:30am departure",
                  "Early visual water first if conditions line up",
                  "Wade and sight-fish with Darrel beside you",
                  "Shift to skiff water if needed",
                  "Back around 2:00pm",
                  "Timed for the 4:00pm ferry return when needed",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-ocean-500 mt-0.5">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="relative h-80 sm:h-96 rounded-xl overflow-hidden shadow-2xl order-2 lg:order-1">
              <Image
                src="/images/gallery/tailing-bonefish.jpg"
                alt="Tailing bonefish in shallow water"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-bold mb-5">Why Bonefishing Is So Exciting</h2>
              <div className="space-y-4 text-slate-500 leading-relaxed">
                <p>
                  Bonefish are visual, fast, and explosive. The fun starts long before the hookup: tailing fish, shallow-water shots,
                  and the moment a fish tips down and eats your fly. Once hooked, they are among the strongest fish per pound in saltwater.
                </p>
                <p>
                  They are also relatively easy to handle carefully. There&apos;s a simple trick where holding them gently upside down often helps them relax,
                  making it easier to remove the fly quickly and cleanly. They have no sharp teeth, so unlike barracuda, it is much more common to get your fly back than to lose it to a bite-off.
                </p>
                <p>
                  We also keep some spinning rods on board for barracuda, jack, and snapper. If you want to mix that in during the day, just say so.
                </p>
              </div>
            </div>
          </div>

          <div className="card p-8 max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">A Guided Day Is Customizable</h2>
            <p className="text-slate-500 leading-relaxed mb-5">
              Some anglers want a full day of pure bonefish hunting. Others want more wading, more boat time, or a chance to throw at barracuda,
              jack, or snapper once the main bonefish windows slow down. Tell Darrel what kind of day you want and he&apos;ll work to put you on the right fish.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/rates#guided" className="btn-primary">Guided Day Rates</Link>
              <Link href="/book" className="btn-outline !text-ocean-700 !border-ocean-400 hover:!bg-ocean-50">Book a Guided Day</Link>
              <Link href="/learn/tackle-and-gear" className="btn-outline !text-ocean-700 !border-ocean-400 hover:!bg-ocean-50">Tackle &amp; Gear</Link>
            </div>
          </div>
        </div>
      </section>
      <BookingCTA title="Want the Day Built Around Your Style of Fishing?" subtitle="Tell us what you like to fish, how much you want to wade, and whether you want to add barracuda or snapper shots into the day." />
    </>
  );
}
