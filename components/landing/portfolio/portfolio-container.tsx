"use client";
import { motion } from "motion/react";
import {
  container,
  gridContainer,
  gridItems,
  items,
} from "@/utils/animation/stager";
import PortfolioGrid from "./portfolio-grid";
import Section from "@/components/section";
import { SectionHeader } from "@/components/section.header";

export default function Portfolio() {
  return (
    <Section
      size={"lg"}
      aria-label="portfolio"
      id="project"
      variant={"secondary"}
    >
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.div
          variants={items}
          className="text-center max-w-4xl mx-auto mb-8"
        >
          <p className="font-medium tracking-widest uppercase text-primary mb-2">
            Portfolio
          </p>
          <SectionHeader size="sm" className="mb-4">
            Featured Project
          </SectionHeader>
          <p className="text-base md:text-lg leading-relaxed text-muted-foreground">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          </p>
        </motion.div>
        <PortfolioGrid />
      </motion.div>
    </Section>
  );
}
