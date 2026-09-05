"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import ClickSpark from "./ClickSpark";
import ScrollReveal from "./ScrollReveal";
import ScrollFade from "./components/ScrollFade";
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
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      const frame = requestAnimationFrame(() => setCount(value));
      return () => cancelAnimationFrame(frame);
    }

    let animationFrame = 0;
    let observer: IntersectionObserver | null = null;

    const runCount = () => {
      const duration = 1200;
      const startTime = performance.now();

      const updateCount = (now: number) => {
        const progress = Math.min((now - startTime) / duration, 1);
        const easedProgress = 1 - (1 - progress) ** 3;
        setCount(Math.round(easedProgress * value));

        if (progress < 1) {
          animationFrame = requestAnimationFrame(updateCount);
        }
      };

      animationFrame = requestAnimationFrame(updateCount);
    };

    observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          observer?.disconnect();
          runCount();
        }
      },
      { threshold: 0.4 },
    );

    observer.observe(el);

    return () => {
      observer?.disconnect();
      cancelAnimationFrame(animationFrame);
    };
  }, [value]);

  return (
    <div ref={ref} className="rounded-none bg-white p-6 text-center">
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
            <SiteNav revealOnScroll />

            <div className="grid min-h-[70vh] items-center gap-8 py-16 lg:grid-cols-[1fr_1.2fr_1fr] lg:py-20">
              <div className="hidden lg:flex lg:items-center lg:justify-start">
                <p
                  className="hero-in max-w-[180px] text-sm uppercase leading-[1.7] tracking-[0.06em] text-zinc-700 transition duration-300 hover:-translate-y-0.5 hover:text-zinc-900"
                  style={{ animationDelay: "0.05s" }}
                >
                  ART
                  <br />
                  MOTION
                  <br />
                  GRAPHIC
                </p>
              </div>

              <div className="flex flex-col items-center justify-center text-center">
                <div
                  className="hero-in-fade h-[170px] w-[155px] overflow-hidden border border-zinc-200 grayscale transition duration-500 hover:scale-[1.02] hover:grayscale-0"
                  style={{ animationDelay: "0.15s" }}
                >
                  <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(160deg,_#059669_0%,_#065f46_55%,_#022c22_100%)]">
                    <span className="select-none text-4xl font-semibold italic tracking-[-0.04em] text-white">
                      S.
                    </span>
                  </div>
                </div>

                <h1
                  className="hero-in mt-7 cursor-none text-4xl font-medium uppercase tracking-[-0.04em] transition duration-300 hover:-translate-y-0.5 md:text-5xl"
                  style={{ animationDelay: "0.25s" }}
                >
                  WRAYTHX
                </h1>
                <p
                  className="hero-in mt-1 cursor-none text-2xl font-light italic tracking-[-0.04em] text-zinc-900 transition duration-300 hover:-translate-y-0.5 md:text-3xl"
                  style={{ animationDelay: "0.35s" }}
                >
                  S. Chaudhary
                </p>
                <p
                  className="hero-in mt-1 cursor-none text-base font-medium uppercase tracking-[0.14em] text-emerald-600 transition duration-300 hover:-translate-y-0.5 hover:text-emerald-500 md:text-lg"
                  style={{ animationDelay: "0.45s" }}
                >
                  Visual Designer
                </p>
              </div>

              <div className="hidden lg:flex lg:items-center lg:justify-end">
                <p
                  className="hero-in max-w-[180px] text-right text-sm uppercase leading-[1.7] tracking-[0.06em] text-zinc-700 transition duration-300 hover:-translate-y-0.5 hover:text-zinc-900"
                  style={{ animationDelay: "0.55s" }}
                >
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
              <ScrollFade key={stat.label}>
                <AnimatedStat
                  value={stat.value}
                  suffix={stat.suffix}
                  label={stat.label}
                />
              </ScrollFade>
            ))}
          </div>
        </section>

        <section
          id="about"
          className="mx-auto max-w-6xl px-6 py-28 md:py-36 lg:px-8"
        >
          <div className="mx-auto max-w-3xl text-center">
            <ScrollReveal
              baseRotation={0}
              enableBlur
              blurStrength={6}
              containerClassName="text-center"
              textClassName="mt-7 text-xl font-medium uppercase leading-[1.35] tracking-[-0.03em] text-zinc-900 md:text-2xl"
              highlightedWords={[
                "bold",
                "thoughtful",
                "expressive",
                "identities",
                "digital",
                "interfaces",
                "visual",
                "systems",
                "clear",
                "distinctive",
                "made",
                "to",
                "last",
              ]}
            >
              I&apos;m a graphic and visual designer focused on turning bold
              ideas into thoughtful, expressive experiences. I shape
              identities, digital interfaces, and visual systems that feel
              clear, distinctive, and made to last.
            </ScrollReveal>
          </div>
        </section>

        <section id="work" className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
          <ScrollFade className="mb-12 flex items-end justify-between gap-6">
            <div>
              <h2 className="text-3xl font-semibold tracking-[-0.04em] text-zinc-900 md:text-4xl">
                Recent projects
              </h2>
            </div>
            <Link
              href="/work"
              className="shrink-0 text-sm font-medium text-zinc-900 transition duration-300 hover:-translate-y-0.5 hover:text-emerald-600"
            >
              View all work
            </Link>
          </ScrollFade>

          <div className="grid gap-6 md:grid-cols-3">
            {featuredProjects.map((project) => (
              <ScrollFade key={project.title} className="block">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block"
                >
                  <div className="overflow-hidden border border-zinc-200 bg-zinc-100">
                    {project.image ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={`${BASE_PATH}${project.homeImage ?? project.image}`}
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
              </ScrollFade>
            ))}
          </div>
        </section>

        <section id="services" className="mx-auto max-w-6xl px-6 py-24 md:py-32 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.7fr] lg:gap-20">
            <ScrollFade>
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-500">
                Services
              </p>
              <h2 className="mt-6 text-4xl font-semibold tracking-[-0.04em] text-zinc-900 md:text-5xl">
                Design &amp; motion for modern brands
              </h2>
              <p className="mt-6 max-w-sm text-base leading-7 text-zinc-600">
                Identity systems, motion, and content — everything your brand
                needs to feel unmistakable.
              </p>
            </ScrollFade>

            <div className="border-y border-zinc-200">
              {services.map((service, index) => (
                <ScrollFade key={service.title}>
                  <div className="group grid gap-1 py-8 transition duration-300 hover:pl-3 md:grid-cols-[auto_1fr_1.5fr] md:gap-10">
                    <span className="text-xs font-medium uppercase tracking-[0.2em] text-emerald-600">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h3 className="text-xl font-semibold tracking-[-0.02em] text-zinc-900 transition duration-300 group-hover:text-emerald-600 md:text-2xl">
                      {service.title}
                    </h3>
                    <p className="mt-2 text-base leading-7 text-zinc-600 md:mt-0">
                      {service.text}
                    </p>
                  </div>
                </ScrollFade>
              ))}
            </div>
          </div>
        </section>

        <section
          id="contact"
          className="border-t border-zinc-200 bg-zinc-50/50"
        >
          <div className="mx-auto max-w-6xl px-6 py-24 md:py-32 lg:px-8">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-500">
              Let&apos;s work together
            </p>
            <div className="mt-10 flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
              <h2 className="max-w-2xl text-4xl font-semibold tracking-[-0.05em] text-zinc-900 md:text-6xl">
                Need a standout
                <br />
                digital presence?
              </h2>
              <a
                href="mailto:wraythx@gmail.com"
                className="inline-flex w-fit rounded-none bg-zinc-900 px-8 py-4 text-sm font-medium uppercase tracking-[0.14em] text-white transition duration-300 hover:-translate-y-0.5 hover:bg-emerald-600"
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