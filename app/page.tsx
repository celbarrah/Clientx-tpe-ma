import Navbar from "@/components/layout/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import StepsSection from "@/components/sections/StepsSection";
import StatsSection from "@/components/sections/StatsSection";
import Footer from "@/components/layout/Footer";
import Calendar from "@/components/sections/Calender";

export default function LandingPage() {

  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <StepsSection />
        <Calendar />
        <StatsSection />
      </main>
      <Footer />
    </>
  );
}
