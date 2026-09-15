"use client";

import { useState } from "react";
import { projects } from "@/lib/projects";

export default function NotFoundSearch() {
  const [query, setQuery] = useState("");
  const term = query.trim().toLowerCase();
  const hits = term
    ? projects
        .filter((p) =>
          `${p.title} ${p.category}`.toLowerCase().includes(term),
        )
        .slice(0, 5)
    : [];

  return (
    <div className="mx-auto mt-8 w-full max-w-md text-left">
      <label
        htmlFor="not-found-search"
        className="text-xs font-medium uppercase tracking-[0.2em] text-zinc-600"
      >
        Search projects
      </label>
      <input
        id="not-found-search"
        type="search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Try motion, branding, packaging…"
        className="mt-2 w-full rounded-none border border-zinc-200 bg-white px-3.5 py-3 text-sm text-zinc-900 placeholder:text-zinc-500 focus:border-brand-600 focus:outline-none focus:ring-0"
      />
      {term !== "" && (
        <ul className="mt-3 divide-y divide-zinc-100 border border-zinc-200 bg-white">
          {hits.map((hit) => (
            <li key={hit.title}>
              <a
                href={hit.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block px-4 py-3 text-sm text-zinc-900 transition hover:bg-zinc-50"
              >
                {hit.title}
              </a>
            </li>
          ))}
          {hits.length === 0 && (
            <li className="px-4 py-3 text-sm text-zinc-600">
              Nothing found — try another word.
            </li>
          )}
        </ul>
      )}
    </div>
  );
}
