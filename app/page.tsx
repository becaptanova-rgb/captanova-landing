import Navbar from "@/components/ui/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import WhySection from "@/components/sections/WhySection";
import TransformSection from "@/components/sections/TransformSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import CoachSection from "@/components/sections/CoachSection";
import StoriesSection from "@/components/sections/StoriesSection";
import BonusesSection from "@/components/sections/BonusesSection";
import FinalCTASection from "@/components/sections/FinalCTASection";
import StickyTimer from "@/components/ui/StickyTimer";
import ParticleBackground from "@/components/ui/ParticleBackground";
import LeadModal from "@/components/ui/LeadModal";
import Footer from "@/components/ui/Footer";

export default function Home() {
  return (
    <main className="relative">
      <ParticleBackground />
      <Navbar />
      <LeadModal />
      <HeroSection />
      <WhySection />
      <TransformSection />
      <TestimonialsSection />
      <CoachSection />
      <StoriesSection />
      <BonusesSection />
      <FinalCTASection />
      <Footer />
      <StickyTimer />
    </main>
  );
}
