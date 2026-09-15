import type { Metadata } from "next";
import Link from "next/link";
import ClickSpark from "../ClickSpark";
import ScrollReveal from "../ScrollReveal";
import ScrollFade from "../components/ScrollFade";
import SiteNav from "../components/SiteNav";
import SiteFooter from "../components/SiteFooter";
import { SPARK, EMAIL } from "../../lib/site";

export const metadata: Metadata = {
  title: "About — Sandeep. C",
  description:
    "About Sandeep. C — a graphic and visual designer shaping brand identities, motion graphics, and visual systems from Nepal.",
};

const focusAreas = [
  "Branding & Visual Identity",
  "Motion Graphics & Video",
  "Social Media Design",
  "Creative Direction",
];

const experience = [
  {
    period: "2025 — Present",
    role: "Graphic, Motion & Visual Designer",
    place: "wraythx · Freelance (Lead)",
    note: "Leading branding, motion, and visual design — creative direction and full visual systems for startups, fashion brands, events, and ecommerce.",
  },
  {
    period: "2024 — 2025",
    role: "Graphic & Motion Designer",
    place: "Kopila Dynamic Marketing Agency",
    note: "Full-time — marketing visuals, motion graphics, and campaign assets for regional + international brands.",
  },
  {
    period: "2023 — 2024",
    role: "Freelance Graphic & Motion Designer",
    place: "wraythx · Freelance (Early)",
    note: "Branding, social media, and motion design for startups, events, and ecommerce.",
  },
  {
    period: "2022 — 2023",
    role: "Graphic Designer",
    place: "Plutus Paradox",
    note: "Print-ready apparel graphics and marketing materials, in-store and online campaigns for a clothing brand.",
  },
];

const BEHANCE_PROFILE = "https://www.behance.net/daboistudio";

const selectedClients = [
  { name: "Plutus Paradox", detail: "Branding + printable graphics · clothing brand", link: "https://www.behance.net/gallery/202694555/PLUTUS-PARADOX" },
  { name: "LamourFits", detail: "Branding, socials, promo visuals · clothing brand", link: "https://www.behance.net/gallery/241271361/Graphic-Tee-Designs" },
  { name: "HotBox", detail: "Graphic design + social assets · clothing brand", link: "https://www.behance.net/gallery/236697445/HotBox-Buddha-Design" },
  { name: "PIPE420 — Pipe King", detail: "Logo system, guidelines, promo · vape store", link: "https://www.behance.net/gallery/246128103/PIPE420-Brand-Guidelines" },
  { name: "Drool", detail: "Social content system · cloud kitchen", link: "https://www.behance.net/gallery/218374849/Drool-Social-Media" },
  { name: "Drool Nepal", detail: "Logo, identity + social visuals · cloud kitchen — Nepal branch", link: "https://www.behance.net/gallery/212833621/Drool-Nepal-Branding" },
  {
    name: "Lakes & Hill Realty",
    detail: "Motion language + brand film · real estate",
    link: "https://www.behance.net/gallery/251462951/Motion-Design-for-Lakes-Hill-Realty",
  },
  {
    name: "Chimley Orchards",
    detail: "Premium label + packaging · orchards",
    link: "https://www.behance.net/gallery/212049903/Chimley-Orchards-Packaging-design",
  },
  {
    name: "Jawaaf Consulting Academy",
    detail: "Social design system · education",
    link: "https://www.behance.net/gallery/240885695/Jawaaf-Consulting-Academy-Social-Media-Design",
  },
  {
    name: "Stellar Music & Events",
    detail: "Event branding, motion graphics, promos",
    link: BEHANCE_PROFILE,
  },
  {
    name: "Nepal Cosmetic Surgery",
    detail: "Motion videos + social posts · clinic — see NCS Edits",
    link: "https://www.behance.net/gallery/240937921/Video-Editing-NCS",
  },
  {
    name: "Tato Na Charo",
    detail: "Thumbnails, logo, motion graphics · comedy channel",
    link: BEHANCE_PROFILE,
  },
  {
    name: "Khicha Studio",
    detail: "Character designs · illustration · animation",
    link: BEHANCE_PROFILE,
  },
];

const tools = [
  "Photoshop",
  "Illustrator",
  "After Effects",
  "Premiere Pro",
  "Blender",
  "Figma",
  "Clo 3D",
];

export default function AboutPage() {
  return (
    <ClickSpark {...SPARK}>
      <main className="min-h-screen bg-white text-zinc-900">
        <SiteNav />
        <section className="relative overflow-hidden bg-white">
          <div className="relative mx-auto max-w-[1280px]">
            <div className="px-6 py-16 md:px-0 md:py-20">
                <div className="flex items-start justify-between gap-6">
                    <h1 className="text-4xl font-semibold uppercase leading-[1.05] tracking-[-0.05em] text-zinc-900 md:text-6xl lg:text-7xl">
                      Wraythx
                    </h1>
                  <span className="pt-2 text-xs uppercase tracking-[0.2em] text-zinc-600">
                    Est. 2022
                  </span>
                </div>
                <div className="mt-4 max-w-3xl">
                  <p className="mt-4 text-2xl font-light italic tracking-[-0.04em] text-zinc-900">
                    Sandeep. C
                  </p>
                  <p className="mt-2 text-sm font-medium uppercase tracking-[0.14em] text-zinc-600">
                    Based in Kathmandu, Nepal — working worldwide
                  </p>
                  <p className="mt-1 text-base font-medium uppercase tracking-[0.14em] text-emerald-700">
                    Graphic, Motion & Visual Designer
                  </p>
                  <ScrollReveal
                    baseRotation={0}
                    enableBlur
                    blurStrength={6}
                    textClassName="mt-8 text-xl font-medium leading-[1.35] tracking-[-0.03em] text-zinc-900 md:text-3xl"
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
                      "last",
                    ]}
                  >
                    I&apos;m a graphic and visual designer focused on turning bold ideas into thoughtful, expressive experiences. I shape identities, digital interfaces, and visual systems that feel clear, distinctive, and made to last.
                  </ScrollReveal>
                </div>
              </div>
          </div>
        </section>

        <section className="border-y border-zinc-200 bg-white">
          <div className="mx-auto max-w-[1280px] px-6 py-24 md:py-32 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
              <div>
                <ScrollFade>
                  <p className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-600">
                    Focus areas
                  </p>
                </ScrollFade>
                <div className="mt-8 space-y-4">
                  {focusAreas.map((area, index) => (
                    <ScrollFade key={area}>
                      <div className="group relative cursor-default overflow-hidden border-l-2 border-zinc-200 py-3 pl-4 text-xl font-medium tracking-[-0.02em] text-zinc-900 transition-colors duration-500 hover:border-emerald-600">
                        <span className="pointer-events-none absolute inset-0 origin-left scale-x-0 bg-gradient-to-r from-emerald-50 to-transparent transition-transform duration-500 ease-out group-hover:scale-x-100" />
                        <span className="relative z-10 flex items-baseline gap-4">
                          <span className="text-xs font-normal tabular-nums text-zinc-600 transition-colors duration-500 group-hover:text-emerald-700">
                            0{index + 1}
                          </span>
                          <span className="transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-2">
                            {area}
                          </span>
                        </span>
                      </div>
                    </ScrollFade>
                  ))}
                </div>
              </div>

              <div>
                <ScrollFade>
                  <p className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-600">
                    Tools
                  </p>
                </ScrollFade>
                <div className="mt-8 flex flex-wrap gap-2">
                  {tools.map((tool) => (
                    <ScrollFade key={tool}>
                      <span className="border border-zinc-200 bg-white px-4 py-2 text-sm text-zinc-700 transition duration-300 hover:-translate-y-0.5 hover:border-emerald-600 hover:bg-emerald-50 hover:text-emerald-700">
                        {tool}
                      </span>
                    </ScrollFade>
                  ))}
                </div>
                <p className="mt-6 text-sm leading-6 text-zinc-600">
                  Clo 3D — 3D garment mockups and apparel visualization for
                  fashion clients.
                </p>
                <p className="mt-2 text-sm leading-6 text-zinc-600">
                  Also: HTML · CSS · JavaScript · React — handy for
                  Figma-to-web handoffs.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-[1280px] px-6 py-24 md:py-32 lg:px-8">
          <ScrollFade>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-600">
              Experience
            </p>
            <p className="mt-2 text-xs text-zinc-600">
              Last updated September 2026
            </p>
          </ScrollFade>
          <div className="mt-8 divide-y divide-zinc-200 border-t border-zinc-200">
            {experience.map((item) => (
              <ScrollFade key={`${item.period}-${item.role}`}>
                <div className="grid gap-2 py-10 md:grid-cols-[200px_1fr_1fr] md:gap-8">
                  <p className="text-sm tabular-nums text-zinc-600">
                    {item.period}
                  </p>
                  <div>
                    <h3 className="text-xl font-semibold tracking-[-0.02em] text-zinc-900">
                      {item.role}
                    </h3>
                    <p className="mt-1 text-sm text-emerald-700">{item.place}</p>
                  </div>
                  <p className="text-base leading-7 text-zinc-600">{item.note}</p>
                </div>
              </ScrollFade>
            ))}
          </div>
        </section>

        <section className="border-t border-zinc-200 bg-white">
          <div
            id="clients"
            className="mx-auto max-w-[1280px] scroll-mt-24 px-6 py-24 md:py-32 lg:px-8"
          >
            <ScrollFade>
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-600">
                Selected clients & projects
              </p>
            </ScrollFade>
            <div className="mt-8 grid gap-2 md:grid-cols-2 lg:grid-cols-3">
              {selectedClients.map((client) => (
                <ScrollFade key={client.name}>
                  <a
                    href={client.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${client.name} — view on Behance`}
                    className="block border border-zinc-200 bg-white px-5 py-4 transition duration-300 hover:-translate-y-0.5 hover:border-emerald-600 hover:bg-emerald-50/50"
                  >
                    <p className="text-sm font-semibold tracking-[-0.01em] text-zinc-900">
                      {client.name} ↗
                    </p>
                    <p className="mt-1 text-sm text-zinc-600">{client.detail}</p>
                  </a>
                </ScrollFade>
              ))}
            </div>
          </div>
        </section>

        <section
          id="contact"
          className="mx-auto max-w-[1280px] px-6 pb-24 lg:px-8"
        >
          <ScrollFade>
            <div className="border border-zinc-200 bg-[linear-gradient(135deg,_rgba(24,24,27,0.03),_rgba(255,255,255,0.85),_rgba(24,24,27,0.04))] p-8 md:p-12">
              <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
                <h2 className="max-w-xl text-3xl font-semibold tracking-[-0.05em] text-zinc-900 md:text-5xl">
                  Let&apos;s make something lasting.
                </h2>
                <p className="mt-4 text-sm text-zinc-600">
                  Kathmandu, Nepal · NPT (UTC+5:45) · replies within 48h
                </p>
                <Link
                  href={`mailto:${EMAIL}`}
                  className="inline-flex w-fit bg-zinc-900 px-6 py-3 text-sm font-medium text-white shadow-lg shadow-zinc-300 transition hover:-translate-y-0.5 hover:bg-zinc-700"
                >
                  {EMAIL}
                </Link>
                <p className="mt-4 text-sm text-zinc-600">
                  Prefer DMs?{" "}
                  <a
                    href="https://www.instagram.com/wraythx/"
                    target="_blank"
                    rel="noopener noreferrer me"
                    className="font-medium text-zinc-900 underline decoration-zinc-300 underline-offset-4 transition hover:decoration-emerald-600 hover:text-emerald-700"
                  >
                    Instagram @wraythx
                  </a>{" "}
                  — or copy the email above into your app.
                </p>
              </div>
            </div>
          </ScrollFade>
        </section>

        <SiteFooter />
      </main>
    </ClickSpark>
  );
}