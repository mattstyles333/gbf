import type { Metadata } from "next";
import { Lora, Geist } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { siteConfig } from "./content";

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: siteConfig.name,
  description:
    "Guided bonefishing trips, DIY access, and waterfront lodge stays on Bottle Creek in North Caicos, Turks & Caicos.",
  url: siteConfig.baseUrl,
  image: `${siteConfig.baseUrl}/images/gbf/cropped-fishing-along-the-mangroves.jpg`,
  email: siteConfig.email,
  telephone: [siteConfig.phoneUSA, siteConfig.phoneTCI],
  address: {
    "@type": "PostalAddress",
    streetAddress: "Bottle Creek",
    addressLocality: "North Caicos",
    addressCountry: "TC",
  },
  areaServed: [
    {
      "@type": "Place",
      name: "North Caicos",
    },
    {
      "@type": "Place",
      name: "Turks and Caicos Islands",
    },
  ],
  priceRange: "$$",
  sameAs: [
    "https://www.tripadvisor.com/Attraction_Review-g656907-d12094913-Reviews-The_Great_Bonefishing_Company-North_Caicos_Turks_and_Caicos.html",
    "https://www.greatsailfishing.com/",
  ],
};

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.name} — ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.name}`,
  },
  description:
    "World-class bonefishing on the pristine flats of Bottle Creek, North Caicos, Turks & Caicos. Guided trips, self-guided fishing, and on-site lodge accommodation.",
  keywords: [
    "bonefishing",
    "turks and caicos",
    "north caicos",
    "bottle creek",
    "fly fishing",
    "bonefish",
    "flats fishing",
    "caribbean fishing",
  ],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  metadataBase: new URL(siteConfig.baseUrl),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.baseUrl,
    siteName: siteConfig.name,
    title: `${siteConfig.name} — ${siteConfig.tagline}`,
    description:
      "World-class bonefishing on the pristine flats of Bottle Creek, North Caicos, Turks & Caicos.",
    images: [
      {
        url: "/images/gbf/cropped-fishing-along-the-mangroves.jpg",
        width: 1200,
        height: 630,
        alt: "Bonefishing in the Turks & Caicos",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description:
      "World-class bonefishing on the pristine flats of Bottle Creek, North Caicos.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${lora.variable} ${geist.variable}`}>
      <body className="min-h-screen flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <Header />
        <main className="flex-1 pt-16 lg:pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
