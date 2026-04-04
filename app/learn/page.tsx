import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "../components/PageHero";
import BookingCTA from "../components/BookingCTA";

export const metadata: Metadata = {
  title: "Learn — Bonefishing in Turks & Caicos",
  description:
    "Learn about bonefishing in the Turks & Caicos: seasons, bonefish behavior, flies, tackle, wading, and catch & release best practices.",
};

export default function LearnPage() {
  const topics = [
    {
      href: "/learn/seasons",
      title: "Fishing Seasons",
      desc: "Weather, tides, and fish activity across autumn, winter, spring, and summer on the flats of the Caicos Bank.",
      icon: "📅",
    },
    {
      href: "/learn/bonefish-season",
      title: "Bonefish Season & Spawning",
      desc: "When bonefish spawn in the Turks & Caicos, how it affects fishing, and why this is the peak period for large fish.",
      icon: "🌊",
    },
    {
      href: "/learn/bonefish-flies",
      title: "Bonefish Flies",
      desc: "The best flies for the Turks & Caicos: Crazy Charlie, Gotcha, Merkin, Clouser Minnows, and when to use each.",
      icon: "🪰",
    },
    {
      href: "/learn/catch-and-release",
      title: "Catch & Release Handling",
      desc: "How to handle bonefish with care: wet hands, horizontal hold, proper release technique, and predator awareness.",
      icon: "🐟",
    },
  ];

  return (
    <>
      <PageHero
        title="Learn"
        subtitle="Everything you need to know to plan and make the most of your bonefishing trip to the Turks & Caicos."
      />
      <section className="py-16 sm:py-20" style={{ background: "var(--background)" }}>
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {topics.map((topic) => (
              <Link key={topic.href} href={topic.href} className="card p-8 group">
                <div className="text-4xl mb-4">{topic.icon}</div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-ocean-600 transition-colors">
                  {topic.title}
                </h3>
                <p className="text-slate-500 leading-relaxed mb-4">{topic.desc}</p>
                <span className="text-ocean-600 font-semibold text-sm group-hover:underline">
                  Read more &rarr;
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <BookingCTA />
    </>
  );
}
