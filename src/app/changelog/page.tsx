"use client";

import { motion } from "motion/react";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface ChangelogItem {
  slug: string;
  title: string;
  date: string;
  type: string | string[];
  summary?: string;
  content: string;
}

const tagStyles: Record<string, string> = {
  New: "bg-green-200 text-green-800",
  Improvement: "bg-blue-200 text-blue-800",
  Update: "bg-yellow-200 text-yellow-800",
  Launch: "bg-purple-200 text-purple-800",
  Fix: "bg-red-200 text-red-800",
};

// Server component wrapper
export default function ChangelogPage() {
  const [changes, setChanges] = useState<ChangelogItem[]>([]);

  useEffect(() => {
    // Fetch changelog data on client side
    fetch("/api/changelog")
      .then((res) => res.json())
      .then((data) => setChanges(data))
      .catch(console.error);
  }, []);

  return (
    <>
      {/* Hero Section */}
      <motion.section
        className="hero"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="relative mx-auto max-w-4xl text-center">
          <motion.h1
            className="mb-6 text-4xl leading-tight font-bold text-neutral-900 md:text-5xl lg:text-6xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Changelog
          </motion.h1>
          <motion.p
            className="mx-auto max-w-2xl text-lg leading-relaxed text-neutral-600 md:text-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            See what&apos;s new and improved with Minibunn. We&apos;re
            constantly working to make your planning experience better.
          </motion.p>
        </div>
      </motion.section>

      {/* Changelog Timeline Section */}
      <motion.section
        className="relative"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <div className="mx-auto max-w-4xl space-y-16">
          {changes.map((item, index) => (
            <motion.article
              key={item.slug}
              className="group relative rounded-2xl border border-neutral-100 bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
              whileHover={{ y: -4, scale: 1.01 }}
            >
              {/* Date Badge */}
              <motion.div
                className="absolute -top-4 left-8"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 1 + index * 0.1 }}
              >
                <span className="rounded-full bg-gradient-to-r from-neutral-800 to-neutral-600 px-4 py-2 text-sm font-semibold text-white shadow-md">
                  {new Date(item.date).toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}
                </span>
              </motion.div>

              <motion.div
                className="pt-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
              >
                {/* Title */}
                <motion.h2
                  className="mb-4 text-2xl leading-tight font-bold text-neutral-900 lg:text-3xl"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.3 + index * 0.1 }}
                >
                  {item.title}
                </motion.h2>

                {/* Tags */}
                <motion.div
                  className="mb-6 flex flex-wrap gap-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 1.4 + index * 0.1 }}
                >
                  {Array.isArray(item.type) ? (
                    item.type.map((tag, tagIndex) => (
                      <motion.span
                        key={tag}
                        className={`inline-flex items-center rounded-full px-3 py-1.5 text-sm font-semibold shadow-sm ${
                          tagStyles[tag] || "bg-neutral-100 text-neutral-700"
                        }`}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                          duration: 0.3,
                          delay: 1.5 + index * 0.1 + tagIndex * 0.1,
                        }}
                        whileHover={{ scale: 1.05 }}
                      >
                        {tag}
                      </motion.span>
                    ))
                  ) : (
                    <motion.span
                      className={`inline-flex items-center rounded-full px-3 py-1.5 text-sm font-semibold shadow-sm ${
                        tagStyles[item.type] ||
                        "bg-neutral-100 text-neutral-700"
                      }`}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: 1.5 + index * 0.1 }}
                      whileHover={{ scale: 1.05 }}
                    >
                      {item.type}
                    </motion.span>
                  )}
                </motion.div>

                {/* Summary */}
                {item.summary && (
                  <motion.div
                    className="mb-8 rounded-xl border border-neutral-400 bg-gradient-to-r from-neutral-50 to-white p-6 shadow-sm"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 1.6 + index * 0.1 }}
                  >
                    <p className="text-lg leading-relaxed font-medium text-neutral-700 lg:text-xl">
                      {item.summary}
                    </p>
                  </motion.div>
                )}

                {/* Content */}
                <motion.div
                  className="prose prose-lg prose-neutral max-w-none"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.7 + index * 0.1 }}
                >
                  <div className="space-y-4 leading-relaxed text-neutral-600">
                    <ReactMarkdown
                      remarkPlugins={[remarkGfm]}
                      components={{
                        p: ({ children }) => (
                          <p className="mb-6 text-base leading-8 text-neutral-600 lg:text-lg lg:leading-8">
                            {children}
                          </p>
                        ),
                        h1: ({ children }) => (
                          <h1 className="mt-10 mb-6 text-3xl font-bold text-neutral-900 lg:text-4xl">
                            {children}
                          </h1>
                        ),
                        h2: ({ children }) => (
                          <h2 className="mt-8 mb-4 text-2xl font-bold text-neutral-800 lg:text-3xl">
                            {children}
                          </h2>
                        ),
                        h3: ({ children }) => (
                          <h3 className="mt-6 mb-3 text-xl font-semibold text-neutral-800 lg:text-2xl">
                            {children}
                          </h3>
                        ),
                        h4: ({ children }) => (
                          <h4 className="mt-5 mb-2 text-lg font-semibold text-neutral-700">
                            {children}
                          </h4>
                        ),
                        h5: ({ children }) => (
                          <h5 className="mt-4 mb-2 text-base font-medium text-neutral-700">
                            {children}
                          </h5>
                        ),
                        h6: ({ children }) => (
                          <h6 className="mt-3 mb-2 text-sm font-medium tracking-wide text-neutral-700 uppercase">
                            {children}
                          </h6>
                        ),
                        ul: ({ children }) => (
                          <ul className="mb-6 ml-8 list-outside list-disc space-y-3 text-neutral-600">
                            {children}
                          </ul>
                        ),
                        ol: ({ children }) => (
                          <ol className="mb-6 ml-8 list-outside list-decimal space-y-3 text-neutral-600">
                            {children}
                          </ol>
                        ),
                        li: ({ children }) => (
                          <li className="pl-2 text-base leading-8 text-neutral-600 lg:text-lg">
                            {children}
                          </li>
                        ),
                        strong: ({ children }) => (
                          <strong className="font-bold text-neutral-800">
                            {children}
                          </strong>
                        ),
                        em: ({ children }) => (
                          <em className="text-neutral-700 italic">
                            {children}
                          </em>
                        ),
                        code: ({ children }) => (
                          <code className="rounded-md border border-neutral-200 bg-neutral-100 px-2.5 py-1.5 font-mono text-sm font-medium text-neutral-800">
                            {children}
                          </code>
                        ),
                        blockquote: ({ children }) => (
                          <blockquote className="my-6 border-l-4 border-neutral-300 bg-neutral-50 px-6 py-4 text-neutral-700 italic">
                            {children}
                          </blockquote>
                        ),
                        hr: () => (
                          <hr className="my-8 h-px border-0 bg-gradient-to-r from-transparent via-neutral-300 to-transparent" />
                        ),
                        pre: ({ children }) => (
                          <pre className="my-6 overflow-x-auto rounded-lg bg-neutral-900 p-4 text-sm text-neutral-100">
                            {children}
                          </pre>
                        ),
                        a: ({ children, href }) => (
                          <a
                            href={href}
                            className="font-medium text-neutral-800 underline decoration-neutral-400 underline-offset-4 transition-colors hover:text-neutral-900 hover:decoration-neutral-600"
                            target={
                              href?.startsWith("http") ? "_blank" : undefined
                            }
                            rel={
                              href?.startsWith("http")
                                ? "noopener noreferrer"
                                : undefined
                            }
                          >
                            {children}
                          </a>
                        ),
                      }}
                    >
                      {item.content}
                    </ReactMarkdown>
                  </div>
                </motion.div>
              </motion.div>

              {/* Decorative gradient border on hover */}
              <div className="pointer-events-none absolute inset-0 -z-10 rounded-2xl bg-gradient-to-r from-neutral-200 via-neutral-100 to-neutral-200 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </motion.article>
          ))}
        </div>
      </motion.section>
    </>
  );
}
