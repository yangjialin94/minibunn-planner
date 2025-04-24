"use client";

import Image from "next/image";

/**
 * Home Page
 */
function HomePage() {
  return (
    <div className="h-[92vh] rounded-xl bg-neutral-200">
      <div className="flex justify-center">
        <Image
          src="/minibunn-planner-logo.png"
          alt="logo"
          width={400}
          height={400}
        />
      </div>
    </div>
  );
}

export default HomePage;
