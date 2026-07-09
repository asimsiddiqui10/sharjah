import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  turbopack: {
    root: path.resolve(__dirname),
  },
  // The site is a single scrolling page now — old routes land on their section.
  async redirects() {
    return [
      { source: "/about", destination: "/#about", permanent: true },
      { source: "/why-us", destination: "/#why-us", permanent: true },
      { source: "/services", destination: "/#services", permanent: true },
      { source: "/properties", destination: "/#properties", permanent: true },
      { source: "/maintenance", destination: "/#maintenance", permanent: true },
      { source: "/tenants", destination: "/#faq", permanent: true },
      { source: "/contact", destination: "/#contact", permanent: true },
    ];
  },
};

export default nextConfig;
