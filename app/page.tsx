"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import ClickSpark from "./ClickSpark";
import SiteNav from "./components/SiteNav";
import SiteFooter from "./components/SiteFooter";
import { projects, featuredProjectTitles } from "../lib/projects";

const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const featuredProjects = featuredProjectTitles.map((title) =>
  projects.find((p) => p.title === title)!
);

const stats = [
  { value: 5, suffix: "+", label: "Years experience" },
  { value: 18, suffix: "+", label: "Projects delivered" },
  { value: 12, suffix: "+", label: "Happy clients" },
];

const services = [
  {
    title: "Branding & Identity",
    text: "Logos, guidelines, and identity systems that make you unmistakable.",
  },
  {
    title: "Motion Graphics",
    text: "Promos, ads, and animated identities that bring ideas to life.",
  },
  {
    title: "Video Editing",
    text: "Rhythmic edits for music videos and content that hold attention.",
  },
  {
    title: "Graphic Design",
    text: "Tees, posters, and print that carry attitude and communicate clearly.",
  },
  {
    title: "Social Media",
    text: "Content systems and ad creatives built to convert.",
  },
  {
    title: "Packaging Design",
    text: "Labels and print that feel premium from shelf to hand.",
  },
];

function AnimatedStat({
  value,
  suffix,
  label,
}: {
  value: number;
  suffix: string;
  label: string;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 1200;
    const startTime = performance.now();

    const updateCount = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const easedProgress = 1 - (1 - progress) ** 3;
      setCount(Math.round(easedProgress * value));

      if (progress < 1) {
        requestAnimationFrame(updateCount);
      }
    };

    requestAnimationFrame(updateCount);
  }, [value]);

  return (
    <div className="rounded-none bg-white p-6 text-center">
      <div className="text-3xl font-semibold text-zinc-900">
        {count}
        {suffix}
      </div>
      <p className="mt-2 text-sm text-zinc-500">{label}</p>
    </div>
  );
}

export default function Home() {
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
            <SiteNav />

            <div className="grid min-h-[70vh] items-center gap-8 py-16 lg:grid-cols-[1fr_1.2fr_1fr] lg:py-20">
              <div className="hidden lg:flex lg:items-center lg:justify-start">
                <p className="max-w-[180px] text-sm uppercase leading-[1.7] tracking-[0.06em] text-zinc-700 transition duration-300 hover:-translate-y-0.5 hover:text-zinc-900">
                  ART
                  <br />
                  MOTION
                  <br />
                  GRAPHIC
                </p>
              </div>

              <div className="flex flex-col items-center justify-center text-center">
                <div className="h-[170px] w-[155px] overflow-hidden border border-zinc-200 grayscale transition duration-500 hover:scale-[1.02] hover:grayscale-0">
                  <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(160deg,_#059669_0%,_#065f46_55%,_#022c22_100%)]">
                    <span className="select-none text-4xl font-semibold italic tracking-[-0.04em] text-white">
                      S.
                    </span>
                  </div>
                </div>

                <h1 className="mt-7 cursor-none text-4xl font-medium uppercase tracking-[-0.04em] transition duration-300 hover:-translate-y-0.5 md:text-5xl">
                  WRAYTHX
                </h1>
                <p className="mt-1 cursor-none text-2xl font-light italic tracking-[-0.04em] text-zinc-900 transition duration-300 hover:-translate-y-0.5 md:text-3xl">
                  S. Chaudhary
                </p>
                <p className="mt-1 cursor-none text-base font-medium uppercase tracking-[0.14em] text-emerald-600 transition duration-300 hover:-translate-y-0.5 hover:text-emerald-500 md:text-lg">
                  Visual Designer
                </p>
              </div>

              <div className="hidden lg:flex lg:items-center lg:justify-end">
                <p className="max-w-[180px] text-right text-sm uppercase leading-[1.7] tracking-[0.06em] text-zinc-700 transition duration-300 hover:-translate-y-0.5 hover:text-zinc-900">
                  DESIGN
                  <br />
                  EDITING
                  <br />
                  CREATIVE
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-zinc-200 bg-white">
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 px-6 py-8 md:grid-cols-3 lg:px-8">
            {stats.map((stat) => (
              <AnimatedStat
                key={stat.label}
                value={stat.value}
                suffix={stat.suffix}
                label={stat.label}
              />
            ))}
          </div>
        </section>

        <section
          id="about"
          className="mx-auto max-w-6xl px-6 py-28 md:py-36 lg:px-8"
        >
          <div className="mx-auto max-w-3xl text-center">
            <p className="mt-7 text-xl font-medium uppercase leading-[1.35] tracking-[-0.03em] text-zinc-900 md:text-2xl">
              I&apos;m a graphic and visual designer focused on turning bold
              ideas into thoughtful, expressive experiences. I shape identities,
              digital interfaces, and visual systems that feel clear,
              distinctive, and made to last.
            </p>
          </div>
        </section>

        <section id="work" className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
          <div className="mb-12 flex items-end justify-between gap-6">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-500">
                Selected work
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-zinc-900 md:text-4xl">
                Recent projects
              </h2>
            </div>
            <Link
              href="/work"
              className="shrink-0 text-sm font-medium text-zinc-900 transition duration-300 hover:-translate-y-0.5 hover:text-emerald-600"
            >
              View all work
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {featuredProjects.map((project) => (
              <a
                key={project.title}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
              >
                <div className="overflow-hidden border border-zinc-200 bg-zinc-100">
                  {project.image ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={`${BASE_PATH}${project.image}`}
                      alt={project.title}
                      loading="lazy"
                      decoding="async"
                      className="block w-full grayscale transition duration-700 group-hover:scale-105 group-hover:grayscale-0"
                    />
                  ) : null}
                </div>
                <p className="mt-4 text-xs font-medium uppercase tracking-[0.2em] text-emerald-600">
                  {project.category}
                </p>
                <h3 className="mt-2 text-xl font-semibold tracking-[-0.04em] text-zinc-900">
                  {project.title}
                </h3>
                <p className="mt-1 text-sm text-zinc-500">{project.tools}</p>
              </a>
            ))}
          </div>
        </section>

        <section id="services" className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
          <div className="mb-12">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-500">
              Services
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-zinc-900 md:text-4xl">
              Design &amp; motion for modern brands
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.title}
                className="rounded-none border border-zinc-200 bg-white p-6 shadow-none"
              >
                <div className="mb-4 h-10 w-10 rounded-none bg-zinc-200" />
                <h3 className="text-xl font-semibold text-zinc-900">
                  {service.title}
                </h3>
                <p className="mt-4 text-base leading-7 text-zinc-600">
                  {service.text}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section
          id="contact"
          className="mx-auto max-w-6xl px-6 pb-24 pt-12 lg:px-8"
        >
          <div className="rounded-none border border-zinc-200 bg-[linear-gradient(135deg,_rgba(24,24,27,0.03),_rgba(255,255,255,0.85),_rgba(24,24,27,0.04))] p-8 shadow-none md:p-12">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-500">
              Let&apos;s work together
            </p>
            <div className="mt-6 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <h2 className="max-w-xl text-3xl font-semibold tracking-[-0.05em] text-zinc-900 md:text-5xl">
                Need a standout digital presence?
              </h2>
              <a
                href="mailto:wraythx@gmail.com"
                className="inline-flex rounded-full bg-zinc-900 px-6 py-3 text-sm font-medium text-white shadow-lg shadow-zinc-300 transition hover:-translate-y-0.5 hover:bg-zinc-700"
              >
                wraythx@gmail.com
              </a>
            </div>
          </div>
        </section>

        <SiteFooter />
      </main>
    </ClickSpark>
  );
}