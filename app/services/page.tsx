"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import ClickSpark from "../ClickSpark";

const services = [
  {
    title: "Brand Strategy",
    text: "Positioning, messaging, and visual direction to make your brand memorable.",
    detail: "Identity systems · Guidelines · Storytelling",
  },
  {
    title: "Product Design",
    text: "Interface design and interaction patterns built for clarity and conversion.",
    detail: "UX research · UI design · Prototyping",
  },
  {
    title: "Art Direction",
    text: "Creative direction for campaigns, editorial, and visual narratives that stand out.",
    detail: "Concept · Key art · Campaigns",
  },
  {
    title: "Motion Graphics",
    text: "Motion systems and animations that bring identity and product moments to life.",
    detail: "Logo animation · Explainer · Social",
  },
  {
    title: "Packaging",
    text: "Structural and visual packaging design that feels premium from shelf to hand.",
    detail: "Label design · Print · Production",
  },
  {
    title: "Frontend Dev",
    text: "Fast, responsive experiences built with a focus on performance and usability.",
    detail: "Next.js · Tailwind · Motion",
  },
];

const process = [
  {
    step: "01",
    title: "Discover",
    text: "We map the problem, audience, and goals so the design has a clear direction.",
  },
  {
    step: "02",
    title: "Design",
    text: "Concepts are explored, refined, and tested across the mediums that matter.",
  },
  {
    step: "03",
    title: "Deliver",
    text: "Final assets are handed off clean and documented so they scale beyond day one.",
  },
];

export default function ServicesPage() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
                <span>Services</span>
                <span>Design · Code · Motion</span>
              </div>

              <div className="mt-10 max-w-3xl">
                <h1 className="text-4xl font-semibold uppercase leading-[1.05] tracking-[-0.05em] text-zinc-900 md:text-6xl lg:text-7xl">
                  Design systems
                  <br />
                  <span className="text-emerald-600 italic normal-case">
                    for modern brands
                  </span>
                </h1>
                <p className="mt-6 text-lg leading-8 text-zinc-600">
                  From strategy to shipped product — a focused set of services
                  for building brands that are clear, distinctive, and made to
                  last.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-[1280px] px-6 pb-24 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="group flex flex-col justify-between border border-zinc-200 bg-white p-8 transition duration-300 hover:-translate-y-1 hover:border-zinc-300"
              >
                <div>
                  <p className="text-xs font-normal tabular-nums tracking-[0.2em] text-zinc-400">
                    0{index + 1}
                  </p>
                  <h3 className="mt-6 text-xl font-semibold tracking-[-0.02em] text-zinc-900">
                    {service.title}
                  </h3>
                  <p className="mt-4 text-base leading-7 text-zinc-600">
                    {service.text}
                  </p>
                </div>
                <p className="mt-8 border-t border-zinc-200 pt-4 text-xs uppercase tracking-[0.16em] text-emerald-600">
                  {service.detail}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-24">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-500">
              Process
            </p>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {process.map((item) => (
                <div key={item.step} className="border-t border-zinc-200 pt-8">
                  <p className="text-sm font-medium tabular-nums text-emerald-600">
                    {item.step}
                  </p>
                  <h3 className="mt-4 text-xl font-semibold tracking-[-0.02em] text-zinc-900">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-base leading-7 text-zinc-600">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-[1280px] px-6 pb-24 lg:px-8">
          <div className="border border-zinc-200 bg-[linear-gradient(135deg,_rgba(24,24,27,0.03),_rgba(255,255,255,0.85),_rgba(24,24,27,0.04))] p-8 md:p-12">
            <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <h2 className="max-w-xl text-3xl font-semibold tracking-[-0.05em] text-zinc-900 md:text-5xl">
                Need a standout digital presence?
              </h2>
              <a
                href="mailto:wraithx@gmail.com"
                className="inline-flex w-fit rounded-full bg-zinc-900 px-6 py-3 text-sm font-medium text-white shadow-lg shadow-zinc-300 transition hover:-translate-y-0.5 hover:bg-zinc-700"
              >
                wraithx@gmail.com
              </a>
                </div>
          </div>
        </section>
      </main>
    </ClickSpark>
  );
}