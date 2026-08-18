import { ArrowDown, MapPin } from "../utils/icons";
import { FadeIn } from "@/components/ui/fade-in";
import { Button } from "../ui/button";
import { scrollToSection } from "../utils/shared-utils";

export function HeroSection() {
  return (
    <section id="accueil" tabIndex={-1} className="relative flex min-h-screen lg:h-screen items-center justify-center px-4 sm:px-6 md:px-8 pb-20 lg:pb-0 overflow-hidden" aria-label="Section d'accueil">
      <div className="mx-auto max-w-6xl w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 py-12 lg:py-0 mt-20 lg:mt-0">
          {/* Bloc 1 : nom + sous-titre. Sur mobile, précède la photo pour
              l'accrocher visuellement ; sur desktop, reste en haut de la
              colonne de texte (même colonne/rangée que le bloc description). */}
          <FadeIn delay={100} className="order-1 lg:order-1 lg:col-start-1 lg:row-start-1">
            <div className="flex flex-col items-center justify-center text-center h-full">
              <h1 className="text-3xl font-bold leading-tight tracking-tight text-foreground md:text-5xl lg:text-6xl">Thibaud Rocipon</h1>
              <p className="mt-4 font-heading text-lg font-bold text-primary md:text-xl">Product Designer Junior</p>
            </div>
          </FadeIn>

          {/* Photo : entre le sous-titre et la description sur mobile (order-2),
              colonne de droite sur desktop, alignée sur la hauteur des trois
              blocs empilés dans la colonne de gauche (sous-titre, pastilles,
              description). */}
          <FadeIn delay={150} className="order-2 lg:order-2 lg:col-start-2 lg:row-start-1 lg:row-span-3">
            <div className="flex items-center justify-center w-full h-full">
              {/* Conteneur dédié à la taille exacte de la photo : les deux enfants
                  (photo, cadre décoratif) se positionnent l'un contre l'autre plutôt
                  que contre le conteneur large de la page, qui les désynchronisait
                  visuellement sur les écrans plus larges que la zone de contenu. */}
              <div className="relative w-56 sm:w-80 md:w-96 lg:w-[420px] aspect-[3/4]">
                <div className="relative h-full w-full overflow-hidden rounded-2xl border-2 border-primary/20 shadow-xl">
                  <img src="/images/portrait.webp" alt="Portrait de Thibaud Rocipon" width="420" height="560" loading="eager" fetchPriority="high" decoding="async" className="h-full w-full object-cover" style={{ contain: "content", aspectRatio: "3/4" }} />
                </div>
                <div className="absolute -bottom-3 -right-3 h-full w-full rounded-2xl border-2 border-primary/10 -z-10 hidden lg:block" aria-hidden="true" />
              </div>
            </div>
          </FadeIn>

          {/* Pastilles : bloc à part entière, positionné entre le sous-titre
              (texte précédent) et la description (texte suivant) — après la
              photo sur mobile, entre les deux blocs de texte sur desktop. */}
          <FadeIn delay={175} className="order-3 lg:order-1 lg:col-start-1 lg:row-start-2">
            <div className="flex flex-wrap items-center justify-center gap-2">
              {/* Fusionnée avec la localisation de base (retirée du bloc contact
                  pour éviter la redite) : deux lignes sur mobile où la pastille
                  serait trop étroite pour tout tenir sur une ligne, une seule
                  ligne dès sm où la largeur disponible le permet. */}
              <span className="inline-flex items-center gap-1.5 rounded-full border border-foreground/30 px-3 py-1.5 text-xs font-semibold uppercase tracking-wide text-foreground text-center sm:py-1">
                <MapPin className="h-3 w-3 shrink-0" aria-hidden="true" />
                <span>
                  Hautes-Pyrénées (65)
                  <span className="hidden sm:inline"> · </span>
                  <br className="sm:hidden" />
                  Mobile Sud-Ouest / Nord-Ouest
                </span>
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-foreground/30 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-foreground">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" aria-hidden="true" />
                Disponible nov. 2026
              </span>
            </div>
          </FadeIn>

          {/* Bloc description + CTA. Termine le flux mobile (order-4) ;
              reste sous les pastilles dans la même colonne sur desktop. */}
          <FadeIn delay={225} className="order-4 lg:order-1 lg:col-start-1 lg:row-start-3">
            <div className="flex flex-col items-center justify-center text-center h-full">
              <p className="max-w-xl text-base leading-relaxed text-foreground/80 md:text-lg">Douze ans d'enquête en police scientifique, aujourd'hui au service de la conception de produit digital.</p>
              <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
                <Button
                  href="#projets"
                  variant="primary"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("projets");
                  }}
                >
                  Voir mes projets
                </Button>
                <Button
                  href="#contact"
                  variant="secondary"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("contact");
                  }}
                >
                  Me contacter
                </Button>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>

      <a
        href="#a-propos"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted-foreground transition-colors hover:text-primary z-20"
        aria-label="Défiler vers la section À propos"
        onClick={(e) => {
          e.preventDefault();
          scrollToSection("a-propos");
        }}
      >
        <ArrowDown className="h-8 w-8" />
      </a>
    </section>
  );
}
