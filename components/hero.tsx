"use client";
import Section from "@/components/section";
import { Button } from "@/components/ui/button";
import { MoveRight } from "lucide-react";
import Image from "next/image";
import { motion, stagger } from "motion/react";

export default function Hero() {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: stagger(0.12, { startDelay: 0.1 }),
      },
    },
  };

  const items = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 },
    },
  };
  return (
    <Section
      size="lg"
      className="min-h-screen flex items-center justify-center"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-12">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={container}
          className="flex flex-col justify-center"
        >
          <motion.h1
            variants={items}
            transition={{ ease: "easeOut" }}
            className="text-4xl md:text-5xl lg:text-6xl mb-4 font-bold text-slate-800 leading-tight"
          >
            Hi, I am Shambel Mekuriya
          </motion.h1>
          <motion.p
            variants={items}
            transition={{ ease: "easeOut" }}
            className="text-slate-600 text-base md:text-lg leading-relaxed mb-6"
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat
            eius molestias omnis provident et earum est corrupti magni amet
            similique.
          </motion.p>
          <motion.div
            variants={items}
            transition={{ ease: "easeOut" }}
            className="flex flex-col md:flex-row gap-6"
          >
            <Button className="h-12 gap-2 py-3 px-6 rounded-md hover:bg-primary/90">
              Contact Me <MoveRight />
            </Button>
            <Button variant={"secondary"} className="h-12 py-3 px-6 rounded-md">
              Download CV
            </Button>
          </motion.div>
        </motion.div>
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
        >
          <Image
            src={"/shambel.jpg"}
            alt="profile image"
            className="w-full md:w-96 md:h-96 rounded-md"
            width={576}
            height={576}
            priority
          />
        </motion.div>
      </div>
    </Section>
  );
}
