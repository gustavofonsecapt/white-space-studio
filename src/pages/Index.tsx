import { Hero } from "@/components/landing/Hero";
import { TruthSection } from "@/components/landing/TruthSection";
import { Portfolio } from "@/components/landing/Portfolio";
import { Testimonials } from "@/components/landing/Testimonials";
import { Differentials } from "@/components/landing/Differentials";
import { ContactForm } from "@/components/landing/ContactForm";
import { Footer } from "@/components/landing/Footer";

const Index = () => {
  return (
    <main className="bg-background min-h-screen">
      <Hero />
      <TruthSection />
      <Portfolio />
      <Testimonials />
      <Differentials />
      <ContactForm />
      <Footer />
    </main>
  );
};

export default Index;
