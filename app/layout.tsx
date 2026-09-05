import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://thesandeepstudio.github.io";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "wraithx — Visual Designer & Motion Artist",
    template: "%s · wraithx",
  },
  description:
    "Portfolio of S. Chaudhary — a graphic and visual designer crafting brand identities, motion graphics, and bold visual systems that feel clear, distinctive, and made to last.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: `${siteUrl}${basePath}/`,
    siteName: "wraithx",
    title: "wraithx — Visual Designer & Motion Artist",
    description:
      "Brand identities, motion graphics, and bold visual systems by S. Chaudhary.",
    images: [
      {
        url: `${siteUrl}${basePath}/og.png`,
        width: 1200,
        height: 630,
        alt: "wraithx",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "wraithx — Visual Designer & Motion Artist",
    description:
      "Brand identities, motion graphics, and bold visual systems by S. Chaudhary.",
    images: [`${siteUrl}${basePath}/og.png`],
  },
  icons: {
    icon: `${basePath}/icon.svg`,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-white text-zinc-900">{children}</body>
    </html>
  );
}