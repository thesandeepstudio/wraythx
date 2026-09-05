import type { Metadata } from "next";
import ClickSpark from "../ClickSpark";
import SiteNav from "../components/SiteNav";
import SiteFooter from "../components/SiteFooter";
import WorkFilters from "../components/WorkFilters";
import { projects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Selected projects by wraythx — branding, motion graphics, video editing, graphic design, and social media work.",
};

export default function WorkPage() {
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
              <div className="flex items-baseline justify-between text-xs uppercase tracking-[0.2em] text-zinc-500">
                <span>Portfolio</span>
                <span>2020 — Present</span>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-[1280px] px-6 pb-24 lg:px-8">
          <WorkFilters projects={projects} />
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
                  href="mailto:wraythx@gmail.com"
                  className="mt-6 inline-flex w-fit rounded-none bg-zinc-900 px-6 py-3 text-sm font-medium text-white shadow-lg shadow-zinc-300 transition hover:-translate-y-0.5 hover:bg-zinc-700"
                >
                  wraythx@gmail.com
                </a>
              </div>
            </div>
          </div>
        </section>

        <SiteFooter />
      </main>
    </ClickSpark>
  );
}
