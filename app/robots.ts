import type { MetadataRoute } from "next";
import { BASE_PATH, SITE_URL } from "@/lib/site";

export const dynamic = "force-static";

const basePath = BASE_PATH;
const siteUrl = SITE_URL;

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${siteUrl}${basePath}/sitemap.xml`,
  };
}