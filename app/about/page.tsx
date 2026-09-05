import type { Metadata } from "next";
import Link from "next/link";
import ClickSpark from "../ClickSpark";
import SiteNav from "../components/SiteNav";
import SiteFooter from "../components/SiteFooter";

export const metadata: Metadata = {
  title: "About — S. Chaudhary",
  description:
    "About S. Chaudhary — a graphic and visual designer shaping brand identities, motion graphics, and visual systems from Nepal.",
};

const focusAreas = [
  "Brand Identity",
  "Digital Interfaces",
  "Art Direction",
  "Motion Graphics",
];

const experience = [
  {
    period: "2022 — Present",
    role: "Independent Visual Designer",
    place: "wraythx | Freelance",
    note: "Identity, interface, and motion work for startups and creative studios.",
  },
  {
    period: "2021 — 2023",
    role: "Product Designer",
    place: "Freelance · Remote",
    note: "Shipped dashboards, consumer apps, and marketing sites across industries.",
  },
  {
    period: "2020 — 2021",
    role: "Designer",
    place: "Design Studio",
    note: "Brand systems, packaging, and editorial campaigns for local brands.",
  },
];

const tools = [
  "Figma",
  "Illustrator",
  "Photoshop",
  "After Effects",
  "Blender",
  "Premiere Pro",
];

export default function AboutPage() {
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

            <div className="py-16 md:py-20">
              <div className="max-w-3xl">
                <div className="flex items-start justify-between gap-6">
                  <h1 className="text-4xl font-semibold uppercase leading-[1.05] tracking-[-0.05em] text-zinc-900 md:text-6xl lg:text-7xl">
                    WRAYTHX
                  </h1>
                  <span className="pt-2 text-xs uppercase tracking-[0.2em] text-zinc-500">
                    Est. 2020
                  </span>
                </div>
                <p className="mt-4 text-2xl font-light italic tracking-[-0.04em] text-zinc-900">
                  S. Chaudhary
                </p>
                <p className="mt-1 text-base font-medium uppercase tracking-[0.14em] text-emerald-600">
                  Visual Designer
                </p>
                <p className="mt-8 text-xl font-medium leading-[1.35] tracking-[-0.03em] text-zinc-900 md:text-3xl">
                  I&apos;m a graphic and visual designer focused on turning bold
                  ideas into thoughtful, expressive experiences. I shape
                  identities, digital interfaces, and visual systems that feel
                  clear, distinctive, and made to last.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-zinc-200 bg-white">
          <div className="mx-auto max-w-[1280px] px-6 py-24 md:py-32 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
              <div>
                <p className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-500">
                  Focus areas
                </p>
                <ul className="mt-8 space-y-4">
                  {focusAreas.map((area, index) => (
                    <li
                      key={area}
                      className="group relative cursor-default overflow-hidden border-l-2 border-zinc-200 py-3 pl-4 text-xl font-medium tracking-[-0.02em] text-zinc-900 transition-colors duration-500 hover:border-emerald-600"
                    >
                      <span className="pointer-events-none absolute inset-0 origin-left scale-x-0 bg-gradient-to-r from-emerald-50 to-transparent transition-transform duration-500 ease-out group-hover:scale-x-100" />
                      <span className="relative z-10 flex items-baseline gap-4">
                        <span className="text-xs font-normal tabular-nums text-zinc-400 transition-colors duration-500 group-hover:text-emerald-600">
                          0{index + 1}
                        </span>
                        <span className="transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-2">
                          {area}
                        </span>
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <p className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-500">
                  Tools
                </p>
                <div className="mt-8 flex flex-wrap gap-2">
                  {tools.map((tool) => (
                    <span
                      key={tool}
                      className="border border-zinc-200 bg-white px-4 py-2 text-sm text-zinc-700 transition duration-300 hover:-translate-y-0.5 hover:border-emerald-600 hover:bg-emerald-50 hover:text-emerald-700"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-[1280px] px-6 py-24 md:py-32 lg:px-8">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-500">
            Experience
          </p>
          <div className="mt-8 divide-y divide-zinc-200 border-t border-zinc-200">
            {experience.map((item) => (
              <div
                key={item.role}
                className="grid gap-2 py-10 md:grid-cols-[200px_1fr_1fr] md:gap-8"
              >
                <p className="text-sm tabular-nums text-zinc-400">
                  {item.period}
                </p>
                <div>
                  <h3 className="text-xl font-semibold tracking-[-0.02em] text-zinc-900">
                    {item.role}
                  </h3>
                  <p className="mt-1 text-sm text-emerald-600">{item.place}</p>
                </div>
                <p className="text-base leading-7 text-zinc-600">{item.note}</p>
              </div>
            ))}
          </div>
        </section>

        <section
          id="contact"
          className="mx-auto max-w-[1280px] px-6 pb-24 lg:px-8"
        >
          <div className="border border-zinc-200 bg-[linear-gradient(135deg,_rgba(24,24,27,0.03),_rgba(255,255,255,0.85),_rgba(24,24,27,0.04))] p-8 md:p-12">
            <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <h2 className="max-w-xl text-3xl font-semibold tracking-[-0.05em] text-zinc-900 md:text-5xl">
                Let&apos;s make something lasting.
              </h2>
              <Link
                href="mailto:wraythx@gmail.com"
                className="inline-flex w-fit bg-zinc-900 px-6 py-3 text-sm font-medium text-white shadow-lg shadow-zinc-300 transition hover:-translate-y-0.5 hover:bg-zinc-700"
              >
                wraythx@gmail.com
              </Link>
            </div>
          </div>
        </section>

        <SiteFooter />
      </main>
    </ClickSpark>
  );
}