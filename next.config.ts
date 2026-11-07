import type { NextConfig } from "next";

/**
 * GitHub Pages serves static files only, so `npm run build` switches to a
 * static export when GITHUB_PAGES=true. Normal Vercel/local builds keep the
 * default Next.js server output and image optimisation.
 */
const isGitHubPages = process.env.GITHUB_PAGES === "true";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  reactStrictMode: true,
  ...(isGitHubPages
    ? {
        output: "export" as const,
        trailingSlash: true,
      }
    : {}),
  images: {
    formats: ["image/avif", "image/webp"],
    qualities: [75, 90],
    unoptimized: isGitHubPages,
  },
};

export default nextConfig;
