import { Compass, Lightbulb, HardHat } from "lucide-react";

const steps = [
  {
    icon: Compass,
    title: "Análise do Terreno",
    description: "Leitura técnica e sensível do contexto: luz, ventos, topografia, vizinhança e potencial de implantação.",
  },
  {
    icon: Lightbulb,
    title: "Conceito Arquitetônico",
    description: "Desenvolvimento da volumetria, fluxos e identidade visual do projeto em diálogo constante com você.",
  },
  {
    icon: HardHat,
    title: "Projeto Executivo e Acompanhamento",
    description: "Detalhamento completo para obra e acompanhamento técnico até a entrega final.",
  },
];

export const ProcessSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="section-container">
        <div className="max-w-3xl mb-20">
          <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-light tracking-tight text-foreground leading-snug">
            Nosso processo une rigor técnico e sensibilidade arquitetônica.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
          {steps.map((step, index) => (
            <div key={index} className="group">
              <div className="mb-6">
                <step.icon 
                  className="w-8 h-8 text-text-muted group-hover:text-foreground transition-colors duration-300" 
                  strokeWidth={1} 
                />
              </div>
              <span className="text-sm text-text-muted tracking-widest mb-3 block">
                0{index + 1}
              </span>
              <h3 className="font-display text-xl font-normal tracking-tight text-foreground mb-4">
                {step.title}
              </h3>
              <p className="text-text-secondary font-light leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
