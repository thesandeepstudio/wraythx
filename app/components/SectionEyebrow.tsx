import type { ReactNode } from "react";

export default function SectionEyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-600">
      {children}
    </p>
  );
}
