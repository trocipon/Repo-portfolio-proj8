import React from "react";
import { ModalShell } from "../ui/modal-shell";
import { SITE_NAME, SITE_TITLE } from "@/config/site";

interface LegalModalProps {
  onClose: () => void;
}

const LegalModal: React.FC<LegalModalProps> = ({ onClose }) => {
  return (
    <ModalShell title="Mentions légales" onClose={onClose}>
      <div className="w-full flex flex-col gap-6 p-6 sm:p-10">
          <h2 className="text-2xl font-bold text-foreground text-center">Mentions légales</h2>
          <p className="mt-2 text-sm leading-relaxed text-foreground/80 text-justify">
            <strong>Éditeur du site</strong>
            <br />
            Le site thibaudrocipon.dev est édité par {SITE_NAME}, {SITE_TITLE} basé à Bagnères-De-Bigorre (65) - France.
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
    </ModalShell>
  );
};

export default LegalModal;
