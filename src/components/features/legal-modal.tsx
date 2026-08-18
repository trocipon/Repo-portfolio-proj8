import React from "react";
import { useModalA11y } from "../utils/use-modal-a11y";

interface LegalModalProps {
  onClose: () => void;
}

const LegalModal: React.FC<LegalModalProps> = ({ onClose }) => {
  const dialogRef = useModalA11y(onClose);

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center sm:bg-foreground/60 sm:backdrop-blur-sm sm:p-6" onClick={onClose} role="dialog" aria-modal="true" aria-label="Mentions légales">
      {/* Sur mobile, la modale occupe l'écran entier plutôt que de flotter en
          carte réduite avec un fond assombri : sur un petit écran, une carte
          "flottante" prend de toute façon presque toute la place, autant
          l'assumer comme un vrai écran plein (pas d'arrondi, pas de bordure,
          pas de backdrop puisqu'il n'y a rien de visible derrière). À partir
          de sm, on retrouve la carte centrée classique. */}
      <div ref={dialogRef} className="relative w-full h-full sm:h-auto sm:max-w-5xl max-h-none sm:max-h-[90vh] rounded-none sm:rounded-2xl border-0 sm:border sm:border-border bg-card p-0 shadow-none sm:shadow-2xl flex flex-col overflow-y-auto" onClick={(e) => e.stopPropagation()}>
        {/* Barre fixe, même correctif que project-modal.tsx : un bouton de
            fermeture absolu à l'intérieur d'un conteneur overflow-y-auto
            défile hors champ avec le reste du contenu. */}
        <div className="sticky top-0 z-10 flex items-center justify-between gap-4 border-b border-border bg-card/95 px-4 py-3 backdrop-blur-sm sm:px-6">
          <p className="truncate text-sm font-semibold text-foreground sm:text-base" aria-hidden="true">
            Mentions légales
          </p>
          <button onClick={onClose} className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground hover:bg-muted cursor-pointer" aria-label="Fermer">
            <span className="h-4 w-4 flex items-center justify-center">✕</span>
          </button>
        </div>
        <div className="w-full flex flex-col gap-6 p-6 sm:p-10">
          <h2 className="text-2xl font-bold text-foreground text-center">Mentions légales</h2>
          <p className="mt-2 text-sm leading-relaxed text-foreground/80 text-justify">
            <strong>Éditeur du site</strong>
            <br />
            Le site thibaudrocipon.dev est édité par Thibaud Rocipon, Product Designer Junior basé à Bagnères-De-Bigorre (65) - France.
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
            <strong>Crédits photo</strong>
            <br />
            Certaines photographies proviennent d’Unsplash (licence libre). Mes portraits en studio sont l’œuvre d’Armand Tichané Photographie :{" "}
            <a href="https://www.armandphoto.fr/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
              armandphoto.fr
            </a>
            .
          </p>
          <p className="mt-2 text-sm leading-relaxed text-foreground/80 text-justify">
            <strong>Données personnelles et confidentialité</strong>
            <br />
            <ul className="list-disc pl-6">
              <li>Formulaire de contact : vos informations (nom, email, message) servent uniquement à répondre à votre demande. Elles ne sont ni collectées, ni revendues et sont supprimées après traitement.</li>
              <li>Formspree : l’envoi du formulaire de contact est traité par Formspree (service tiers).</li>
              <li>Google reCAPTCHA : utilisé pour la protection anti-spam du formulaire et du téléchargement du CV ; il peut déposer ses propres cookies, conformément à la politique de confidentialité de Google.</li>
              <li>Logs techniques : des données de connexion (adresse IP, date et heure) sont conservées par l’hébergeur pour la sécurité et le fonctionnement du site.</li>
              <li>Référencement : Google Search Console est utilisé uniquement pour analyser les performances du site.</li>
              <li>Cookies : aucun cookie publicitaire ; seuls les cookies techniques strictement nécessaires et ceux déposés par Google reCAPTCHA sont présents.</li>
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
