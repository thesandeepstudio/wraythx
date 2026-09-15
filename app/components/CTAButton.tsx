import type { ReactNode } from "react";

type CTAButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "accent" | "outline";
  external?: boolean;
  ariaLabel?: string;
  className?: string;
};

const variants = {
  primary:
    "bg-zinc-900 text-white shadow-lg shadow-zinc-300 hover:-translate-y-0.5 hover:bg-zinc-700 contrast-more:bg-black contrast-more:shadow-none",
  accent:
    "bg-brand-600 text-white hover:-translate-y-0.5 hover:bg-brand-700 contrast-more:bg-brand-800",
  outline:
    "border border-zinc-200 bg-white text-zinc-900 hover:-translate-y-0.5 hover:border-zinc-300 contrast-more:border-zinc-900 contrast-more:text-black",
} as const;

export default function CTAButton({
  href,
  children,
  variant = "primary",
  external = false,
  ariaLabel,
  className = "",
}: CTAButtonProps) {
  return (
    <a
      href={href}
      aria-label={ariaLabel}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={`inline-flex min-h-[44px] w-fit items-center rounded-none px-6 py-3 text-sm font-medium tracking-wide transition duration-300 ${variants[variant]} ${className}`}
    >
      {children}
    </a>
  );
}
