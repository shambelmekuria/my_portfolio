"use client";
import PortfolioCard from "./portfolio-card";
import { motion } from "motion/react";
import {
  container,
  gridContainer,
  gridItems,
  items,
} from "@/utils/animation/stager";

export default function PortfolioGrid() {
  return (
    <motion.div
      variants={gridContainer}
      className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
    >
      <motion.div
        variants={gridItems}
        whileHover={{ y: -8 }}
        className="hover:-translate-y-2 duration-300 ease-in-out"
      >
        <PortfolioCard
          title="Personal Portfolio"
          description="Smooth, flowing gradients blending rich reds and blues in an abstract swirl."
          thumnail="gallery-1.PNG"
          alt="Portfolio"
          github="https://github.com/shambelmekuria/my_portfolio"
          demo="https://shambel-dev.vercel.app/"
        />
      </motion.div>
    </motion.div>
  );
}
