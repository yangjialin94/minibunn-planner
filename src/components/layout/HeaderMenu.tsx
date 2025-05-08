import { Button, Dialog, DialogPanel } from "@headlessui/react";
import clsx from "clsx";
import { Menu, X } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

function HeaderMenu() {
  const router = useRouter();

  const [isOpen, setIsOpen] = useState(false);

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

  return (
    <>
      <div>
        <Button
          onClick={open}
          className={clsx(
            "peer rounded-full border p-2 hover:cursor-pointer hover:border-neutral-800 hover:bg-neutral-100",
            {
              "border-neutral-800 bg-neutral-100": isOpen,
              "border-transparent": !isOpen,
            },
          )}
        >
          <Menu />
        </Button>
        <div className="pointer-events-none absolute -top-8 -right-2 z-10 rounded bg-neutral-400 px-2 py-1 text-sm whitespace-nowrap opacity-0 transition-opacity delay-300 duration-150 peer-hover:opacity-100">
          Menu
        </div>
      </div>

      <Dialog open={isOpen} as="div" className="relative z-10" onClose={close}>
        <div className="fixed inset-0 w-screen overflow-y-auto backdrop-blur-md">
          <div className="flex min-h-full items-center justify-center p-4">
            <DialogPanel
              transition
              className="w-full max-w-sm rounded-xl border-2 bg-[#fffefe] p-4"
            >
              <div className="flex w-full flex-col justify-between gap-4 p-2">
                {/* Close button */}
                <div className="flex w-full justify-end">
                  <button
                    onClick={close}
                    className="rounded-full border border-transparent p-2 hover:border-neutral-800 hover:bg-neutral-100"
                  >
                    <X />
                  </button>
                </div>

                {/* Menu items */}
                <button
                  onClick={() => handleNavigation("/guide")}
                  className="rounded-full border border-transparent px-4 py-2 text-center text-lg text-neutral-800 hover:border-neutral-800 hover:bg-neutral-100"
                >
                  Guide
                </button>

                {/* Changelog */}
                <button
                  onClick={() => handleNavigation("/changelog")}
                  className="rounded-full border border-transparent px-4 py-2 text-center text-lg text-neutral-800 hover:border-neutral-800 hover:bg-neutral-100"
                >
                  Changelog
                </button>

                {/* Support */}
                <button
                  onClick={() => handleNavigation("/support")}
                  className="rounded-full border border-transparent px-4 py-2 text-center text-lg text-neutral-800 hover:border-neutral-800 hover:bg-neutral-100"
                >
                  Support
                </button>

                {/* Divider */}
                <hr className="w-full border-t-2 border-neutral-200" />

                {/* Sign in */}
                <button
                  onClick={() =>
                    handleNavigation("https://app.minibunnplanner.com/")
                  }
                  className="rounded-full border border-transparent px-4 py-2 text-center text-lg text-neutral-800 hover:border-neutral-800 hover:bg-neutral-100"
                >
                  Sign in
                </button>

                {/* Sign up */}
                <button
                  onClick={() =>
                    handleNavigation(
                      "https://app.minibunnplanner.com/auth/register",
                    )
                  }
                  className="rounded-full bg-neutral-800 px-4 py-2 text-center text-lg text-neutral-100 hover:bg-neutral-700"
                >
                  Get started
                </button>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  );
}

export default HeaderMenu;
