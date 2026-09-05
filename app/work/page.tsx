"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import ClickSpark from "../ClickSpark";

const projects = [
  {
    title: "Motion Design for Lakes & Hill Realty",
    category: "Motion",
    year: "2025",
    tools: "Motion · Brand Film",
    image: "/assets/project-thumbnails/Lakes & Hill Realty.jpg",
    cover:
      "h-[460px] bg-[linear-gradient(160deg,_#2dd4bf_0%,_#0f766e_50%,_#0c4a3e_100%)]",
    badge: "Featured",
  },
  {
    title: "PIPE420 | Brand Guidelines",
    category: "Branding",
    year: "2025",
    tools: "Logo · Guidelines · Identity",
    image: "/assets/project-thumbnails/Pipe420.png",
    cover:
      "h-80 bg-[linear-gradient(160deg,_#fbbf24_0%,_#92400e_55%,_#292524_100%)]",
    badge: "",
  },
  {
    title: "Lamour Fits | Tee Designs",
    category: "Graphic",
    year: "2025",
    tools: "Print · Illustration · Apparel",
    image: "/assets/project-thumbnails/Lamour fits.jpg",
    cover:
      "h-96 bg-[linear-gradient(160deg,_#ef4444_0%,_#7f1d1d_55%,_#1c1917_100%)]",
    badge: "",
  },
  {
    title: "NCS Edits — Music Video Series",
    category: "Motion",
    year: "2025",
    tools: "Editing · Sync · Polish",
    image: "/assets/project-thumbnails/NCS.webp",
    cover:
      "h-72 bg-[linear-gradient(160deg,_#22d3ee_0%,_#4f46e5_55%,_#172554_100%)]",
    badge: "",
  },
  {
    title: "Hotbox | Buddha Design",
    category: "Graphic",
    year: "2025",
    tools: "Art · Print · Psychedelic",
    image: "/assets/project-thumbnails/hotbox.jpg",
    cover:
      "h-96 bg-[linear-gradient(160deg,_#fb923c_0%,_#b45309_55%,_#431407_100%)]",
    badge: "",
  },
  {
    title: "Drool | Social Media Designs",
    category: "Graphic",
    year: "2025",
    tools: "Social · Content · Templates",
    image: "/assets/project-thumbnails/drool social media.jpg",
    cover:
      "h-80 bg-[linear-gradient(160deg,_#f472b6_0%,_#9d174d_55%,_#4a044e_100%)]",
    badge: "",
  },
  {
    title: "Plutus Paradox — Clothing Brand",
    category: "Branding",
    year: "2025",
    tools: "Brand · Apparel · Identity",
    image: "/assets/project-thumbnails/Plutus Paradox.jpg",
    cover:
      "h-96 bg-[linear-gradient(160deg,_#a3e635_0%,_#4d7c0f_55%,_#1a2e05_100%)]",
    badge: "",
  },
  {
    title: "Drool Nepal | Branding",
    category: "Branding",
    year: "2025",
    tools: "Identity · Logo · Systems",
    image: "/assets/project-thumbnails/Drool branding.png",
    cover:
      "h-80 bg-[linear-gradient(160deg,_#34d399_0%,_#065f46_55%,_#022c22_100%)]",
    badge: "",
  },
  {
    title: "Chimley Orchards — Packaging Design",
    category: "Packaging",
    year: "2025",
    tools: "Label · Print · Packaging",
    image: "/assets/project-thumbnails/Apple.png",
    cover:
      "h-80 bg-[linear-gradient(160deg,_#4ade80_0%,_#166534_55%,_#052e16_100%)]",
    badge: "",
  },
  {
    title: "SONITE | Tech Logo Design",
    category: "Branding",
    year: "2025",
    tools: "Logo · Mark · Identity",
    image: "/assets/project-thumbnails/SONITE.png",
    cover:
      "h-72 bg-[linear-gradient(160deg,_#38bdf8_0%,_#0369a1_55%,_#082f49_100%)]",
    badge: "",
  },
  {
    title: "Urban Crust | Branding",
    category: "Branding",
    year: "2025",
    tools: "Brand · Identity · Logo",
    image: "/assets/project-thumbnails/urban crust.jpg",
    cover:
      "h-80 bg-[linear-gradient(160deg,_#ea580c_0%,_#7c2d12_55%,_#1c1917_100%)]",
    badge: "",
  },
  {
    title: "Posters Collection | Poster Design",
    category: "Graphic",
    year: "2025",
    tools: "Poster · Print · Typography",
    image: "/assets/project-thumbnails/posters.jpg",
    cover:
      "h-96 bg-[linear-gradient(160deg,_#d946ef_0%,_#701a75_55%,_#3b0764_100%)]",
    badge: "",
  },
  {
    title: "Pizza | Social Media Ads Design",
    category: "Graphic",
    year: "2025",
    tools: "Ads · Social · Content",
    image: "/assets/project-thumbnails/pizza.png",
    cover:
      "h-80 bg-[linear-gradient(160deg,_#f97316_0%,_#b45309_55%,_#451a03_100%)]",
    badge: "",
  },
  {
    title: "Logofolio P-001",
    category: "Branding",
    year: "2025",
    tools: "Logo · Mark · Series",
    image: "/assets/project-thumbnails/logofolio.jpg",
    cover:
      "h-72 bg-[linear-gradient(160deg,_#3b82f6_0%,_#1e3a8a_55%,_#0b1120_100%)]",
    badge: "",
  },
  {
    title: "Plutus Paradox | Tee Design",
    category: "Graphic",
    year: "2025",
    tools: "Print · Apparel · Graphics",
    image: "/assets/project-thumbnails/PLUTUS Paradox logo.jpg",
    cover:
      "h-96 bg-[linear-gradient(160deg,_#facc15_0%,_#a16207_55%,_#292524_100%)]",
    badge: "",
  },
  {
    title: "The Game? | Motion Graphic",
    category: "Motion",
    year: "2025",
    tools: "Motion · Animation · Design",
    image: "/assets/project-thumbnails/the game.png",
    cover:
      "h-72 bg-[linear-gradient(160deg,_#a855f7_0%,_#6d28d9_55%,_#1e1b4b_100%)]",
    badge: "",
  },
  {
    title: "Black Friday | Motion Graphic",
    category: "Motion",
    year: "2025",
    tools: "Motion · Ads · Promo",
    cover:
      "h-80 bg-[linear-gradient(160deg,_#0f172a_0%,_#450a0a_55%,_#000000_100%)]",
    badge: "",
  },
  {
    title: "Jawaaf Consulting Academy — Social Media Design",
    category: "Graphic",
    year: "2025",
    tools: "Social · Content · Templates",
    image: "/assets/project-thumbnails/Jawaaf.jpg",
    cover:
      "h-80 bg-[linear-gradient(160deg,_#6366f1_0%,_#312e81_55%,_#0f172a_100%)]",
    badge: "",
  },
];

const filters = ["All", "Branding", "Motion", "Graphic", "Packaging"];

export default function WorkPage() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("All");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const visible =
    active === "All" ? projects : projects.filter((p) => p.category === active);

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
        <section className="relative overflow-hidden bg-white">
          <div className="relative mx-auto max-w-[1280px] py-7">
            <header
              className={`sticky top-0 z-50 mx-auto flex w-full items-center justify-between border-b border-zinc-200 bg-white pb-3 transition-all duration-300 ${
                scrolled ? "shadow-none" : "shadow-none"
              }`}
            >
              <Link
                href="/"
                className="text-lg font-semibold tracking-[-0.04em] text-zinc-900 transition-transform duration-300 hover:-translate-y-0.5"
              >
                wraithx
              </Link>

              <nav className="flex items-center gap-6 text-sm text-zinc-700 md:gap-8">
                <Link
                  href="/about"
                  className="transition duration-300 hover:-translate-y-0.5 hover:text-zinc-900"
                >
                  About
                </Link>
                <Link
                  href="/work"
                  className="transition duration-300 hover:-translate-y-0.5 hover:text-zinc-900"
                >
                  Work
                </Link>
                <Link
                  href="/services"
                  className="transition duration-300 hover:-translate-y-0.5 hover:text-zinc-900"
                >
                  Services
                </Link>
              </nav>

              <a
                href="mailto:wraithx@gmail.com"
                className="text-sm font-medium text-zinc-900 transition duration-300 hover:-translate-y-0.5 hover:text-emerald-600"
              >
                wraithx@gmail.com
              </a>
            </header>

            <div className="py-16 md:py-20">
              <div className="flex items-baseline justify-between text-xs uppercase tracking-[0.2em] text-zinc-500">
                <span>Portfolio</span>
                <span>2022 — 2025</span>
              </div>

              <div className="mt-10 flex flex-wrap items-center gap-8">
                {filters.map((filter) => (
                  <button
                    key={filter}
                    onClick={() => setActive(filter)}
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
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-[1280px] px-6 pb-24 lg:px-8">
          <div className="columns-1 gap-6 sm:columns-2 lg:columns-3">
            {visible.map((project) => (
              <a
                key={project.title}
                href="#"
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
                      src={project.image}
                      alt={project.title}
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
        </section>

        <section
          id="about"
          className="border-t border-zinc-200 bg-white"
        >
          <div className="mx-auto max-w-6xl px-6 py-28 md:py-36 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:gap-20">
              <div>
                <p className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-500">
                  About
                </p>
                <p className="mt-8 text-xl font-medium uppercase leading-[1.35] tracking-[-0.03em] text-zinc-900 md:text-2xl">
                  I&apos;m a graphic and visual designer focused on turning bold
                  ideas into thoughtful, expressive experiences. I shape
                  identities, digital interfaces, and visual systems that feel
                  clear, distinctive, and made to last.
                </p>
              </div>
              <div className="flex flex-col justify-end">
                <p className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-500">
                  Contact
                </p>
                <p className="mt-6 text-2xl font-medium tracking-[-0.03em] text-zinc-900 md:text-3xl">
                  Let&apos;s make something{" "}
                  <span className="text-emerald-600 italic">lasting</span>.
                </p>
                <a
                  href="mailto:wraithx@gmail.com"
                  className="mt-6 inline-flex w-fit rounded-full bg-zinc-900 px-6 py-3 text-sm font-medium text-white shadow-lg shadow-zinc-300 transition hover:-translate-y-0.5 hover:bg-zinc-700"
                >
                  wraithx@gmail.com
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </ClickSpark>
  );
}