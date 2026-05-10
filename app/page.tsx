import Hero from "@/components/hero";
import AboutUs from "@/components/home/about";
import Navbar from "@/components/nav";
import Section from "@/components/section";
import { SectionHeader } from "@/components/section.header";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <Navbar />
      <Hero />
      <AboutUs/>
     
    </div>
  );
}
