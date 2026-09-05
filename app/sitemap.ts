import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://thesandeepstudio.github.io";

export default function sitemap(): MetadataRoute.Sitemap {
  const root = `${siteUrl}${basePath}`;
  const now = new Date();
  return [
    { url: `${root}/`, lastModified: now },
    { url: `${root}/about`, lastModified: now },
    { url: `${root}/work`, lastModified: now },
    { url: `${root}/services`, lastModified: now },
  ];
}