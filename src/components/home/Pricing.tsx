"use client";

import { Check, X } from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";

const MotionLink = motion(Link);

function Pricing() {
  return (
    <motion.section
      className="mx-auto text-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      {/* heading */}
      <motion.div
        className="mb-16 space-y-3"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <motion.p
          className="text-xs font-medium tracking-wide text-neutral-500 uppercase"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          Indie-made. Simple by design.
        </motion.p>
        <motion.h2
          className="mb-6 text-3xl font-bold md:text-4xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          A minimalist planner that respects your time.
        </motion.h2>
        <motion.p
          className="text-neutral-500 md:text-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          Support an indie alternative for less than $0.10/day.
        </motion.p>
        <motion.p
          className="text-sm text-neutral-500"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          Start with our free plan — upgrade anytime from within the app.
        </motion.p>
      </motion.div>

      {/* plans */}
      <motion.div
        className="grid grid-cols-1 items-stretch gap-8 md:grid-cols-3"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        viewport={{ once: true }}
      >
        {/* free */}
        <motion.div
          className="flex flex-col justify-between rounded-xl border-2 border-neutral-200 bg-white p-10 text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          whileHover={{
            y: -5,
            transition: { duration: 0.2 },
          }}
        >
          <div>
            <h3 className="mb-1 font-semibold">Free</h3>
            <p className="mb-6 text-2xl font-bold tracking-tight sm:text-3xl">
              $0
            </p>
            <div className="mb-6 space-y-2 text-center text-sm">
              <motion.div
                className="flex items-center"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Check className="mr-3 h-4 w-4 text-green-500" />
                <span>Task Tracking</span>
              </motion.div>
              <motion.div
                className="flex items-center"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <X className="mr-3 h-4 w-4 text-red-500" />
                <span className="text-neutral-400">Note Keeping</span>
              </motion.div>
              <motion.div
                className="flex items-center"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <X className="mr-3 h-4 w-4 text-red-500" />
                <span className="text-neutral-400">Backlog Management</span>
              </motion.div>
            </div>
          </div>
          <MotionLink
            href="https://app.minibunnplanner.com/"
            className="mt-auto w-full rounded-full bg-neutral-800 py-3 text-neutral-100 hover:bg-neutral-900"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            Get Started Free
          </MotionLink>
        </motion.div>

        {/* monthly */}
        <motion.div
          className="relative flex flex-col justify-between rounded-xl border-2 border-neutral-200 bg-white p-10 text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          whileHover={{
            y: -8,
            scale: 1.02,
            transition: { duration: 0.2 },
          }}
        >
          <motion.span
            className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-neutral-800 px-3 py-1 text-xs font-medium tracking-wide text-neutral-100 uppercase"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{
              duration: 0.4,
              delay: 0.3,
              type: "spring",
              stiffness: 200,
            }}
            viewport={{ once: true }}
          >
            Popular
          </motion.span>
          <div>
            <h3 className="mb-1 font-semibold">Monthly</h3>
            <p className="mb-6 text-2xl font-bold tracking-tight sm:text-3xl">
              $2.99
            </p>
            <div className="mb-6 space-y-2 text-center text-sm">
              <motion.div
                className="flex items-center"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Check className="mr-3 h-4 w-4 text-green-500" />
                <span>Task Tracking</span>
              </motion.div>
              <motion.div
                className="flex items-center"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <Check className="mr-3 h-4 w-4 text-green-500" />
                <span>Note Keeping</span>
              </motion.div>
              <motion.div
                className="flex items-center"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <Check className="mr-3 h-4 w-4 text-green-500" />
                <span>Backlog Management</span>
              </motion.div>
            </div>
          </div>
          <MotionLink
            href="https://app.minibunnplanner.com/"
            className="mt-auto w-full rounded-full bg-neutral-800 py-3 text-neutral-100 hover:bg-neutral-900"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            Get Started & Upgrade
          </MotionLink>
        </motion.div>

        {/* yearly */}
        <motion.div
          className="relative flex flex-col justify-between rounded-xl border-2 border-neutral-800 bg-white p-10 text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          whileHover={{
            y: -10,
            scale: 1.03,
            transition: { duration: 0.2 },
          }}
        >
          <motion.span
            className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-neutral-800 px-3 py-1 text-xs font-medium tracking-wide text-neutral-100 uppercase"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{
              duration: 0.4,
              delay: 0.4,
              type: "spring",
              stiffness: 200,
            }}
            viewport={{ once: true }}
          >
            Best Value
          </motion.span>
          <div>
            <h3 className="mb-1 font-semibold">Yearly</h3>
            <p className="mb-6 text-2xl font-bold tracking-tight sm:text-3xl">
              $19.99
            </p>
            <p className="mb-2 text-sm text-neutral-500">($1.67 / month)</p>
            <motion.p
              className="mb-4 text-xs font-medium text-green-600"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              viewport={{ once: true }}
            >
              Save 44%
            </motion.p>
            <div className="mb-6 space-y-2 text-center text-sm">
              <motion.div
                className="flex items-center"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Check className="mr-3 h-4 w-4 text-green-500" />
                <span>Task Tracking</span>
              </motion.div>
              <motion.div
                className="flex items-center"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <Check className="mr-3 h-4 w-4 text-green-500" />
                <span>Note Keeping</span>
              </motion.div>
              <motion.div
                className="flex items-center"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <Check className="mr-3 h-4 w-4 text-green-500" />
                <span>Backlog Management</span>
              </motion.div>
            </div>
          </div>
          <MotionLink
            href="https://app.minibunnplanner.com/"
            className="mt-auto w-full rounded-full bg-neutral-800 py-3 text-neutral-100 hover:bg-neutral-900"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            Get Started & Upgrade
          </MotionLink>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}

export default Pricing;
