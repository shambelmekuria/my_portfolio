"use client";
import { motion, useReducedMotion } from "motion/react";
import { gridContainer, gridItems } from "@/utils/animation/stager";
import PortfolioCard from "./portfolio-card";
import { projects } from "./portfolio-data";

export default function PortfolioGrid() {
  const reduceMotion = useReducedMotion();

  return (
    <motion.ul
      role="list"
      variants={gridContainer}
      // Flex + justify-center keeps 1 or 2 projects centered instead of left-stuck.
      className="flex flex-wrap justify-center gap-6 md:gap-8"
    >
      {projects.map((project, index) => (
        <motion.li
          key={project.id}
          variants={gridItems}
          whileHover={reduceMotion ? undefined : { y: -6 }}
          transition={{ type: "spring", stiffness: 300, damping: 24 }}
          className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.34rem)]"
        >
          <PortfolioCard {...project} priority={index === 0} />
        </motion.li>
      ))}
    </motion.ul>
  );
}
