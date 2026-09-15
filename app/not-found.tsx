import type { Metadata } from "next";
import ClickSpark from "./ClickSpark";
import SiteNav from "./components/SiteNav";
import SiteFooter from "./components/SiteFooter";
import CTAButton from "./components/CTAButton";
import { SPARK, EMAIL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Page not found",
  description:
    "This page isn't in the wraythx portfolio — browse selected work or start a project.",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <ClickSpark {...SPARK}>
      <SiteNav />
      <main className="grid min-h-[70vh] min-h-[70svh] place-items-center bg-white px-6 py-16 text-center text-zinc-900">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-zinc-600">
              wraythx
            </p>
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-brand-700">
            404
          </p>
          <h1 className="mt-4 text-5xl font-semibold uppercase tracking-[-0.04em] md:text-7xl">
            Page not found
          </h1>
          <p className="mx-auto mt-6 max-w-md text-base leading-7 text-zinc-600">
            This page isn&apos;t in the portfolio — but the work is. Browse
            selected projects or start something new.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <CTAButton href="/work">View work</CTAButton>
            <CTAButton href="/services" variant="outline">
              Services
            </CTAButton>
            <a
              href={`mailto:${EMAIL}`}
              className="inline-flex rounded-none px-6 py-3 text-sm font-medium text-zinc-900 underline decoration-zinc-300 underline-offset-4 transition hover:decoration-zinc-900"
            >
              Contact →
            </a>
          </div>
        </div>
      </main>
      <SiteFooter />
    </ClickSpark>
  );
}