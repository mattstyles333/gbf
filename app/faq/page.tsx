import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "../components/PageHero";
import BookingCTA from "../components/BookingCTA";
import { faqItems, faqSchema } from "../faqData";

export const metadata: Metadata = {
  title: "Bonefishing FAQ — Turks & Caicos",
  description:
    "Answers to common questions about guided trips, lodge packages, DIY kayak fishing, ferry schedules, tackle, deposits, and planning a bonefishing trip to North Caicos.",
  alternates: {
    canonical: "/faq/",
  },
  openGraph: {
    title: "Bonefishing FAQ — Turks & Caicos",
    description:
      "Answers to common questions about guided trips, lodge packages, DIY kayak fishing, ferry schedules, tackle, deposits, and planning a bonefishing trip to North Caicos.",
    images: [
      {
        url: "/images/gallery/fishing-along-the-mangroves.jpg",
        width: 2000,
        height: 1500,
        alt: "Bonefishing in North Caicos",
      },
    ],
  },
};

export default function FAQPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <PageHero
        title="FAQ"
        subtitle="Quick answers about rates, travel, payments, tackle, and choosing the right trip around Bottle Creek and North Caicos."
      />
      <section className="py-16 sm:py-20" style={{ background: "var(--background)" }}>
        <div className="section-container">
          <div className="max-w-4xl mx-auto space-y-5">
            {faqItems.map((item) => (
              <div key={item.question} className="card p-6 sm:p-8">
                <h2 className="text-xl font-bold mb-3">{item.question}</h2>
                <p className="text-slate-500 leading-relaxed">{item.answer}</p>
              </div>
            ))}
          </div>

          <div className="max-w-4xl mx-auto mt-10 card p-6 sm:p-8">
            <h2 className="text-xl font-bold mb-3">Still Need Help Choosing?</h2>
            <p className="text-slate-500 mb-4">
              If you already know you want guided fishing, a lodge package, or a DIY kayak plan,
              start with the relevant page below and then send your dates.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/rates" className="btn-primary">View Rates</Link>
              <Link href="/lodge" className="btn-outline !text-ocean-700 !border-ocean-400 hover:!bg-ocean-50">View Lodge</Link>
              <Link href="/book" className="btn-outline !text-ocean-700 !border-ocean-400 hover:!bg-ocean-50">Book Inquiry</Link>
            </div>
          </div>
        </div>
      </section>
      <BookingCTA title="Ready to Plan Your Dates?" subtitle="Send us your timing, group size, and ideal trip style and we&apos;ll point you toward the right plan." />
    </>
  );
}
