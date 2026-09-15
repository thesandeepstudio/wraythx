export default function Loading() {
  return (
    <main className="mx-auto max-w-[1280px] animate-pulse px-6 py-16 lg:px-8">
      <div className="h-4 w-40 bg-zinc-200" />
      <div className="mt-8 h-12 w-2/3 bg-zinc-200" />
      <div className="mt-8 grid gap-6 md:grid-cols-3">
        <div className="h-64 bg-zinc-100" />
        <div className="h-64 bg-zinc-100" />
        <div className="h-64 bg-zinc-100" />
      </div>
    </main>
  );
}
