import Hero from "@/components/hero";
import Navbar from "@/components/nav";
import Section from "@/components/section";
import { SectionHeader } from "@/components/section.header";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <Navbar />
      <Hero />
      <Section variant={"secondary"}>
        <SectionHeader size={"sm"} className="mb-4">About Us</SectionHeader>
        <p className="text-muted-foreground">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt sint itaque, a odit voluptatem voluptates! Iste quasi hic facere molestias!</p>

      </Section>
    </div>
  );
}
