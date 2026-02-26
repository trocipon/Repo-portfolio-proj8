import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-border bg-card px-6 py-12" role="contentinfo">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 md:flex-row md:justify-between">
        <div className="text-center md:text-left">
          <p className="text-sm font-semibold text-foreground">Thibaud Rocipon</p>
          <p className="mt-1 text-xs text-muted-foreground">Developpeur Web Front-End</p>
        </div>

        <div className="flex items-center gap-4">
          <a href="mailto:thibaud.rocipon@email.com" className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-primary" aria-label="Email">
            <Mail className="h-4 w-4" />
          </a>
          <a href="https://github.com/thibaudrocipon" target="_blank" rel="noopener noreferrer" className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-primary" aria-label="GitHub">
            <Github className="h-4 w-4" />
          </a>
          <a href="https://linkedin.com/in/thibaudrocipon" target="_blank" rel="noopener noreferrer" className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-primary" aria-label="LinkedIn">
            <Linkedin className="h-4 w-4" />
          </a>
        </div>

        <p className="text-xs text-muted-foreground">{`\u00A9 ${currentYear} Thibaud Rocipon. Tous droits reserves.`}</p>
      </div>

      {/* Back to top */}
      <a href="#accueil" className="absolute right-6 -top-5 flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-muted-foreground shadow-sm transition-colors hover:text-primary hover:border-primary/30" aria-label="Revenir en haut de la page">
        <ArrowUp className="h-4 w-4" />
      </a>
    </footer>
  );
}
