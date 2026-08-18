import type { ReactNode } from "react";
import { useModalA11y } from "../utils/use-modal-a11y";

interface ModalShellProps {
  title: string;
  onClose: () => void;
  children: ReactNode;
  // Distinct du titre affiché quand la modale a besoin d'un intitulé plus
  // complet pour les lecteurs d'écran (ex. "Details du projet X").
  ariaLabel?: string;
}

// Enveloppe commune à toutes les modales du site : plein écran sur mobile
// (pas d'arrondi/bordure/backdrop, une carte "flottante" prendrait de toute
// façon presque tout l'espace), carte centrée classique dès sm, barre de
// titre sticky avec bouton de fermeture, et comportement clavier standard
// (Échap, piège du focus) via useModalA11y.
export function ModalShell({ title, onClose, children, ariaLabel }: ModalShellProps) {
  const dialogRef = useModalA11y(onClose);

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center sm:bg-foreground/60 sm:backdrop-blur-sm sm:p-6" onClick={onClose} role="dialog" aria-modal="true" aria-label={ariaLabel ?? title}>
      <div ref={dialogRef} className="relative w-full h-full sm:h-auto sm:max-w-5xl max-h-none sm:max-h-[90vh] rounded-none sm:rounded-2xl border-0 sm:border sm:border-border bg-card p-0 shadow-none sm:shadow-2xl flex flex-col overflow-y-auto" onClick={(e) => e.stopPropagation()}>
        <div className="sticky top-0 z-10 flex items-center justify-between gap-4 border-b border-border bg-card/95 px-4 py-3 backdrop-blur-sm sm:px-6">
          <p className="truncate text-sm font-semibold text-foreground sm:text-base" aria-hidden="true">
            {title}
          </p>
          <button onClick={onClose} className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground hover:bg-muted cursor-pointer" aria-label="Fermer">
            <span className="h-4 w-4 flex items-center justify-center">✕</span>
          </button>
        </div>
        {children}
      </div>
    </div>
  );
}
