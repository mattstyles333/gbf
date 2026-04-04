import type { Metadata } from "next";
import { Lora, Geist } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { siteConfig } from "./content";

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
        url: "https://www.greatbonefishing.com/wp-content/uploads/2018/12/cropped-fishing-along-the-mangroves.jpg",
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
  alternates: {
    canonical: siteConfig.baseUrl,
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
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
