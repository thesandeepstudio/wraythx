"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import ClickSpark from "./ClickSpark";
import ScrollReveal from "./ScrollReveal";
import ScrollFade from "./components/ScrollFade";
import SiteNav from "./components/SiteNav";
import SiteFooter from "./components/SiteFooter";
import { projects, featuredProjectTitles } from "../lib/projects";

const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const featuredProjects = featuredProjectTitles
  .map((title) => {
    const found = projects.find((p) => p.title === title);
    if (!found) {
      console.warn(`Featured project not found: ${title}`);
      return null;
    }
    return found;
  })
  .filter((p): p is (typeof projects)[number] => p !== null);

const stats = [
  { value: 4, suffix: "+", label: "Years experience", href: "/about" },
  { value: 18, suffix: "+", label: "Projects delivered", href: "/work" },
  { value: 12, suffix: "+", label: "Happy clients", href: "/about#clients" },
];

const services = [
  {
    title: "Branding & Identity",
    text: "Logos, guidelines, and full identity systems that make your brand unmistakable.",
  },
  {
    title: "Motion Graphics",
    text: "Motion systems, promotions, and animated identities that bring still designs to life.",
  },
  {
    title: "Video Editing",
    text: "Rhythmic, polished edits for music videos and content that hold attention.",
  },
  {
    title: "Graphic Design",
    text: "Tees, posters, and print that carry attitude and communicate clearly.",
  },
  {
    title: "Social Media",
    text: "Weekly content systems, ad creatives, and templates built to convert.",
  },
  {
    title: "Packaging Design",
    text: "Label and print design that feels premium from shelf to hand.",
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

const PROJECT_TYPES = [
  "Branding & Identity",
  "Motion Graphics",
  "Video Editing",
  "Graphic Design",
  "Social Media",
  "Packaging Design",
  "Other",
] as const;

function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [projectType, setProjectType] = useState<(typeof PROJECT_TYPES)[number]>(
    PROJECT_TYPES[0]
  );
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `Enquiry: ${projectType} — ${name || "New lead"}`;
    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      `Project type: ${projectType}`,
      "",
      "Message:",
      message,
      "",
      "—",
      `Sent via wraythx contact form`,
    ].join("\n");
    const mailto = `mailto:wraythxx@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="border border-zinc-200 bg-white p-6 md:p-8"
      aria-label="Contact form"
    >
      <div className="flex items-center justify-between gap-4 border-b border-zinc-100 pb-4">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-zinc-500">
          Send an enquiry
        </p>
        <span className="inline-flex items-center border border-emerald-100 bg-emerald-50 px-2.5 py-1 text-[11px] font-medium uppercase tracking-[0.12em] text-emerald-700">
          48h reply · NPT
        </span>
      </div>

      <div className="mt-6 grid gap-5">
        <div className="grid gap-5 md:grid-cols-2">
          <label className="block">
            <span className="text-xs font-medium uppercase tracking-[0.14em] text-zinc-600">
              Name
            </span>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your name"
              className="mt-2 w-full rounded-none border border-zinc-200 bg-white px-3.5 py-3 text-sm text-zinc-900 placeholder:text-zinc-400 focus:border-emerald-600 focus:outline-none focus:ring-0"
            />
          </label>
          <label className="block">
            <span className="text-xs font-medium uppercase tracking-[0.14em] text-zinc-600">
              Email
            </span>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@company.com"
              className="mt-2 w-full rounded-none border border-zinc-200 bg-white px-3.5 py-3 text-sm text-zinc-900 placeholder:text-zinc-400 focus:border-emerald-600 focus:outline-none focus:ring-0"
            />
          </label>
        </div>

        <label className="block">
          <span className="text-xs font-medium uppercase tracking-[0.14em] text-zinc-600">
            Project type
          </span>
          <select
            value={projectType}
            onChange={(e) =>
              setProjectType(e.target.value as typeof projectType)
            }
            className="mt-2 w-full rounded-none border border-zinc-200 bg-white px-3.5 py-3 text-sm text-zinc-900 focus:border-emerald-600 focus:outline-none focus:ring-0"
          >
            {PROJECT_TYPES.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </label>

        <label className="block">
          <span className="text-xs font-medium uppercase tracking-[0.14em] text-zinc-600">
            Message
          </span>
          <textarea
            required
            rows={4}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Goals, timeline, budget range…"
            className="mt-2 w-full resize-none rounded-none border border-zinc-200 bg-white px-3.5 py-3 text-sm leading-6 text-zinc-900 placeholder:text-zinc-400 focus:border-emerald-600 focus:outline-none focus:ring-0"
          />
        </label>

        <div className="flex flex-col gap-3 pt-1 sm:flex-row sm:items-center">
          <button
            type="submit"
            className="inline-flex w-full items-center justify-center rounded-none bg-zinc-900 px-6 py-3 text-sm font-medium tracking-wide text-white transition duration-300 hover:-translate-y-0.5 hover:bg-emerald-600 sm:w-auto"
          >
            Send enquiry →
          </button>
          <a
            href="https://cal.com/wraythx"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center rounded-none border border-zinc-200 bg-white px-6 py-3 text-sm font-medium tracking-wide text-zinc-900 transition hover:border-zinc-300 sm:w-auto"
          >
            Book a call instead
          </a>
        </div>
        <p className="text-xs leading-5 text-zinc-400">
          Opens your email client with a pre-filled message to
          wraythxx@gmail.com — no data stored.
        </p>
      </div>
    </form>
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
        <SiteNav />
        <section className="relative overflow-hidden bg-white">
          <div className="relative mx-auto max-w-[1280px]">
            <div className="grid min-h-[70vh] items-center gap-8 px-6 py-16 md:px-0 lg:grid-cols-[1fr_1.2fr_1fr] lg:py-20">
              <div className="hidden lg:flex lg:items-center lg:justify-start">
                <p
                  className="hero-in max-w-[180px] text-sm uppercase leading-[1.7] tracking-[0.06em] text-zinc-700 transition duration-300 hover:-translate-y-0.5 hover:text-zinc-900"
                  style={{ animationDelay: "0.05s" }}
                >
                  BRANDING
                  <br />
                  MOTION
                  <br />
                  EDITING
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
                  Wraythx
                </h1>
                <p
                  className="hero-in mt-1 cursor-none text-2xl font-light italic tracking-[-0.04em] text-zinc-900 transition duration-300 hover:-translate-y-0.5 md:text-3xl"
                  style={{ animationDelay: "0.35s" }}
                >
                  Sandeep. C
                </p>
                <p
                  className="hero-in mt-1 cursor-none text-base font-medium uppercase tracking-[0.14em] text-emerald-600 transition duration-300 hover:-translate-y-0.5 hover:text-emerald-500 md:text-lg"
                  style={{ animationDelay: "0.45s" }}
                >
                  Visual Designer
                </p>
                <p
                  className="hero-in mt-3 text-xs font-medium uppercase tracking-[0.2em] text-zinc-500"
                  style={{ animationDelay: "0.5s" }}
                >
                  Nepal · worldwide
                </p>
                <p
                  className="hero-in mt-4 inline-flex items-center gap-2 border border-emerald-100 bg-emerald-50 px-3 py-1.5 text-[11px] font-medium uppercase tracking-[0.14em] text-emerald-700"
                  style={{ animationDelay: "0.55s" }}
                >
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  Available for new projects
                </p>
              </div>

              <div className="hidden lg:flex lg:items-center lg:justify-end">
                <p
                  className="hero-in max-w-[180px] text-right text-sm uppercase leading-[1.7] tracking-[0.06em] text-zinc-700 transition duration-300 hover:-translate-y-0.5 hover:text-zinc-900"
                  style={{ animationDelay: "0.55s" }}
                >
                  GRAPHIC
                  <br />
                  SOCIAL
                  <br />
                  PACKAGING
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-zinc-200 bg-white">
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 px-6 py-8 md:grid-cols-3 lg:px-8">
            {stats.map((stat) => (
              <ScrollFade key={stat.label}>
                <Link
                  href={stat.href}
                  aria-label={`${stat.label} — see proof`}
                  className="block transition duration-300 hover:-translate-y-0.5"
                >
                  <AnimatedStat
                    value={stat.value}
                    suffix={stat.suffix}
                    label={stat.label}
                  />
                </Link>
              </ScrollFade>
            ))}
          </div>
        </section>

        <section
          id="about"
          className="mx-auto max-w-6xl px-6 py-28 md:py-36 lg:px-8"
        >
          <div className="mx-auto max-w-3xl text-center">
            <ScrollFade>
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-500">
                About
              </p>
            </ScrollFade>
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
            <ScrollFade>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
                {["Brand systems", "Motion-first", "Print-ready", "48h replies"].map(
                  (tag) => (
                    <span
                      key={tag}
                      className="border border-zinc-200 bg-white px-3 py-1 text-xs font-medium uppercase tracking-[0.12em] text-zinc-600"
                    >
                      {tag}
                    </span>
                  ),
                )}
              </div>
              <Link
                href="/about"
                className="mt-8 inline-flex text-sm font-medium text-zinc-900 underline decoration-zinc-300 underline-offset-4 transition hover:decoration-emerald-600 hover:text-emerald-600"
              >
                More about me →
              </Link>
            </ScrollFade>
          </div>
        </section>

        <section id="work" className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
          <ScrollFade className="mb-12 flex items-end justify-between gap-6">
            <div>
              <h2 className="text-3xl font-semibold tracking-[-0.04em] text-zinc-900 md:text-4xl">
                Recent projects
              </h2>
            </div>
            <div className="flex shrink-0 gap-6">
              <Link
                href="/work"
                className="shrink-0 text-sm font-medium text-zinc-900 transition duration-300 hover:-translate-y-0.5 hover:text-emerald-600"
              >
                View all work
              </Link>
              <Link
                href="/services"
                className="shrink-0 text-sm font-medium text-zinc-500 transition duration-300 hover:-translate-y-0.5 hover:text-emerald-600"
              >
                View services
              </Link>
            </div>
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
                      <Image
                        src={`${BASE_PATH}${project.homeImage ?? project.image}`}
                        alt={project.title}
                        width={800}
                        height={600}
                        sizes="(max-width: 768px) 100vw, 33vw"
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
                  <p className="mt-2 text-sm leading-6 text-zinc-600">
                    {project.summary}
                  </p>
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
                  <div className="group grid gap-1 py-8 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] hover:pl-4 md:grid-cols-[auto_1fr_1.5fr] md:gap-10">
                    <span className="text-xs font-medium uppercase tracking-[0.2em] text-emerald-600">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h3 className="text-xl font-semibold tracking-[-0.02em] text-zinc-900 transition-colors duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:text-emerald-600 md:text-2xl">
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

        <section className="mx-auto max-w-6xl px-6 pb-24 lg:px-8">
          <ScrollFade className="flex items-end justify-between gap-6">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-500">
              How we&apos;ll work
            </p>
            <Link
              href="/services"
              className="shrink-0 text-sm font-medium text-zinc-900 transition duration-300 hover:-translate-y-0.5 hover:text-emerald-600"
            >
              Full process →
            </Link>
          </ScrollFade>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {[
              { step: "01", title: "Discover", text: "Goals, audience, and direction — locked before design starts." },
              { step: "02", title: "Design", text: "Concepts explored and refined across the mediums that matter." },
              { step: "03", title: "Deliver", text: "Clean, documented handoff that scales beyond day one." },
            ].map((item) => (
              <ScrollFade key={item.step}>
                <div className="border-t-2 border-zinc-900 pt-6">
                  <p className="text-sm font-medium tabular-nums text-emerald-600">
                    {item.step}
                  </p>
                  <h3 className="mt-2 text-lg font-semibold tracking-[-0.02em] text-zinc-900">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-zinc-600">
                    {item.text}
                  </p>
                </div>
              </ScrollFade>
            ))}
          </div>
        </section>

        <section
          id="testimonials"
          className="border-t border-zinc-200 bg-white"
        >
          <div className="mx-auto max-w-6xl px-6 py-24 md:py-32 lg:px-8">
            <ScrollFade>
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-500">
                Testimonials
              </p>
              <h2 className="mt-6 max-w-xl text-3xl font-semibold tracking-[-0.05em] text-zinc-900 md:text-4xl">
                Trusted by brands that move fast
              </h2>
              <p className="mt-4 max-w-lg text-base leading-7 text-zinc-600">
                A few words from clients across branding, real estate, and
                campaign work.
              </p>
            </ScrollFade>
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              <ScrollFade>
                <figure className="flex h-full flex-col justify-between border border-zinc-200 bg-white p-8 transition duration-300 hover:-translate-y-1 hover:border-zinc-300">
                  <blockquote className="text-base leading-7 text-zinc-700">
                    &ldquo;Wraythx turned a loose streetwear idea into a full
                    identity — logo, tags, packaging and campaign assets.
                    Clean handoff, fast revisions, and it actually sells.&rdquo;
                  </blockquote>
                  <figcaption className="mt-8 border-t border-zinc-100 pt-6">
                    <p className="text-sm font-semibold tracking-[-0.02em] text-zinc-900">
                      A. Sharma
                    </p>
                    <p className="mt-1 text-xs uppercase tracking-[0.14em] text-zinc-500">
                      Founder · Plutus Paradox
                    </p>
                  </figcaption>
                </figure>
              </ScrollFade>
              <ScrollFade>
                <figure className="flex h-full flex-col justify-between border border-zinc-200 bg-white p-8 transition duration-300 hover:-translate-y-1 hover:border-zinc-300">
                  <blockquote className="text-base leading-7 text-zinc-700">
                    &ldquo;Needed premium yet approachable branding for real
                    estate — brochures, site, and social. Wraythx delivered a
                    system that feels confident and consistent everywhere.&rdquo;
                  </blockquote>
                  <figcaption className="mt-8 border-t border-zinc-100 pt-6">
                    <p className="text-sm font-semibold tracking-[-0.02em] text-zinc-900">
                      R. Thapa
                    </p>
                    <p className="mt-1 text-xs uppercase tracking-[0.14em] text-zinc-500">
                      Director · Lakes &amp; Hill Realty
                    </p>
                  </figcaption>
                </figure>
              </ScrollFade>
              <ScrollFade>
                <figure className="flex h-full flex-col justify-between border border-zinc-200 bg-white p-8 transition duration-300 hover:-translate-y-1 hover:border-zinc-300">
                  <blockquote className="text-base leading-7 text-zinc-700">
                    &ldquo;From motion promos to print-ready apparel graphics,
                    Sandeep is reliable and quick. Our campaigns now ship on
                    time without chasing files.&rdquo;
                  </blockquote>
                  <figcaption className="mt-8 border-t border-zinc-100 pt-6">
                    <p className="text-sm font-semibold tracking-[-0.02em] text-zinc-900">
                      K. Gurung
                    </p>
                    <p className="mt-1 text-xs uppercase tracking-[0.14em] text-zinc-500">
                      Marketing Lead · Kopila
                    </p>
                  </figcaption>
                </figure>
              </ScrollFade>
            </div>
          </div>
        </section>

        <section
          id="contact"
          className="border-t border-zinc-200 bg-zinc-50/50"
        >
          <div className="mx-auto max-w-6xl px-6 py-24 md:py-32 lg:px-8">
            <ScrollFade>
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-500">
                Let&apos;s work together
              </p>
            </ScrollFade>
            <div className="mt-8 grid gap-10 lg:grid-cols-[1.05fr_1.35fr] lg:gap-12">
              <ScrollFade>
                <div>
                  <h2 className="max-w-xl text-4xl font-semibold tracking-[-0.05em] text-zinc-900 md:text-5xl">
                    Start a project
                    <br />
                    <span className="italic font-light text-emerald-600">
                      with wraythx
                    </span>
                  </h2>
                  <p className="mt-6 max-w-md text-base leading-7 text-zinc-600">
                    Brand, motion, or content — tell us what you&apos;re
                    building. Replies within 48h (NPT).
                  </p>
                  <div className="mt-8 flex flex-wrap gap-3">
                    <a
                      href="https://cal.com/wraythx"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Book a call on Cal.com"
                      className="inline-flex items-center rounded-none bg-emerald-600 px-6 py-3 text-sm font-medium tracking-wide text-white transition duration-300 hover:-translate-y-0.5 hover:bg-emerald-700"
                    >
                      Book a call →
                    </a>
                    <a
                      href="mailto:wraythxx@gmail.com"
                      aria-label="Email wraythx"
                      className="inline-flex items-center rounded-none border border-zinc-200 bg-white px-6 py-3 text-sm font-medium tracking-wide text-zinc-900 transition duration-300 hover:-translate-y-0.5 hover:border-zinc-300"
                    >
                      wraythxx@gmail.com
                    </a>
                  </div>
                  <p className="mt-4 text-xs leading-5 text-zinc-500">
                    Booking opens Cal.com in a new tab — if unavailable, the
                    form sends via your email client.
                  </p>
                  <p className="mt-2 text-xs leading-5 text-zinc-400">
                    Projects from $199. Prefer DM? Instagram @wraythx.
                  </p>
                </div>
              </ScrollFade>
              <ScrollFade>
                <ContactForm />
              </ScrollFade>
            </div>
          </div>
        </section>

        <SiteFooter />
      </main>
    </ClickSpark>
  );
}