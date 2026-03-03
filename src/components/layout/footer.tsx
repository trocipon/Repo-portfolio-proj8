import { Linkedin, ArrowUp } from "../utils/icons";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-border bg-card px-6 py-12" role="contentinfo">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 md:flex-row md:justify-between">
        <div className="text-center md:text-left">
          <p className="text-sm font-semibold text-foreground">Thibaud Rocipon</p>
          <p className="mt-1 text-xs text-muted-foreground">Développeur Web - JavaScript React</p>
        </div>

        <div className="flex items-center gap-4">
          <a href="https://github.com/trocipon" target="_blank" rel="noopener noreferrer" className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-primary" aria-label="GitHub">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77a5.07 5.07 0 0 0-.09-3.73S18.73.69 16 2.29a13.38 13.38 0 0 0-7 0C5.27.69 4.09 1.04 4.09 1.04A5.07 5.07 0 0 0 4 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
            </svg>
          </a>
          <a href="https://linkedin.com/in/thibaudrocipon" target="_blank" rel="noopener noreferrer" className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-primary" aria-label="LinkedIn">
            <Linkedin className="h-4 w-4" />
          </a>
        </div>

        <p className="text-xs text-muted-foreground">{`\u00A9 ${currentYear} Thibaud Rocipon. Tous droits réservés.`}</p>
      </div>

      {/* Back to top */}
      <button type="button" className="absolute right-6 -top-5 flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-muted-foreground shadow-sm transition-all cursor-pointer hover:shadow-lg" aria-label="Revenir en haut de la page" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
        <ArrowUp className="h-4 w-4 transition-transform duration-200 group-hover:-translate-y-1" />
      </button>
    </footer>
  );
}
