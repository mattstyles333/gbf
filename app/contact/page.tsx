import type { Metadata } from "next";
import { siteConfig } from "../content";

export const metadata: Metadata = {
  title: "Contact",
  description: `Contact ${siteConfig.name} to check availability and book your bonefishing trip in the Turks & Caicos. Call ${siteConfig.phoneUSA} or ${siteConfig.phoneTCI}.`,
  alternates: {
    canonical: "/book/",
  },
  robots: {
    index: false,
    follow: true,
  },
};

export default function ContactPage() {
  return (
    <div className="section-container py-32 text-center">
      <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
      <p className="text-slate-500 mb-8">
        For availability and booking inquiries, please use our{" "}
        <a href="/book" className="text-ocean-600 font-semibold hover:underline">
          booking page
        </a>{" "}
        or call us directly.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <a
          href={`tel:${siteConfig.phoneUSA.replace(/[^0-9+]/g, "")}`}
          className="btn-primary"
        >
          {siteConfig.phoneUSA}
        </a>
        <a href="/book" className="btn-outline !text-ocean-700 !border-ocean-400">
          Booking Form
        </a>
      </div>
    </div>
  );
}
