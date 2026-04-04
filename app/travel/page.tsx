import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import PageHero from "../components/PageHero";
import BookingCTA from "../components/BookingCTA";

export const metadata: Metadata = {
  title: "Getting Here — Travel & Transport to North Caicos",
  description:
    "How to get from Providenciales to our fishing operation on North Caicos. Ferry schedule, transfer details, and travel tips for your bonefishing trip.",
  alternates: {
    canonical: "/travel/",
  },
};

export default function TravelPage() {
  return (
    <>
      <PageHero
        title="Getting Here"
        subtitle="Everything you need to know about getting from Providenciales to our fishing operation on North Caicos."
      />
      <section className="py-16 sm:py-20" style={{ background: "var(--background)" }}>
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold mb-6">
                Ferry from Providenciales
              </h2>
              <div className="space-y-5 text-slate-500 leading-relaxed">
                <p>
                  In order to experience the fishing in the Turks &amp; Caicos when staying
                  on the main island of Providenciales, you must consider visiting the flats
                  of North Caicos. The only way to get there is by ferry.
                </p>
                <p>
                  The departure point is only about 10 minutes from the Grace Bay area and
                  the ferry runs strictly to schedule with up to six arrivals and departures
                  each day.
                </p>
              </div>

              {/* Ferry Details */}
              <div className="card p-6 mt-8">
                <h3 className="text-lg font-bold mb-4">Ferry Details</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex gap-3">
                    <span className="font-semibold text-foreground w-28 shrink-0">Route</span>
                    <span className="text-slate-600">Leeward (Provo) → North Caicos (Sandy Point)</span>
                  </div>
                  <div className="flex gap-3">
                    <span className="font-semibold text-foreground w-28 shrink-0">Duration</span>
                    <span className="text-slate-600">~30 minutes</span>
                  </div>
                  <div className="flex gap-3">
                    <span className="font-semibold text-foreground w-28 shrink-0">Cost</span>
                    <span className="text-slate-600">$70 round trip</span>
                  </div>
                  <div className="flex gap-3">
                    <span className="font-semibold text-foreground w-28 shrink-0">Reservations</span>
                    <span className="text-slate-600">Not required</span>
                  </div>
                  <div className="flex gap-3">
                    <span className="font-semibold text-foreground w-28 shrink-0">Schedule</span>
                    <span className="text-slate-600">Up to 6 trips daily</span>
                  </div>
                </div>
              </div>

              {/* Typical Day */}
              <div className="card p-6 mt-6">
                <h3 className="text-lg font-bold mb-4">Your Fishing Day</h3>
                <div className="space-y-4">
                  {[
                    { time: "7:30 AM", desc: "Catch ferry from Leeward, Providenciales" },
                    { time: "8:00 AM", desc: "Arrive North Caicos — met at the dock" },
                    { time: "8:30 AM", desc: "Lines wet on the flats" },
                    { time: "2:00 PM", desc: "Head back to the dock" },
                    { time: "3:00 or 4:30 PM", desc: "Ferry back to Providenciales" },
                  ].map((step, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="text-sm font-bold text-ocean-600 w-24 shrink-0 pt-0.5">
                        {step.time}
                      </div>
                      <div className="text-sm text-slate-500">{step.desc}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Notes */}
              <div className="mt-6 text-sm text-amber-600 bg-amber-50 border border-amber-100 rounded-lg p-4">
                <strong>Note:</strong> The ferry service runs Monday–Saturday. Sunday and
                holiday schedules differ — first ferry departs at 8:00am with a return at
                4:30pm. Always check the current schedule before booking flights.
              </div>
            </div>

            <div>
              <div className="relative h-72 rounded-xl overflow-hidden shadow-2xl mb-8">
                <Image
                  src="/images/gbf/Ferry.jpg"
                  alt="Ferry from Providenciales to North Caicos"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>

              <h3 className="text-xl font-bold mb-4">Getting to Provo</h3>
              <div className="card p-6">
                <p className="text-slate-500 text-sm leading-relaxed mb-4">
                  Providenciales (PLS) is the main international gateway to the Turks &amp;
                  Caicos Islands. Direct flights arrive from Miami, Fort Lauderdale, New
                  York (seasonal), Charlotte, and other major hubs.
                </p>
                <p className="text-slate-500 text-sm leading-relaxed">
                  Grace Bay, where most hotels are located, is approximately 15–20 minutes
                  from the airport. The Leeward ferry terminal is a further 10 minutes
                  from central Grace Bay.
                </p>
              </div>

              <h3 className="text-xl font-bold mt-8 mb-4">Where to Stay</h3>
              <div className="card p-6">
                <p className="text-slate-500 text-sm leading-relaxed mb-4">
                  If you prefer to stay on Providenciales before or after your fishing trip,
                  there are excellent resort and hotel options on Grace Bay. The Pelican
                  Beach Hotel on North Caicos is another option if you want to be closer
                  to the fishing.
                </p>
                <Link href="/lodge#other-accommodation" className="text-ocean-600 font-semibold text-sm hover:underline">
                  Accommodation options &rarr;
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <BookingCTA />
    </>
  );
}
