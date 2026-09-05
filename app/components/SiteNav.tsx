"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/work", label: "Work" },
  { href: "/services", label: "Services" },
];

export default function SiteNav({
  revealOnScroll = false,
}: {
  revealOnScroll?: boolean;
}) {
  const pathname = usePathname();
  const [visible, setVisible] = useState(!revealOnScroll);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!revealOnScroll) return;
    const handleScroll = () => setVisible(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [revealOnScroll]);

  const isActive = (href: string) =>
    pathname === href ||
    (href !== "/" && pathname.startsWith(`${href}/`));

  return (
    <header
      className={`sticky top-0 z-50 mx-auto flex w-full items-center justify-between border-b border-zinc-200 bg-white pb-3 transition-all duration-500 ${
        visible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none -translate-y-2 opacity-0"
      }`}
    >
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
              isActive(link.href) ? "text-emerald-600" : ""
            }`}
          >
            {link.label}
          </Link>
        ))}
      </nav>

      <div className="hidden md:block">
        <a
          href="mailto:wraythx@gmail.com"
          className="text-sm font-medium text-zinc-900 transition duration-300 hover:-translate-y-0.5 hover:text-emerald-600"
        >
          wraythx@gmail.com
        </a>
      </div>

      <button
        type="button"
        onClick={() => setMenuOpen((open) => !open)}
        aria-expanded={menuOpen}
        aria-controls="mobile-menu"
        aria-label="Toggle menu"
        className="flex flex-col items-end gap-1.5 p-2 md:hidden"
      >
        <span className="h-0.5 w-6 bg-zinc-900" />
        <span className="h-0.5 w-4 bg-zinc-900" />
      </button>

      {menuOpen && (
        <nav
          id="mobile-menu"
          aria-label="Mobile navigation"
          className="absolute left-0 right-0 top-full flex flex-col border-b border-zinc-200 bg-white px-6 py-6 md:hidden"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              aria-current={isActive(link.href) ? "page" : undefined}
              className={`py-3 text-lg font-medium tracking-[-0.02em] transition duration-300 ${
                isActive(link.href) ? "text-emerald-600" : "text-zinc-900"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="mailto:wraythx@gmail.com"
            onClick={() => setMenuOpen(false)}
            className="mt-2 pt-4 text-sm font-medium text-zinc-600"
          >
            wraythx@gmail.com
          </a>
        </nav>
      )}
    </header>
  );
}