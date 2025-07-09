"use client";

import { motion } from "motion/react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import { ChangelogItem } from "@/lib/getChangelog";

const tagStyles: Record<string, string> = {
  New: "bg-green-200 text-green-800",
  Improvement: "bg-blue-200 text-blue-800",
  Update: "bg-yellow-200 text-yellow-800",
  Launch: "bg-purple-200 text-purple-800",
  Fix: "bg-red-200 text-red-800",
};

interface ChangelogContentProps {
  changes: ChangelogItem[];
}

export default function ChangelogContent({ changes }: ChangelogContentProps) {
  return (
    <>
      {/* Hero Section */}
      <motion.section
        className="hero"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Changelog
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          See what&apos;s new and improved with Minibunn.
        </motion.h2>
      </motion.section>

      {/* Changelog Timeline Section */}
      <motion.section
        className="timeline"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <div className="mx-auto max-w-3xl space-y-12">
          {changes.map((item, index) => (
            <motion.div
              key={item.slug}
              className="border-l-4 border-neutral-200 pl-8"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
            >
              <motion.div
                className="mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
              >
                <h3 className="mb-2 text-xl font-bold">{item.title}</h3>
                <p className="mb-3 text-sm text-neutral-500">{item.date}</p>

                {/* Tags */}
                <motion.div
                  className="mb-4 flex flex-wrap gap-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
                >
                  {Array.isArray(item.type) ? (
                    item.type.map((tag, tagIndex) => (
                      <motion.span
                        key={tag}
                        className={`rounded-full px-3 py-1 text-xs font-medium ${
                          tagStyles[tag] || "bg-neutral-200 text-neutral-800"
                        }`}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                          duration: 0.3,
                          delay: 1.3 + index * 0.1 + tagIndex * 0.1,
                        }}
                      >
                        {tag}
                      </motion.span>
                    ))
                  ) : (
                    <motion.span
                      className={`rounded-full px-3 py-1 text-xs font-medium ${
                        tagStyles[item.type] ||
                        "bg-neutral-200 text-neutral-800"
                      }`}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: 1.3 + index * 0.1 }}
                    >
                      {item.type}
                    </motion.span>
                  )}
                </motion.div>

                {/* Summary */}
                {item.summary && (
                  <motion.p
                    className="mb-4 text-neutral-600"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1.4 + index * 0.1 }}
                  >
                    {item.summary}
                  </motion.p>
                )}

                {/* Content */}
                <motion.div
                  className="prose prose-neutral max-w-none"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.5 + index * 0.1 }}
                >
                  <ReactMarkdown remarkPlugins={[remarkGfm]}>
                    {item.content}
                  </ReactMarkdown>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </>
  );
}
