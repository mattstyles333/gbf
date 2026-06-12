import type { Metadata } from "next";
import PageHero from "../../components/PageHero";
import BookingCTA from "../../components/BookingCTA";

export const metadata: Metadata = {
  title: "Guided First Before Kayak Access — Which Is Right for You?",
  description:
    "Why most anglers should book a guided bonefishing trip first before considering self-guided kayak access in the Turks & Caicos.",
  alternates: {
    canonical: "/diy/guided-vs-diy/",
  },
  openGraph: {
    title: "Guided First Before Kayak Access — Which Is Right for You?",
    description: "Why most anglers should book a guided bonefishing trip first before considering self-guided kayak access.",
    images: [
      {
        url: "/images/gallery/calf-deep-wading-for.jpg",
        width: 1200,
        height: 630,
        alt: "Guided-first kayak access comparison",
      },
    ],
  },
};

export default function GuidedVsDIYPage() {
  return (
    <>
      <PageHero
        title="Guided First, Kayak Access Only If It Fits"
        subtitle="Self-guided kayak access can be useful for the right angler, but a guided day is the best first step on unfamiliar flats."
      />
      <section className="py-16 sm:py-20" style={{ background: "var(--background)" }}>
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {/* Kayak Access Fit */}
              <div className="card p-8">
                <h3 className="text-xl font-bold mb-4 text-ocean-700">Where Kayak Access Can Fit</h3>
                <ul className="space-y-3">
                  {[
                    { title: "After a Guided Day", desc: "Use what your guide shows you about tides, channels, and safe access before fishing alone." },
                    { title: "Experienced Anglers", desc: "Best for anglers who already read flats, manage wind, and wade quietly." },
                    { title: "Extra Water Time", desc: "Works as an add-on to a guided or lodge package when conditions are appropriate." },
                    { title: "Short Follow-Up Sessions", desc: "Useful for returning to a known nearby flat after a guided day has shown you the safe approach." },
                    { title: "Quiet Access", desc: "Kayaks can be quiet and practical when you already know where and when to use them." },
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

              {/* Self-Guided Challenges */}
              <div className="card p-8">
                <h3 className="text-xl font-bold mb-4 text-slate-600">Self-Guided Challenges to Consider</h3>
                <ul className="space-y-3">
                  {[
                    { title: "Limited Local Knowledge", desc: "Without a guide, you can lose prime tide windows or spend the day in unproductive water." },
                    { title: "Harder to Spot Fish", desc: "Guides are experts at sight-fishing. New visitors often struggle with glare, depth, and fish movement." },
                    { title: "Access Limitations", desc: "Without a boat and guide, your range is limited and some productive flats are not realistic." },
                    { title: "Safety Considerations", desc: "Tides, weather, channels, sharp coral, and stingrays matter. Local guidance reduces avoidable risk." },
                    { title: "Steeper Learning Curve", desc: "Self-guided fishing is usually frustrating for first-time or intermediate anglers on unfamiliar flats." },
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
                Book a guided day first. That gives you the best chance at fish and helps
                you understand the channels, tidal patterns, productive flats, and safety
                considerations before you think about kayak access. For most guests,
                self-guided fishing should be a secondary add-on, not the main trip plan.
              </p>
            </div>
          </div>
        </div>
      </section>
      <BookingCTA />
    </>
  );
}
