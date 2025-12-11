const differentials = [
  {
    title: "Arquitetura autoral e sensorial",
    description: "Cada projeto nasce único, com identidade própria que respeita o contexto e eleva a experiência de habitar.",
  },
  {
    title: "Projeto pensado para a vida real",
    description: "Desenhamos para a sua rotina, seus rituais e a forma como você realmente vive.",
  },
  {
    title: "Clareza técnica desde o primeiro encontro",
    description: "Você entende cada decisão, cada material, cada custo antes de começar.",
  },
  {
    title: "Processo estruturado e acompanhamento próximo",
    description: "Do terreno à entrega, com etapas claras e comunicação constante.",
  },
];

export const Differentials = () => {
  return (
    <section className="section-padding bg-background">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 max-w-5xl mx-auto">
          {differentials.map((item, index) => (
            <div key={index} className="group">
              <h3 className="font-display text-xl font-normal tracking-tight text-foreground mb-4">
                {item.title}
              </h3>
              <p className="text-text-secondary font-light leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
