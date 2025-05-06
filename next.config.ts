import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  /* config options here */
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: [{ loader: "@svgr/webpack", options: { icon: true } }],
    });
    return config;
  },
  typescript: { ignoreBuildErrors: true },
  images: {
    localPatterns: [
      {
        pathname: '/src/shared/assets/images/**',
        search: '',
      },
    ],
  },
};

export default nextConfig;
