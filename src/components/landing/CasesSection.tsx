import projectLight from "@/assets/project-light.jpg";
import projectMatter from "@/assets/project-matter.jpg";
import projectBreathe from "@/assets/project-breathe.jpg";

const cases = [
  {
    image: projectLight,
    name: "Casa TH",
    alt: "Vista exterior da Casa TH com volumetria contemporânea",
  },
  {
    image: projectMatter,
    name: "Casa Carpas",
    alt: "Fachada da Casa Carpas com integração à paisagem",
  },
  {
    image: projectBreathe,
    name: "Casa Calhau",
    alt: "Interior da Casa Calhau com luz natural abundante",
  },
];

export const CasesSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="section-container">
        <div className="max-w-3xl mb-16">
          <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-light tracking-tight text-foreground leading-snug">
            Projetos que refletem histórias, não tendências.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {cases.map((project, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="aspect-[4/5] overflow-hidden mb-6">
                <img
                  src={project.image}
                  alt={project.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="flex items-center justify-between">
                <h3 className="font-display text-lg font-normal tracking-tight text-foreground">
                  {project.name}
                </h3>
                <span className="text-sm text-text-muted group-hover:text-foreground transition-colors duration-300 underline underline-offset-4">
                  Ver projeto
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
