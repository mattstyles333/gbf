import type { Metadata } from "next";
import BookPageClient from "./BookPageClient";

export const metadata: Metadata = {
  title: "Enquire About Your Trip — Great Bone Fishing",
  description:
    "Send us your dates, group size, and trip goals. We reply personally with availability, pricing, and the best bonefishing plan for your group.",
  alternates: {
    canonical: "/book/",
  },
  openGraph: {
    title: "Enquire About Your Bonefishing Trip — Turks & Caicos",
    description: "Send us your dates and trip goals. We reply personally with availability and the best bonefishing plan for your group.",
    images: [
      {
        url: "/images/gallery/darel-bonefishing-on-the-flats.jpg",
        width: 1200,
        height: 630,
        alt: "Enquire about your bonefishing trip to Turks & Caicos",
      },
    ],
  },
};

export default function BookPage() {
  return <BookPageClient />;
}
