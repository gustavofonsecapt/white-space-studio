import { Hero } from "@/components/landing/Hero";
import { InsightSection } from "@/components/landing/InsightSection";
import { TransformationSection } from "@/components/landing/TransformationSection";
import { ProcessSection } from "@/components/landing/ProcessSection";
import { CasesSection } from "@/components/landing/CasesSection";
import { OfferSection } from "@/components/landing/OfferSection";
import { FinalCTA } from "@/components/landing/FinalCTA";
import { ContactForm } from "@/components/landing/ContactForm";
import { Footer } from "@/components/landing/Footer";

const Index = () => {
  return (
    <main className="bg-background min-h-screen">
      <Hero />
      <InsightSection />
      <TransformationSection />
      <ProcessSection />
      <CasesSection />
      <OfferSection />
      <FinalCTA />
      <ContactForm />
      <Footer />
    </main>
  );
};

export default Index;
