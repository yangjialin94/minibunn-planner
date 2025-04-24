import "@/style/globals.scss";

import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";

import Header from "@/components/Header";

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
        <div className="main-container">
          <Header />
          <main>{children}</main>
        </div>
        <Analytics />
      </body>
    </html>
  );
}
