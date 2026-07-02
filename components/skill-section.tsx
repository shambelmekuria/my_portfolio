"use client";
import React from "react";
import Section from "./section";
import { SectionDescription, SectionHeader } from "./section.header";
import Skill from "./skill";

export default function SkillSection() {
  return (
    <Section size={"sm"}>
      <div className="max-w-xl mx-auto text-center mb-8 md:mb-12 space-y-6">
        <SectionHeader size={"sm"}>My Skills</SectionHeader>
        <SectionDescription>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, sint.
        </SectionDescription>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Skill
          title="Data Analysis"
          percent={40}
          subtitle="Nemo enim ipsam voluptatem quia voluptas sit aspernatur."
          color="teal"
          size="lg"
        />
        <Skill
          title="Data Analysis"
          percent={70}
          subtitle="Business intelligence and insights"
          color="blue"
          size={"lg"}
        />
        <Skill
          title="Data Analysis"
          percent={85}
          subtitle="Business intelligence and insights"
          color="green"
          size={"lg"}
        />
        <Skill
          title="Data Analysis"
          percent={80}
          subtitle="Business intelligence and insights"
          color="purple"
          size={"lg"}
        />
      </div>
    </Section>
  );
}
