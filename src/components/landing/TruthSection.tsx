import { Sun, Route, RefreshCcw, Sparkles } from "lucide-react";

const features = [
  {
    icon: Sun,
    title: "Análise de implantação e luz natural",
  },
  {
    icon: Route,
    title: "Estudo de circulação, desnível e privacidade",
  },
  {
    icon: RefreshCcw,
    title: "Evita retrabalhos caros",
  },
  {
    icon: Sparkles,
    title: "Define o potencial real do terreno em minutos",
  },
];

export const TruthSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-light tracking-tight text-foreground">
            A pior escolha com um terreno é adiar.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-4xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex items-start gap-5 group"
            >
              <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center">
                <feature.icon className="w-5 h-5 text-text-muted group-hover:text-foreground transition-colors duration-300" strokeWidth={1.5} />
              </div>
              <p className="text-lg text-text-secondary font-light leading-relaxed pt-2">
                {feature.title}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-text-muted font-light text-sm tracking-wide">
            Clareza é o primeiro passo para a casa certa.
          </p>
        </div>
      </div>
    </section>
  );
};
