import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import ClickSpark from "@/app/ClickSpark";
import SiteNav from "@/app/components/SiteNav";
import SiteFooter from "@/app/components/SiteFooter";
import {
  projects,
  getProjectBySlug,
  slugify,
  projectHref,
} from "@/lib/projects";

const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://thesandeepstudio.github.io";

export const dynamic = "force-static";

export async function generateStaticParams() {
  return projects.map((project) => ({ slug: slugify(project.title) }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: "Project not found" };

  return {
    title: project.title,
    description: project.summary,
    openGraph: {
      title: project.title,
      description: project.summary,
      url: `${siteUrl}${BASE_PATH}${projectHref(project.title)}`,
      type: "website",
      images: project.image
        ? [
            {
              url: `${siteUrl}${BASE_PATH}${project.image}`,
              alt: project.title,
            },
          ]
        : undefined,
    },
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const index = projects.findIndex(
    (p) => slugify(p.title) === slugify(project.title),
  );
  const prev = projects[(index - 1 + projects.length) % projects.length];
  const next = projects[(index + 1) % projects.length];

  return (
    <ClickSpark
      sparkColor="#059669"
      sparkSize={8}
      sparkRadius={12}
      sparkCount={4}
      duration={260}
      easing="ease-out"
      extraScale={1}
    >
      <main className="min-h-screen bg-white text-zinc-900">
        <SiteNav />

        <section className="mx-auto max-w-[1280px] px-6 lg:px-8">
          <div className="flex flex-col gap-6 border-b border-zinc-200 pb-10 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-emerald-700">
                {project.category} · {project.year}
              </p>
              <h1 className="mt-4 max-w-3xl text-3xl font-semibold uppercase leading-[1.05] tracking-[-0.04em] text-zinc-900 md:text-5xl">
                {project.title}
              </h1>
            </div>
            <Link
              href="/work"
              className="shrink-0 text-sm font-medium text-zinc-900 transition duration-300 hover:-translate-y-0.5 hover:text-emerald-700"
            >
              ← Back to work
            </Link>
          </div>
        </section>

        <section className="mx-auto max-w-[1280px] px-6 py-12 lg:px-8">
          <div
            className={`relative overflow-hidden ${
              project.image ? "" : project.cover
            }`}
          >
            {project.image ? (
              <Image
                src={`${BASE_PATH}${project.image}`}
                alt={project.title}
                width={1200}
                height={800}
                sizes="100vw"
                className="block w-full object-cover"
              />
            ) : (
              <div
                className={`block w-full ${project.cover}`}
                aria-hidden="true"
              />
            )}
          </div>

          <div className="mt-12 grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:gap-20">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-500">
                Overview
              </p>
              <p className="mt-6 text-xl font-medium leading-[1.4] tracking-[-0.03em] text-zinc-900 md:text-2xl">
                {project.summary}
              </p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-10 inline-flex w-fit rounded-none bg-zinc-900 px-8 py-4 text-sm font-medium uppercase tracking-[0.14em] text-white transition duration-300 hover:-translate-y-0.5 hover:bg-emerald-600"
              >
                View on Behance ↗
              </a>
            </div>

            <div className="grid h-fit grid-cols-2 gap-6 border-t border-zinc-200 pt-8 sm:grid-cols-3 lg:grid-cols-1">
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-zinc-500">
                  Category
                </p>
                <p className="mt-2 text-base font-medium text-zinc-900">
                  {project.category}
                </p>
              </div>
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-zinc-500">
                  Year
                </p>
                <p className="mt-2 text-base font-medium tabular-nums text-zinc-900">
                  {project.year}
                </p>
              </div>
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-zinc-500">
                  Tools
                </p>
                <p className="mt-2 text-base font-medium text-zinc-900">
                  {project.tools}
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-[1280px] px-6 pb-24 lg:px-8">
          <div className="flex flex-col gap-6 border-t border-zinc-200 pt-10 md:flex-row md:items-center md:justify-between">
            <Link
              href={projectHref(prev.title)}
              className="group max-w-[60%]"
            >
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-zinc-500">
                ← Previous
              </p>
              <p className="mt-2 text-lg font-semibold tracking-[-0.02em] text-zinc-900 transition duration-300 group-hover:text-emerald-700 md:text-xl">
                {prev.title}
              </p>
            </Link>
            <Link
              href={projectHref(next.title)}
              className="group max-w-[60%] text-right"
            >
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-zinc-500">
                Next →
              </p>
              <p className="mt-2 text-lg font-semibold tracking-[-0.02em] text-zinc-900 transition duration-300 group-hover:text-emerald-700 md:text-xl">
                {next.title}
              </p>
            </Link>
          </div>
        </section>

        <SiteFooter />
      </main>
    </ClickSpark>
  );
}