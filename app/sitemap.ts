import { MetadataRoute } from "next";
import { siteConfig } from "./content";

const pages = [
  { url: "/", lastModified: new Date() },
  { url: "/fishing/", lastModified: new Date() },
  { url: "/fishing/bottle-creek/", lastModified: new Date() },
  { url: "/fishing/east-bay/", lastModified: new Date() },
  { url: "/fishing/north-caicos/", lastModified: new Date() },
  { url: "/fishing/why-turks-caicos/", lastModified: new Date() },
  { url: "/lodge/", lastModified: new Date() },
  { url: "/diy/", lastModified: new Date() },
  { url: "/diy/fishing-kayaks/", lastModified: new Date() },
  { url: "/diy/guided-vs-diy/", lastModified: new Date() },
  { url: "/rates/", lastModified: new Date() },
  { url: "/travel/", lastModified: new Date() },
  { url: "/learn/", lastModified: new Date() },
  { url: "/learn/seasons/", lastModified: new Date() },
  { url: "/learn/bonefish-season/", lastModified: new Date() },
  { url: "/learn/bonefish-flies/", lastModified: new Date() },
  { url: "/learn/catch-and-release/", lastModified: new Date() },
  { url: "/book/", lastModified: new Date() },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return pages.map((page) => ({
    url: `${siteConfig.baseUrl}${page.url}`,
    lastModified: page.lastModified,
    changeFrequency: "monthly",
    priority: page.url === "/" ? 1.0 : 0.8,
  }));
}
