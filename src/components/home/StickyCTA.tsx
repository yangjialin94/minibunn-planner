import Link from "next/link";
import React from "react";

export default function StickyCTA() {
  return (
    <div className="fixed right-0 bottom-0 left-0 z-50 border-t border-neutral-200 bg-white px-4 py-3">
      <div className="flex items-center justify-between">
        <div className="text-sm">
          🎉 <span className="font-medium">Early Supporter Deal</span>
          <br />
          <span className="text-neutral-600">Get Minibunn for $19.99/year</span>
        </div>
        <Link
          href="https://app.minibunnplanner.com/"
          className="ml-4 rounded-full bg-neutral-800 px-4 py-2 text-sm font-medium text-neutral-100 hover:bg-neutral-700"
        >
          Start Free Trial
        </Link>
      </div>
    </div>
  );
}
