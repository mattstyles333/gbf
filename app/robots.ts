import { MetadataRoute } from "next";
import { siteConfig } from "./content";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/wp-admin/"],
    },
    sitemap: `${siteConfig.baseUrl}/sitemap.xml`,
  };
}
