import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "../../components/PageHero";
import BookingCTA from "../../components/BookingCTA";

export const metadata: Metadata = {
  title: "Catch & Release Bonefish Handling — Turks & Caicos",
  description:
    "Proper catch and release handling for bonefish: wet hands, horizontal hold, revive technique, and predator awareness to ensure fish survival.",
};

export default function CatchAndReleasePage() {
  return (
    <>
      <PageHero
        title="Catch & Release"
        subtitle="How to handle bonefish with care to ensure their survival after release."
      />
      <section className="py-16 sm:py-20" style={{ background: "var(--background)" }}>
        <div className="section-container">
          <div className="max-w-3xl mx-auto">
            <div className="relative h-72 rounded-xl overflow-hidden shadow-2xl mb-12">
              <Image
                src="https://www.greatbonefishing.com/wp-content/uploads/2023/12/BY-bonefish-12.jpg"
                alt="Proper bonefish handling"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 75vw"
              />
            </div>

            <p className="text-slate-500 text-lg leading-relaxed mb-10">
              Handling bonefish with the utmost care is essential for their survival
              post-release. These fish are sensitive and delicate, and improper handling
              can significantly impact their health and survival chances.
            </p>

            <div className="space-y-8">
              {[
                {
                  title: "Prepare Mentally",
                  desc: "Mentally prepare yourself for a quick and efficient handling process. This mindset helps reduce stress on both the angler and the fish.",
                },
                {
                  title: "Use Appropriate Gear",
                  desc: "Employ tackle that matches the size of the fish — ideally a fast 8WT for the flats fishing on North Caicos. This ensures a fair fight and reduces exhaustion for the bonefish.",
                },
                {
                  title: "Wet Your Hands First",
                  desc: "Before touching the bonefish, ensure your hands are wet to protect its mucous layer, which is crucial for its immune system. Dry hands strip this protective coating.",
                },
                {
                  title: "Gentle but Firm Grip",
                  desc: "Secure the fish gently but firmly. Avoid squeezing, particularly around the midsection to prevent internal damage to organs.",
                },
                {
                  title: "Always Hold Horizontally",
                  desc: "Always support the bonefish horizontally. Vertical holding can damage its internal organs due to unnatural pressure — never hold a bonefish by its jaw alone.",
                },
                {
                  title: "Support Under the Belly",
                  desc: "Place one hand under the belly and use the other hand to support near the tail. This distributes weight evenly and reduces stress on the fish.",
                },
                {
                  title: "Revive if Necessary",
                  desc: "If the bonefish appears lethargic or stressed, gently hold it upright in the water and move it back and forth to ensure water passes through its gills, aiding in oxygenation.",
                },
                {
                  title: "Check for Predators",
                  desc: "Before releasing, check for predators such as sharks. Releasing a bonefish in the presence of predators can result in its quick demise.",
                },
              ].map((step, i) => (
                <div key={i} className="flex gap-5">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-ocean-100 text-ocean-700 flex items-center justify-center font-bold text-sm">
                    {i + 1}
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1">{step.title}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 card p-8 bg-green-50 border border-green-100">
              <h3 className="font-bold text-green-800 mb-3">Conservation Commitment</h3>
              <p className="text-green-700 text-sm leading-relaxed">
                By following these guidelines, anglers ensure that they are not only
                enjoying the sport of fishing but also contributing to the conservation
                and sustainable management of bonefish populations in the Turks &amp;
                Caicos Islands.
              </p>
            </div>
          </div>
        </div>
      </section>
      <BookingCTA />
    </>
  );
}
