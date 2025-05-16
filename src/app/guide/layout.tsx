import React, { ReactNode } from "react";

import Sidebar from "@/components/guide/Sidebar";
import Topbar from "@/components/guide/Topbar";
import { getAllGuideSections } from "@/lib/getAllGuideSections";

/**
 * Layout for the guide section.
 */
function GuideLayout({ children }: { children: ReactNode }) {
  // Get all guide sections
  const sections = getAllGuideSections();

  return (
    <div className="mx-auto flex flex-col md:mt-4 md:flex-row md:gap-4">
      {/* Desktop Sidebar */}
      <div className="hidden md:block">
        <Sidebar sections={sections} />
      </div>

      {/* Mobile Topbar */}
      <div className="flex md:hidden">
        <Topbar sections={sections} />
      </div>

      {/* Content */}
      <div className="flex-1">{children}</div>
    </div>
  );
}

export default GuideLayout;
