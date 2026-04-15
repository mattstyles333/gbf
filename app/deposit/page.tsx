import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PayPalDepositButton from "./PayPalDepositButton";
import { siteConfig } from "../content";

export const metadata: Metadata = {
  title: "Pay Your Deposit",
  description:
    "Secure your bonefishing trip with a $175 deposit. Pay securely via PayPal to confirm your booking with Great Bone Fishing.",
  alternates: {
    canonical: "/deposit/",
  },
  robots: {
    index: false,
    follow: false,
  },
};

export default function DepositPage() {
  const phoneUSA = siteConfig.phoneUSA.replace(/[^0-9+]/g, "");
  
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-16 sm:py-20 lg:py-24 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/gallery/fishing-along-the-mangroves.jpg"
            alt="Bonefishing in the Turks and Caicos"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ocean-950/90 via-ocean-950/75 to-ocean-950/60" />
        </div>
        <div className="relative z-10 section-container">
          <div className="max-w-2xl">
            <p className="text-ocean-300 uppercase tracking-widest text-sm font-semibold mb-4">
              Secure Your Trip
            </p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Pay Your Booking Deposit
            </h1>
            <p className="text-ocean-100 text-lg sm:text-xl leading-relaxed">
              Complete your $175 deposit to confirm your bonefishing adventure. 
              This deposit secures your dates and goes toward your final balance.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 sm:py-16 lg:py-20" style={{ background: "var(--background)" }}>
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Left Column - Info */}
            <div>
              <div className="card p-6 sm:p-8 mb-6">
                <h2 className="text-2xl font-bold mb-4">What You&apos;re Paying For</h2>
                <p className="text-slate-600 mb-6">
                  This $175 deposit confirms your reservation and is applied toward 
                  your total trip cost. It&apos;s fully transferable if you need to reschedule.
                </p>
                
                <div className="bg-ocean-50 rounded-lg p-5 mb-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-slate-700 font-medium">Deposit Amount</span>
                    <span className="text-2xl font-bold text-ocean-700">$175.00</span>
                  </div>
                  <p className="text-sm text-slate-500">
                    Applied to your trip balance
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-ocean-100 flex items-center justify-center shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-ocean-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-slate-800">Secures Your Dates</p>
                      <p className="text-sm text-slate-500">Locks in your preferred fishing dates</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-ocean-100 flex items-center justify-center shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-ocean-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-slate-800">Applied to Balance</p>
                      <p className="text-sm text-slate-500">Deducted from your total trip cost</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-ocean-100 flex items-center justify-center shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-ocean-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-slate-800">Transferable</p>
                      <p className="text-sm text-slate-500">Can be moved to new dates if needed</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Box */}
              <div className="card p-6">
                <h3 className="text-lg font-bold mb-3">Questions About Your Deposit?</h3>
                <p className="text-slate-600 text-sm mb-4">
                  We&apos;re here to help. Reach out if you need assistance with payment 
                  or have questions about your booking.
                </p>
                <div className="space-y-2 text-sm">
                  <a 
                    href={`mailto:${siteConfig.email}`}
                    className="flex items-center gap-2 text-ocean-600 hover:text-ocean-700"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    {siteConfig.email}
                  </a>
                  <a 
                    href={`tel:${phoneUSA}`}
                    className="flex items-center gap-2 text-ocean-600 hover:text-ocean-700"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    {siteConfig.phoneUSA} (USA)
                  </a>
                  <a 
                    href={`tel:${siteConfig.phoneTCI.replace(/[^0-9+]/g, "")}`}
                    className="flex items-center gap-2 text-ocean-600 hover:text-ocean-700"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    {siteConfig.phoneTCI} (TCI)
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column - Payment */}
            <div className="lg:sticky lg:top-8">
              <div className="card p-6 sm:p-8">
                <div className="text-center mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-ocean-100 text-ocean-600 mb-4">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold mb-2">Pay Securely with PayPal</h2>
                  <p className="text-slate-600">
                    Click the button below to complete your $175 deposit payment.
                  </p>
                </div>

                <PayPalDepositButton />

                <div className="mt-6 pt-6 border-t border-gray-100">
                  <div className="flex items-center justify-center gap-4 text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                      <span>Secure Payment</span>
                    </div>
                    <span className="text-gray-300">|</span>
                    <div className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                      </svg>
                      <span>Credit Cards Accepted</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Trust Indicators */}
              <div className="mt-6 text-center">
                <p className="text-xs text-gray-400 mb-3">Trusted by anglers worldwide</p>
                <div className="flex items-center justify-center gap-4">
                  <div className="flex items-center gap-1 text-sm text-gray-500">
                    <svg className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span>TripAdvisor Rated</span>
                  </div>
                </div>
              </div>

              {/* Back Link */}
              <div className="mt-6 text-center">
                <Link 
                  href="/book" 
                  className="text-ocean-600 hover:text-ocean-700 text-sm inline-flex items-center gap-1"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                  </svg>
                  Back to Booking Page
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
