"use client";
import { cn } from "@/lib/utils";
import { ArrowUp } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

export default function ScrollTop() {
  const [isScroll, setIsScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScroll(window.scrollY > 100);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll); // when component unmounts, remove the event listener to prevent memory leaks
  }, []);

  return (
    <AnimatePresence>
      {isScroll && (
        <motion.a
          href="#"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 16 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className={cn(
            "fixed right-5 bottom-5 bg-primary flex items-center justify-center h-10 w-10 text-primary-foreground shadow rounded-md z-50",
          )}
        >
          <ArrowUp size={20} />
        </motion.a>
      )}
    </AnimatePresence>
  );
}
