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
            The page you&apos;re looking for doesn&apos;t exist — but the best
            work is still just a click away.
          </p>
          <Link
            href="/work"
            className="mt-8 inline-flex rounded-none bg-zinc-900 px-6 py-3 text-sm font-medium text-white transition hover:-translate-y-0.5 hover:bg-zinc-700"
          >
            Back to work
          </Link>
        </div>
      </main>
    </ClickSpark>
  );
}