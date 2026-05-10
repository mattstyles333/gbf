import type { Metadata } from "next";
import Link from "next/link";
import BookingCTA from "../components/BookingCTA";
import { siteConfig } from "../content";

export const metadata: Metadata = {
  title: "Deposit Received — Great Bone Fishing",
  description:
    "Your Great Bone Fishing deposit payment was completed. We will match it with your booking inquiry and follow up with trip logistics.",
  alternates: {
    canonical: "/payment-successful/",
  },
  robots: {
    index: false,
    follow: false,
  },
};

export default function PaymentSuccessfulPage() {
  return (
    <>
      <section className="py-16 sm:py-20" style={{ background: "var(--background)" }}>
        <div className="section-container">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-green-100 text-green-700">
              <svg className="h-10 w-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-ocean-600">
              Deposit Received
            </p>
            <h1 className="mb-5 text-4xl font-bold sm:text-5xl">Thank You for Your Payment</h1>
            <p className="mx-auto max-w-2xl text-lg leading-relaxed text-slate-500">
              Your $175 booking deposit has been completed through PayPal. We will match the payment
              with your booking inquiry, confirm it on our calendar, and follow up with contacts,
              logistics, and fishing notes for your trip.
            </p>
          </div>

          <div className="mx-auto mt-10 grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3">
            {[
              {
                title: "We Match the Payment",
                text: "We connect your PayPal deposit with your inquiry, dates, and trip option before confirming final details.",
              },
              {
                title: "You Get Logistics",
                text: "Expect contact details, ferry or transfer guidance, meeting information, and any notes specific to your fishing dates.",
              },
              {
                title: "Balance Comes Later",
                text: "Your deposit is applied to your final balance. Remaining payment can be handled using the options discussed during booking.",
              },
            ].map((item) => (
              <div key={item.title} className="card p-6 text-left">
                <h2 className="mb-2 text-lg font-bold">{item.title}</h2>
                <p className="text-sm leading-relaxed text-slate-500">{item.text}</p>
              </div>
            ))}
          </div>

          <div className="card mx-auto mt-10 max-w-3xl p-6 sm:p-8">
            <h2 className="mb-3 text-2xl font-bold">Need to Reach Us?</h2>
            <p className="mb-5 text-slate-500">
              If your payment was made under a different name or email than your inquiry, send us a quick note so we can match it correctly.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href={`mailto:${siteConfig.email}`} className="btn-primary">
                Email {siteConfig.email}
              </a>
              <a
                href={`tel:${siteConfig.phoneUSA.replace(/[^0-9+]/g, "")}`}
                className="btn-outline !border-ocean-400 !text-ocean-700 hover:!bg-ocean-50"
              >
                Call {siteConfig.phoneUSA}
              </a>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href="/book" className="text-sm font-semibold text-ocean-700 hover:underline">
              Back to booking
            </Link>
            <Link href="/travel" className="text-sm font-semibold text-ocean-700 hover:underline">
              Review travel logistics
            </Link>
            <Link href="/faq" className="text-sm font-semibold text-ocean-700 hover:underline">
              Read common questions
            </Link>
          </div>
        </div>
      </section>
      <BookingCTA title="Questions Before You Travel?" subtitle="Call or email us if anything about your booking, deposit, or logistics is unclear." />
    </>
  );
}
