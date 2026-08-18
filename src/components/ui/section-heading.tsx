import type { ReactNode } from "react";

interface SectionHeadingProps {
  badge: string;
  title: string;
  // Contenu additionnel à côté de la pastille (ex. liens de contact compacts)
  // ou du titre (ex. bouton voir tous/voir moins) : évite de dupliquer toute
  // la structure pour les deux sections qui en ont besoin.
  badgeAction?: ReactNode;
  titleAction?: ReactNode;
}

// Pastille + h2 partagés par toutes les sections de la page : même structure
// et mêmes classes recopiées à l'identique dans chacune d'elles, avec un seul
// endroit à faire évoluer.
export function SectionHeading({ badge, title, badgeAction, titleAction }: SectionHeadingProps) {
  return (
    <>
      <div className={`mb-4 flex ${badgeAction ? "items-center justify-center gap-3 sm:justify-between" : "justify-center sm:justify-start"}`}>
        <span className="rounded-full bg-foreground px-3 py-1 text-xs font-bold uppercase tracking-widest text-background">{badge}</span>
        {badgeAction}
      </div>
      {titleAction ? (
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between">
          <h2 className="text-balance text-center text-3xl font-bold tracking-tight text-foreground sm:text-left md:text-4xl lg:text-5xl">{title}</h2>
          {titleAction}
        </div>
      ) : (
        <h2 className="text-balance text-center text-3xl font-bold tracking-tight text-foreground sm:text-left md:text-4xl lg:text-5xl">{title}</h2>
      )}
    </>
  );
}
