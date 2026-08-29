import type { NextConfig } from "next";

const repoName = process.env.NEXT_PUBLIC_BASE_PATH || "";
const isGithubPages = process.env.GITHUB_ACTIONS === "true" || repoName.length > 0;

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  reactCompiler: true,
  images: {
    unoptimized: true,
  },
  basePath: isGithubPages ? repoName || "/My-Portfolio" : "",
  assetPrefix: isGithubPages ? repoName || "/My-Portfolio" : "",
};

export default nextConfig;
