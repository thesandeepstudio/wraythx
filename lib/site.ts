export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://thesandeepstudio.github.io";

export const EMAIL = "wraythxx@gmail.com";

export function mailto(subject?: string, body?: string): string {
  const params = new URLSearchParams();
  if (subject) params.set("subject", subject);
  if (body) params.set("body", body);
  const query = params.toString();
  return `mailto:${EMAIL}${query ? `?${query}` : ""}`;
}

export const SPARK = {
  sparkColor: "#059669",
  sparkSize: 8,
  sparkRadius: 12,
  sparkCount: 4,
  duration: 260,
  easing: "ease-out",
  extraScale: 1,
} as const;
