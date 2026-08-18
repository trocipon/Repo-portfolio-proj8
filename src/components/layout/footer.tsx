import { useState } from "react";
import { ArrowUp } from "../utils/icons";
import LegalModal from "../features/legal-modal";
import { prefersReducedMotion } from "../utils/shared-utils";
import { SITE_NAME, SITE_TITLE } from "@/config/site";

export function Footer() {
  const [isLegalModalOpen, setLegalModalOpen] = useState(false);

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-border bg-card px-6 py-12" role="contentinfo">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 md:flex-row md:justify-between">
        <div className="text-center md:text-left">
          <p className="text-sm font-semibold text-foreground">{SITE_NAME}</p>
          <p className="mt-1 text-xs text-muted-foreground">{SITE_TITLE}</p>
        </div>

        {/* Legal Modal */}
        {isLegalModalOpen && <LegalModal onClose={() => setLegalModalOpen(false)} />}
        <div className="text-center md:text-right">
          <button className="mt-1 text-xs font-bold text-muted-foreground hover:underline cursor-pointer" onClick={() => setLegalModalOpen(true)}>
            Mentions légales
          </button>
          <p className="text-xs text-muted-foreground">{`© ${currentYear} ${SITE_NAME}. Tous droits réservés.`}</p>
        </div>
      </div>

      {/* Back to top */}
      <button type="button" className="absolute right-6 -top-5 flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-muted-foreground shadow-sm transition-all cursor-pointer hover:shadow-lg" aria-label="Revenir en haut de la page" onClick={() => window.scrollTo({ top: 0, behavior: prefersReducedMotion() ? "auto" : "smooth" })}>
        <ArrowUp className="h-4 w-4 transition-transform duration-200 group-hover:-translate-y-1" />
      </button>
    </footer>
  );
}
