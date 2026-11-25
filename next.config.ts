import type { NextConfig } from "next";
import { PHASE_DEVELOPMENT_SERVER } from "next/constants";

const config = (phase: string): NextConfig => ({
  output: "export",
  basePath: phase === PHASE_DEVELOPMENT_SERVER ? "" : "/arctic-defence-partners",
  trailingSlash: true,
  images: {
    unoptimized: true,
    remotePatterns: [{ protocol: "https", hostname: "wms.geonorge.no", pathname: "/skwms1/wms.topo" }],
  },
});

export default config;
