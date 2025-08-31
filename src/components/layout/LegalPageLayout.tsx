"use client";

import { motion } from "motion/react";
import React, { useEffect, useState } from "react";

interface LegalPageLayoutProps {
  title: string;
  lastUpdated: string;
  children: React.ReactNode;
}

export function LegalPageLayout({
  title,
  lastUpdated,
  children,
}: LegalPageLayoutProps) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen bg-gradient-to-b from-slate-50 to-white"
    >
      <div className="mx-auto max-w-4xl px-6 py-16 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-bold text-slate-900 sm:text-5xl">
            {title}
          </h1>
          <p className="text-lg text-slate-600">Last updated: {lastUpdated}</p>
        </div>

        {/* Content */}
        <div className="prose prose-lg prose-slate max-w-none">
          <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm sm:p-12">
            {children}
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 border-t border-slate-200 pt-8 text-center">
          <p className="text-slate-600">
            Questions? Contact us at{" "}
            <a
              href="mailto:work@jialinyang.com"
              className="font-medium text-blue-600 hover:text-blue-700"
            >
              work@jialinyang.com
            </a>
          </p>
        </div>
      </div>
    </motion.div>
  );
}
