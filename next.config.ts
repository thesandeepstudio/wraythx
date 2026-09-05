import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/wraythx",
  assetPrefix: "/wraythx/",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;