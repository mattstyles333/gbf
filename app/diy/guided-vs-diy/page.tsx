import type { Metadata } from "next";
import PageHero from "../components/PageHero";
import BookingCTA from "../components/BookingCTA";

export const metadata: Metadata = {
  title: "Guided vs. DIY Bonefishing — Which Is Right for You?",
  description:
    "Compare guided bonefishing with self-guided options in the Turks & Caicos. Cost, experience level, independence, and what to expect from each approach.",
};

export default function GuidedVsDIYPage() {
  return (
    <>
      <PageHero
        title="Guided vs. DIY Bonefishing"
        subtitle="Which approach is right for your Turks & Caicos bonefishing trip?"
      />
      <section className="py-16 sm:py-20" style={{ background: "var(--background)" }}>
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {/* DIY Benefits */}
              <div className="card p-8">
                <h3 className="text-xl font-bold mb-4 text-ocean-700">DIY Fishing Benefits</h3>
                <ul className="space-y-3">
                  {[
                    { title: "Cost-Effective", desc: "Eliminates guide and boat costs, significantly reducing trip expense." },
                    { title: "Flexibility & Independence", desc: "Explore at your own pace, fish as long as you like, follow your own schedule." },
                    { title: "Learning Experience", desc: "Develop deeper understanding of bonefish behavior, tides, and the flats ecosystem." },
                    { title: "Adventure & Exploration", desc: "Navigate the flats on foot or kayak, discovering spots off the beaten path." },
                    { title: "Closer to Nature", desc: "Walking the flats provides an intimate, solitary experience with the environment." },
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-ocean-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <div>
                        <strong className="block text-foreground text-sm">{item.title}</strong>
                        <span className="text-slate-500 text-sm">{item.desc}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* DIY Challenges */}
              <div className="card p-8">
                <h3 className="text-xl font-bold mb-4 text-slate-600">DIY Challenges to Consider</h3>
                <ul className="space-y-3">
                  {[
                    { title: "Limited Local Knowledge", desc: "Without a guide, you may spend time in unproductive areas or miss prime feeding windows." },
                    { title: "Harder to Spot Fish", desc: "Guides are experts at sight-fishing. DIY anglers often struggle to identify bonefish in varying light conditions." },
                    { title: "Access Limitations", desc: "Without a boat, your range is confined to wading-accessible areas. A guide can reach remote flats." },
                    { title: "Safety Considerations", desc: "Be aware of tides, weather changes, sharp coral, and stingrays. A guide ensures safety on unfamiliar water." },
                    { title: "Steeper Learning Curve", desc: "More trial and error — which can be frustrating for novice or intermediate anglers." },
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-slate-400 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <div>
                        <strong className="block text-foreground text-sm">{item.title}</strong>
                        <span className="text-slate-500 text-sm">{item.desc}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Our Recommendation */}
            <div className="card p-8 bg-ocean-50 border border-ocean-100">
              <h3 className="text-xl font-bold mb-4">Our Recommendation</h3>
              <p className="text-slate-600 leading-relaxed">
                The most effective approach is a hybrid: book one or two guided days to
                learn the water from an expert who has fished these flats their whole
                life. Your guide will show you the channels, tidal patterns, and
                productive flats, then set you up for successful self-guided days in
                the fishing kayaks from the lodge. This gives you the knowledge to fish
                confidently on your own while keeping costs manageable.
              </p>
            </div>
          </div>
        </div>
      </section>
      <BookingCTA />
    </>
  );
}
