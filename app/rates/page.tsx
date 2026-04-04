import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "../components/PageHero";
import BookingCTA from "../components/BookingCTA";

export const metadata: Metadata = {
  title: "Bonefishing Rates — Turks & Caicos",
  description:
    "Transparent bonefishing rates for the Turks & Caicos. Full-day guided trips from $700, lodge packages from $1,250 per person. No hidden fees.",
  alternates: {
    canonical: "/rates/",
  },
};

export default function RatesPage() {
  return (
    <>
      <PageHero
        title="Bonefishing Rates"
        subtitle="Transparent pricing for guided fishing and lodge packages in the Turks & Caicos. No hidden fees."
      />
      <section className="py-16 sm:py-20" style={{ background: "var(--background)" }}>
        <div className="section-container">
          {/* Guided */}
          <div className="max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-2">Guided Fishing</h2>
            <p className="text-slate-500 mb-8">
              Straightforward guided, lodge, and DIY pricing for anglers who want great
              water without resort-style markup. We&apos;ll help you choose the option that
              best fits your budget, experience, and trip goals.
            </p>
            <div className="card p-8 mb-8">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
                <div>
                  <h3 className="text-xl font-bold">Full-Day Guided Trip</h3>
                  <p className="text-slate-500 text-sm mt-1">7:30am – 2:00pm · Up to 2 guests</p>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold text-ocean-700">$700</div>
                  <div className="text-slate-400 text-sm">+ 12% TCI tax</div>
                </div>
              </div>
              <p className="text-slate-500 mb-6">
                Our guided fishing is conducted on classic flats skiffs — enough power
                to get up and run but with a shallow draft that polishes and glides
                across the flats. Whether you prefer to wade or pole, we take you to
                flats that offer fantastic stalking — and there will not be another
                angler in sight.
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {[
                  "Classic flats skiff with expert guide",
                  "All tackle and equipment",
                  "7:30am departure, back by 2pm",
                  "Up to 2 guests per boat",
                  "Fishing license available ($15/day)",
                  "$175 deposit to confirm booking",
                  "Balance in cash on the day",
                  "We help match dates to tides and conditions",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                    <svg className="w-4 h-4 text-ocean-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <p className="text-slate-500 text-sm">
              <strong className="text-foreground">Note:</strong> We&apos;d rather be honest about tides,
              wind, and angler fit than push you into the wrong dates. Reach out first and
              we&apos;ll recommend the best plan for your group.
            </p>
          </div>

          {/* Lodge Packages */}
          <div className="max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-2">Lodge Packages</h2>
            <p className="text-slate-500 mb-8">
              Combine comfortable lodge accommodation with guided and self-guided fishing
              days. Minimum stay is three nights.
            </p>
            <div className="card overflow-hidden mb-8">
              <div className="p-8">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
                  <div>
                    <span className="inline-block bg-ocean-100 text-ocean-700 text-xs font-bold uppercase tracking-wider px-2 py-1 rounded mb-2">
                      Most Popular
                    </span>
                    <h3 className="text-xl font-bold">4 Nights / 3 Days Package</h3>
                    <p className="text-slate-500 text-sm mt-1">Double occupancy · Based on 2 anglers</p>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold text-ocean-700">$1,250</div>
                    <div className="text-slate-400 text-sm">per person + 12% TCI tax</div>
                  </div>
                </div>
                <p className="text-slate-500 mb-6">
                  Stay at the Bonefish Lodge on Bottle Creek and fish the pristine flats of
                  North Caicos with a mix of guided and self-guided days. The first guided
                  day orients you to the water — then you&apos;re set up to fish the kayak on
                  subsequent days with full confidence.
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6">
                  {[
                    "4 nights lodge accommodation",
                    "1 guided day on flats skiff",
                    "2 days self-guided fishing kayaks",
                    "Guided day sets up your DIY strategy",
                    "Transfers to/from Sandy Point",
                    "Breakfast and lunch on guided day",
                    "Kayak rental and cleaning fee",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                      <svg className="w-4 h-4 text-ocean-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="bg-slate-50 rounded-lg p-4 text-sm">
                  <strong className="text-foreground">Additional Days:</strong>
                  <ul className="mt-2 space-y-1 text-slate-600">
                    <li>Extra guided day: <strong>$1,050/day</strong> (per boat)</li>
                    <li>Extra self-guided day: <strong>$205/person/day</strong></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* DIY */}
          <div className="max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-2">DIY Options</h2>
            <div className="card p-8">
              <h3 className="text-lg font-bold mb-4">Kayak Rental (Non-Lodge Guests)</h3>
              <div className="flex items-center justify-between py-3 border-b border-slate-100">
                <span className="text-slate-600">Kayak rental per day</span>
                <strong className="text-ocean-700">$110</strong>
              </div>
              <div className="flex items-center justify-between py-3">
                <span className="text-slate-600">Available sizes</span>
                <span>11ft and 14ft</span>
              </div>
              <Link href="/diy/fishing-kayaks" className="text-ocean-600 font-semibold text-sm mt-4 inline-block hover:underline">
                Learn more about kayaks &rarr;
              </Link>
            </div>
          </div>

          {/* Important Info */}
          <div className="max-w-3xl mx-auto">
            <div className="bg-amber-50 border border-amber-100 rounded-xl p-6">
              <h3 className="font-bold text-amber-800 mb-3">Important Information</h3>
              <ul className="space-y-2 text-sm text-amber-700">
                <li>• A $175 deposit is required to confirm any booking</li>
                <li>• Deposits can be made by credit card or PayPal</li>
                <li>• Balance is due in cash on the day of the trip</li>
                <li>• All rates are in US Dollars</li>
                <li>• 12% TCI Government tax applies to all rates</li>
                <li>• Fishing licenses are required and available at $15/day</li>
                <li>• We limit guests to two per boat for safety and experience quality</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <BookingCTA />
    </>
  );
}
