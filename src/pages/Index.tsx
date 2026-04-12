import UrgencyBar from "@/components/UrgencyBar";
import SecurityBar from "@/components/SecurityBar";
import HeroSection from "@/components/HeroSection";
import AdvantagesSection from "@/components/AdvantagesSection";
import GenresSection from "@/components/GenresSection";
import BonusSection from "@/components/BonusSection";
import BookShowcase from "@/components/BookShowcase";
import TestimonialsSection from "@/components/TestimonialsSection";
import OffersSection from "@/components/OffersSection";
import GuaranteeSection from "@/components/GuaranteeSection";
import FaqSection from "@/components/FaqSection";
import SocialProofNotification from "@/components/SocialProofNotification";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <UrgencyBar />
      <SecurityBar />
      <HeroSection />
      <AdvantagesSection />
      <GenresSection />
      <BonusSection />
      <BookShowcase />
      <TestimonialsSection />
      <OffersSection />
      <GuaranteeSection />
      <FaqSection />
      <Footer />
      <SocialProofNotification />
    </div>
  );
};

export default Index;
