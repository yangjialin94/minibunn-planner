"use client";

import { ChevronDown, ChevronRight } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

// Interface for the sidebar sections
interface SidebarProps {
  sections: {
    slug: string[];
    title: string;
    group: string;
    order: number;
  }[];
}

/**
 * Sidebar component for the guide section.
 */
function Sidebar({ sections }: SidebarProps) {
  const pathname = usePathname();
  const [openGroups, setOpenGroups] = useState<Record<string, boolean>>({});

  // Group sections by their group property
  const grouped = sections.reduce<Record<string, SidebarProps["sections"]>>(
    (acc, s) => {
      acc[s.group] ||= []; // Initialize if undefined
      acc[s.group].push(s);
      return acc;
    },
    {},
  );

  // Set the default order for groups
  const groupOrder: Record<string, number> = {
    home: 1,
    day: 2,
    notes: 3,
    support: 4,
  };

  // Handle group toggle
  const handleGroupToggle = (group: string) => {
    setOpenGroups({ [group]: true });
  };

  // Set the default open group to "home"
  useEffect(() => {
    setOpenGroups((prev) => ({ ...prev, home: true }));
  }, []);

  return (
    <aside className="sticky top-24 h-screen w-64 shrink-0 overflow-y-auto p-4">
      {Object.entries(grouped)
        .sort(([a], [b]) => (groupOrder[a] || 99) - (groupOrder[b] || 99))
        .map(([group, items]) => {
          const isOpen = openGroups[group] ?? false;

          return (
            <div key={group} className="mb-4">
              {/* Group Header */}
              <button
                onClick={() => handleGroupToggle(group)}
                className="flex w-full items-center justify-between rounded-xl border bg-white px-4 py-2 font-semibold text-neutral-800 uppercase hover:bg-neutral-200"
              >
                {group}
                {isOpen ? (
                  <ChevronDown size={20} />
                ) : (
                  <ChevronRight size={20} />
                )}
              </button>

              {/* Group Items */}
              {isOpen && (
                <ul className="mt-2 space-y-1">
                  {items.map((section) => {
                    const href = `/guide/${section.slug.join("/")}`;
                    const isActive = pathname === href;

                    return (
                      <li key={href}>
                        <Link
                          href={href}
                          className={`block rounded-xl px-4 py-1 transition ${
                            isActive
                              ? "bg-neutral-200 text-neutral-800"
                              : "hover:bg-neutral-200"
                          }`}
                        >
                          {section.title}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              )}
            </div>
          );
        })}
    </aside>
  );
}

export default Sidebar;
