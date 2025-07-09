"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";

const MotionLink = motion(Link);

function Footer() {
  return (
    <motion.footer
      className="mx-auto w-full pb-24 text-center text-sm text-neutral-500"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      {/* Logo */}
      <motion.div
        className="mx-auto mb-6 w-10"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.1 }}
      >
        <Image
          src="/minibunn-logo.png"
          alt="Minibunn logo"
          width="40"
          height="40"
        />
      </motion.div>

      {/* Nav links */}
      <motion.nav
        className="mb-6 flex flex-wrap justify-center gap-6 font-medium"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        viewport={{ once: true }}
      >
        {/* <MotionLink
          href="/about"
          className="border-b border-transparent hover:border-neutral-500"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          About
        </MotionLink> */}
        <MotionLink
          href="mailto:contact@minibunnplanner.com"
          className="border-b border-transparent hover:border-neutral-500"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Contact
        </MotionLink>
        <MotionLink
          href="/privacy"
          className="border-b border-transparent hover:border-neutral-500"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Privacy
        </MotionLink>
        <MotionLink
          href="/cookies"
          className="border-b border-transparent hover:border-neutral-500"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Cookies
        </MotionLink>
        <MotionLink
          href="/terms"
          className="border-b border-transparent hover:border-neutral-500"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Terms
        </MotionLink>
        <MotionLink
          href="#"
          className="termly-display-preferences"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Manage Consent
        </MotionLink>
      </motion.nav>

      {/* Legal */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        viewport={{ once: true }}
      >
        <p className="mb-1">© 2025 Jialin Yang. All rights reserved.</p>
        <p>Minibunn Planner™ by Jialin Yang.</p>
      </motion.div>
    </motion.footer>
  );
}

export default Footer;
