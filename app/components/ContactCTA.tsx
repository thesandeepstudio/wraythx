import type { ReactNode } from "react";
import ScrollFade from "./ScrollFade";

type ContactCTAProps = {
  title: ReactNode;
  actions: ReactNode;
  note?: ReactNode;
};

export default function ContactCTA({ title, actions, note }: ContactCTAProps) {
  return (
    <ScrollFade>
      <div className="border border-zinc-200 bg-[linear-gradient(135deg,_rgba(24,24,27,0.03),_rgba(255,255,255,0.85),_rgba(24,24,27,0.04))] p-8 md:p-12">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <h2 className="max-w-xl text-3xl font-semibold tracking-[-0.05em] text-zinc-900 md:text-5xl">
            {title}
          </h2>
          <div className="flex flex-col gap-4">{actions}</div>
        </div>
        {note ? <div className="mt-6">{note}</div> : null}
      </div>
    </ScrollFade>
  );
}
