import type { Metadata } from "next";
import ClickSpark from "../ClickSpark";
import ScrollReveal from "../ScrollReveal";
import ScrollFade from "../components/ScrollFade";
import SiteNav from "../components/SiteNav";
import SiteFooter from "../components/SiteFooter";
import WorkFilters from "../components/WorkFilters";
import { projects } from "@/lib/projects";
import { SPARK, EMAIL } from "../../lib/site";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Selected projects by wraythx — branding, motion graphics, video editing, graphic design, and social media work.",
};

export default function WorkPage() {
  return (
    <ClickSpark {...SPARK}>
      <main className="min-h-screen bg-white text-zinc-900">
        <SiteNav />
        <section className="relative overflow-hidden bg-white">
          <div className="relative mx-auto max-w-[1280px]">
            <div className="px-6 py-16 md:px-0 md:py-20">
              <ScrollFade className="flex items-baseline justify-between text-xs uppercase tracking-[0.2em] text-zinc-600">
                <span>Portfolio</span>
                <span>2022 — Present</span>
              </ScrollFade>
              <h1 className="mt-8 text-4xl font-semibold tracking-[-0.04em] text-zinc-900 md:text-5xl">
                Selected Work
              </h1>
              <p className="mt-4 max-w-2xl text-base leading-7 text-zinc-600">
                Branding, motion graphics, video editing and graphic design — 18
                projects from 2022 to present.
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-[1280px] px-6 pb-24 lg:px-8">
          <ScrollFade>
            <WorkFilters projects={projects} />
          </ScrollFade>
        </section>

        <section
          id="about"
          className="border-t border-zinc-200 bg-white"
        >
          <div className="mx-auto max-w-6xl px-6 py-28 md:py-36 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:gap-20">
              <div>
                <ScrollFade>
                  <p className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-600">
                    About
                  </p>
                </ScrollFade>
                <ScrollReveal
                  baseRotation={0}
                  enableBlur
                  blurStrength={6}
                  textClassName="mt-8 text-xl font-medium uppercase leading-[1.35] tracking-[-0.03em] text-zinc-900 md:text-2xl"
                  highlightedWords={[
                    "bold",
                    "thoughtful",
                    "expressive",
                    "clear",
                    "distinctive",
                    "last",
                  ]}
                >
                  I&apos;m a graphic and visual designer focused on turning bold ideas into thoughtful, expressive experiences. I shape identities, digital interfaces, and visual systems that feel clear, distinctive, and made to last.
                </ScrollReveal>
              </div>
              <div className="flex flex-col justify-end">
                <ScrollFade>
                  <p className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-600">
                    Contact
                  </p>
                  <p className="mt-6 text-2xl font-medium tracking-[-0.03em] text-zinc-900 md:text-3xl">
                    Let&apos;s make something{" "}
                    <span className="text-emerald-700 italic">lasting</span>.
                  </p>
                  <a
                    href={`mailto:${EMAIL}`}
                    className="mt-6 inline-flex w-fit rounded-none bg-zinc-900 px-6 py-3 text-sm font-medium text-white shadow-lg shadow-zinc-300 transition hover:-translate-y-0.5 hover:bg-zinc-700"
                  >
                    {EMAIL}
                  </a>
                </ScrollFade>
              </div>
            </div>
          </div>
        </section>

        <SiteFooter />
      </main>
    </ClickSpark>
  );
}
