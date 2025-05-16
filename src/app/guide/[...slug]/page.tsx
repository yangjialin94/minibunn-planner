import React, { FC } from "react";

import GuideContent from "@/components/guide/GuideContent";
import { getAllGuideSections } from "@/lib/getAllGuideSections";

/**
 * Pre-generate all /guide/[...slug] routes.
 */
export async function generateStaticParams() {
  const sections = getAllGuideSections();
  return sections.map((section) => ({ slug: section.slug }));
}

/**
 * Guide page component.
 */
async function GuidePage({ params }: { params: { slug: string[] } }) {
  // Next.js in dev may wrap params in a promise internally,
  const { slug } = await params;
  return <GuideContent slug={slug} />;
}

// Cast the component to FC
export default GuidePage as unknown as FC;
