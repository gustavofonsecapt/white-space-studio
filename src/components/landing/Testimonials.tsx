const testimonials = [
  {
    quote: "Nunca tínhamos visto uma casa assim na nossa cidade.",
    author: "Cliente residencial",
  },
  {
    quote: "A clareza técnica mudou totalmente nossa segurança com a obra.",
    author: "Cliente corporativo",
  },
  {
    quote: "O projeto parece que sempre esteve ali, encaixado no terreno.",
    author: "Cliente residencial",
  },
];

export const Testimonials = () => {
  return (
    <section className="section-padding bg-background">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="font-display text-2xl md:text-3xl font-light tracking-tight text-foreground">
            O que os clientes dizem
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="text-center">
              <blockquote className="relative">
                <span className="absolute -top-6 -left-2 text-6xl text-border-light font-serif leading-none">
                  "
                </span>
                <p className="text-lg text-foreground font-light leading-relaxed italic relative z-10">
                  {testimonial.quote}
                </p>
              </blockquote>
              <p className="mt-6 text-sm text-text-muted tracking-wide">
                — {testimonial.author}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
