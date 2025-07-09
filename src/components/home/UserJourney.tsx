"use client";

import { CheckCircle, Crown, ListTodo, Search, UserPlus } from "lucide-react";
import { motion } from "motion/react";

export default function UserJourney() {
  const steps = [
    {
      icon: UserPlus,
      title: "Create Account",
      description: "Sign up in 30 seconds",
      detail: "No credit card required",
      color: "bg-blue-100 text-blue-600",
      step: "1",
    },
    {
      icon: ListTodo,
      title: "Access Tasks",
      description: "Start managing immediately",
      detail: "Full task management included",
      color: "bg-green-100 text-green-600",
      step: "2",
    },
    {
      icon: Search,
      title: "Explore Features",
      description: "Discover what you love",
      detail: "Task management might be all you need",
      color: "bg-purple-100 text-purple-600",
      step: "3",
    },
    {
      icon: Crown,
      title: "Upgrade (Optional)",
      description: "Add journal & notes when ready",
      detail: "Only if you want more features",
      color: "bg-amber-100 text-amber-600",
      step: "4",
      optional: true,
    },
  ];

  return (
    <motion.section
      className="mx-auto text-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      {/* Heading */}
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
          How it works
        </motion.p>
        <motion.h2
          className="mb-4 text-3xl font-bold md:text-4xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Get started in minutes, not hours
        </motion.h2>
        <motion.p
          className="mx-auto max-w-2xl text-neutral-500 md:text-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          No complicated setup, no credit card required. Start managing your
          tasks right away.
        </motion.p>
      </motion.div>

      {/* Timeline */}
      <motion.div
        className="relative mx-auto max-w-4xl"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
      >
        {/* Desktop Timeline */}
        <div className="hidden md:block">
          <div className="relative flex items-center justify-between">
            {/* Timeline line */}
            <motion.div
              className="absolute top-1/2 right-0 left-0 h-0.5 -translate-y-1/2 bg-gradient-to-r from-blue-200 via-green-200 via-purple-200 to-amber-200"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 1.5, delay: 0.6 }}
              viewport={{ once: true }}
            />

            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={index}
                  className="relative flex flex-col items-center"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {/* Step circle */}
                  <motion.div
                    className={`relative z-10 flex h-16 w-16 items-center justify-center rounded-full border-4 border-white shadow-lg ${step.color}`}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Icon className="h-6 w-6" />
                    {step.optional && (
                      <motion.div
                        className="absolute -top-2 -right-2 flex h-6 w-6 items-center justify-center rounded-full bg-neutral-600 text-xs font-bold text-white"
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ duration: 0.3, delay: 1 + index * 0.1 }}
                        viewport={{ once: true }}
                      >
                        ?
                      </motion.div>
                    )}
                  </motion.div>

                  {/* Step content */}
                  <motion.div
                    className="mt-6 max-w-48 text-center"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="mb-2 flex items-center justify-center gap-2">
                      <span className="text-xs font-medium text-neutral-400">
                        Step {step.step}
                      </span>
                      {step.optional && (
                        <span className="rounded-full bg-neutral-100 px-2 py-0.5 text-xs font-medium text-neutral-600">
                          Optional
                        </span>
                      )}
                    </div>
                    <h3 className="mb-2 font-semibold text-neutral-900">
                      {step.title}
                    </h3>
                    <p className="mb-1 text-sm text-neutral-600">
                      {step.description}
                    </p>
                    <p className="text-xs text-neutral-500">{step.detail}</p>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Mobile Timeline */}
        <div className="space-y-8 md:hidden">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={index}
                className="flex flex-col items-center gap-4 text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
                viewport={{ once: true }}
              >
                {/* Step circle */}
                <motion.div
                  className={`relative flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full ${step.color}`}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  <Icon className="h-5 w-5" />
                  {step.optional && (
                    <motion.div
                      className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-neutral-600 text-xs font-bold text-white"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      ?
                    </motion.div>
                  )}
                </motion.div>

                {/* Step content */}
                <div className="max-w-xs">
                  <div className="mb-1 flex items-center justify-center gap-2">
                    <span className="text-xs font-medium text-neutral-400">
                      Step {step.step}
                    </span>
                    {step.optional && (
                      <span className="rounded-full bg-neutral-100 px-2 py-0.5 text-xs font-medium text-neutral-600">
                        Optional
                      </span>
                    )}
                  </div>
                  <h3 className="mb-1 font-semibold text-neutral-900">
                    {step.title}
                  </h3>
                  <p className="mb-1 text-sm text-neutral-600">
                    {step.description}
                  </p>
                  <p className="text-xs text-neutral-500">{step.detail}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          viewport={{ once: true }}
        >
          <motion.p
            className="mb-4 text-sm text-neutral-600"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.3 }}
            viewport={{ once: true }}
          >
            <CheckCircle className="mr-1 inline h-4 w-4 text-green-500" />
            Many users find task management is all they need to stay organized
          </motion.p>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
