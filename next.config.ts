import type { NextConfig } from "next";

// The footer shows a small build identifier so we can tell at a glance that
// a deploy actually picked up the latest changes. Previously this was a
// hardcoded string in site.ts that had to be bumped by hand on every push
// (and kept getting forgotten). Instead, derive it automatically at build
// time from the git commit Vercel is building — it changes on its own with
// every deploy. Locally (no Vercel env vars) fall back to the build
// timestamp so it's still never stuck on one value.
const buildVersion =
  process.env.VERCEL_GIT_COMMIT_SHA?.slice(0, 7) ||
  new Date().toISOString().slice(0, 16).replace("T", " ");

const nextConfig: NextConfig = {
  env: {
    NEXT_PUBLIC_BUILD_VERSION: buildVersion,
  },
};

export default nextConfig;
