import { ArrowDown } from "lucide-react";
import { FadeIn } from "@/src/components/ui/fade-in";

export function HeroSection() {
  return (
    <section id="accueil" className="relative flex min-h-screen items-center justify-center px-6 pt-20" aria-label="Section d'accueil">
      <div className="mx-auto max-w-3xl text-center">
        <FadeIn>
          <div className="relative mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-4 py-1.5 overflow-hidden">
            {/* Laser orbit animation */}
            <span className="laser-orbit" aria-hidden="true" />
            <span className="relative h-2 w-2 rounded-full bg-primary" aria-hidden="true">
              <span className="absolute inset-0 animate-ping rounded-full bg-primary/60" />
            </span>
            <span className="relative text-sm text-muted-foreground">Disponible pour de nouvelles opportunités</span>
          </div>
        </FadeIn>

        <FadeIn delay={100}>
          <h1 className="text-balance text-4xl font-bold leading-tight tracking-tight text-foreground md:text-6xl lg:text-7xl">Thibaud Rocipon</h1>
          <p className="mt-4 text-lg font-medium text-primary md:text-xl">Développeur Web Front-End</p>
        </FadeIn>

        <FadeIn delay={300}>
          <p className="mx-auto mt-6 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">{"Je conçois et développe des interfaces web modernes, performantes et accessibles. Passionné par l'expérience utilisateur et les technologies front-end."}</p>
        </FadeIn>

        <FadeIn delay={400}>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a href="#projets" className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90">
              Voir mes projets
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 rounded-lg border border-border bg-secondary px-6 py-3 text-sm font-medium text-secondary-foreground transition-colors hover:bg-muted">
              Me contacter
            </a>
          </div>
        </FadeIn>
      </div>

      <a href="#a-propos" className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted-foreground transition-colors hover:text-primary" aria-label="Defiler vers la section a propos">
        <ArrowDown className="h-5 w-5 animate-bounce" />
      </a>
    </section>
  );
}
