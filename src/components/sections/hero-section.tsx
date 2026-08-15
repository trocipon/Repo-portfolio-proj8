import { ArrowDown } from "../utils/icons";
import { FadeIn } from "@/components/ui/fade-in";
import { Button } from "../ui/button";
import { scrollToSection } from "../utils/shared-utils";

export function HeroSection() {
  return (
    <section id="accueil" tabIndex={-1} className="relative flex min-h-screen lg:h-screen items-center justify-center px-4 sm:px-6 md:px-8 pb-20 lg:pb-0 overflow-hidden" aria-label="Section d'accueil">
      <div className="mx-auto max-w-6xl w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 py-12 lg:py-0 mt-20 lg:mt-0">
          <FadeIn delay={100}>
            <div className="flex flex-col items-center justify-center text-center h-full">
              <h1 className="text-3xl font-bold leading-tight tracking-tight text-foreground md:text-5xl lg:text-6xl">Thibaud Rocipon</h1>
              <p className="mt-4 text-lg font-extrabold text-primary md:text-xl">Product Designer Junior</p>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-foreground/80 md:text-lg">Douze ans d'enquête en police scientifique, aujourd'hui au service de la conception produit.</p>
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
          <FadeIn delay={200}>
            <div className="flex items-center justify-center w-full">
              <div className="relative w-full sm:w-80 md:w-96 lg:w-[420px] aspect-[3/4] overflow-hidden rounded-2xl border-2 border-primary/20 shadow-xl">
                <img src="/images/portrait.webp" alt="Portrait de Thibaud Rocipon" width="420" height="560" loading="eager" fetchPriority="high" decoding="async" className="h-full w-full object-cover" style={{ contain: "content", aspectRatio: "3/4" }} />
              </div>
              <div className="absolute -bottom-3 -right-3 w-full sm:w-80 md:w-96 lg:w-[420px] aspect-[3/4] rounded-2xl border-2 border-primary/10 -z-10 hidden lg:block" aria-hidden="true" />
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
