import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',
  basePath: '/sparshjaswal.github.io',
  assetPrefix: '/sparshjaswal.github.io/',
  images: {
    unoptimized: true,
  },
  
  reactStrictMode: true,
};

export default nextConfig;
