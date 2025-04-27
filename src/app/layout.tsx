import "@/style/globals.scss";

import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";
import React, { Suspense } from "react";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import TermlyCMP from "@/components/TermlyCMP";

export const metadata: Metadata = {
  title: "Minibunn Planner",
  description:
    "A minimalist digital planner that feels like paper, thoughtfully designed by Jialin Yang.",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Suspense>
          <TermlyCMP
            websiteUUID={process.env.NEXT_PUBLIC_WEBSITE_UUID!}
            autoBlock={false}
            masterConsentsOrigin=""
          />
        </Suspense>
        <div className="main-container">
          {/* Header Section */}
          <Header />

          {/* Main Content Section */}
          <main>{children}</main>

          {/* Footer Section */}
          <Footer />
        </div>
        <Analytics />
      </body>
    </html>
  );
}
