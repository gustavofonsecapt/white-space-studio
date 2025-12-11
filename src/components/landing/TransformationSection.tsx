import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import projectLight from "@/assets/project-light.jpg";
import projectMatter from "@/assets/project-matter.jpg";
import projectBreathe from "@/assets/project-breathe.jpg";

const carouselImages = [
  {
    src: projectLight,
    caption: "Planta genérica vs. estudo de implantação",
    alt: "Análise de implantação arquitetônica",
  },
  {
    src: projectMatter,
    caption: "Volumetria autoral pensada para o terreno",
    alt: "Volumetria arquitetônica contemporânea",
  },
  {
    src: projectBreathe,
    caption: "Luz, circulação e vida cotidiana em harmonia",
    alt: "Espaço residencial com luz natural",
  },
];

export const TransformationSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % carouselImages.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
  };

  return (
    <section className="section-padding bg-background">
      <div className="section-container">
        {/* Before/After Comparison */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 max-w-5xl mx-auto mb-24">
          {/* Before */}
          <div className="space-y-6">
            <span className="text-sm tracking-widest text-text-muted uppercase">Antes</span>
            <ul className="space-y-4">
              <li className="text-lg text-text-secondary font-light leading-relaxed flex items-start gap-3">
                <span className="text-text-muted mt-1.5">—</span>
                Dúvidas sobre orientação solar
              </li>
              <li className="text-lg text-text-secondary font-light leading-relaxed flex items-start gap-3">
                <span className="text-text-muted mt-1.5">—</span>
                Plantas genéricas sem identidade
              </li>
              <li className="text-lg text-text-secondary font-light leading-relaxed flex items-start gap-3">
                <span className="text-text-muted mt-1.5">—</span>
                Insegurança ao decidir
              </li>
            </ul>
          </div>

          {/* After */}
          <div className="space-y-6">
            <span className="text-sm tracking-widest text-text-muted uppercase">Depois</span>
            <ul className="space-y-4">
              <li className="text-lg text-foreground font-light leading-relaxed flex items-start gap-3">
                <span className="text-foreground mt-1.5">—</span>
                Clareza sobre implantação ideal
              </li>
              <li className="text-lg text-foreground font-light leading-relaxed flex items-start gap-3">
                <span className="text-foreground mt-1.5">—</span>
                Volumetria autoral e única
              </li>
              <li className="text-lg text-foreground font-light leading-relaxed flex items-start gap-3">
                <span className="text-foreground mt-1.5">—</span>
                Harmonia entre luz, circulação e vida
              </li>
            </ul>
          </div>
        </div>

        {/* Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <div className="aspect-[16/10] overflow-hidden">
            <img
              src={carouselImages[currentIndex].src}
              alt={carouselImages[currentIndex].alt}
              className="w-full h-full object-cover transition-opacity duration-500"
            />
          </div>
          
          <p className="mt-6 text-center text-text-secondary font-light">
            {carouselImages[currentIndex].caption}
          </p>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-6 mt-8">
            <button
              onClick={prevSlide}
              className="p-2 hover:bg-secondary transition-colors rounded-full"
              aria-label="Imagem anterior"
            >
              <ChevronLeft className="w-5 h-5 text-text-muted" strokeWidth={1.5} />
            </button>
            
            <div className="flex gap-2">
              {carouselImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentIndex ? "bg-foreground" : "bg-border"
                  }`}
                  aria-label={`Ir para imagem ${index + 1}`}
                />
              ))}
            </div>
            
            <button
              onClick={nextSlide}
              className="p-2 hover:bg-secondary transition-colors rounded-full"
              aria-label="Próxima imagem"
            >
              <ChevronRight className="w-5 h-5 text-text-muted" strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
