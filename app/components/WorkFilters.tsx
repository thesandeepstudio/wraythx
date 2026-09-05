"use client";

import { useState } from "react";
import type { Project } from "@/lib/projects";

const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const filters = ["All", "Branding", "Motion", "Graphic", "Packaging"];

export default function WorkFilters({ projects }: { projects: Project[] }) {
  const [active, setActive] = useState("All");

  const visible =
    active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <>
      <div className="mt-10 flex flex-wrap items-center gap-2 md:gap-8">
        {filters.map((filter) => (
          <button
            key={filter}
            type="button"
            onClick={() => setActive(filter)}
            aria-pressed={active === filter}
            className={`pb-3 text-sm uppercase tracking-[0.16em] transition duration-300 ${
              active === filter
                ? "text-emerald-600"
                : "text-zinc-500 hover:text-zinc-900"
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      <div className="mt-0 columns-1 gap-6 sm:columns-2 lg:columns-3">
        {visible.map((project) => (
          <a
            key={project.title}
            href={project.link || "#"}
            target={project.link ? "_blank" : undefined}
            rel={project.link ? "noopener noreferrer" : undefined}
            className="group mb-6 block break-inside-avoid"
          >
            <div
              className={`relative overflow-hidden transition duration-500 group-hover:-translate-y-1 ${
                project.image ? "" : project.cover
              }`}
            >
              {project.image ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={`${BASE_PATH}${project.image}`}
                  alt={project.title}
                  loading="lazy"
                  decoding="async"
                  className="block w-full transition duration-700 group-hover:scale-105"
                />
              ) : (
                <div className="absolute inset-0" />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/50 via-transparent to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />
              {project.badge && (
                <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-zinc-900">
                  Featured
                </span>
              )}
              <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-zinc-900/85 via-zinc-900/30 to-transparent p-6 opacity-0 transition duration-500 group-hover:opacity-100">
                <p className="text-xs uppercase tracking-[0.16em] text-emerald-300">
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
                  <span className="shrink-0 tabular-nums text-zinc-400">
                    {project.year}
                  </span>
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
    </>
  );
}