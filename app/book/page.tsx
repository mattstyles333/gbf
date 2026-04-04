import type { Metadata } from "next";
import BookPageClient from "./BookPageClient";

export const metadata: Metadata = {
  title: "Check Availability & Plan Your Trip",
  description:
    "Send us your dates, group size, and trip goals. We reply personally with availability, pricing, and the best bonefishing plan for your group.",
  alternates: {
    canonical: "/book/",
  },
};

export default function BookPage() {
  return <BookPageClient />;
}
