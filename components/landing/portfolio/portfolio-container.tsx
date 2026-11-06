"use client";
import { motion } from "motion/react";
import { container, items } from "@/utils/animation/stager";
import PortfolioGrid from "./portfolio-grid";
import Section from "@/components/section";
import { SectionHeader } from "@/components/section.header";

export default function Portfolio() {
  return (
    <Section size="lg" aria-label="portfolio" id="portfolio" variant="muted">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.header
          variants={items}
          className="mx-auto mb-10 max-w-3xl text-center md:mb-14"
        >
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary">
            Portfolio
          </p>
          <SectionHeader size="sm" className="mb-4">
            Featured Projects
          </SectionHeader>
          <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
            A selection of things I&apos;ve designed and built, from idea to
            deployment.
          </p>
        </motion.header>

        <PortfolioGrid />
      </motion.div>
    </Section>
  );
}
