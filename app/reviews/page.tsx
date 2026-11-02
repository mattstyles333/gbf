import type { Metadata } from "next";
import Link from "next/link";
import BookingCTA from "../components/BookingCTA";
import {
  guestReviews,
  siteConfig,
  tripAdvisorSummary,
  tripAdvisorUrl,
} from "../content";
import ReviewsHero from "./ReviewsHero";

export const metadata: Metadata = {
  title: "Guest Reviews — Bonefishing in Turks & Caicos",
  description:
    "Read 5-star guest reviews of guided bonefishing at Bottle Creek, North Caicos. 4.7 from 62 Tripadvisor reviews, plus recent Google feedback from days on the flats.",
  alternates: {
    canonical: "/reviews/",
  },
  openGraph: {
    title: "Guest Reviews — Bonefishing in Turks & Caicos",
    description:
      "5-star guest reviews of guided bonefishing at Bottle Creek, North Caicos. 4.7 from 62 Tripadvisor reviews.",
    images: [
      {
        url: "/images/gallery/sightfishing-for-bonefish.jpg",
        width: 1200,
        height: 630,
        alt: "Casting for bonefish on the flats of Bottle Creek, North Caicos",
      },
    ],
  },
};

const reviewsSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: siteConfig.name,
  url: `${siteConfig.baseUrl}/reviews/`,
  image: `${siteConfig.baseUrl}/images/gallery/sightfishing-for-bonefish.jpg`,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Bottle Creek",
    addressLocality: "North Caicos",
    addressCountry: "TC",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: tripAdvisorSummary.rating,
    reviewCount: tripAdvisorSummary.reviewCount,
    bestRating: "5",
    worstRating: "1",
  },
  review: guestReviews.map((review) => ({
    "@type": "Review",
    author: {
      "@type": "Person",
      name: review.reviewer,
    },
    reviewBody: review.quote,
    reviewRating: {
      "@type": "Rating",
      ratingValue: "5",
      bestRating: "5",
    },
    publisher: {
      "@type": "Organization",
      name: review.source,
    },
  })),
};

export default function ReviewsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewsSchema) }}
      />
      <ReviewsHero
        rating={tripAdvisorSummary.rating}
        reviewCount={tripAdvisorSummary.reviewCount}
      />

      <section className="py-16 sm:py-20" style={{ background: "var(--background)" }}>
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold mb-3">Recent 5-Star Reviews</h2>
            <p className="text-slate-500 text-lg leading-relaxed mb-10 max-w-3xl">
              Guests come for the hard-bottom flats around Bottle Creek and stay for the
              guiding. These are recent 5-star notes from Tripadvisor and Google about days
              on the water with our North Caicos team.
            </p>

            <div className="grid grid-cols-1 gap-5">
              {guestReviews.map((review) => (
                <article key={review.reviewer} className="card p-6 sm:p-8">
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 mb-2">
                    <h3 className="text-lg font-semibold text-foreground">{review.reviewer}</h3>
                    <p className="text-sm text-slate-500">{review.meta}</p>
                  </div>
                  <p className="text-sand-500 tracking-[0.14em] mb-3" aria-label="5 out of 5 stars">
                    ★★★★★
                  </p>
                  <p className="text-slate-600 leading-relaxed mb-4">“{review.quote}”</p>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-ocean-600">
                    {review.source}
                  </p>
                </article>
              ))}
            </div>

            <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
              <a
                href={tripAdvisorUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Read all Tripadvisor reviews
              </a>
              <Link
                href="/book"
                className="btn-outline !text-ocean-700 !border-ocean-400 hover:!bg-ocean-50"
              >
                Book a Trip
              </Link>
            </div>

            <p className="mt-8 text-center text-sm text-slate-500">
              Reviews are genuine guest feedback from Tripadvisor and Google. Full reviews
              are available on those platforms.
            </p>
          </div>
        </div>
      </section>

      <BookingCTA
        title="Ready to Fish Bottle Creek?"
        subtitle="Start with a guided day on North Caicos. Tell us your dates and we&apos;ll match you with the right water, tides, and pace."
      />
    </>
  );
}
