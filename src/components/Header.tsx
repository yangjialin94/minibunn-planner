"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const MotionLink = motion(Link);

function Header() {
  return (
    <header>
      {/* left side */}
      <div className="flex items-center gap-4">
        {/* Desktop */}
        <div className="relative hidden h-140 w-[140px] sm:block">
          <Image
            src="/minibunn-planner-logo-2.png"
            alt="Minibunn Planner logo"
            fill
            sizes="400px"
            className="object-contain"
            priority
          />
        </div>

        {/* Mobile */}
        <div className="relative block h-12 w-12 sm:hidden">
          <Image
            src="/minibunn-logo.png"
            alt="Minibunn icon"
            fill
            sizes="40px"
            className="object-contain"
            priority
          />
        </div>
      </div>

      {/* right side */}
      <div className="flex items-center sm:gap-2 md:gap-4">
        <MotionLink
          href="https://app.minibunnplanner.com/"
          className="mr-4 rounded-full border border-transparent px-3 py-1 text-neutral-800 hover:border-neutral-800 hover:bg-neutral-100 sm:px-4 sm:py-2 sm:text-xl"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Sign in
        </MotionLink>
        <MotionLink
          href="https://app.minibunnplanner.com/auth/register"
          className="rounded-full bg-neutral-800 px-3 py-1 text-neutral-100 hover:bg-neutral-900 sm:px-4 sm:py-2 sm:text-xl"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Get started
        </MotionLink>
      </div>
    </header>
  );
}

export default Header;
