import { motion } from "motion/react";
import Link from "next/link";

const MotionLink = motion(Link);

function Pricing() {
  return (
    <section className="mx-auto max-w-screen-md px-4 py-36 text-center">
      {/* heading */}
      <h2 className="mb-4 font-bold">
        Less than a coffee ☕, more focus every day
      </h2>
      <p className="mb-12 sm:text-lg">
        Try every feature free for 7 days—cancel anytime.
      </p>

      {/* plans */}
      <div className="grid gap-8 sm:grid-cols-2">
        {/* monthly */}
        <div className="flex flex-col items-center rounded-3xl border-2 border-neutral-200 bg-white p-10">
          <h3 className="mb-1 font-semibold">Monthly</h3>
          <p className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl">
            $3.99
          </p>
          <MotionLink
            href="https://app.minibunnplanner.com/auth/register"
            className="w-full rounded-full bg-neutral-800 py-3 text-neutral-100 hover:bg-neutral-900"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {/* Start Monthly */}
            Coming soon
          </MotionLink>
        </div>

        {/* yearly */}
        <div className="relative flex flex-col items-center rounded-3xl border-2 border-neutral-800 bg-white p-10">
          <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-neutral-800 px-3 py-1 text-xs font-medium tracking-wide text-neutral-100 uppercase">
            Save 37%
          </span>
          <h3 className="mb-1 font-semibold">Yearly</h3>
          <p className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl">
            $29.99
          </p>
          <p className="mb-6 text-sm text-neutral-500">($2.49 / month)</p>
          <MotionLink
            href="https://app.minibunnplanner.com/auth/register"
            className="w-full rounded-full bg-neutral-800 py-3 text-neutral-100 hover:bg-neutral-900"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {/* Start Yearly */}
            Coming soon
          </MotionLink>
        </div>
      </div>
    </section>
  );
}

export default Pricing;
