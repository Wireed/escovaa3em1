import UrgencyBanner from "@/components/UrgencyBanner";
import HeroSection from "@/components/HeroSection";
import BenefitsSection from "@/components/BenefitsSection";
import VideoSection from "@/components/VideoSection";
import HairTypeSection from "@/components/HairTypeSection";
import HowToUseSection from "@/components/HowToUseSection";
import FaqSection from "@/components/FaqSection";
import OfferSection from "@/components/OfferSection";
import FloatingCta from "@/components/FloatingCta";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <UrgencyBanner />
      <HeroSection />
      <BenefitsSection />
      <VideoSection />
      <HairTypeSection />
      <HowToUseSection />
      <FaqSection />
      <OfferSection />
      <FloatingCta />

      {/* Footer */}
      <footer className="py-8 text-center border-t border-border">
        <p className="text-muted-foreground text-xs">
          © 2026 Escova Alisadora 3 em 1 — Todos os direitos reservados
        </p>
        <p className="text-muted-foreground text-xs mt-1">
          🛡️ Garantia de 30 dias | 🔒 Site 100% Seguro
        </p>
      </footer>
    </div>
  );
};

export default Index;
