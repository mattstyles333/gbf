import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "../../components/PageHero";
import BookingCTA from "../../components/BookingCTA";

export const metadata: Metadata = {
  title: "Bonefish Season & Spawning — Turks & Caicos",
  description:
    "When bonefish spawn in the Turks & Caicos, how it affects fishing behavior, and why late spring is peak season for large bonefish.",
  alternates: {
    canonical: "/learn/bonefish-season/",
  },
};

export default function BonefishSeasonPage() {
  return (
    <>
      <PageHero
        title="Bonefish Season"
        subtitle="When and where bonefish spawn in the Turks & Caicos — and what it means for your fishing."
      />
      <section className="py-16 sm:py-20" style={{ background: "var(--background)" }}>
        <div className="section-container">
          <div className="max-w-3xl mx-auto">
            <div className="relative h-72 rounded-xl overflow-hidden shadow-2xl mb-12">
              <Image
                src="https://www.greatbonefishing.com/wp-content/uploads/2012/10/Fetured1.jpg"
                alt="Bonefish catch and release"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 75vw"
              />
            </div>

            <h2 className="text-3xl font-bold mb-6">Bonefish Spawning in the Caicos Islands</h2>
            <div className="space-y-5 text-slate-500 leading-relaxed mb-8">
              <p>
                Bonefish (<em>Albula vulpes</em>) are found in the shallow waters of the
                tropical and subtropical Atlantic Ocean, including the Caribbean Sea. They
                typically spawn in shallow, inshore waters near coral reefs, mangrove
                forests, and other coastal habitats.
              </p>
              <p>
                Spawning usually occurs at night, with the fish releasing their eggs and
                sperm into the water column. The eggs are fertilized externally and then
                drift with the current until they hatch into larvae.
              </p>
              <p>
                Bonefish are known for their wide range of habitats and their ability to
                adapt to different environments. They can be found in a variety of shallow
                water habitats, including estuaries, lagoons, and flats. They are often
                found in areas with strong currents and high turbidity, and are known to
                migrate long distances in search of suitable spawning and feeding grounds.
              </p>
              <p>
                The specific timing of bonefish spawning can vary depending on the region
                and environmental conditions. In some areas, spawning may occur
                year-round, while in others it may be more seasonal. Factors that can
                influence spawning include water temperature, salinity, and food
                availability.
              </p>
            </div>

            <div className="card p-8 bg-ocean-50 border border-ocean-100">
              <h3 className="text-xl font-bold mb-3">When Bonefish Spawn Here</h3>
              <p className="text-slate-600 leading-relaxed">
                The bonefish in the Turks &amp; Caicos typically spawn in{" "}
                <strong>late spring and continue through the end of May</strong>. This
                mostly occurs in the deeper channels and in many cases actually offshore
                in deepwater ravines and cuts. During this period, larger bonefish become
                more active and aggressive, making it an excellent time to target
                double-digit fish.
              </p>
            </div>
          </div>
        </div>
      </section>
      <BookingCTA />
    </>
  );
}
