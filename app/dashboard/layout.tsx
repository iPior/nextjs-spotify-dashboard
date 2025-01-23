import type { Metadata } from "next";
import React from "react";

// export const metadata: Metadata = {
//   title: "Next.js",
//   description: "Generated by Next.js",
// };

export default function DashboardLayout({
  toptracks,
  topartists,
  recommendedartists,
  recommendedtracks,
}: {
  toptracks: React.ReactNode;
  topartists: React.ReactNode;
  recommendedartists: React.ReactNode;
  recommendedtracks: React.ReactNode;
}) {
 
  return (
    <>
      <div className="h-full grid grid-cols-2 gap-2">
          {toptracks}
          {topartists}
          {recommendedartists}
          {recommendedtracks}
      </div>

    </>
  );
}