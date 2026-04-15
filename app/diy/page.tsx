import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import PageHero from "../components/PageHero";
import BookingCTA from "../components/BookingCTA";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What should I bring?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Bring reef-friendly sunscreen, a hat, and polarized sunglasses. The breeze can feel cool, but sun protection still matters on the flats.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need polarized sunglasses?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Polarized lenses help cut glare so you can spot fish more easily on the flats.",
      },
    },
    {
      "@type": "Question",
      name: "Can I get lost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The mainland is usually visible and landmarks are easy to follow, but we still recommend fishing within the areas discussed during your briefing.",
      },
    },
    {
      "@type": "Question",
      name: "How deep is the water?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most fishing water is ankle to calf deep. Access channels can be much deeper and should be used only for travel between flats.",
      },
    },
  ],
};

export const metadata: Metadata = {
  title: "DIY Bonefishing — Turks & Caicos",
  description:
    "Self-guided bonefishing on North Caicos with kayak access, practical local advice, and lodge-based options for experienced anglers.",
  alternates: {
    canonical: "/diy/",
  },
  openGraph: {
    title: "DIY Bonefishing — Turks & Caicos",
    description: "Self-guided bonefishing on North Caicos with kayak access and lodge-based options for experienced anglers.",
    images: [
      {
        url: "/images/gallery/solo-on-the-flats-of.jpg",
        width: 1200,
        height: 630,
        alt: "DIY bonefishing on the flats of North Caicos",
      },
    ],
  },
};

export default function DIYPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <PageHero
        title="DIY Bonefishing"
        subtitle="For experienced anglers who prefer to find their own way — explore the pristine flats of North Caicos at your own pace."
      />
      <section className="py-16 sm:py-20" style={{ background: "var(--background)" }}>
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-5">
                Bonefishing Without a Guide
              </h2>
              <p className="text-slate-500 text-lg leading-relaxed mb-5">
                DIY bonefishing is a strong fit for anglers who already read tides,
                wade confidently, and want the freedom to fish on their own schedule.
              </p>
              <p className="text-slate-500 leading-relaxed mb-6">
                The Bonefish Lodge is situated directly across from good wading flats
                and the kayak launch is directly from the lodge. This allows you to pick
                and choose the best time to fish each flat — with the option of returning
                to the lodge as the tide goes slack and then returning later. It is
                approximately three-quarters of a mile from the water&apos;s edge at the
                lodge across to the mangroves of the closest productive flat.
              </p>
              <p className="text-slate-500 leading-relaxed mb-6">
                DIY works best when you want flexibility. You can fish early, rest when the
                tide goes slack, and head back out later without committing to a full guided day.
                It is one of the most practical ways to extend your time on the flats without adding guide or fuel cost.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/diy/fishing-kayaks" className="btn-primary">
                  Fishing Kayaks
                </Link>
                <Link href="/diy/guided-vs-diy" className="btn-outline !text-ocean-700 !border-ocean-400">
                  Guided vs. DIY
                </Link>
              </div>
            </div>
            <div className="relative h-80 sm:h-96 rounded-xl overflow-hidden shadow-2xl">
              <Image
                src="/images/gallery/solo-on-the-flats-of.jpg"
                alt="DIY bonefishing in North Caicos"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>

          {/* Options */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="/images/gbf/Manta_Ray.png"
                  alt="Fishing Kayaks"
                  fill
                  className="object-cover"
                  sizes="50vw"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">Fishing Kayaks</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-4">
                  Available in 11ft and 14ft sizes for flats fishing. Rent kayaks at the
                  lodge or separately. Perfect for anglers who want to explore the nearby
                  bonefishing flats on their own.
                </p>
                <p className="text-slate-500 text-sm leading-relaxed mb-4">
                  Kayaks are quiet, easy to launch, and ideal for reaching skinny water,
                  mangrove edges, and nearby estuaries that can be awkward to approach by boat.
                </p>
                <Link href="/diy/fishing-kayaks" className="text-ocean-600 font-semibold text-sm hover:underline">
                  Learn more &rarr;
                </Link>
              </div>
            </div>
            <div className="card overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="/images/gbf/Versaboard.jpg"
                  alt="Stand Up Paddleboards"
                  fill
                  className="object-cover"
                  sizes="50vw"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">Stand Up Paddleboards</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-4">
                  Versaboard SUPs available — ideal for sight fishing while standing,
                  with fly rod holders, anchor, and ample stowage for a full day on the
                  flats.
                </p>
                <Link href="/diy/fishing-kayaks" className="text-ocean-600 font-semibold text-sm hover:underline">
                  Learn more &rarr;
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Wading FAQ */}
      <section className="py-16 sm:py-20" style={{ background: "var(--card-bg)" }}>
        <div className="section-container">
          <h2 className="text-3xl font-bold mb-8">Wading for Bonefish</h2>
          <div className="max-w-3xl space-y-6 text-slate-500 leading-relaxed">
            <p>
              Wading for bonefish on the flats of North Caicos can be a productive way
              to stalk bonefish when they are a little wary and particularly during the
              middle of the day when the sun is high and visibility is good.
            </p>
            <p>
              The flats of North Caicos are ideal for wading — for the most part they are
              firm and sandy. We recommend comfortable footwear — just enough to protect
              the soles in case of a broken shell or piece of coral. Many anglers prefer
              Teva-type sandals with neoprene socks to limit sand rub.
            </p>
            <p>
              The water tends to be ankle deep to calf deep where we fish. There are
              channels that we use to navigate from one flat to another that can be up to
              8 feet deep, but you won&apos;t be anywhere close when wading. The mainland
              is almost always in sight, so landmarks are readily available.
            </p>
            <div className="mt-8">
              <h3 className="font-bold text-foreground mb-3">FAQ</h3>
              <div className="space-y-4">
                {[
                  { q: "What should I bring?", a: "Reef-friendly sunscreen, hat, and polarized sunglasses. The breeze can be deceptive — protect yourself even when it feels cool." },
                  { q: "Polarized sunglasses?", a: "Yes — check for polarization by looking through two pairs and rotating one 90 degrees. Broad sides are appreciated on the flats to limit glare and wind from the side." },
                  { q: "Can I get lost?", a: "No — the mainland is almost always visible and the flats lie between East Bay Cay and the mainland, 1–2 miles across. Landmarks are always available." },
                  { q: "How deep?", a: "Ankle to calf deep in the fishing areas. Channels up to 8ft must be navigated to reach the best wading water." },
                ].map((faq, i) => (
                  <div key={i} className="bg-slate-50 rounded-lg p-4">
                    <h4 className="font-semibold text-foreground mb-1">{faq.q}</h4>
                    <p className="text-sm text-slate-500">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <BookingCTA />
    </>
  );
}
