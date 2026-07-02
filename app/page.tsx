import Footer from "@/components/common/footer";
import { ContactUs } from "@/components/landing/contact-us/contact-us";
import HeroSection from "@/components/landing/hero/hero-section";
import Portfolio from "@/components/landing/portfolio/portfolio-container";
import ServiceSection from "@/components/landing/service";
import SkillSection from "@/components/skill-section";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServiceSection />
      <SkillSection />
      <Portfolio />
      <ContactUs />
      <Footer />
    </>
  );
}
