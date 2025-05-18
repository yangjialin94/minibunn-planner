"use client";

import Carousel from "@/components/home/Carousel";
import Pricing from "@/components/home/Pricing";

/**
 * Home Page
 */
function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <h1>Tired of bloated productivity apps? Try calm, focused planning.</h1>
        <h2>
          Minibunn is a minimalist planner built for clarity, not clutter.
        </h2>
      </section>

      {/* Carousel Section */}
      <Carousel />

      {/* Pricing Section */}
      <Pricing />
    </>
  );
}

export default HomePage;
