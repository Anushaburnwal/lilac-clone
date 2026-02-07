import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Footer from "@/components/Footer";
import LifeSection from "@/components/LifeSection";
import Specialties from "@/components/Specialties";
import SupportSection from "@/components/SupportSection";
import IntroSection from "@/components/IntroSection";
import FaqSection from "@/components/FaqSection";
import BackgroundSection from "@/components/BackgroundSection";

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
      <Services />
      <About />
      <Footer />
    </>
  );
}
