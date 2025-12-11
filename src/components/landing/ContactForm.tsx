import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

export const ContactForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    whatsapp: "",
    email: "",
    city: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    toast({
      title: "Mensagem enviada!",
      description: "Entraremos em contato em breve.",
    });
    
    setFormData({ name: "", whatsapp: "", email: "", city: "", message: "" });
    setIsSubmitting(false);
  };

  return (
    <section id="contact-form" className="section-padding bg-background">
      <div className="section-container">
        <div className="max-w-xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display text-2xl md:text-3xl font-light tracking-tight text-foreground">
              Agende sua análise inicial
            </h2>
            <p className="mt-4 text-text-secondary font-light">
              Conte sobre seu terreno ou sua ideia e vamos começar com clareza.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="border border-border-light p-8 md:p-10">
            <div className="space-y-6">
              <div>
                <Input
                  type="text"
                  name="name"
                  placeholder="Nome"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="bg-background border-border-light focus:border-foreground transition-colors"
                />
              </div>
              <div>
                <Input
                  type="tel"
                  name="whatsapp"
                  placeholder="WhatsApp"
                  value={formData.whatsapp}
                  onChange={handleChange}
                  required
                  className="bg-background border-border-light focus:border-foreground transition-colors"
                />
              </div>
              <div>
                <Input
                  type="email"
                  name="email"
                  placeholder="E-mail"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="bg-background border-border-light focus:border-foreground transition-colors"
                />
              </div>
              <div>
                <Input
                  type="text"
                  name="city"
                  placeholder="Cidade"
                  value={formData.city}
                  onChange={handleChange}
                  required
                  className="bg-background border-border-light focus:border-foreground transition-colors"
                />
              </div>
              <div>
                <Textarea
                  name="message"
                  placeholder="O que você deseja projetar?"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="bg-background border-border-light focus:border-foreground transition-colors resize-none"
                />
              </div>
              <Button
                type="submit"
                variant="cta"
                size="lg"
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Enviando..." : "Quero minha análise inicial"}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
