import { Button } from "@/components/ui/button";

export const FinalCTA = () => {
  const scrollToForm = () => {
    document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="section-padding bg-background">
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-light tracking-tight text-foreground leading-snug mb-6">
            O próximo passo é simples — e transforma tudo.
          </h2>
          <p className="text-lg md:text-xl text-text-secondary font-light leading-relaxed mb-10">
            Agende uma análise inicial e descubra a melhor forma de implantar sua casa.
          </p>
          <Button variant="cta" size="lg" onClick={scrollToForm}>
            Agendar análise
          </Button>
          <p className="mt-6 text-sm text-text-muted">
            30 minutos. Sem compromisso.
          </p>
        </div>
      </div>
    </section>
  );
};
