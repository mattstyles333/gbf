import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Great Bone Fishing",
    short_name: "Great Bone Fishing",
    description:
      "Guided bonefishing and waterfront lodge stays on North Caicos, Turks & Caicos.",
    start_url: "/",
    display: "standalone",
    background_color: "#0b2f39",
    theme_color: "#0b2f39",
    icons: [
      {
        src: "/brand-icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/brand-icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
