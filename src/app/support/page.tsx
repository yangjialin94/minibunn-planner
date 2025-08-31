"use client";

import { motion } from "motion/react";
import Link from "next/link";

const MotionLink = motion(Link);

function SupportPage() {
  const supportItems = [
    {
      title: "General Support",
      description: "Contact us for any general questions or help.",
      subject: "General Support",
    },
    {
      title: "Report a Bug",
      description: "Found something broken? Let us know!",
      subject: "Bug Report",
    },
    {
      title: "Suggest a New Feature",
      description: "Have an idea for a new feature?",
      subject: "Feature Suggestion",
    },
    {
      title: "Improve Existing Features",
      description: "Suggestions to make our app better.",
      subject: "Improvement Suggestion",
    },
    {
      title: "Account or Login Issues",
      description: "Need help accessing your account?",
      subject: "Account or Login Issue",
    },
    {
      title: "Billing & Subscription Help",
      description: "Questions about charges or subscriptions?",
      subject: "Billing Support",
    },
  ];

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
          Need Help? We&apos;re Here for You
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Choose a category below to email our team directly — we&apos;ll get
          back to you as soon as possible.
        </motion.h2>
      </motion.section>

      {/* Support Items Section */}
      <motion.section
        className="space-y-4 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        {supportItems.map((item, index) => (
          <MotionLink
            key={index}
            href={`mailto:work@jialinyang.com?subject=${encodeURIComponent(item.subject)}`}
            className="block rounded-xl border-6 border-neutral-100 bg-white p-4 transition hover:border-neutral-200 hover:bg-neutral-200"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
            whileHover={{
              scale: 1.02,
              borderColor: "#d4d4d8",
              backgroundColor: "#f5f5f5",
            }}
            whileTap={{ scale: 0.98 }}
          >
            <motion.p
              className="mb-2 text-xl font-semibold text-neutral-800"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 1 + index * 0.1 }}
            >
              {item.title}
            </motion.p>
            <motion.p
              className="text-neutral-500"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 1.1 + index * 0.1 }}
            >
              {item.description}
            </motion.p>
          </MotionLink>
        ))}
      </motion.section>
    </>
  );
}

export default SupportPage;
