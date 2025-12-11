import projectLight from "@/assets/project-light.jpg";
import projectMatter from "@/assets/project-matter.jpg";
import projectBreathe from "@/assets/project-breathe.jpg";

const projects = [
  {
    image: projectLight,
    caption: "Luz como matéria.",
    alt: "Interior minimalista com luz natural abundante e paredes de concreto aparente",
  },
  {
    image: projectMatter,
    caption: "Matéria essencial.",
    alt: "Fachada contemporânea em concreto e madeira com linhas geométricas limpas",
  },
  {
    image: projectBreathe,
    caption: "Arquitetura que respira.",
    alt: "Residência com integração indoor-outdoor e vista para o jardim tropical",
  },
];

export const Portfolio = () => {
  return (
    <section className="section-padding bg-background">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group cursor-pointer"
            >
              <div className="aspect-square overflow-hidden mb-6">
                <img
                  src={project.image}
                  alt={project.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <p className="font-display text-lg text-text-secondary font-light tracking-wide group-hover:text-foreground transition-colors duration-300">
                {project.caption}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
