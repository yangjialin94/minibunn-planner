"use client";

import { motion } from "motion/react";
import Link from "next/link";
import React from "react";

const MotionLink = motion(Link);

export default function StickyCTA() {
  return (
    <motion.div
      className="fixed right-0 bottom-0 left-0 z-50 border-t border-neutral-200 bg-white px-4 py-3"
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 1 }}
    >
      <div className="flex items-center justify-between">
        <motion.div
          className="text-sm"
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.2 }}
        >
          <motion.span
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3, delay: 1.3 }}
          >
            🎉
          </motion.span>{" "}
          <span className="font-medium">
            Start free — no credit card required
          </span>
          <br />
          <span className="text-neutral-600">
            Get task management instantly, upgrade later
          </span>
        </motion.div>
        <MotionLink
          href="https://app.minibunnplanner.com/"
          className="ml-4 rounded-full bg-neutral-800 px-4 py-2 text-sm font-medium text-neutral-100 hover:bg-neutral-700"
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.4 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Start Free
        </MotionLink>
      </div>
    </motion.div>
  );
}
