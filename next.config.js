const { execSync } = require("child_process");
const { version } = require("./package.json");

function commitSha() {
  if (process.env.VERCEL_GIT_COMMIT_SHA) return process.env.VERCEL_GIT_COMMIT_SHA.slice(0, 7);
  try {
    return execSync("git rev-parse --short HEAD").toString().trim();
  } catch {
    return "dev";
  }
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      { source: "/apps", destination: "/projects", permanent: true },
      { source: "/working", destination: "/about", permanent: true },
    ];
  },
  env: {
    NEXT_PUBLIC_APP_VERSION: version,
    NEXT_PUBLIC_COMMIT_SHA: commitSha(),
    // The version badge shows on local builds and previews, never on the live site.
    NEXT_PUBLIC_SHOW_VERSION: process.env.VERCEL_ENV === "production" ? "0" : "1",
  },
};

module.exports = nextConfig;
