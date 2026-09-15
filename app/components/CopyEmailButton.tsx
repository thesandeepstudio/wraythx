"use client";

import { useState } from "react";
import { EMAIL } from "@/lib/site";

export default function CopyEmailButton({
  className = "",
}: {
  className?: string;
}) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
    } catch {
      const area = document.createElement("textarea");
      area.value = EMAIL;
      document.body.appendChild(area);
      area.select();
      document.execCommand("copy");
      document.body.removeChild(area);
    }
    setCopied(true);
    window.setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      type="button"
      onClick={copy}
      aria-live="polite"
      className={`inline-flex min-h-[44px] w-fit items-center rounded-none border border-zinc-200 bg-white px-6 py-3 text-sm font-medium tracking-wide text-zinc-900 transition duration-300 hover:-translate-y-0.5 hover:border-zinc-300 ${className}`}
    >
      {copied ? "Copied ✓" : "Copy email"}
    </button>
  );
}
