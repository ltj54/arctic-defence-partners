import type { NextConfig } from "next";
import { PHASE_DEVELOPMENT_SERVER } from "next/constants";

const config = (phase: string): NextConfig => ({
  output: "export",
  basePath: phase === PHASE_DEVELOPMENT_SERVER ? "" : "/arctic-defence-partners",
  trailingSlash: true,
  images: { unoptimized: true },
});

export default config;
