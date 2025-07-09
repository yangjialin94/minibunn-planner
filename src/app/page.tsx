"use client";

import { motion } from "motion/react";

import Features from "@/components/home/Features";
import Pricing from "@/components/home/Pricing";
import UserJourney from "@/components/home/UserJourney";

/**
 * Home Page
 */
function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Tired of bloated productivity apps? Try calm, focused planning.
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Minibunn is a minimalist planner built for clarity, not clutter.
        </motion.h2>
      </section>

      {/* User Journey Section */}
      <UserJourney />

      {/* Features Section */}
      <Features />

      {/* Pricing Section */}
      <Pricing />
    </>
  );
}

export default HomePage;
