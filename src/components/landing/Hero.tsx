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
            Quero minha análise inicial
          </Button>
        </div>
      </header>

      {/* Hero Image */}
      <div className="relative w-full h-[70vh] md:h-[80vh]">
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-transparent to-background z-10" />
        <img
          src={heroImage}
          alt="Projeto residencial contemporâneo com linhas limpas e integração com a natureza"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Hero Content */}
      <div className="section-container py-12 md:py-16 lg:py-20">
        <div className="max-w-3xl">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-light leading-tight tracking-tight text-foreground fade-in-up">
            Arquitetura que transforma sua vida e o seu lugar para melhor.
          </h2>
          <p className="mt-6 text-lg md:text-xl text-text-secondary font-light leading-relaxed fade-in-up" style={{ animationDelay: "0.1s" }}>
            Projetos residenciais exclusivos, pensados para a sua rotina, clima e trajetória.
          </p>
          <div className="mt-8 md:mt-10 fade-in-up" style={{ animationDelay: "0.2s" }}>
            <Button variant="cta" size="lg" onClick={scrollToForm}>
              Quero minha análise inicial
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
