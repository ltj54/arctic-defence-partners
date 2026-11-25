import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./site.css";

export const metadata: Metadata = {
  title: "Arctic Defence Partners | Forhåndsvisning",
  description: "Arctic Defence Partners er et nordnorsk nettverk for samarbeid, innovasjon og beredskap. Første skisse til ny nettside.",
  robots: { index: false, follow: false },
};

export default function Layout({ children }: Readonly<{ children: ReactNode }>) {
  return <html lang="nb"><body>{children}</body></html>;
}
