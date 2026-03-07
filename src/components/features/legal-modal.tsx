import React from "react";

interface LegalModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const LegalModal: React.FC<LegalModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-foreground/60 backdrop-blur-sm p-4 sm:p-6" onClick={onClose} role="dialog" aria-modal="true" aria-label="Mentions légales">
      <div className="relative w-full max-w-lg sm:max-w-5xl max-h-[95vh] sm:max-h-[90vh] rounded-2xl border border-border bg-card p-0 shadow-2xl flex flex-col overflow-y-auto" onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose} className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground hover:bg-muted z-10 cursor-pointer" aria-label="Fermer" tabIndex={0} autoFocus>
          <span className="h-4 w-4 flex items-center justify-center">✕</span>
        </button>
        <div className="w-full flex flex-col gap-6 p-6 sm:p-10">
          <h2 className="text-xl font-bold text-foreground text-center">Mentions légales</h2>
          <p className="mt-2 text-sm leading-relaxed text-foreground/80 text-justify">
            <strong>Éditeur du site</strong>
            <br />
            Le site thibaud-rocipon.dev est édité par Thibaud Rocipon, développeur web basé à Bagnères-De-Bigorre (65) - France.
            <br />
            Vous pouvez me contacter via le formulaire de contact.
          </p>
          <p className="mt-2 text-sm leading-relaxed text-foreground/80 text-justify">
            <strong>Hébergement</strong>
            <br />
            Le site est hébergé par Vercel Inc. (340 S Lemon Ave #4133, Walnut, CA 91789, USA)
            <br />
            Site :{" "}
            <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
              https://vercel.com
            </a>
            <br />
            Vercel applique des clauses conformes au RGPD pour protéger vos données.
          </p>
          <p className="mt-2 text-sm leading-relaxed text-foreground/80 text-justify">
            <strong>Propriété intellectuelle</strong>
            <br />
            Tout le contenu (textes, images, code, design) m’appartient, sauf indication contraire. Merci de ne pas le reproduire sans autorisation.
          </p>
          <p className="mt-2 text-sm leading-relaxed text-foreground/80 text-justify">
            <strong>Données personnelles et confidentialité</strong>
            <br />
            <ul className="list-disc pl-6">
              <li>Formulaire de contact : vos informations (nom, email, message) servent uniquement à répondre à votre demande. Elles ne sont ni collectées, ni revendues et sont supprimées après traitement.</li>
              <li>Logs techniques : des données de connexion (adresse IP, date et heure) sont conservées par l’hébergeur pour la sécurité et le fonctionnement du site.</li>
              <li>Référencement : Google Search Console est utilisé uniquement pour analyser les performances du site.</li>
              <li>Cookies : pas de cookies traceurs ; seuls les cookies techniques strictement nécessaires sont présents.</li>
            </ul>
          </p>
          <p className="mt-2 text-sm leading-relaxed text-foreground/80 text-justify">
            <strong>Vos droits</strong>
            <br />
            Conformément au RGPD, vous pouvez demander l’accès, la rectification ou la suppression de vos données personnelles via le formulaire de contact.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LegalModal;
