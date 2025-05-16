"use client";

import { Button, Dialog, DialogPanel } from "@headlessui/react";
import clsx from "clsx";
import { ChevronDown, ChevronRight, X } from "lucide-react";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

// Interface for the sidebar sections
interface TopbarProps {
  sections: {
    slug: string[];
    title: string;
    group: string;
    order: number;
  }[];
}

/**
 * Topbar component for the guide section.
 */
function Topbar({ sections }: TopbarProps) {
  const pathname = usePathname();
  const router = useRouter();

  const [isOpen, setIsOpen] = useState(false);
  const [openGroups, setOpenGroups] = useState<Record<string, boolean>>({});

  console.log(pathname);

  // Group sections by their group property
  const grouped = sections.reduce<Record<string, TopbarProps["sections"]>>(
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

  // Handle navigation
  const handleNavigation = async (path: string) => {
    try {
      await router.push(path);
      setIsOpen(false);
    } catch (error) {
      console.error("Error navigating to", path, error);
    }
  };

  // Handle the modal open and close
  function open() {
    setIsOpen(true);
  }

  function close() {
    setIsOpen(false);
  }

  // Set the default open group to "home"
  useEffect(() => {
    setOpenGroups((prev) => ({ ...prev, home: true }));
  }, []);

  return (
    <>
      <div className="w-full px-2">
        <Button
          onClick={open}
          className={clsx(
            "peer flex w-full items-center justify-between rounded-xl border py-2 pr-4 pl-2 hover:cursor-pointer hover:border-neutral-800 hover:bg-neutral-200",
            {
              "border-neutral-800 bg-neutral-100": isOpen,
              "border-transparent": !isOpen,
            },
          )}
        >
          {/* Header */}
          <h1>
            {sections.find(
              (section) => `/guide/${section.slug.join("/")}` === pathname,
            )?.title || "Guide"}
          </h1>

          <ChevronDown />
        </Button>
      </div>

      <Dialog open={isOpen} as="div" className="relative z-10" onClose={close}>
        <div className="fixed inset-0 w-screen overflow-y-auto backdrop-blur-md">
          <div className="flex min-h-full items-center justify-center p-4">
            <DialogPanel
              transition
              className="w-full max-w-sm rounded-xl border-2 bg-[#fffefe]"
            >
              <div className="relative overflow-y-auto px-8 pt-8 pb-4">
                <div className="absolute top-1 right-1">
                  <button
                    onClick={close}
                    className="rounded-full border border-transparent p-1 hover:border-neutral-800 hover:bg-neutral-200"
                  >
                    <X size={20} />
                  </button>
                </div>

                {Object.entries(grouped)
                  .sort(
                    ([a], [b]) => (groupOrder[a] || 99) - (groupOrder[b] || 99),
                  )
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
                                  <button
                                    onClick={() => handleNavigation(href)}
                                    className={clsx(
                                      "flex w-full justify-start rounded-xl px-4 py-1 transition",
                                      {
                                        "bg-neutral-200 text-neutral-800":
                                          isActive,
                                        "hover:bg-neutral-200": !isActive,
                                      },
                                    )}
                                  >
                                    {section.title}
                                  </button>
                                </li>
                              );
                            })}
                          </ul>
                        )}
                      </div>
                    );
                  })}
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  );
}

export default Topbar;
