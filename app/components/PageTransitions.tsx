"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

type ViewTransitionDocument = Document & {
  startViewTransition?: (update: () => void) => unknown;
};

import { BASE_PATH } from "@/lib/site";

const stripBasePath = (path: string) => {
  if (!BASE_PATH) return path;
  if (path === BASE_PATH) return "/";
  if (path.startsWith(`${BASE_PATH}/`)) return path.slice(BASE_PATH.length);
  return path;
};

export default function PageTransitions() {
  const router = useRouter();

  useEffect(() => {
    const onClickCapture = (event: MouseEvent) => {
      if (
        event.defaultPrevented ||
        event.button !== 0 ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey
      )
        return;

      const anchor = (event.target as HTMLElement | null)?.closest?.("a");
      if (!anchor) return;

      const href = anchor.getAttribute("href");
      if (!href) return;
      if (
        href.startsWith("#") ||
        href.startsWith("mailto:") ||
        href.startsWith("tel:")
      )
        return;
      if (anchor.target && anchor.target !== "_self") return;
      if (anchor.hasAttribute("download")) return;
      if (anchor.getAttribute("rel")?.includes("external")) return;

      const url = new URL(anchor.href, window.location.href);
      if (url.origin !== window.location.origin) return;

      const reducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;
      const startViewTransition = (
        document as ViewTransitionDocument
      ).startViewTransition?.bind(document);

      if (reducedMotion || !startViewTransition) return;

      event.preventDefault();

      const destination = stripBasePath(
        `${url.pathname}${url.search}${url.hash}`,
      );
      startViewTransition(() => router.push(destination));
    };

    document.addEventListener("click", onClickCapture, true);
    return () => document.removeEventListener("click", onClickCapture, true);
  }, [router]);

  return null;
}