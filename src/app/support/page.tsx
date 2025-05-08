"use client";

import Link from "next/link";
import React from "react";

function SupportPage() {
  const supportItems = [
    {
      title: "General Support",
      description: "Contact us for any general questions or help.",
      subject: "General Support",
    },
    {
      title: "Report a Bug",
      description: "Found something broken? Let us know!",
      subject: "Bug Report",
    },
    {
      title: "Suggest a New Feature",
      description: "Have an idea for a new feature?",
      subject: "Feature Suggestion",
    },
    {
      title: "Improve Existing Features",
      description: "Suggestions to make our app better.",
      subject: "Improvement Suggestion",
    },
    {
      title: "Account or Login Issues",
      description: "Need help accessing your account?",
      subject: "Account or Login Issue",
    },
    {
      title: "Billing & Subscription Help",
      description: "Questions about charges or subscriptions?",
      subject: "Billing Support",
    },
  ];

  return (
    <div className="text-center">
      {/* Hero Section */}
      <section className="hero">
        <h1>Support</h1>
        <h2>
          Need help? Choose a category below to email us directly. We&apos;ll
          get back to you as soon as possible.
        </h2>
      </section>

      {/* Support Items Section */}
      <div className="space-y-4 pt-12 pb-24 sm:pb-36">
        {supportItems.map((item, index) => (
          <Link
            key={index}
            href={`mailto:contact@minibunnplanner.com?subject=${encodeURIComponent(item.subject)}`}
            className="block rounded-xl border-2 border-neutral-200 p-4 transition hover:border-neutral-800 hover:bg-neutral-100"
          >
            <p className="mb-2 text-xl font-semibold text-neutral-800">
              {item.title}
            </p>
            <p className="text-neutral-500">{item.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default SupportPage;
