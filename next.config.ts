import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/nozu",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
