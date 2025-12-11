import heroImage from "@/assets/hero-architecture.jpg";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  const scrollToForm = () => {
    document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative w-full min-h-screen flex flex-col">
      {/* Header */}
      <header className="absolute top-0 left-0 right-0 z-20 section-container py-6">
        <div className="flex items-center justify-between">
          <h1 className="font-display text-lg md:text-xl font-light tracking-wide text-foreground">
            Gustavo Costa <span className="text-text-muted">Arquitetura</span>
          </h1>
          <Button variant="cta" size="sm" onClick={scrollToForm} className="hidden md:flex">
            Agendar análise do terreno
          </Button>
        </div>
      </header>

      {/* Hero Image */}
      <div className="relative w-full h-[60vh] md:h-[70vh]">
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background z-10" />
        <img
          src={heroImage}
          alt="Projeto residencial contemporâneo com linhas limpas e integração com a natureza"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Hero Content */}
      <div className="section-container py-16 md:py-20 lg:py-28">
        <div className="max-w-4xl">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light leading-[1.15] tracking-tight text-foreground fade-in-up">
            Arquitetura que transforma a vida — com precisão, luz e rigor poético.
          </h2>
          <p className="mt-8 text-lg md:text-xl lg:text-2xl text-text-secondary font-light leading-relaxed max-w-3xl fade-in-up" style={{ animationDelay: "0.1s" }}>
            Projetos residenciais de alto padrão guiados por fluidez espacial, estética sensorial e clareza técnica desde o primeiro traço.
          </p>
          <div className="mt-10 md:mt-12 fade-in-up" style={{ animationDelay: "0.2s" }}>
            <Button variant="cta" size="lg" onClick={scrollToForm}>
              Agendar análise do terreno
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile CTA repeat */}
      <div className="section-container pb-8 md:hidden">
        <Button variant="cta" size="lg" onClick={scrollToForm} className="w-full">
          Agendar análise do terreno
        </Button>
      </div>
    </section>
  );
};
