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
  }));
  return [
    { url: `${root}/`, lastModified: now },
    { url: `${root}/about`, lastModified: now },
    { url: `${root}/work`, lastModified: now },
    { url: `${root}/services`, lastModified: now },
    ...projectUrls,
  ];
}