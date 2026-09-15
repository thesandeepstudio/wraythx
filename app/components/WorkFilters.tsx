"use client";

import { useState } from "react";
import Image from "next/image";
import type { Project } from "@/lib/projects";

import { BASE_PATH } from "@/lib/site";

const filters = ["All", "Branding", "Motion", "Graphic", "Packaging"];

export default function WorkFilters({ projects }: { projects: Project[] }) {
  const [active, setActive] = useState("All");

  const countFor = (filter: string) =>
    filter === "All"
      ? projects.length
      : projects.filter((p) => p.category === filter).length;

  const visible = (
    active === "All" ? projects : projects.filter((p) => p.category === active)
  )
    .slice()
    .sort((a, b) => Number(b.year) - Number(a.year));

  return (
    <>
      <div
        role="group"
        aria-label="Filter projects by category"
        className="mt-10 flex flex-wrap items-center gap-2 md:gap-8"
      >
        {filters.map((filter) => (
          <button
            key={filter}
            type="button"
            onClick={() => setActive(filter)}
            aria-pressed={active === filter}
            className={`flex min-h-[44px] touch-manipulation items-center px-3 text-sm uppercase tracking-[0.16em] transition duration-300 ${
              active === filter
                ? "bg-zinc-900 text-white"
                : "text-zinc-600 hover:text-zinc-900"
            }`}
          >
            {filter}
            <span className="ml-1 tabular-nums">({countFor(filter)})</span>
          </button>
        ))}
      </div>

      <p
        aria-live="polite"
        className="mt-4 text-xs uppercase tracking-[0.2em] text-zinc-600"
      >
        Showing {visible.length} of {projects.length}
      </p>

      <div className="mt-0 columns-1 gap-6 sm:columns-2 lg:columns-3">
        {visible.map((project) => (
          <a
            key={project.title}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group mb-6 block break-inside-avoid"
          >
            <div className="relative min-h-[120px] overflow-hidden bg-zinc-100 transition duration-500 group-hover:-translate-y-1">
              {project.image ? (
                <Image
                  src={`${BASE_PATH}${project.image}`}
                  alt={project.title}
                  width={800}
                  height={600}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="block aspect-[4/3] w-full object-cover transition duration-700 group-hover:scale-105"
                />
              ) : (
                <div className="absolute inset-0" />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/50 via-transparent to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />
              {project.badge && (
                <span className="absolute left-4 top-4 rounded-none bg-white/90 px-3 py-1 text-xs font-medium text-zinc-900">
                  {project.badge}
                </span>
              )}
              <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-zinc-900/85 via-zinc-900/30 to-transparent px-6 pb-8 pt-6 opacity-0 transition duration-500 group-hover:opacity-100">
                <p className="text-xs uppercase tracking-[0.16em] text-brand-300">
                  {project.category}
                </p>
                <h3 className="mt-2 text-xl font-semibold tracking-[-0.02em] text-white">
                  {project.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-zinc-300">
                  {project.summary}
                </p>
                <div className="mt-3 flex items-center justify-between gap-4 text-sm text-zinc-300">
                  <span>{project.tools}</span>
                  <span className="shrink-0 tabular-nums text-zinc-300">
                    {project.year}
                  </span>
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
      {visible.length === 0 && (
        <p className="mt-8 border border-zinc-200 bg-white p-8 text-center text-sm text-zinc-600">
          No projects in this category yet — check back soon.
        </p>
      )}
    </>
  );
}