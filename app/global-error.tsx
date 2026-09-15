"use client";

export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-zinc-900 antialiased">
        <main className="grid min-h-screen place-items-center px-6 text-center">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-brand-700">
              Something broke
            </p>
            <h1 className="mt-4 text-4xl font-semibold tracking-[-0.04em]">
              This page hit a snag
            </h1>
            <button
              type="button"
              onClick={() => reset()}
              className="mt-8 inline-flex min-h-[44px] items-center bg-zinc-900 px-6 py-3 text-sm font-medium text-white"
            >
              Try again
            </button>
          </div>
        </main>
      </body>
    </html>
  );
}
