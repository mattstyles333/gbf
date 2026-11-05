import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "../../components/PageHero";
import BookingCTA from "../../components/BookingCTA";
import { siteConfig } from "../../content";

const pageTitle = "Where to Fish by Tide | Bottle Creek, North Caicos";
const pageDescription =
  "Where to bonefish at each tide stage around Bottle Creek and North Caicos. Northern mouths lead; Bottle Creek Mouth lags by up to about 3.5 hours. Sports-fishing reference only.";

const tides4fishingUrl =
  "https://tides4fishing.com/tc/turks-and-caicos-islands/bottle-creek";

const stages = [
  {
    id: "early-flood",
    label: "Early flood",
    where: "North Mouth / Greenwich first, then East Bay and South Cays as ocean lifts the outer flats.",
    why: "Ocean leads. Large fish often push onto drying flats from deeper water.",
  },
  {
    id: "mid-flood",
    label: "Mid flood",
    prime: true,
    where: "Interior Bottle Creek flats, mangrove edges, and cay cuts — wherever water is still rising.",
    why: "Best general window. Match mid-incoming on the flat you are on, not the phone's \"high tide.\"",
  },
  {
    id: "high-slack",
    label: "High slack",
    where: "Edges of flooded flats and deeper cuts. Stay mobile.",
    why: "Ocean may be slack while the south Mouth still fills or starts dumping.",
  },
  {
    id: "ebb",
    label: "Ebb",
    where: "Ocean-side East Bay early in the drop; drains, cuts, and the south Mouth as the interior drains.",
    why: "Fish follow the drain. Interior can stay high while North Mouth falls hard.",
  },
  {
    id: "low-slack",
    label: "Low slack",
    where: "Channels beside flats and deeper troughs near mouths. Rest skinny water.",
    why: "Flats dry or skinny. The south end lags — one area dumping while another starts flooding.",
  },
] as const;

const openings = [
  {
    name: "Leeward Mouth",
    note: "Small northwest inlet near Horsestable / Greenwich. Close to the published clock.",
  },
  {
    name: "North Mouth (Greenwich Creek)",
    note: "Primary ocean inlet opposite Bay Cay. Least lag — treat the phone table as this clock.",
  },
  {
    name: "East Bay cay cuts",
    href: "/fishing/east-bay/",
    note: "Cuts among Bay, Major Hill, and East Bay Cays. Each keeps a short clock of its own.",
  },
  {
    name: "East Bay / South Cays",
    href: "/fishing/east-bay/",
    note: "Ocean-side channels and flats. Can rise while the lagoon is still falling, and the reverse.",
  },
  {
    name: "Bottle Creek Mouth",
    href: "/fishing/bottle-creek/",
    note: "About five miles south to the Caicos Banks — most lag. Causeway culverts at the southeast end choke exchange but do not stop it.",
  },
] as const;

const lagBands = [
  {
    zone: "North Mouth / Greenwich",
    vsPhone: "~0–1 h",
    behaviour: "Closest to published highs and lows.",
  },
  {
    zone: "Interior settlement flats",
    vsPhone: "Mid lag",
    behaviour: "Behind the inlet. Mangrove drains keep moving after the mouth turns.",
  },
  {
    zone: "East Bay cay & South Cays cuts",
    vsPhone: "Own clocks",
    behaviour: "May rise while the lagoon falls, and the reverse.",
  },
  {
    zone: "Toward Bottle Creek Mouth",
    vsPhone: "Up to ~2–3.5 h",
    behaviour: "Still dumping after the north is already flooding.",
  },
] as const;

const howToSteps = [
  {
    title: "Read the table as a north-mouth clock",
    body: "A published Bottle Creek tide table is a useful clock for the northern inlets. It is not a clock for every flat.",
  },
  {
    title: "Aim for mid-incoming on the flat you are on",
    body: "Prime water is rising water under your feet, not the phone’s high-tide time.",
  },
  {
    title: "Use East Bay when the lagoon stage is wrong",
    body: "Ocean-side flats and cay cuts can fish a different stage. A strong northeast wind may also push the estuary at the north end of East Bay back into Bottle Creek.",
  },
  {
    title: "Allow for springs, neaps, and wind",
    body: "Spring tides sharpen lag and current. Neaps soften them. Wind can delay or stack water on a flat.",
  },
] as const;

const relatedGuides = [
  {
    href: "/fishing/bottle-creek/",
    label: "Bottle Creek",
    desc: "The reserve, launch, and interior flats.",
  },
  {
    href: "/fishing/east-bay/",
    label: "East Bay & South Cays",
    desc: "Ocean-side channels, cay cuts, and falling-tide water.",
  },
  {
    href: "/where-to-bonefish-turks-caicos/",
    label: "Where to bonefish",
    desc: "Why the staggered tide makes this fishery consistent.",
  },
] as const;

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
  mainEntityOfPage: `${siteConfig.baseUrl}/fishing/tides/`,
};

export const metadata: Metadata = {
  title: {
    absolute: pageTitle,
  },
  description: pageDescription,
  alternates: {
    canonical: "/fishing/tides/",
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    type: "article",
    url: "/fishing/tides/",
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

export default function TideFishingAreasPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <PageHero
        title="Where to Fish by Tide"
        subtitle="Ocean tide hits the short northern mouths first. Water then crosses about five square miles of shallow flats before filling and draining the long southern Bottle Creek Mouth."
        description="Sports-fishing reference for Bottle Creek / North Caicos — not for navigation."
      />

      <section className="py-10 sm:py-12" style={{ background: "var(--card-bg)" }}>
        <div className="section-container">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              {
                kicker: "Northern mouths",
                body: "Lead. Ocean hits Leeward and North Mouth first, close to the published clock.",
              },
              {
                kicker: "South Mouth",
                body: "Lags. Water is still filling or dumping after the north has already turned.",
              },
              {
                kicker: "~3.5 hour spread",
                body: "One flat can flood while another still ebbs. Guide estimate across the fishery.",
              },
            ].map((item) => (
              <div key={item.kicker} className="rounded-2xl border border-ocean-100 bg-white p-5 sm:p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-ocean-600 mb-2">
                  {item.kicker}
                </p>
                <p className="text-slate-600 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="fish-here"
        className="relative pt-4 pb-16 sm:pb-20"
        style={{ background: "var(--background)" }}
      >
        <nav
          aria-label="Tide stages"
          className="sticky top-16 lg:top-20 z-40 border-y border-ocean-200/80 bg-[color:var(--background)]/95 shadow-sm backdrop-blur-md"
        >
          <div className="section-container">
            <div className="flex gap-2 overflow-x-auto py-3 snap-x [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
              {stages.map((stage) => (
                <a
                  key={stage.id}
                  href={`#${stage.id}`}
                  className="shrink-0 snap-start rounded-full border border-ocean-200 bg-white px-3.5 py-2 text-sm font-semibold text-ocean-800 hover:bg-ocean-50 hover:text-ocean-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ocean-500"
                >
                  {stage.label}
                  {stage.id === "mid-flood" ? (
                    <span className="ml-1.5 text-xs font-semibold uppercase tracking-wide text-sand-600">
                      Prime
                    </span>
                  ) : null}
                </a>
              ))}
            </div>
          </div>
        </nav>

        <div className="section-container pt-10 sm:pt-12">
          <div className="max-w-3xl mb-8">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-ocean-600 mb-2">
              Fish here when…
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold mb-3">Where to stand on each stage</h2>
            <p className="text-slate-600 leading-relaxed">
              Jump to a stage, or scan the cards. Match the water on the flat you are on — not a single high-tide time.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
            {stages.map((stage) => (
              <article
                key={stage.id}
                id={stage.id}
                className={`card !overflow-visible p-5 sm:p-6 scroll-mt-36 lg:scroll-mt-40 target:bg-ocean-50 target:ring-2 target:ring-ocean-500 ${
                  stage.id === "mid-flood" ? "border-l-4 border-l-ocean-500" : ""
                }`}
              >
                <div className="flex items-start justify-between gap-3 mb-4">
                  <h3 className="text-xl font-bold leading-snug">{stage.label}</h3>
                  {stage.id === "mid-flood" ? (
                    <span className="shrink-0 rounded-full bg-sand-100 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-sand-700">
                      Prime
                    </span>
                  ) : null}
                </div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-ocean-600 mb-1.5">
                  Where
                </p>
                <p className="text-sm text-slate-600 leading-relaxed mb-4">{stage.where}</p>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-ocean-600 mb-1.5">
                  Why
                </p>
                <p className="text-sm text-slate-600 leading-relaxed">{stage.why}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20" style={{ background: "var(--card-bg)" }}>
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-ocean-600 mb-2">
                Five openings · north to south
              </p>
              <h2 className="text-3xl font-bold mb-6">How water enters and leaves</h2>
              <div className="flex gap-4">
                <div className="flex flex-col items-center pt-1" aria-hidden="true">
                  <span className="text-[11px] font-bold tracking-widest text-ocean-600">N</span>
                  <span className="mt-2 mb-2 w-px flex-1 bg-ocean-200" />
                  <span className="text-[11px] font-bold tracking-widest text-ocean-600">S</span>
                </div>
                <ol className="flex-1 space-y-4">
                  {openings.map((opening, index) => (
                    <li key={opening.name} className="flex gap-3">
                      <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-ocean-800 text-xs font-bold text-white">
                        {index + 1}
                      </span>
                      <div>
                        <h3 className="text-lg font-bold leading-snug">
                          {"href" in opening ? (
                            <Link href={opening.href} className="hover:text-ocean-700">
                              {opening.name}
                            </Link>
                          ) : (
                            opening.name
                          )}
                        </h3>
                        <p className="text-sm text-slate-600 leading-relaxed mt-1">{opening.note}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-ocean-600 mb-2">
                Lag bands
              </p>
              <h2 className="text-3xl font-bold mb-3">Versus a Bottle Creek tide table</h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                These are guide estimates against a published Bottle Creek table — not gauge readings. There is no NOAA station inside the lagoon.
              </p>
              <div className="overflow-x-auto rounded-2xl border border-ocean-100 bg-white">
                <table className="w-full text-left text-sm">
                  <caption className="sr-only">
                    Tide lag bands versus a published Bottle Creek phone tide table
                  </caption>
                  <thead className="bg-ocean-800 text-white">
                    <tr>
                      <th scope="col" className="px-4 py-3 font-semibold">
                        Zone
                      </th>
                      <th scope="col" className="px-4 py-3 font-semibold whitespace-nowrap">
                        Vs phone tide
                      </th>
                      <th scope="col" className="px-4 py-3 font-semibold">
                        Behaviour
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {lagBands.map((row) => (
                      <tr key={row.zone} className="border-t border-ocean-100 align-top">
                        <th scope="row" className="px-4 py-3 font-semibold text-foreground">
                          {row.zone}
                        </th>
                        <td className="px-4 py-3 whitespace-nowrap text-ocean-800 font-medium">
                          {row.vsPhone}
                        </td>
                        <td className="px-4 py-3 text-slate-600">{row.behaviour}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20" style={{ background: "var(--background)" }}>
        <div className="section-container">
          <div className="max-w-3xl mb-10">
            <h2 className="text-3xl font-bold mb-3">How to use a tide table</h2>
            <p className="text-slate-600 leading-relaxed">
              Daily times come from outside tables. Use them as a starting clock, then move with the water in front of you.
            </p>
          </div>
          <ol className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {howToSteps.map((step, index) => (
              <li key={step.title} className="card p-6">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-ocean-800 text-sm font-bold text-white mb-3">
                  {index + 1}
                </span>
                <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{step.body}</p>
              </li>
            ))}
          </ol>
          <p className="mt-6 text-sm text-slate-500">
            Daily Bottle Creek times:{" "}
            <a href={tides4fishingUrl} target="_blank" rel="noopener noreferrer">
              tides4fishing tide table
            </a>
            .
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20" style={{ background: "var(--card-bg)" }}>
        <div className="section-container">
          <div className="rounded-2xl border border-sand-200 bg-sand-50 p-6 sm:p-8 mb-10">
            <h2 className="text-2xl font-bold mb-3">Limits</h2>
            <p className="text-slate-600 leading-relaxed">
              There is no NOAA gauge inside the lagoon. The spread of up to about 3.5 hours is guide and local knowledge, not a published station. These notes are a sports-fishing reference only and are not for navigation.
            </p>
          </div>

          <h2 className="text-3xl font-bold mb-6">Keep reading</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
            {relatedGuides.map((guide) => (
              <Link key={guide.href} href={guide.href} className="card p-5 group">
                <span className="text-ocean-700 font-semibold group-hover:underline">{guide.label}</span>
                <span className="block text-sm text-slate-500 mt-2">{guide.desc}</span>
                <span className="block text-sm text-ocean-600 mt-3 font-semibold">Read more &rarr;</span>
              </Link>
            ))}
          </div>
          <Link href="/book/" className="btn-primary">
            Ask about dates and tides
          </Link>
        </div>
      </section>

      <BookingCTA
        title="Want a day matched to the tide?"
        subtitle="Tell us your dates and we will plan the flats around Bottle Creek and East Bay for the water in front of you."
      />
    </>
  );
}
