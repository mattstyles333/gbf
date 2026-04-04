import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import PageHero from "../../components/PageHero";
import BookingCTA from "../../components/BookingCTA";
import { fishingSpots } from "../../content";

interface Props {
  params: Promise<{ slug: string }>;
}

const mapImageBySlug: Record<string, string | undefined> = {
  "bottle-creek": "/images/gallery/bottle-creek-aerial-map.png",
};

export async function generateStaticParams() {
  return fishingSpots.map((spot) => ({ slug: spot.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const spot = fishingSpots.find((s) => s.slug === slug);
  if (!spot) return {};
  return {
    title: `${spot.name} — Bonefishing in Turks & Caicos`,
    description: spot.description,
    alternates: {
      canonical: `/fishing/${slug}/`,
    },
  };
}

export default async function FishingSpotPage({ params }: Props) {
  const { slug } = await params;
  const spot = fishingSpots.find((s) => s.slug === slug);

  if (!spot) {
    return (
      <div className="section-container py-32 text-center">
        <h1 className="text-3xl font-bold mb-4">Location not found</h1>
        <Link href="/fishing" className="btn-primary">Back to Fishing</Link>
      </div>
    );
  }

  const spotContent: Record<string, { body: string[]; tips: string[] }> = {
    "bottle-creek": {
      body: [
        "Nestled on the north coast of North Caicos, the Bottle Creek Reserve is a gem for bonefishing enthusiasts. This protected area is renowned for its pristine bonefish flats and diverse marine life.",
        "The clear waters and shallow flats make it an excellent spot for sight fishing, allowing anglers to easily spot and cast to bonefish. The bonefish here have likely never seen a Crazy Charlie or a bonefish jig and do not hesitate to investigate.",
        "Beyond bonefish, the reserve is home to a variety of other species, including tarpon, permit, and barracuda, making it a versatile fishing destination. The vast expanse of water ranging from mangroves to channels and small estuaries is largely unfished and bonefish are easily stalked.",
        "The productive flats are only minutes from the boat launch, so you spend less time running and more time actually fishing. That means lower fuel burn, straightforward pricing, and more shots at fish during the best part of the tide.",
      ],
      tips: [
        "Ankle-deep wading flats throughout",
        "Only minutes from boat launch",
        "Double-digit bonefish possible",
        "Also home to tarpon, permit, barracuda",
      ],
    },
    "east-bay": {
      body: [
        "To the South of Bottle Creek lies East Bay and a series of small cays that each has flats adjacent to channels that empty to the ocean. The flats are dry at low tide, but early on the rising tide can be very good for large fish coming out of the deeper water and onto the flats.",
        "These channels and flats continue through to the ocean side where the East Bay flats offer huge open shallow water that often hold large fish on a falling tide early in the day.",
        "There is a good flowing estuary back into Bottle Creek at the North end of this flat that may offer productive fishing when the prevailing Northeast wind overpowers the fishing in East Bay.",
        "The flats adjacent to the cays are best waded as it is difficult to get a boat high enough onto them to reach the productive flows, but the East Bay flats on the ocean side are set up perfectly to pole or drift over the gin-clear water looking for schools of meandering bonefish.",
        "There are also some small reefs lying just off the cays that offer opportunities for snorkeling, and one area in particular is well known by locals for collecting live conch for dinner.",
      ],
      tips: [
        "Best on rising tide for large fish",
        "Remote, never-fished flats",
        "Channels require local knowledge",
        "Snorkeling and reef nearby",
      ],
    },
    "north-caicos": {
      body: [
        "North Caicos is located east of Providenciales and gives access to a broad range of productive inshore water. The island is lush with vegetation and has enough infrastructure to make travel, lodging, and fishing straightforward.",
        "The waters surrounding North Caicos cover the full spectrum of classic bonefish habitat — from mangrove estuaries that act as nurseries for juvenile fish to open flats, cuts, and channels around Bottle Creek. This variety offers a challenge for novice and expert anglers alike.",
        "The flats and estuaries are largely unfished as they lie a good distance from the main tourist destination of Providenciales and so mostly out of range for the casual angler vacationing on the main island. The bonefish average 4–5lbs but much larger fish are common, with double digit bonefish caught regularly on both fly and conventional spinning gear.",
        "There are several areas that can be waded directly from land or the beach, but the productive tidal flats for the most part have to be reached by boat or kayak. The island is sufficiently far from the main tourist areas that there is little fishing pressure and the fish tend not to be skittish and will take a fly willingly.",
      ],
      tips: [
        "Average bonefish 4–5 lbs, larger common",
        "Wading directly from land possible",
        "Very little fishing pressure",
        "Mangrove estuaries for juveniles",
      ],
    },
  };

  const content = spotContent[slug] || { body: [], tips: [] };

  return (
    <>
      <PageHero
        title={spot.name}
        subtitle="One of the finest bonefish habitats in the Caribbean."
      />
      <section className="py-16 sm:py-20" style={{ background: "var(--background)" }}>
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div className="relative h-72 sm:h-96 rounded-xl overflow-hidden shadow-2xl mb-10">
                <Image
                  src={spot.imageUrl}
                  alt={`${spot.name} bonefishing`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 66vw"
                />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-6">About {spot.name}</h2>
              <div className="space-y-5 text-slate-500 leading-relaxed">
                {content.body.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>

              {slug === "bottle-creek" && (
                <div className="mt-10 card p-6 sm:p-8">
                  <h2 className="text-2xl font-bold mb-4">Why Bottle Creek Works Better Than Provo-Based Day Runs</h2>
                  <div className="space-y-4 text-slate-500 leading-relaxed">
                    <p>
                      One of Bottle Creek&apos;s biggest advantages is proximity. The water we fish is close to the launch,
                      protected from heavy exposure, and connected by a network of creeks, channels, and estuaries that flush on every tide.
                    </p>
                    <p>
                      Compared with running out of Providenciales, where some anglers may spend 10 to 20 miles running to fishable water,
                      Bottle Creek keeps you close to productive habitat. That means less time in exposed ocean, less fuel burn, and more time fishing the best part of the day.
                    </p>
                    <p>
                      The surrounding estuaries and tidal drains constantly refresh the fishery. Fish move through mangrove edges, cuts, and shallow flats as water rises and falls,
                      which is why this area can stay consistent across a range of conditions.
                    </p>
                  </div>
                  <div className="mt-6 flex flex-wrap gap-4">
                    <Link href="/travel" className="text-ocean-700 font-semibold hover:underline">Travel logistics</Link>
                    <Link href="/rates#guided" className="text-ocean-700 font-semibold hover:underline">Guided day rates</Link>
                  </div>
                  {mapImageBySlug[slug] && (
                    <div className="relative mt-6 rounded-xl overflow-hidden border border-slate-200 bg-slate-100 p-3">
                      <div className="relative h-[28rem] w-full">
                        <Image
                          src={mapImageBySlug[slug]!}
                          alt="Aerial view of Bottle Creek and surrounding flats"
                          fill
                          className="object-contain"
                          sizes="100vw"
                        />
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
            <div>
              <div className="card p-6 sticky top-24">
                <h3 className="text-lg font-bold mb-4">Key Highlights</h3>
                <ul className="space-y-3">
                  {spot.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-slate-600">
                      <svg className="w-5 h-5 text-ocean-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {h}
                    </li>
                  ))}
                </ul>
                {content.tips.length > 0 && (
                  <>
                    <hr className="my-5 border-slate-100" />
                    <h3 className="text-lg font-bold mb-4">Angler Notes</h3>
                    <ul className="space-y-2">
                      {content.tips.map((tip, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-slate-500">
                          <span className="text-ocean-400 shrink-0">+</span>
                          {tip}
                        </li>
                      ))}
                    </ul>
                  </>
                )}
                <hr className="my-5 border-slate-100" />
                <Link href="/book" className="btn-primary w-full justify-center">
                  Book
                </Link>
                <Link href="/fishing" className="btn-outline w-full justify-center mt-3">
                  All Fishing Locations
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
