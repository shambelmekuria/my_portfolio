import Hero from "@/components/hero";
import AboutUs from "@/components/home/about";
import Navbar from "@/components/nav";
import Portfolio from "@/components/portfolio";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <Navbar />
      <Hero />
      <AboutUs />
      <Portfolio />
    </div>
  );
}
