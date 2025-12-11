import { Check } from "lucide-react";

const offerings = [
  "Diagnóstico de implantação",
  "Leitura da luz e ventos",
  "Análise de privacidade e vizinhança",
  "Recomendações iniciais de volumetria",
  "Reunião de 30 minutos (online ou presencial)",
];

export const OfferSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="section-container">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-light tracking-tight text-foreground leading-snug mb-12">
            Uma análise inicial que revela o potencial real do seu terreno.
          </h2>

          <ul className="space-y-5">
            {offerings.map((item, index) => (
              <li 
                key={index} 
                className="flex items-center gap-4 text-lg text-text-secondary font-light"
              >
                <Check className="w-5 h-5 text-text-muted flex-shrink-0" strokeWidth={1.5} />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
