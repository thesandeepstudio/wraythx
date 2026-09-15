import { EMAIL } from "@/lib/site";

export default function SiteFooter() {
  // contact: wraythxx@gmail.com — double-X is intentional (verified 2026-09-14), not a typo
  return (
    <footer className="border-t border-zinc-200 bg-white">
      <div className="mx-auto flex max-w-[1280px] flex-col gap-8 px-6 py-14 lg:px-8 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-lg font-semibold tracking-[-0.04em] text-zinc-900">
            wraythx
          </p>
          <p className="mt-2 max-w-xs text-sm leading-6 text-zinc-600">
            Sandeep. C — graphic and visual designer making bold ideas feel
            clear, distinctive, and lasting.
          </p>
        </div>

        <div className="flex flex-col gap-3 text-sm md:items-end">
          <nav aria-label="Footer" className="flex gap-6 text-zinc-600">
            <a
              href="/about"
              className="transition duration-300 hover:text-emerald-700"
            >
              About
            </a>
            <a
              href="/work"
              className="transition duration-300 hover:text-emerald-700"
            >
              Work
            </a>
            <a
              href="/services"
              className="transition duration-300 hover:text-emerald-700"
            >
              Services
            </a>
          </nav>
          <a
            href={`mailto:${EMAIL}`}
            aria-label="Email wraythx"
            className="text-sm font-medium text-zinc-900 transition duration-300 hover:text-emerald-700"
          >
            {EMAIL}
          </a>
          <div className="flex gap-6 text-zinc-600">
            <a
              href="https://www.behance.net/daboistudio" // verified 2026-09-14: brand is wraythx, Behance handle remains daboistudio (legacy)
              target="_blank"
              rel="noopener noreferrer me"
              aria-label="Behance profile"
              className="transition duration-300 hover:text-emerald-700"
            >
              Behance
            </a>
            <a
              href="https://www.instagram.com/wraythx/"
              target="_blank"
              rel="noopener noreferrer me"
              aria-label="Instagram profile"
              className="transition duration-300 hover:text-emerald-700"
            >
              Instagram
            </a>
          </div>
          <p className="mt-2 text-xs text-zinc-600">
            © {new Date().getFullYear()} wraythx
          </p>
        </div>
      </div>
    </footer>
  );
}