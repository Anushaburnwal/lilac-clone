import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import LifeSection from "@/components/LifeSection";
import Specialties from "@/components/Specialties";
import SupportSection from "@/components/SupportSection";
import IntroSection from "@/components/IntroSection";
import FaqSection from "@/components/FaqSection";
import BackgroundSection from "@/components/BackgroundSection";
import CTASection from "@/components/CTASection";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <LifeSection />
      <Specialties/>
      <SupportSection/>
      <IntroSection/>
      <FaqSection/>
      <BackgroundSection/>
      <CTASection/>
      <Footer />
    </>
  );
}
