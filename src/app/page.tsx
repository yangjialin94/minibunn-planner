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
    </>
  );
}

export default HomePage;
