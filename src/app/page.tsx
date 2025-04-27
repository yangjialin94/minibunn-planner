"use client";

import Carousel from "@/components/Carousel";
import Pricing from "@/components/Pricing";

/**
 * Home Page
 */
function HomePage() {
  return (
    <div className="text-center">
      {/* Hero Section */}
      <section className="hero">
        <h1>A Digital Planner That Feels Like Paper</h1>
        <h2>
          Thoughtfully designed for people who love the simplicity of paper but
          want the superpowers of a web app.
        </h2>
      </section>

      {/* Carousel Section */}
      <Carousel />

      {/* Pricing Section */}
      <Pricing />
    </div>
  );
}

export default HomePage;
