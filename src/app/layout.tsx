import "@/style/globals.scss";

import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";
import React, { Suspense } from "react";

import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import StructuredData from "@/components/layout/StructuredData";
import TermlyCMP from "@/components/layout/TermlyCMP";

export const metadata: Metadata = {
  title: "Minibunn Planner — Digital Planner That Feels Like Paper",
  description:
    "Minibunn Planner is a minimalist digital planner that feels like paper, thoughtfully designed by Jialin Yang.",
  keywords: [
    "digital planner",
    "minimalist planner",
    "productivity app",
    "paper-like planner",
  ],
  metadataBase: new URL("https://www.minibunnplanner.com"),
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Minibunn Planner",
    description:
      "A minimalist digital planner that feels like paper, thoughtfully designed by Jialin Yang.",
    siteName: "Minibunn Planner",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Minibunn Planner preview screenshot",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Minibunn Planner",
    description:
      "A minimalist digital planner that feels like paper, thoughtfully designed by Jialin Yang.",
    creator: "@JialinYang",
    images: ["/twitter-card.png"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
    shortcut: "/favicon-32x32.png",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <StructuredData />
      </head>
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
