"use client";

import { X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import { useState } from "react";

interface FeatureItem {
  key: string;
  title: string;
  description: string;
  imageUrl: string;
}

const features: FeatureItem[] = [
  {
    key: "calendar",
    title: "Calendar",
    description:
      "View your entire month at a glance. Each date shows ✓/total tasks so you can spot streaks, misses, and over-scheduled days instantly.",
    imageUrl: "/screens/calendar-062125.png",
  },
  {
    key: "tasks",
    title: "Tasks",
    description:
      "Laser-focus on the now. Filter by active or completed, see a live progress ratio, and reorder tasks with simple drag-and-drop.",
    imageUrl: "/screens/tasks-062125.png",
  },
  {
    key: "journal",
    title: "Journal",
    description:
      "Capture reflections, gratitude, and lessons learned in a clean, lined editor, perfect for daily writing without distractions.",
    imageUrl: "/screens/journal-062125.png",
  },
  {
    key: "notes",
    title: "Notes",
    description:
      "Save quick ideas, reminders, and links as timestamped cards. Scroll, search, and edit them later when inspiration strikes again.",
    imageUrl: "/screens/notes-062125.png",
  },
  {
    key: "user",
    title: "User",
    description:
      "Manage your account in one place—check your plan and billing, update your password, access support, or cancel your subscription anytime.",
    imageUrl: "/screens/user-062125.png",
  },
];

function Features() {
  const [lightboxImage, setLightboxImage] = useState<FeatureItem | null>(null);

  const openLightbox = (feature: FeatureItem) => {
    setLightboxImage(feature);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setLightboxImage(null);
    document.body.style.overflow = "unset";
  };

  return (
    <>
      <motion.section
        className="mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {/* Section Header */}
        <motion.div
          className="mb-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.p
            className="mb-4 text-xs font-medium tracking-wide text-neutral-500 uppercase"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Everything you need
          </motion.p>
          <motion.h2
            className="mb-6 text-3xl font-bold md:text-4xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Features that help you stay organized
          </motion.h2>
          <motion.p
            className="mx-auto max-w-2xl text-neutral-500 md:text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Simple, powerful tools designed to help you track tasks, capture
            thoughts, and stay on top of your goals.
          </motion.p>
        </motion.div>

        {/* Feature Sections */}
        <div className="space-y-32">
          {features.map((feature, index) => {
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={feature.key}
                className={`grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20 ${
                  isEven ? "lg:grid-cols-2" : "lg:grid-cols-2"
                }`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                {/* Content */}
                <motion.div
                  className={`${!isEven ? "lg:order-2" : ""}`}
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  <motion.h3
                    className="mb-4 text-2xl font-bold md:text-3xl"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    {feature.title}
                  </motion.h3>
                  <motion.p
                    className="text-lg leading-relaxed text-neutral-600"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    viewport={{ once: true }}
                  >
                    {feature.description}
                  </motion.p>
                </motion.div>

                {/* Image */}
                <motion.div
                  className={`${!isEven ? "lg:order-1" : ""}`}
                  initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <motion.div
                    className="relative cursor-pointer overflow-hidden rounded-2xl shadow-2xl"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ duration: 0.3 }}
                    onClick={() => openLightbox(feature)}
                  >
                    <Image
                      src={feature.imageUrl}
                      alt={`${feature.title} screenshot`}
                      width={800}
                      height={600}
                      className="h-auto w-full"
                      priority={index === 0}
                    />
                    {/* Overlay hint */}
                    <motion.div
                      className="absolute inset-0 flex items-center justify-center bg-black/0 transition-colors duration-300 hover:bg-black/10"
                      whileHover={{ opacity: 1 }}
                    >
                      <motion.div
                        className="rounded-full bg-white/90 p-2 opacity-0 transition-opacity duration-300 hover:opacity-100"
                        whileHover={{ scale: 1.1 }}
                      >
                        <svg
                          className="h-6 w-6 text-gray-800"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                          />
                        </svg>
                      </motion.div>
                    </motion.div>
                  </motion.div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </motion.section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
            onClick={closeLightbox}
          >
            {/* Close button */}
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.2, delay: 0.1 }}
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-10 rounded-full bg-white/10 p-3 text-white transition-colors duration-200 hover:bg-white/20"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <X size={24} />
            </motion.button>

            {/* Image container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 50 }}
              transition={{
                duration: 0.3,
                type: "spring",
                stiffness: 300,
                damping: 30,
              }}
              className="relative max-h-[90vh] w-full max-w-7xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <Image
                  src={lightboxImage.imageUrl}
                  alt={`${lightboxImage.title} screenshot - full size`}
                  width={1600}
                  height={1200}
                  className="h-auto w-full object-contain"
                  priority
                />
              </div>

              {/* Image info */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.2 }}
                className="absolute right-0 bottom-0 left-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white"
              >
                <h3 className="mb-2 text-2xl font-bold">
                  {lightboxImage.title}
                </h3>
                <p className="text-white/90">{lightboxImage.description}</p>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Features;
