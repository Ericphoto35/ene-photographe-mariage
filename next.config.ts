import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.prod.website-files.com",
        pathname: "/**",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/a-propos",
        destination: "/about",
        permanent: true,
      },
      {
        source: "/galerie",
        destination: "/projects",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
