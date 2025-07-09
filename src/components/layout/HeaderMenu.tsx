"use client";

import { Button, Dialog, DialogPanel } from "@headlessui/react";
import clsx from "clsx";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
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
      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
        <Button
          onClick={open}
          className={clsx(
            "peer rounded-full border p-2 hover:cursor-pointer hover:border-neutral-800 hover:bg-neutral-200",
            {
              "border-neutral-800 bg-neutral-100": isOpen,
              "border-transparent": !isOpen,
            },
          )}
        >
          <motion.div
            animate={{ rotate: isOpen ? 90 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <Menu />
          </motion.div>
        </Button>
      </motion.div>

      <AnimatePresence>
        {isOpen && (
          <Dialog
            open={isOpen}
            as="div"
            className="relative z-10"
            onClose={close}
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 w-screen overflow-y-auto backdrop-blur-md"
            >
              <div className="flex min-h-full items-center justify-center p-4">
                <DialogPanel className="w-full max-w-sm rounded-xl border-2 bg-[#fffefe] p-4">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9, y: -20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9, y: -20 }}
                    transition={{ duration: 0.2 }}
                    className="relative flex w-full flex-col justify-between gap-4 p-2"
                  >
                    {/* Close button */}
                    <div className="absolute -top-2 -right-2">
                      <motion.button
                        onClick={close}
                        className="rounded-full border border-transparent p-1 hover:border-neutral-800 hover:bg-neutral-200"
                        whileHover={{ scale: 1.1, rotate: 90 }}
                        whileTap={{ scale: 0.9 }}
                        transition={{ duration: 0.2 }}
                      >
                        <X size={20} />
                      </motion.button>
                    </div>

                    {/* Menu items */}
                    {/* TODO: Update with the newest UI changes */}
                    {/* <motion.button
                      onClick={() => handleNavigation("/guide/home/header-sidebar")}
                      className="rounded-full border border-transparent px-4 py-2 text-center text-lg text-neutral-800 hover:border-neutral-800 hover:bg-neutral-200"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.2, delay: 0.1 }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Guide
                    </motion.button> */}

                    {/* Changelog */}
                    <motion.button
                      onClick={() => handleNavigation("/changelog")}
                      className="rounded-full border border-transparent px-4 py-2 text-center text-lg text-neutral-800 hover:border-neutral-800 hover:bg-neutral-200"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.2, delay: 0.1 }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Changelog
                    </motion.button>

                    {/* Support */}
                    <motion.button
                      onClick={() => handleNavigation("/support")}
                      className="rounded-full border border-transparent px-4 py-2 text-center text-lg text-neutral-800 hover:border-neutral-800 hover:bg-neutral-200"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.2, delay: 0.2 }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Support
                    </motion.button>

                    {/* Divider */}
                    <motion.hr
                      className="w-full border-t-2 border-neutral-200"
                      initial={{ opacity: 0, scaleX: 0 }}
                      animate={{ opacity: 1, scaleX: 1 }}
                      transition={{ duration: 0.3, delay: 0.3 }}
                    />

                    {/* Sign in */}
                    <motion.button
                      onClick={() =>
                        handleNavigation("https://app.minibunnplanner.com/")
                      }
                      className="rounded-full border border-transparent px-4 py-2 text-center text-lg text-neutral-800 hover:border-neutral-800 hover:bg-neutral-200"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.2, delay: 0.4 }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Sign in
                    </motion.button>

                    {/* Sign up */}
                    <motion.button
                      onClick={() =>
                        handleNavigation("https://app.minibunnplanner.com/")
                      }
                      className="rounded-full bg-neutral-800 px-4 py-2 text-center text-lg text-neutral-100 hover:bg-neutral-700"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.2, delay: 0.5 }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Start Free
                    </motion.button>
                  </motion.div>
                </DialogPanel>
              </div>
            </motion.div>
          </Dialog>
        )}
      </AnimatePresence>
    </>
  );
}

export default HeaderMenu;
