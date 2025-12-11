import heroImage from "@/assets/hero-architecture.jpg";

export const InsightSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="section-container">
        <div className="max-w-3xl mb-16">
          <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-light tracking-tight text-foreground leading-snug">
            Tudo muda quando você entende o potencial real do seu terreno.
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text Column */}
          <div className="space-y-8">
            <p className="text-lg md:text-xl text-text-secondary font-light leading-relaxed">
              A arquitetura autoral começa muito antes do primeiro traço. Ela nasce da leitura 
              atenta do terreno — da forma como a luz entra, de como o vento circula, de onde 
              vem a privacidade e para onde se abre a paisagem.
            </p>
            <p className="text-lg md:text-xl text-text-secondary font-light leading-relaxed">
              Uma implantação bem pensada define a proporção dos ambientes, a fluidez entre 
              espaços, e aquela sensação rara de que a casa sempre pertenceu àquele lugar.
            </p>
            <p className="text-lg md:text-xl text-text-secondary font-light leading-relaxed">
              Quando você entende o potencial real do seu terreno, cada decisão ganha clareza. 
              E a casa deixa de ser um projeto genérico para se tornar extensão da sua vida.
            </p>
          </div>

          {/* Image Column */}
          <div className="relative">
            <div className="aspect-[4/5] overflow-hidden">
              <img
                src={heroImage}
                alt="Detalhe arquitetônico com luz natural"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
