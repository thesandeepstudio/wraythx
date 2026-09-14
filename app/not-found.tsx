import Link from "next/link";
import ClickSpark from "./ClickSpark";

export default function NotFound() {
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
      <main className="grid min-h-screen place-items-center bg-white px-6 text-center text-zinc-900">
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-emerald-600">
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
            <Link
              href="/work"
              className="inline-flex rounded-none bg-zinc-900 px-6 py-3 text-sm font-medium text-white transition hover:-translate-y-0.5 hover:bg-zinc-700"
            >
              View work
            </Link>
            <Link
              href="/services"
              className="inline-flex rounded-none border border-zinc-200 bg-white px-6 py-3 text-sm font-medium text-zinc-900 transition hover:-translate-y-0.5 hover:border-zinc-300"
            >
              Services
            </Link>
            <a
              href="mailto:wraythxx@gmail.com"
              className="inline-flex rounded-none px-6 py-3 text-sm font-medium text-zinc-900 underline decoration-zinc-300 underline-offset-4 transition hover:decoration-zinc-900"
            >
              Contact →
            </a>
          </div>
        </div>
      </main>
    </ClickSpark>
  );
}