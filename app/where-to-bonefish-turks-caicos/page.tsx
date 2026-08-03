import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import BookingCTA from "../components/BookingCTA";
import PageHero from "../components/PageHero";
import { siteConfig } from "../content";

const pageTitle = "Where to Bonefish Turks & Caicos | Bottle Creek Guide";
const pageDescription =
  "Discover where to bonefish in Turks & Caicos. Learn why Bottle Creek in North Caicos offers some of the most consistent flats fishing in the Caribbean.";

const locationFeatures = [
  "Multiple inlets and outlets",
  "Extensive shallow flats",
  "Protected areas in different wind conditions",
];

const tideAdvantages = [
  "There is almost always moving water somewhere",
  "You can fish an incoming tide in one area and an outgoing tide in another",
  "It allows us to stay on productive water throughout the day",
];

const fishingApproach = [
  "Move between different areas of the flats",
  "Match locations to the best stage of the tide",
  "Adjust based on wind, light, and conditions",
];

const fishMovement = ["Moving", "Feeding", "Transitioning between flats and channels"];

const flatTypes = [
  "Firm sand bottoms",
  "Light turtle grass",
  "Shallow, clear water",
  "Occasional coral and shell patches",
];

const flatBenefits = [
  "Sight fishing",
  "Wading in light footwear",
  "Targeting cruising and tailing fish",
];

const footwearItems = ["Lightweight sandals, Teva-style", "Neoprene socks"];

const footwearProtection = ["Shells", "Coral", "Rough patches"];

const locationReasons = [
  "Multiple tidal flows",
  "Large fishable area",
  "Flexible conditions",
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: pageTitle,
  description: pageDescription,
  image: `${siteConfig.baseUrl}/images/gallery/bottle-creek-aerial-map.png`,
  author: {
    "@type": "Organization",
    name: siteConfig.name,
  },
  publisher: {
    "@type": "Organization",
    name: siteConfig.name,
  },
  mainEntityOfPage: `${siteConfig.baseUrl}/where-to-bonefish-turks-caicos/`,
};

export const metadata: Metadata = {
  title: {
    absolute: pageTitle,
  },
  description: pageDescription,
  alternates: {
    canonical: "/where-to-bonefish-turks-caicos/",
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    type: "article",
    url: "/where-to-bonefish-turks-caicos/",
    images: [
      {
        url: "/images/gallery/bottle-creek-aerial-map.png",
        width: 1200,
        height: 630,
        alt: "Bottle Creek flats and channels in North Caicos",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: ["/images/gallery/bottle-creek-aerial-map.png"],
  },
};

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2.5">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-2 text-sm text-slate-600 leading-relaxed">
          <span className="mt-0.5 text-ocean-500 font-bold">•</span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function GuideCard({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="card p-6">
      <h3 className="text-xl font-bold mb-4">{title}</h3>
      <BulletList items={items} />
    </div>
  );
}

export default function WhereToBonefishTurksCaicosPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <PageHero
        title="Where to Bonefish in the Turks & Caicos"
        subtitle="A Bottle Creek guide to tides, flats, wading, and why North Caicos offers some of the most consistent bonefishing in the Caribbean."
      />

      <section className="py-16 sm:py-20" style={{ background: "var(--background)" }}>
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_22rem] gap-10 lg:gap-14 items-start">
            <article className="max-w-3xl">
              <p className="text-lg text-slate-600 leading-relaxed mb-5">
                If you&apos;re planning a trip, you may be wondering where to bonefish in the Turks &amp; Caicos.
              </p>
              <p className="text-slate-600 leading-relaxed mb-5">
                While there are several productive areas across the islands, one of the most consistent and rewarding fisheries is Bottle Creek in North Caicos.
              </p>
              <p className="text-slate-600 leading-relaxed mb-10">
                Why? Because of its unique tidal system, large shallow flats, and year-round fish movement, Bottle Creek offers some of the most reliable bonefishing conditions in the Caribbean.
              </p>

              <div className="relative h-72 sm:h-96 rounded-2xl overflow-hidden shadow-2xl mb-12">
                <Image
                  src="/images/gallery/bottle-creek-aerial-map.png"
                  alt="Aerial map of Bottle Creek flats and surrounding channels"
                  fill
                  priority
                  className="object-contain bg-white"
                  sizes="(max-width: 1024px) 100vw, 48rem"
                />
              </div>

              <section id="why-bottle-creek" className="mb-12 scroll-mt-24">
                <h2 className="text-3xl font-bold mb-5">Why Bottle Creek Is One of the Best Bonefishing Locations</h2>
                <p className="text-slate-600 leading-relaxed mb-6">
                  Bottle Creek is a vast network of shallow flats, channels, and mangrove edges located in North Caicos. What makes it special is how it connects to the ocean.
                </p>
                <GuideCard title="What Makes Bottle Creek Special" items={locationFeatures} />
                <p className="text-slate-600 leading-relaxed mt-5">
                  This combination creates a dynamic and highly productive bonefish habitat.
                </p>
              </section>

              <section id="tidal-system" className="mb-12 scroll-mt-24">
                <h2 className="text-3xl font-bold mb-5">The Key Advantage: A Unique Tidal System</h2>
                <div className="space-y-4 text-slate-600 leading-relaxed mb-6">
                  <p>
                    One of the biggest reasons Bottle Creek stands out is how the tides move across the flats.
                  </p>
                  <p>
                    Because the creek connects to open water through multiple inlets and channels, the tide does not move uniformly across the fishery.
                  </p>
                </div>
                <div className="card p-6 sm:p-8 border-l-4 border-l-ocean-500">
                  <p className="text-2xl font-bold text-foreground leading-snug">
                    There can be up to a 3.5-hour difference in tide timing across different areas of the flats.
                  </p>
                </div>
              </section>

              <section id="what-this-means" className="mb-12 scroll-mt-24">
                <h2 className="text-3xl font-bold mb-5">What This Means for Bonefishing</h2>
                <GuideCard title="The Practical Advantage" items={tideAdvantages} />
                <p className="text-xl font-semibold text-foreground leading-relaxed mt-5">
                  In simple terms: there is always somewhere fishing well.
                </p>
              </section>

              <section id="how-we-fish" className="mb-12 scroll-mt-24">
                <h2 className="text-3xl font-bold mb-5">How We Fish Bottle Creek</h2>
                <p className="text-slate-600 leading-relaxed mb-6">
                  Rather than waiting for a perfect tide window, we work the fishery as conditions change.
                </p>
                <GuideCard title="Our Approach" items={fishingApproach} />
                <p className="text-slate-600 leading-relaxed mt-5">
                  This approach allows us to consistently find fish, regardless of the exact time of day or tide phase.
                </p>
              </section>

              <section id="consistency" className="mb-12 scroll-mt-24">
                <h2 className="text-3xl font-bold mb-5">Why This Makes Bonefishing More Consistent</h2>
                <div className="space-y-4 text-slate-600 leading-relaxed mb-6">
                  <p>
                    Many destinations rely on narrow fishing windows tied to a single tide cycle.
                  </p>
                  <p>Bottle Creek is different.</p>
                  <p>Because of its staggered tidal flow, fish are constantly:</p>
                </div>
                <GuideCard title="Bonefish Are Constantly" items={fishMovement} />
                <p className="text-slate-600 leading-relaxed mt-5">
                  This makes it one of the most consistent bonefishing areas in the Turks &amp; Caicos.
                </p>
              </section>

              <section id="flats" className="mb-12 scroll-mt-24">
                <h2 className="text-3xl font-bold mb-5">What the Flats Are Like</h2>
                <p className="text-slate-600 leading-relaxed mb-6">
                  The flats in and around Bottle Creek offer a mix of bottom types, water depths, and visual sight-fishing scenarios.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <GuideCard title="Flat Conditions" items={flatTypes} />
                  <GuideCard title="Ideal For" items={flatBenefits} />
                </div>
              </section>

              <section id="wading" className="mb-12 scroll-mt-24">
                <h2 className="text-3xl font-bold mb-5">Do You Need to Wade?</h2>
                <div className="space-y-4 text-slate-600 leading-relaxed mb-6">
                  <p>
                    Most fishing is done from the boat, but some light wading can be useful.
                  </p>
                  <p>
                    Unlike many destinations, heavy wading boots are not necessary here.
                  </p>
                  <p>Most anglers are far more comfortable wearing:</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-5">
                  <GuideCard title="Recommended Footwear" items={footwearItems} />
                  <GuideCard title="Protection From" items={footwearProtection} />
                </div>
                <p className="text-slate-600 leading-relaxed">
                  This provides enough protection while keeping you cool in tropical conditions. For a full clothing breakdown, see our{" "}
                  <Link href="/what-to-wear-bonefishing" className="text-ocean-700 font-semibold hover:underline">
                    what to wear bonefishing guide
                  </Link>
                  .
                </p>
              </section>

              <section id="location-matters" className="mb-12 scroll-mt-24">
                <h2 className="text-3xl font-bold mb-5">Why Location Matters More Than Timing</h2>
                <p className="text-slate-600 leading-relaxed mb-6">
                  Many anglers focus on when to go bonefishing, but where you fish and how you adapt is often more important.
                </p>
                <GuideCard title="In Areas Like Bottle Creek" items={locationReasons} />
                <p className="text-slate-600 leading-relaxed mt-5">
                  Success depends more on local knowledge and movement than the specific month.
                </p>
              </section>

              <section id="more-guides" className="mb-12 scroll-mt-24">
                <h2 className="text-3xl font-bold mb-5">Explore More Bonefishing Guides</h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {[
                    ["What to Wear Bonefishing", "/what-to-wear-bonefishing"],
                    ["Best Time to Bonefish", "/learn/seasons"],
                    ["DIY Bonefishing Guide", "/diy"],
                  ].map(([label, href]) => (
                    <Link key={href} href={href} className="card p-5 group">
                      <span className="text-ocean-700 font-semibold group-hover:underline">{label}</span>
                      <span className="block text-sm text-slate-500 mt-2">Read more &rarr;</span>
                    </Link>
                  ))}
                </div>
              </section>

              <section id="plan-trip" className="scroll-mt-24">
                <div className="rounded-2xl bg-ocean-800 p-8 sm:p-10 text-white shadow-xl shadow-ocean-950/10">
                  <h2 className="text-3xl font-bold mb-4">Plan Your Bonefishing Trip</h2>
                  <p className="text-ocean-100 leading-relaxed mb-6">
                    If you want to experience Bottle Creek for yourself, take a look at our bonefishing trips in the Turks &amp; Caicos. Or get in touch. We&apos;re happy to advise on the best approach based on your trip timing and experience level.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <Link href="/fishing" className="btn-primary !bg-white !text-ocean-800 hover:!text-ocean-800">
                      View Bonefishing Trips
                    </Link>
                    <Link href="/book" className="btn-outline">
                      Ask for Local Advice
                    </Link>
                  </div>
                </div>
              </section>
            </article>

            <aside className="lg:sticky lg:top-28 space-y-6">
              <div className="relative h-72 rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/gallery/typical-flat-in-better.jpg"
                  alt="Shallow Bottle Creek flat in North Caicos"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 22rem"
                />
              </div>
              <nav className="card p-6" aria-label="Guide sections">
                <h2 className="text-lg font-bold mb-4">Bottle Creek Guide</h2>
                <div className="space-y-2 text-sm">
                  {[
                    ["Why Bottle Creek", "#why-bottle-creek"],
                    ["Tidal System", "#tidal-system"],
                    ["How We Fish It", "#how-we-fish"],
                    ["The Flats", "#flats"],
                    ["Wading", "#wading"],
                    ["Planning", "#plan-trip"],
                  ].map(([label, href]) => (
                    <a key={href} href={href} className="block text-slate-600 hover:text-ocean-700">
                      {label}
                    </a>
                  ))}
                </div>
              </nav>
              <div className="card p-6 bg-white/90">
                <h2 className="text-lg font-bold mb-3">Local Advantage</h2>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Bottle Creek&apos;s staggered tide means local movement matters. The best water can shift by area, wind, light, and tide stage throughout the same day.
                </p>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <BookingCTA
        title="Ready to Fish Bottle Creek?"
        subtitle="Tell us your dates and experience level, and we&apos;ll help you plan the right guided day on the North Caicos flats."
      />
    </>
  );
}
