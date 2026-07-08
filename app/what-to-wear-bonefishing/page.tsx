import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import BookingCTA from "../components/BookingCTA";
import PageHero from "../components/PageHero";
import { siteConfig } from "../content";

const pageTitle = "What to Wear Bonefishing in Turks & Caicos | Gear Guide";
const pageDescription =
  "Not sure what to wear bonefishing? Our Turks & Caicos guide covers clothing, sunglasses, footwear & gear so you stay cool, spot more fish, and catch more.";

const clothingItems = [
  "Long-sleeve UPF fishing shirts (lightweight and breathable)",
  "Lightweight fishing trousers or shorts",
  "Buff or neck gaiter for sun protection",
  "Hat or cap with good coverage",
];

const sunglassItems = [
  "Polarised lenses (essential)",
  "Copper or amber lenses for the best all-round visibility",
  "Grey lenses for very bright conditions",
  "Wraparound fit to block side glare and wind",
];

const footwearItems = [
  "Lightweight sandals, Teva-style",
  "Neoprene socks for protection and less sand rub",
  "Trainers if you prefer closed shoes",
];

const accessoryItems = [
  "High SPF sunscreen, reef-safe preferred",
  "SPF lip balm",
  "Lightweight sun gloves, optional",
  "Light rain jacket",
];

const avoidItems = [
  "Heavy cotton clothing",
  "Jeans",
  "Dark colours that hold heat",
  "Bare feet on the flats",
  "Non-polarised sunglasses",
];

const packingItems = [
  "2-3 long sleeve fishing shirts",
  "1-2 lightweight trousers or shorts",
  "Polarised sunglasses",
  "Hat and buff",
  "Sandals and neoprene socks",
  "Sunscreen and lip balm",
  "Light rain jacket",
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What should you wear bonefishing?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Wear lightweight, breathable clothing with sun protection, including a long-sleeve UPF shirt, light trousers or shorts, a hat, polarised sunglasses, and appropriate footwear such as sandals with neoprene socks. This keeps you cool, protected, and able to spot fish effectively on the flats.",
      },
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: pageTitle,
  description: pageDescription,
  image: `${siteConfig.baseUrl}/images/gallery/ideal-gear-for-bonefishing.jpg`,
  author: {
    "@type": "Organization",
    name: siteConfig.name,
  },
  publisher: {
    "@type": "Organization",
    name: siteConfig.name,
  },
  mainEntityOfPage: `${siteConfig.baseUrl}/what-to-wear-bonefishing/`,
};

export const metadata: Metadata = {
  title: {
    absolute: pageTitle,
  },
  description: pageDescription,
  alternates: {
    canonical: "/what-to-wear-bonefishing/",
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    type: "article",
    url: "/what-to-wear-bonefishing/",
    images: [
      {
        url: "/images/gallery/ideal-gear-for-bonefishing.jpg",
        width: 1360,
        height: 1020,
        alt: "Bonefishing clothing, sunglasses, footwear, and gear for Turks & Caicos flats",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: ["/images/gallery/ideal-gear-for-bonefishing.jpg"],
  },
};

function BulletList({ items, marker = "•" }: { items: string[]; marker?: string }) {
  return (
    <ul className="space-y-2.5">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-2 text-sm text-slate-600 leading-relaxed">
          <span className="mt-0.5 text-ocean-500 font-bold">{marker}</span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default function WhatToWearBonefishingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <PageHero
        title="What to Wear Bonefishing in the Turks & Caicos"
        subtitle="A complete flats clothing, sunglasses, footwear, and packing guide so you stay cool, protected, and ready to spot more fish."
      />

      <section className="py-16 sm:py-20" style={{ background: "var(--background)" }}>
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_22rem] gap-10 lg:gap-14 items-start">
            <article className="max-w-3xl">
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                If you&apos;re planning a trip to the Turks &amp; Caicos, knowing what to wear bonefishing can make a huge difference to your comfort and success on the water.
              </p>

              <div className="card p-6 sm:p-8 mb-10 border-l-4 border-l-ocean-500">
                <p className="text-sm font-semibold uppercase tracking-widest text-ocean-600 mb-2">
                  Quick Answer
                </p>
                <h2 className="text-2xl font-bold mb-4">What should you wear bonefishing?</h2>
                <p className="text-slate-600 leading-relaxed">
                  Wear lightweight, breathable clothing with sun protection, including a long-sleeve UPF shirt, light trousers or shorts, a hat, polarised sunglasses, and appropriate footwear such as sandals with neoprene socks. This keeps you cool, protected, and able to spot fish effectively on the flats.
                </p>
              </div>

              <p className="text-slate-600 leading-relaxed mb-12">
                If you&apos;re joining one of our{" "}
                <Link href="/fishing" className="text-ocean-700 font-semibold hover:underline">
                  bonefishing trips in the Turks &amp; Caicos
                </Link>
                , you don&apos;t need specialist clothing gear. You just need the right basics for long, bright days on shallow water.
              </p>

              <section id="clothing" className="mb-12 scroll-mt-24">
                <h2 className="text-3xl font-bold mb-5">Bonefishing Clothing: What to Wear on the Flats</h2>
                <div className="space-y-4 text-slate-600 leading-relaxed mb-6">
                  <p>
                    The key to effective bonefishing clothing is staying cool while fully protected from the sun.
                  </p>
                  <p>
                    You&apos;ll typically spend 6-8 hours on the water, often with strong reflection off the flats.
                  </p>
                </div>
                <div className="card p-6">
                  <h3 className="text-xl font-bold mb-4">Recommended Clothing</h3>
                  <BulletList items={clothingItems} />
                </div>
                <p className="text-slate-600 leading-relaxed mt-5">
                  If you&apos;re wondering what to wear flats fishing, prioritise lightweight fabrics and full coverage over anything else.
                </p>
              </section>

              <section id="sunglasses" className="mb-12 scroll-mt-24">
                <h2 className="text-3xl font-bold mb-5">Best Polarised Sunglasses for Bonefishing</h2>
                <p className="text-slate-600 leading-relaxed mb-5">
                  Polarised sunglasses are one of the most important pieces of bonefishing gear.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="card p-6">
                    <h3 className="text-xl font-bold mb-4">They Help You</h3>
                    <BulletList
                      items={[
                        "Cut glare on the water",
                        "Spot bonefish more easily",
                        "Track fish movement on the flats",
                      ]}
                    />
                  </div>
                  <div className="card p-6">
                    <h3 className="text-xl font-bold mb-4">What to Look For</h3>
                    <BulletList items={sunglassItems} />
                  </div>
                </div>
                <p className="font-semibold text-foreground">
                  Without proper sunglasses, you will miss fish. It&apos;s that simple.
                </p>
              </section>

              <section id="footwear" className="mb-12 scroll-mt-24">
                <h2 className="text-3xl font-bold mb-5">Bonefishing Footwear: Sandals vs Wading Boots</h2>
                <div className="space-y-4 text-slate-600 leading-relaxed mb-6">
                  <p>
                    Unlike many bonefishing destinations, you don&apos;t need heavy wading boots in the Turks &amp; Caicos. Lightweight sandals with neoprene socks are usually the best footwear for comfort and protection on the flats.
                  </p>
                  <p>
                    Most of your fishing will be from the boat, with occasional light wading.
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-5">
                  <div className="card p-6">
                    <h3 className="text-xl font-bold mb-4">Recommended Footwear</h3>
                    <BulletList items={footwearItems} />
                  </div>
                  <div className="card p-6">
                    <h3 className="text-xl font-bold mb-4">This Protects Against</h3>
                    <BulletList items={["Sharp shells", "Coral", "Rough patches"]} />
                  </div>
                </div>
                <p className="text-slate-600 leading-relaxed">
                  This setup protects your feet while keeping you far cooler than traditional boots. If you&apos;re researching the best shoes for bonefishing, this is what most experienced anglers use here.
                </p>
              </section>

              <section id="gear" className="mb-12 scroll-mt-24">
                <h2 className="text-3xl font-bold mb-5">Essential Bonefishing Gear &amp; Accessories</h2>
                <p className="text-slate-600 leading-relaxed mb-6">
                  A solid bonefishing gear list doesn&apos;t need to be complicated, but a few extras make a big difference.
                </p>
                <div className="card p-6 mb-5">
                  <h3 className="text-xl font-bold mb-4">Must-Have Items</h3>
                  <BulletList items={accessoryItems} />
                </div>
                <p className="text-slate-600 leading-relaxed">
                  For a more detailed approach, see our{" "}
                  <Link href="/diy" className="text-ocean-700 font-semibold hover:underline">
                    DIY bonefishing guide
                  </Link>
                  .
                </p>
              </section>

              <section id="what-not-to-wear" className="mb-12 scroll-mt-24">
                <h2 className="text-3xl font-bold mb-5">What NOT to Wear Bonefishing</h2>
                <p className="text-slate-600 leading-relaxed mb-6">
                  Avoid common mistakes that reduce comfort and performance:
                </p>
                <div className="card p-6 bg-white/80">
                  <BulletList items={avoidItems} marker="×" />
                </div>
              </section>

              <section id="packing-list" className="mb-12 scroll-mt-24">
                <h2 className="text-3xl font-bold mb-5">Bonefishing Packing List (Quick Checklist)</h2>
                <p className="text-slate-600 leading-relaxed mb-6">
                  Here&apos;s a simple bonefishing packing list for the Turks &amp; Caicos:
                </p>
                <div className="card p-6 sm:p-8">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2">
                    {packingItems.map((item) => (
                      <div key={item} className="flex items-start gap-2 text-slate-600">
                        <span className="text-ocean-500 font-bold">✓</span>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              <section id="planning" className="scroll-mt-24">
                <div className="rounded-2xl bg-ocean-800 p-8 sm:p-10 text-white shadow-xl shadow-ocean-950/10">
                  <h2 className="text-3xl font-bold mb-4">Planning Your Bonefishing Trip</h2>
                  <p className="text-ocean-100 leading-relaxed mb-6">
                    If you&apos;re planning a trip and want local advice, take a look at our bonefishing trips in the Turks &amp; Caicos. Or get in touch. We&apos;re always happy to help you prepare properly.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <Link href="/fishing" className="btn-primary !bg-white !text-ocean-800 hover:!text-ocean-800">
                      View Bonefishing Trips
                    </Link>
                    <Link href="/book" className="btn-outline">
                      Ask a Gear Question
                    </Link>
                  </div>
                </div>
              </section>
            </article>

            <aside className="lg:sticky lg:top-28 space-y-6">
              <div className="relative h-72 rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/gallery/ideal-gear-for-bonefishing.jpg"
                  alt="Ideal gear for bonefishing in North Caicos"
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 22rem"
                />
              </div>
              <nav className="card p-6" aria-label="Guide sections">
                <h2 className="text-lg font-bold mb-4">Gear Guide</h2>
                <div className="space-y-2 text-sm">
                  {[
                    ["Clothing", "#clothing"],
                    ["Sunglasses", "#sunglasses"],
                    ["Footwear", "#footwear"],
                    ["Gear & Accessories", "#gear"],
                    ["What Not to Wear", "#what-not-to-wear"],
                    ["Packing List", "#packing-list"],
                  ].map(([label, href]) => (
                    <a key={href} href={href} className="block text-slate-600 hover:text-ocean-700">
                      {label}
                    </a>
                  ))}
                </div>
              </nav>
              <div className="card p-6 bg-white/90">
                <h2 className="text-lg font-bold mb-3">Local Tip</h2>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Light colours, broad sun coverage, and good polarised lenses matter more here than heavy technical wading gear.
                </p>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <BookingCTA
        title="Need Help Packing for the Flats?"
        subtitle="Send your dates and what you already own, and we&apos;ll help you prepare for bonefishing in the Turks & Caicos."
      />
    </>
  );
}
