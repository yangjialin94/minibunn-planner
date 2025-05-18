import "@/style/globals.scss";

import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";
import React, { Suspense } from "react";

import StickyCTA from "@/components/home/StickyCTA";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import StructuredData from "@/components/layout/StructuredData";
import TermlyCMP from "@/components/layout/TermlyCMP";

export const metadata: Metadata = {
  title:
    "Minibunn Planner —  A Minimalist Planner Built for Clarity, Not Clutter",
  description:
    "Minibunn is a minimalist digital planner that helps you plan clearly, stay focused, and avoid the overwhelm of bloated productivity apps.",
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
      "Minibunn is a minimalist digital planner that helps you plan clearly, stay focused, and avoid the overwhelm of bloated productivity apps.",
    siteName: "Minibunn Planner",
    images: [
      {
        url: "https://www.minibunnplanner.com/og-image.png",
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
      "Minibunn is a minimalist digital planner that helps you plan clearly, stay focused, and avoid the overwhelm of bloated productivity apps.",
    creator: "@minibunnplanner",
    images: ["https://www.minibunnplanner.com/twitter-card.png"],
  },
  icons: {
    icon: "https://www.minibunnplanner.com/favicon.ico",
    apple: "https://www.minibunnplanner.com/apple-touch-icon.png",
    shortcut: "https://www.minibunnplanner.com/favicon-32x32.png",
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

          <StickyCTA />
        </div>
        <Analytics />
      </body>
    </html>
  );
}
