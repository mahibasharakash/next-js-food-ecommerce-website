import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'crudo.wpbingosite.com',
      },
    ],
  },
};

export default nextConfig;
