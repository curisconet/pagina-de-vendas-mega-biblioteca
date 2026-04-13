import React, { Suspense } from "react";
import UrgencyBar from "@/components/UrgencyBar";
import SecurityBar from "@/components/SecurityBar";
import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer";

const AdvantagesSection = React.lazy(() => import("@/components/AdvantagesSection"));
const GenresSection = React.lazy(() => import("@/components/GenresSection"));
const BonusSection = React.lazy(() => import("@/components/BonusSection"));
const BookShowcase = React.lazy(() => import("@/components/BookShowcase"));
const TestimonialsSection = React.lazy(() => import("@/components/TestimonialsSection"));
const OffersSection = React.lazy(() => import("@/components/OffersSection"));
const GuaranteeSection = React.lazy(() => import("@/components/GuaranteeSection"));
const FaqSection = React.lazy(() => import("@/components/FaqSection"));
const SocialProofNotification = React.lazy(() => import("@/components/SocialProofNotification"));

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <UrgencyBar />
      <SecurityBar />
      <HeroSection />
      <Suspense fallback={<div className="min-h-[500px]" />}>
        <AdvantagesSection />
        <GenresSection />
        <BonusSection />
        <BookShowcase />
        <TestimonialsSection />
        <OffersSection />
        <GuaranteeSection />
        <FaqSection />
      </Suspense>
      <Footer />
      <Suspense fallback={null}>
        <SocialProofNotification />
      </Suspense>
    </div>
  );
};

export default Index;
