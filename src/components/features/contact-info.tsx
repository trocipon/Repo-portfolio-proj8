import { Linkedin } from "../utils/icons";

export function ContactPhoto() {
  return (
    <div className="overflow-hidden rounded-xl border border-border bg-card lg:col-span-1" style={{ aspectRatio: "4/5" }}>
      <img src="/images/contact.webp" alt="Portrait de Thibaud Rocipon" width="420" height="525" loading="lazy" decoding="async" className="h-full w-full object-cover" style={{ contain: "content", objectPosition: "center 15%" }} />
    </div>
  );
}

// Étalé sur toute la largeur en une seule ligne horizontale à partir de sm
// (desktop/tablette) : plus visible qu'en colonne étroite à côté de la
// photo, et évite la redite avec les icônes GitHub/LinkedIn du footer, qui
// restent discrètes en comparaison. Reste empilé verticalement sur mobile.
export function ContactLinks() {
  return (
    <div className="rounded-xl border border-border bg-card p-6 sm:flex sm:items-center sm:gap-4 sm:p-4">
      <h3 className="shrink-0 text-sm font-semibold uppercase tracking-wider text-foreground">Retrouvez-moi</h3>
      <div className="my-4 border-t border-border sm:my-0 sm:h-8 sm:border-t-0 sm:border-l" aria-hidden="true" />
      <div className="flex flex-col gap-4 sm:flex-1 sm:flex-row sm:items-center sm:justify-around">
        <a href="https://linkedin.com/in/thibaudrocipon" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 rounded-lg p-2 -m-2 text-sm text-muted-foreground transition-colors hover:bg-primary/10 hover:text-primary">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
            <Linkedin className="h-4 w-4" />
          </div>
          linkedin.com/in/thibaudrocipon/
        </a>
        <div className="border-t border-border sm:h-8 sm:border-t-0 sm:border-l" aria-hidden="true" />
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
