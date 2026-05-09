"use client";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import React, { useRef } from "react";
import { AnimatePresence, motion, useInView } from "motion/react";

const menuItems = [
  {
    name: "Home",
    link: "#",
  },
  {
    name: "About",
    link: "#",
  },
  {
    name: "Contact",
    link: "#",
  },
  {
    name: "Feature",
    link: "#",
  },
  {
    name: "Portfolio",
    link: "#",
  },
] as const;

export default function Navbar() {
  const [open, setOpen] = React.useState(false);
 
  return (
    <header className="fixed w-full top-0  z-50 bg-slate-800 text-white">
      <nav className="max-w-7xl mx-auto h-16 flex  items-center justify-between px-4">
        <div className="font-bold text-lg md:text-xl uppercase">Shambel</div>
        <ul className="hidden md:flex items-center gap-8">
          {menuItems.map((item) => {
            return (
              <li key={item.name}>
                <Link href={item.link}>{item.name}</Link>
              </li>
            );
          })}
        </ul>
        <div className="hidden md:block">
          <Button className="h-10 px-6 rounded-full">Get Started</Button>
        </div>
        {/* Toggler */}
        <Button
          variant={"ghost"}
          size={"icon-lg"}
          onClick={() => setOpen(!open)}
          className="block md:hidden"
        >
          <AnimatePresence mode="wait" initial={false}>
            {open ? (
              <motion.span
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.15 }}
              >
                <X />
              </motion.span>
            ) : (
              <motion.span
                key="open"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.15 }}
              >
                <Menu />
              </motion.span>
            )}
          </AnimatePresence>
        </Button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden md:hidden"
          >
            <ul className="flex flex-col p-4 space-y-4">
              {menuItems.map((item) => {
                return (
                  <li key={item.name}>
                    <Link
                      href={item.link}
                      onClick={() => setOpen(false)}
                      className="block text-slate-50"
                    >
                      {item.name}
                    </Link>
                  </li>
                );
              })}
              <li>
                <Button className="rounded-full w-full" size={"lg"}>
                  Get Started
                </Button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
