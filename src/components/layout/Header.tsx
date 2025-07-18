"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import HeaderMenu from "./HeaderMenu";

const MotionLink = motion(Link);

function Header() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* left side */}
      <div className="flex items-center">
        {/* Logo */}
        <MotionLink
          href="/"
          className="flex items-center gap-4"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          {/* Desktop */}
          <div className="relative h-20 w-[100px]">
            <Image
              src="/minibunn-planner-logo.svg"
              alt="Minibunn Planner logo"
              fill
              className="object-contain"
              priority
            />
          </div>
        </MotionLink>
      </div>

      {/* right side */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {/* Desktop */}
        <motion.div
          className="hidden items-center gap-2 text-lg md:flex lg:gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {/* Guide */}
          {/* TODO: Update with the newest UI changes */}
          {/* <MotionLink
            href="/guide/home/header-sidebar"
            className="rounded-full border border-transparent px-4 py-2 text-neutral-800 hover:border-neutral-800 hover:bg-neutral-200"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Guide
          </MotionLink> */}

          {/* Changelog */}
          <MotionLink
            href="/changelog"
            className="rounded-full border border-transparent px-4 py-2 text-neutral-800 hover:border-neutral-800 hover:bg-neutral-200"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Changelog
          </MotionLink>

          {/* Support */}
          <MotionLink
            href="/support"
            className="rounded-full border border-transparent px-4 py-2 text-neutral-800 hover:border-neutral-800 hover:bg-neutral-200"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Support
          </MotionLink>

          <p className="font-bold">|</p>

          {/* Sign in */}
          <MotionLink
            href="https://app.minibunnplanner.com/"
            className="rounded-full border border-transparent px-4 py-2 text-neutral-800 hover:border-neutral-800 hover:bg-neutral-200"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Sign in
          </MotionLink>

          {/* Sign up */}
          <MotionLink
            href="https://app.minibunnplanner.com/"
            className="rounded-full bg-neutral-800 px-4 py-2 text-neutral-100 hover:bg-neutral-700"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Start Free
          </MotionLink>
        </motion.div>

        {/* Mobile */}
        <motion.div
          className="flex md:hidden"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: 0.4 }}
        >
          <HeaderMenu />
        </motion.div>
      </motion.div>
    </motion.header>
  );
}

export default Header;
