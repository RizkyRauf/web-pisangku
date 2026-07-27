import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "instagram.fcgk12-1.fna.fbcdn.net",
      },
    ],
  },
  turbopack: {
    root: process.cwd(),
  },
}

export default nextConfig
