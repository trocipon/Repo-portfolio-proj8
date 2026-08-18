import { Linkedin } from "../utils/icons";

export function ContactPhoto() {
  return (
    <div className="overflow-hidden rounded-xl border border-border bg-card lg:col-span-1" style={{ aspectRatio: "4/5" }}>
      <img src="/images/contact.webp" alt="Portrait de Thibaud Rocipon" width="420" height="525" loading="lazy" decoding="async" className="h-full w-full object-cover" style={{ contain: "content", objectPosition: "center 15%" }} />
    </div>
  );
}

// Version pleine (libellé + URL visible) réservée au mobile : au-delà de sm,
// remplacée par ContactLinksCompact, plus discrète, alignée avec le badge
// "Contact" en haut de section plutôt qu'en gros bloc pleine largeur.
export function ContactLinks() {
  return (
    <div className="mt-8 rounded-xl border border-border bg-card p-6 sm:hidden">
      <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">Retrouvez-moi</h3>
      <div className="mt-4 flex flex-col gap-4">
        <a href="https://linkedin.com/in/thibaudrocipon" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 rounded-lg p-2 -m-2 text-sm text-muted-foreground transition-colors hover:bg-primary/10 hover:text-primary">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
            <Linkedin className="h-4 w-4" />
          </div>
          linkedin.com/in/thibaudrocipon/
        </a>
        <div className="border-t border-border" aria-hidden="true" />
        <a href="https://github.com/trocipon" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 rounded-lg p-2 -m-2 text-sm text-muted-foreground transition-colors hover:bg-primary/10 hover:text-primary">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77a5.07 5.07 0 0 0-.09-3.73S18.73.69 16 2.29a13.38 13.38 0 0 0-7 0C5.27.69 4.09 1.04 4.09 1.04A5.07 5.07 0 0 0 4 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
            </svg>
          </div>
          github.com/trocipon
        </a>
      </div>
    </div>
  );
}

// Icônes seules, sans libellé ni URL visible (le texte fait déjà le travail
// d'accessibilité) : à côté du badge "Contact" plutôt qu'en bloc pleine
// largeur sous le formulaire, qui laissait un grand vide pour peu de
// contenu. Même traitement interactif (fond teinté au repos, plus prononcé
// au survol) que la version mobile ci-dessus.
export function ContactLinksCompact() {
  return (
    <div className="hidden items-center gap-2 sm:flex">
      <a href="https://linkedin.com/in/thibaudrocipon" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors hover:bg-primary/20">
        <Linkedin className="h-4 w-4" />
      </a>
      <a href="https://github.com/trocipon" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors hover:bg-primary/20">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77a5.07 5.07 0 0 0-.09-3.73S18.73.69 16 2.29a13.38 13.38 0 0 0-7 0C5.27.69 4.09 1.04 4.09 1.04A5.07 5.07 0 0 0 4 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
        </svg>
      </a>
    </div>
  );
}
