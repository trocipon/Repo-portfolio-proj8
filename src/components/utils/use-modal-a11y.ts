import { useLayoutEffect, useRef } from "react";

const FOCUSABLE_SELECTOR = 'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])';

/**
 * Comportement clavier standard pour une modale (pattern WAI-ARIA "dialog") :
 * fermeture sur Échap, piège du focus (Tab ne peut pas sortir de la modale
 * vers la page derrière), et restauration du focus sur l'élément qui avait
 * ouvert la modale une fois celle-ci refermée. À utiliser sur un composant
 * monté/démonté par son parent (pas caché via un simple `return null`
 * interne), l'effet s'active dès le montage.
 *
 * Le focus initial dans la modale est géré ici (plutôt que via `autoFocus`
 * sur un bouton interne) : `useLayoutEffect` s'exécute avant la peinture,
 * donc `document.activeElement` est encore l'élément qui a ouvert la modale
 * au moment où on le capture, avant qu'on ne déplace nous-mêmes le focus.
 */
export function useModalA11y(onClose: () => void) {
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const triggerElement = document.activeElement as HTMLElement | null;

    const focusable = containerRef.current?.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR);
    (focusable?.[0] ?? containerRef.current)?.focus();

    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        onClose();
        return;
      }
      if (e.key !== "Tab") return;
      const container = containerRef.current;
      if (!container) return;
      const focusable = container.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR);
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      triggerElement?.focus();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return containerRef;
}
