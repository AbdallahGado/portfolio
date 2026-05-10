"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/buttons/Button";

interface FloatingNavProps {
  navItems: { name: string; link: string; icon?: React.ReactNode }[];
  className?: string;
}

export function FloatingNav({ navItems, className }: FloatingNavProps) {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(true);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      const previous = scrollYProgress.getPrevious() ?? 0;
      const direction = current - previous;

      if (scrollYProgress.get() < 0.05) {
        setVisible(true);
      } else if (direction < 0) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 1, y: -100 }}
        animate={{ y: visible ? 0 : -100, opacity: visible ? 1 : 0 }}
        transition={{ duration: 0.2 }}
        className={cn(
          "fixed top-10 inset-x-0 mx-auto z-[5000] flex max-w-fit items-center justify-center space-x-4",
          "px-7 py-3 rounded-lg border border-white/10",
          "backdrop-blur-md bg-black/75",
          className
        )}
        style={{ borderRadius: "12px" }}
      >
        {navItems.map((navItem, idx) => (
          <Link
            key={`link-${idx}`}
            href={navItem.link}
            aria-label={navItem.name}
            className={cn(
              "relative text-neutral-50 items-center flex space-x-1 text-neutral-600 hover:text-neutral-300 transition-colors"
            )}
          >
            <span className="block sm:hidden">{navItem.icon}</span>
            <span className="text-sm cursor-pointer">{navItem.name}</span>
          </Link>
        ))}
      </motion.div>
    </AnimatePresence>
  );
}
