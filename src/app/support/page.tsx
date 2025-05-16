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
    <>
      {/* Hero Section */}
      <section className="hero">
        <h1>Need Help? We&apos;re Here for You</h1>
        <h2>
          Choose a category below to email our team directly — we&apos;ll get
          back to you as soon as possible.
        </h2>
      </section>

      {/* Support Items Section */}
      <section className="space-y-4 text-center">
        {supportItems.map((item, index) => (
          <Link
            key={index}
            href={`mailto:contact@minibunnplanner.com?subject=${encodeURIComponent(item.subject)}`}
            className="block rounded-xl border-6 border-neutral-100 bg-white p-4 transition hover:border-neutral-200 hover:bg-neutral-200"
          >
            <p className="mb-2 text-xl font-semibold text-neutral-800">
              {item.title}
            </p>
            <p className="text-neutral-500">{item.description}</p>
          </Link>
        ))}
      </section>
    </>
  );
}

export default SupportPage;
