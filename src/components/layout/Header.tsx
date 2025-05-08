"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import HeaderMenu from "./HeaderMenu";

const MotionLink = motion(Link);

function Header() {
  return (
    <header>
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
          <div className="relative h-100 w-[100px]">
            <Image
              src="/minibunn-planner-logo.svg"
              alt="Minibunn Planner logo"
              fill
              sizes="400px"
              className="object-contain"
              priority
            />
          </div>
        </MotionLink>
      </div>

      {/* right side */}
      <div>
        {/* Desktop */}
        <div className="hidden items-center gap-2 text-lg md:flex lg:gap-4">
          {/* Guide */}
          <Link
            href="/guide"
            className="rounded-full border border-transparent px-4 py-2 text-neutral-800 hover:border-neutral-800 hover:bg-neutral-100"
          >
            Guide
          </Link>

          {/* Changelog */}
          <Link
            href="/changelog"
            className="rounded-full border border-transparent px-4 py-2 text-neutral-800 hover:border-neutral-800 hover:bg-neutral-100"
          >
            Changelog
          </Link>

          {/* Support */}
          <Link
            href="/support"
            className="rounded-full border border-transparent px-4 py-2 text-neutral-800 hover:border-neutral-800 hover:bg-neutral-100"
          >
            Support
          </Link>

          <p className="font-bold">|</p>

          {/* Sign in */}
          <Link
            href="https://app.minibunnplanner.com/"
            className="rounded-full border border-transparent px-4 py-2 text-neutral-800 hover:border-neutral-800 hover:bg-neutral-100"
          >
            Sign in
          </Link>

          {/* Sign up */}
          <Link
            href="https://app.minibunnplanner.com/auth/register"
            className="rounded-full bg-neutral-800 px-4 py-2 text-neutral-100 hover:bg-neutral-700"
          >
            Get started
          </Link>
        </div>

        {/* Mobile */}
        <div className="flex items-center md:hidden">
          <HeaderMenu />
        </div>
      </div>
    </header>
  );
}

export default Header;
