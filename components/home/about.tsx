import React from "react";
import Section from "@/components/section";
import { SectionDescription, SectionHeader } from "@/components/section.header";

export default function AboutUs() {
  return (
    <Section variant={"secondary"}>
    <div className="max-w-xl mx-auto text-center space-y-4 mb-8">
          <SectionHeader size={"sm"}>
        About Us
      </SectionHeader>
      <SectionDescription>Lorem ipsum, dolor sit amet consectetur adipisicing elit. </SectionDescription>
      <h3 className="font-medium text-lg  capitalize">web developemen</h3>
    </div>
    </Section>
  );
}
