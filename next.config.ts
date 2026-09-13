import type { NextConfig } from "next";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  // Static HTML export only for GitHub Pages builds.
  // Cloudflare Workers (OpenNext) needs the default server build.
  ...(process.env.BUILD_TARGET === "github-pages"
    ? { output: "export" as const }
    : {}),
  basePath,
  assetPrefix: basePath ? `${basePath}/` : "",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;