"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { EMAIL } from "@/lib/site";

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/work", label: "Work" },
  { href: "/services", label: "Services" },
];

export default function SiteNav() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!menuOpen) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = original;
    };
  }, [menuOpen]);

  useEffect(() => {
    if (!menuOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [menuOpen]);

  const isActive = (href: string) =>
    pathname === href ||
    (href !== "/" && pathname.startsWith(`${href}/`));

  return (
    <header className="sticky top-0 z-50 mx-auto flex w-full max-w-[1280px] items-center justify-between border-b border-zinc-200 bg-white px-6 pb-3 pt-3 md:px-0">

      <Link
        href="/"
        className="text-lg font-semibold tracking-[-0.04em] text-zinc-900 transition-transform duration-300 hover:-translate-y-0.5"
      >
        wraythx
      </Link>

      <nav
        className="hidden items-center gap-6 text-sm text-zinc-700 md:flex md:gap-8"
        aria-label="Main navigation"
      >
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            aria-current={isActive(link.href) ? "page" : undefined}
            className={`transition duration-300 hover:-translate-y-0.5 hover:text-zinc-900 ${
              isActive(link.href) ? "text-brand-700" : ""
            }`}
          >
            {link.label}
          </Link>
        ))}
      </nav>

      <div className="hidden md:block">
        <a
          href={`mailto:${EMAIL}`}
          className="text-sm font-medium text-zinc-900 transition duration-300 hover:-translate-y-0.5 hover:text-brand-700"
        >
          {EMAIL}
        </a>
      </div>

      <button
        type="button"
        ref={menuButtonRef}
        onClick={() => setMenuOpen((open) => !open)}
        aria-expanded={menuOpen}
        aria-controls="mobile-menu"
        aria-label={menuOpen ? "Close menu" : "Open menu"}
        className="flex min-h-[44px] min-w-[44px] flex-col items-end justify-center gap-1.5 p-2 md:hidden"
      >
        <span aria-hidden="true" className="h-0.5 w-6 bg-zinc-900" />
        <span aria-hidden="true" className="h-0.5 w-4 bg-zinc-900" />
      </button>

      <div
        id="mobile-menu"
        aria-hidden={!menuOpen}
        inert={!menuOpen}
        className={`absolute left-0 right-0 top-full z-40 overflow-hidden transition-[max-height,opacity,transform] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] md:hidden ${
          menuOpen
            ? "max-h-96 translate-y-0 opacity-100"
            : "pointer-events-none invisible max-h-0 -translate-y-2 opacity-0"
        }`}
      >
        <nav
          aria-label="Mobile navigation"
          className="flex flex-col border-b border-zinc-200 bg-white px-6 py-6"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              aria-current={isActive(link.href) ? "page" : undefined}
              className={`py-4 text-lg font-medium tracking-[-0.02em] transition duration-300 ${
                isActive(link.href) ? "text-brand-700" : "text-zinc-900"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <a
            href={`mailto:${EMAIL}`}
            onClick={() => setMenuOpen(false)}
            className="mt-2 pt-4 text-sm font-medium text-zinc-600"
          >
            {EMAIL}
          </a>
          <div className="mt-4 flex gap-6 border-t border-zinc-100 pt-4 text-sm font-medium text-zinc-900">
            <a
              href="https://www.behance.net/daboistudio"
              target="_blank"
              rel="noopener noreferrer me"
              onClick={() => setMenuOpen(false)}
            >
              Behance
            </a>
            <a
              href="https://www.instagram.com/wraythx/"
              target="_blank"
              rel="noopener noreferrer me"
              onClick={() => setMenuOpen(false)}
            >
              Instagram
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}