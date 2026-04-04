import type { Metadata } from "next";
import fs from "node:fs";
import path from "node:path";
import PageHero from "../components/PageHero";
import BookingCTA from "../components/BookingCTA";
import GalleryMasonry from "./GalleryMasonry";

export const metadata: Metadata = {
  title: "Photo Gallery — Bonefishing in Turks & Caicos",
  description:
    "Browse Great Bone Fishing photos from North Caicos: bonefish, flats, guided days, DIY sessions, lodge views, and release moments.",
  alternates: {
    canonical: "/gallery/",
  },
  openGraph: {
    title: "Photo Gallery — Bonefishing in Turks & Caicos",
    description:
      "Browse Great Bone Fishing photos from North Caicos: bonefish, flats, guided days, DIY sessions, lodge views, and release moments.",
    images: [
      {
        url: "/images/gallery/fishing-along-the-mangroves.jpg",
        width: 2000,
        height: 1500,
        alt: "Bonefishing along the mangroves in North Caicos",
      },
    ],
  },
};

const galleryDir = path.join(process.cwd(), "public/images/gallery");

const galleryTitleOverrides: Record<string, string> = {
  "gallery-capture-00.jpg": "Angler on the Flats",
  "gallery-capture-01.jpg": "North Caicos Water Color",
  "gallery-capture-02.jpg": "Bonefish Release Moment",
  "gallery-capture-03.jpg": "Shallow Water Stalk",
  "gallery-capture-04.jpg": "Flats Edge Detail",
  "gallery-capture-05.jpg": "Bonefish in Hand",
  "gallery-capture-06.jpg": "Quiet Flat at Mid-Tide",
  "gallery-capture-07.jpg": "Cruising Fish on the Bank",
  "gallery-capture-08.jpg": "Wading Light on Bottle Creek",
  "gallery-capture-09.jpg": "Skiff and Flats View",
  "gallery-capture-10.jpg": "North Caicos Bonefish Detail",
  "gallery-feature-01.jpg": "Great Bone Fishing Signature Image",
  "great-bone-fishing-mark.jpg": "Great Bone Fishing Brand Mark",
  "calf-deep-wading-for.jpg": "Calf-Deep Wading on the Flats",
  "darel-bonefishing-on-the-flats.jpg": "Darel on the Flats",
  "another-school-size-bonefish.jpg": "School-Size Bonefish",
  "double-figure-bonefish-alt.jpg": "Double-Figure Bonefish",
  "double-figure-bonefish.jpg": "Double-Figure Bonefish Close-Up",
  "north-caicos-flats-around.jpg": "North Caicos Flats Panorama",
  "photo0jpg.jpg": "Guided Day on Bottle Creek",
  "mangrove-roots.jpg": "Mangrove Edge Detail",
  "the-great-bonefishing.jpg": "Great Bone Fishing on the Water",
  "too-skinny-for-the-flats.jpg": "Too Skinny for the Flats",
  "saw-this-guy-coming-from.jpg": "Spotted This Fish Coming In",
  "not-the-biggest-but-beautiful.jpg": "Not the Biggest, but Beautiful",
};

const galleryCategoryOverrides: Record<string, string> = {
  "gallery-feature-01.jpg": "Brand",
  "great-bone-fishing-mark.jpg": "Brand",
  "gallery-capture-00.jpg": "Flats & Water",
  "gallery-capture-01.jpg": "Flats & Water",
  "gallery-capture-02.jpg": "Catch & Release",
  "gallery-capture-03.jpg": "Flats & Water",
  "gallery-capture-04.jpg": "Flats & Water",
  "gallery-capture-05.jpg": "Bonefish",
  "gallery-capture-06.jpg": "Flats & Water",
  "gallery-capture-07.jpg": "Bonefish",
  "gallery-capture-08.jpg": "Flats & Water",
  "gallery-capture-09.jpg": "Flats & Water",
  "gallery-capture-10.jpg": "Bonefish",
  "mangrove-roots.jpg": "Flats & Water",
  "calf-deep-wading-for.jpg": "Flats & Water",
  "darel-bonefishing-on-the-flats.jpg": "Flats & Water",
  "north-caicos-flats-around.jpg": "Flats & Water",
  "photo0jpg.jpg": "Guided Days",
  "the-great-bonefishing.jpg": "Guided Days",
  "too-skinny-for-the-flats.jpg": "Bonefish",
  "saw-this-guy-coming-from.jpg": "Bonefish",
};

function toTitle(name: string) {
  if (galleryTitleOverrides[name]) return galleryTitleOverrides[name];
  const base = name.replace(/\.[^.]+$/, "");
  return base
    .replace(/-/g, " ")
    .replace(/\bjpg\b/gi, "")
    .replace(/\bgbf\b/gi, "Great Bone Fishing")
    .replace(/\s+/g, " ")
    .trim()
    .replace(/\b\w/g, (m) => m.toUpperCase());
}

function toCategory(name: string) {
  if (galleryCategoryOverrides[name]) return galleryCategoryOverrides[name];
  const value = name.toLowerCase();
  if (value.includes("release")) return "Catch & Release";
  if (value.includes("lodge") || value.includes("bedroom")) return "Lodge";
  if (value.includes("wading") || value.includes("mangrove")) return "Flats & Water";
  if (value.includes("flats") || value.includes("flat") || value.includes("water") || value.includes("mangroves") || value.includes("bay")) {
    return "Flats & Water";
  }
  if (value.includes("day") || value.includes("guide") || value.includes("skiff")) return "Guided Days";
  if (value.includes("gear")) return "Tackle";
  return "Bonefish";
}

const galleryImages = fs
  .readdirSync(galleryDir)
  .filter((file) => /\.(jpg|jpeg|png|webp|gif)$/i.test(file))
  .filter((file) => !["gallery-feature-01.jpg", "great-bone-fishing-mark.jpg"].includes(file))
  .sort((a, b) => a.localeCompare(b))
  .map((file, index) => ({
    src: `/images/gallery/${file}`,
    title: toTitle(file),
    category: toCategory(file),
    heightClass:
      index % 7 === 0
        ? "h-[20rem]"
        : index % 7 === 1
          ? "h-[28rem]"
          : index % 7 === 2
            ? "h-[24rem]"
            : index % 7 === 3
              ? "h-[18rem]"
              : index % 7 === 4
                ? "h-[26rem]"
                : index % 7 === 5
                  ? "h-[21rem]"
                  : "h-[30rem]",
  }));

const lodgeGalleryImages = [
  {
    src: "/images/gbf/Bonefish-Fishing-Lodge.jpg",
    title: "Waterfront lodge exterior",
    category: "Lodge",
    heightClass: "h-[24rem]",
  },
  {
    src: "/images/gallery/lodge-bedroom-1.jpg",
    title: "Private lodge bedroom",
    category: "Lodge",
    heightClass: "h-[20rem]",
  },
  {
    src: "/images/gbf/Double-Room.jpg",
    title: "Double room setup",
    category: "Lodge",
    heightClass: "h-[22rem]",
  },
  {
    src: "/images/gbf/Lodge-Bath.jpg",
    title: "Private bathroom",
    category: "Lodge",
    heightClass: "h-[18rem]",
  },
  {
    src: "/images/gbf/Balcony.jpg",
    title: "Deck and water views",
    category: "Lodge",
    heightClass: "h-[24rem]",
  },
];

const allGalleryImages = [...lodgeGalleryImages, ...galleryImages];

export default function GalleryPage() {
  return (
    <>
      <PageHero
        title="Photo Gallery"
        subtitle="A look at the flats, fish, lodge, and daily moments that make North Caicos special."
      />
      <section className="py-16 sm:py-20" style={{ background: "var(--background)" }}>
        <div className="section-container">
          <div className="max-w-3xl mb-10">
            <p className="text-slate-600 text-lg leading-relaxed">
              These images come from the fishery, the lodge, and days spent on the water around
              Bottle Creek and the nearby flats and estuaries of North Caicos. Use them to get a better feel for the water,
              the fish, and the style of trip we offer.
            </p>
          </div>

          <GalleryMasonry images={allGalleryImages} />
        </div>
      </section>
      <BookingCTA title="Seen Enough to Start Planning?" subtitle="Tell us the kind of trip you want and we&apos;ll recommend the right guided, DIY, or lodge setup for your dates." />
    </>
  );
}
