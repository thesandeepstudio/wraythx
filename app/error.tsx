"use client";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="grid min-h-screen place-items-center bg-white px-6 text-center text-zinc-900">
      <div>
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-emerald-700">
          Something broke
        </p>
        <h1 className="mt-4 text-4xl font-semibold tracking-[-0.04em] md:text-5xl">
          This page hit a snag
        </h1>
        <p className="mx-auto mt-6 max-w-md text-base leading-7 text-zinc-600">
          Try again — if it keeps failing, reach out and we will sort it.
        </p>
        <button
          type="button"
          onClick={() => reset()}
          className="mt-8 inline-flex min-h-[44px] items-center rounded-none bg-zinc-900 px-6 py-3 text-sm font-medium text-white transition hover:-translate-y-0.5 hover:bg-zinc-700"
        >
          Try again
        </button>
      </div>
    </main>
  );
}
