import { Instagram, Linkedin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-12 md:py-16 bg-background border-t border-border-light">
      <div className="section-container">
        <div className="flex flex-col items-center text-center space-y-8">
          {/* Logo */}
          <h2 className="font-display text-lg font-light tracking-wide text-foreground">
            Gustavo Costa <span className="text-text-muted">Arquitetura</span>
          </h2>

          {/* Cities */}
          <p className="text-sm text-text-muted tracking-wider">
            São Luís • São Paulo • Porto
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-6">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-text-muted hover:text-foreground transition-colors duration-300"
            >
              <Instagram className="w-5 h-5" strokeWidth={1.5} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-text-muted hover:text-foreground transition-colors duration-300"
            >
              <Linkedin className="w-5 h-5" strokeWidth={1.5} />
            </a>
          </div>

          {/* Copyright */}
          <p className="text-xs text-text-muted">
            © {new Date().getFullYear()} Gustavo Costa Arquitetura. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};
