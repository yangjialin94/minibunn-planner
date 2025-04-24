"use client";

import clsx from "clsx";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import React, { useState } from "react";

interface CarouselItem {
  key: string;
  title: string;
  description: string;
  imageUrl: string;
}

/**
 * Carousel items
 */
const slides: CarouselItem[] = [
  {
    key: "calendar",
    title: "Calendar",
    description:
      "View your entire month at a glance. Each date shows ✓/total tasks so you can spot streaks, misses, and over-scheduled days instantly.",
    imageUrl: "/screens/calendar.png",
  },
  {
    key: "tasks",
    title: "Today",
    description:
      "Laser-focus on the now. Filter by active or completed, see a live progress ratio, and reorder tasks with simple drag-and-drop.",
    imageUrl: "/screens/tasks.png",
  },
  {
    key: "journal",
    title: "Journal",
    description:
      "Capture reflections, gratitude, and lessons learned in a clean, lined editor, perfect for daily writing without distractions.",
    imageUrl: "/screens/journal.png",
  },
  {
    key: "notes",
    title: "Notes",
    description:
      "Save quick ideas, reminders, and links as timestamped cards. Scroll, search, and edit them later when inspiration strikes again.",
    imageUrl: "/screens/notes.png",
  },
];

export default function Carousel() {
  // Manage the active index of the carousel
  const [[activeIndex, direction], setIndex] = useState<[number, number]>([
    0, 0,
  ]);
  const activeItem = slides[activeIndex];
  const total = slides.length;

  // Handle the next and previous actions
  const variants = {
    enter: () => ({
      x: direction > 0 ? "100%" : "-100%",
      y: 0,
      opacity: 0,
    }),
    center: { x: 0, y: 0, opacity: 1 },
    exit: () => ({
      x: 0,
      y: "-100%",
      opacity: 0,
    }),
  } as const;

  // Handle the next and previous actions
  const handleSlide = (targetIdx: number) => {
    if (targetIdx === activeIndex) return;
    setIndex([targetIdx, targetIdx > activeIndex ? 1 : -1]);
  };

  return (
    <section className="relative mx-auto max-w-screen-xl px-4 py-12">
      {/* Tabs */}
      <div className="mb-8 flex w-full justify-center gap-6 overflow-x-auto text-base font-medium sm:text-lg">
        {slides.map((item, idx) => (
          <button
            key={item.key}
            onClick={() => handleSlide(idx)}
            className={clsx("border-b-2 whitespace-nowrap", {
              "border-neutral-800 text-neutral-800": idx === activeIndex,
              "border-transparent text-neutral-500 hover:text-neutral-800":
                idx !== activeIndex,
            })}
          >
            {item.title}
          </button>
        ))}
      </div>

      {/* Carousel card */}
      <div className="relative flex w-full items-center overflow-hidden rounded-xl bg-white p-8 ring-6 ring-neutral-100">
        {/* Previous button */}
        <div>
          <button
            onClick={() => handleSlide(activeIndex - 1)}
            className={clsx(
              "mr-8 hidden h-10 w-10 items-center justify-center rounded-full border border-transparent hover:border-neutral-800 hover:bg-neutral-200 lg:flex",
              activeIndex === 0 && "pointer-events-none invisible",
            )}
          >
            <ChevronLeft />
          </button>
        </div>

        {/* Carousel content */}
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={activeItem.key}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="grid gap-8 sm:grid-cols-2"
          >
            {/* Text block */}
            <div className="flex flex-col justify-center gap-4 px-8">
              <p className="text-xl font-semibold sm:text-3xl md:text-4xl">
                {activeItem.title}
              </p>
              <p className="text-base text-neutral-500 lg:text-lg">
                {activeItem.description}
              </p>
            </div>

            {/* Illustration */}
            <div className="relative mx-auto h-48 w-full max-w-md sm:h-52 lg:h-60">
              <Image
                src={activeItem.imageUrl}
                alt={activeItem.title}
                fill
                sizes="(min-width: 640px) 320px, 100vw"
                className="rounded-xl object-fill"
                priority
              />
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Next button */}
        <div>
          <button
            onClick={() => handleSlide(activeIndex + 1)}
            className={clsx(
              "ml-8 hidden h-10 w-10 items-center justify-center rounded-full border border-transparent hover:border-neutral-800 hover:bg-neutral-200 lg:flex",
              activeIndex === total - 1 && "pointer-events-none invisible",
            )}
          >
            <ChevronRight />
          </button>
        </div>
      </div>

      {/*  Navigation dots */}
      <div className="mt-8 flex justify-center gap-3">
        {slides.map((item, idx) => (
          <button
            key={item.key}
            onClick={() => handleSlide(idx)}
            className={clsx("h-3 w-3 rounded-full", {
              "bg-neutral-800": idx === activeIndex,
              "bg-neutral-200 hover:bg-neutral-400": idx !== activeIndex,
            })}
          />
        ))}
      </div>
    </section>
  );
}
