import { ArrowDown, ArrowUpRight } from "../utils/icons";
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
              <p className="mt-4 flex items-center gap-1.5 text-lg font-extrabold text-primary md:text-xl">
                <ArrowUpRight className="h-5 w-5 shrink-0" aria-hidden="true" />
                Product Designer Junior
              </p>
              <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
                <span className="rounded-full border border-primary/40 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary">Mobile Sud-Ouest / Nord-Ouest</span>
                <span className="rounded-full border border-primary/40 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary">Disponible nov. 2026</span>
              </div>
            </div>
          </FadeIn>

          {/* Photo : entre le sous-titre et la description sur mobile (order-2),
              colonne de droite sur desktop, alignée sur la hauteur des deux
              blocs de texte empilés dans la colonne de gauche. */}
          <FadeIn delay={150} className="order-2 lg:order-2 lg:col-start-2 lg:row-start-1 lg:row-span-2">
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

          {/* Bloc 2 : description + CTA. Termine le flux mobile (order-3) ;
              reste sous le bloc 1 dans la même colonne sur desktop. */}
          <FadeIn delay={200} className="order-3 lg:order-1 lg:col-start-1 lg:row-start-2">
            <div className="flex flex-col items-center justify-center text-center h-full">
              <p className="max-w-xl text-base leading-relaxed text-foreground/80 md:text-lg">Douze ans d'enquête en police scientifique, aujourd'hui au service de la conception produit.</p>
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
