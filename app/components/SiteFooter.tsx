export default function SiteFooter() {
  return (
    <footer className="border-t border-zinc-200 bg-white">
      <div className="mx-auto flex max-w-[1280px] flex-col gap-8 px-6 py-14 lg:px-8 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-lg font-semibold tracking-[-0.04em] text-zinc-900">
            wraithx
          </p>
          <p className="mt-2 max-w-xs text-sm leading-6 text-zinc-500">
            S. Chaudhary — graphic &amp; visual designer making bold ideas feel
            clear, distinctive, and lasting.
          </p>
        </div>

        <div className="flex flex-col gap-3 text-sm md:items-end">
          <a
            href="mailto:wraithx@gmail.com"
            aria-label="Email wraithx"
            className="text-sm font-medium text-zinc-900 transition duration-300 hover:text-emerald-600"
          >
            wraithx@gmail.com
          </a>
          <div className="flex gap-6 text-zinc-600">
            <a
              href="https://www.behance.net/daboistudio"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Behance profile"
              className="transition duration-300 hover:text-emerald-600"
            >
              Behance
            </a>
            <a
              href="https://www.instagram.com/wraythx/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram profile"
              className="transition duration-300 hover:text-emerald-600"
            >
              Instagram
            </a>
          </div>
          <p className="mt-2 text-xs text-zinc-400">
            © {new Date().getFullYear()} wraithx
          </p>
        </div>
      </div>
    </footer>
  );
}