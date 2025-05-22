import { motion } from "motion/react";
import Link from "next/link";

const MotionLink = motion.create(Link);

function Pricing() {
  return (
    <section className="mx-auto text-center">
      {/* heading */}
      <div className="mb-16 space-y-3">
        <p className="text-xs font-medium tracking-wide text-neutral-500 uppercase">
          Indie-made. Simple by design.
        </p>
        <p className="mb-12 text-3xl font-bold md:text-4xl">
          A minimalist planner that respects your time.
        </p>
        <p className="text-neutral-500 md:text-lg">
          Support an indie alternative for less than $0.10/day.
        </p>
        <p className="text-sm text-neutral-500">
          Try every feature free for 14 days — cancel anytime.
        </p>
      </div>

      {/* plans */}
      <div className="grid grid-cols-1 items-stretch gap-8 md:grid-cols-2 lg:grid-cols-3">
        {/* monthly */}
        <div className="flex flex-col justify-between rounded-xl border-2 border-neutral-200 bg-white p-10 text-center">
          <div>
            <h3 className="mb-1 font-semibold">Monthly</h3>
            <p className="mb-6 text-2xl font-bold tracking-tight sm:text-3xl">
              $2.99
            </p>
            <p className="invisible mb-6 text-sm text-neutral-500">
              placeholder for spacing
            </p>
          </div>
          <MotionLink
            href="https://app.minibunnplanner.com/"
            className="mt-auto w-full rounded-full bg-neutral-800 py-3 text-neutral-100 hover:bg-neutral-900"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Start Monthly
          </MotionLink>
        </div>

        {/* yearly */}
        <div className="relative flex flex-col justify-between rounded-xl border-2 border-neutral-800 bg-white p-10 text-center">
          <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-neutral-800 px-3 py-1 text-xs font-medium tracking-wide text-neutral-100 uppercase">
            Early Supporter
          </span>
          <div>
            <h3 className="mb-1 font-semibold">Yearly</h3>
            <p className="mb-6 text-2xl font-bold tracking-tight sm:text-3xl">
              $19.99
            </p>
            <p className="mb-6 text-sm text-neutral-500">($1.66 / month)</p>
          </div>
          <MotionLink
            href="https://app.minibunnplanner.com/"
            className="mt-auto w-full rounded-full bg-neutral-800 py-3 text-neutral-100 hover:bg-neutral-900"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Start Yearly
          </MotionLink>
        </div>

        {/* lifetime */}
        <div className="relative flex flex-col justify-between rounded-xl border-2 border-neutral-200 bg-white p-10 text-center">
          <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-neutral-800 px-3 py-1 text-xs font-medium tracking-wide text-neutral-100 uppercase">
            Best Value
          </span>
          <div>
            <h3 className="mb-1 font-semibold">Lifetime</h3>
            <p className="mb-6 text-2xl font-bold tracking-tight sm:text-3xl">
              $29.99
            </p>
            <p className="text-sm text-neutral-500">One-time payment</p>
            <p className="mt-1 mb-6 text-xs text-neutral-500">
              🎁 Lifetime pricing available for a limited time
            </p>
          </div>
          <MotionLink
            href="https://app.minibunnplanner.com/"
            className="mt-auto w-full rounded-full bg-neutral-800 py-3 text-neutral-100 hover:bg-neutral-900"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Get Lifetime Access
          </MotionLink>
        </div>
      </div>
    </section>
  );
}

export default Pricing;
