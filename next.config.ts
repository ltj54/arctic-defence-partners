import type { NextConfig } from "next";

const config: NextConfig = {
  output: "export",
  basePath: "/arctic-defence-partners",
  trailingSlash: true,
  images: { unoptimized: true },
};

export default config;
