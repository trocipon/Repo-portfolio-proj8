import { ArrowDown } from "../utils/icons";
import { FadeIn } from "@/components/ui/fade-in";
import { ParticlesHero } from "../ui/particles-hero";

export function HeroSection() {
  return (
    <section id="accueil" className="relative flex min-h-screen lg:h-screen items-center justify-center px-4 sm:px-6 md:px-8 pb-20 lg:pb-0 overflow-hidden" aria-label="Section d'accueil">
      {/* Animation de particules flottantes */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <ParticlesHero />
      </div>
      <div className="mx-auto max-w-6xl w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 py-12 lg:py-0 mt-20 lg:mt-0">
          <FadeIn delay={100}>
            <div className="flex flex-col items-center justify-center text-center h-full">
              <h1 className="text-3xl font-bold leading-tight tracking-tight text-foreground md:text-5xl lg:text-6xl">Thibaud Rocipon</h1>
              <p className="mt-4 text-lg font-extrabold text-primary md:text-xl">Développeur Front-End</p>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-foreground/80 md:text-lg">Ancien policier scientifique, aujourd'hui développeur web front-end. J'applique la même exigence d'analyse et de précision à la réalisation d'interfaces performantes, accessibles et centrées sur l'utilisateur.</p>
              <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
                <a
                  href="#projets"
                  className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
                  onClick={(e) => {
                    e.preventDefault();
                    const target = document.getElementById("projets");
                    if (target) {
                      target.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                >
                  Voir mes projets
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-lg border border-border bg-secondary px-6 py-3 text-sm font-medium text-secondary-foreground transition-colors hover:bg-muted theme-toggle"
                  onClick={(e) => {
                    e.preventDefault();
                    const target = document.getElementById("contact");
                    if (target) {
                      target.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                >
                  Me contacter
                </a>
              </div>
            </div>
          </FadeIn>
          <FadeIn delay={200}>
            <div className="flex items-center justify-center w-full">
              <div className="relative w-full sm:w-80 md:w-96 lg:w-[420px] aspect-[3/4] overflow-hidden rounded-2xl border-2 border-primary/20 shadow-xl">
                <img src="/images/portrait.webp" alt="Portrait de Thibaud Rocipon" width="420" height="560" loading="lazy" className="h-full w-full object-cover" style={{ contain: "content", aspectRatio: "3/4" }} />
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
          const target = document.getElementById("a-propos");
          if (target) {
            target.scrollIntoView({ behavior: "smooth" });
          }
        }}
      >
        <ArrowDown className="h-8 w-8 animate-bounce" />
      </a>
    </section>
  );
}
