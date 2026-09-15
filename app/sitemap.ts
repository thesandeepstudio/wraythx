import type { MetadataRoute } from "next";
import { projects, projectHref } from "@/lib/projects";
import { BASE_PATH, SITE_URL } from "@/lib/site";

export const dynamic = "force-static";

const basePath = BASE_PATH;
const siteUrl = SITE_URL;

export default function sitemap(): MetadataRoute.Sitemap {
  const root = `${siteUrl}${basePath}`;
  const now = new Date();
  const projectUrls = projects.map((project) => ({
    url: `${root}${projectHref(project.title)}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));
  return [
    { url: `${root}/`, lastModified: now, changeFrequency: "weekly" as const, priority: 1 },
    { url: `${root}/about`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${root}/work`, lastModified: now, changeFrequency: "weekly" as const, priority: 0.9 },
    { url: `${root}/services`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.8 },
    ...projectUrls,
  ];
}