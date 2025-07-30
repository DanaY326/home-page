import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  devIndicators: false
};

module.exports = {
  // ... rest of the configuration.
  output: "standalone",
};

export default nextConfig;
