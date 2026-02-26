import { ChevronDown } from "lucide-react";
import { FadeIn } from "@/src/components/ui/fade-in";

export function AboutSection() {
  return (
    <section id="a-propos" className="px-6 py-24" aria-label="A propos de moi">
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <div className="mb-4 text-sm font-medium uppercase tracking-widest text-primary">A propos</div>
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">{"Qui suis-je ?"}</h2>
        </FadeIn>

        <div className="mt-12 grid items-start gap-12 lg:grid-cols-2">
          {/* Text - left side */}
          <FadeIn delay={100}>
            <div className="flex flex-col gap-6 lg:pr-12">
              <p className="text-base leading-relaxed text-muted-foreground">{"Passionné par le développement web depuis plusieurs années, je me spécialise dans la création d'interfaces utilisateur modernes et accessibles. Mon approche combine créativité et rigueur technique pour livrer des expériences web de qualité."}</p>
              <p className="text-base leading-relaxed text-muted-foreground">{"Forme aux technologies front-end les plus actuelles, je travaille principalement avec React, JavaScript/TypeScript et Tailwind CSS. Je suis constamment en veille technologique pour integrer les meilleures pratiques et outils dans mes projets."}</p>
              <p className="text-base leading-relaxed text-muted-foreground">{"L'accessibilite et la performance sont au coeur de ma demarche. Chaque projet est une opportunite de creer quelque chose d'utile, d'elegant et d'inclusif."}</p>
            </div>
          </FadeIn>

          {/* Portrait - right side */}
          <FadeIn delay={200}>
            <div className="flex items-start justify-end">
              <div className="relative">
                <div className="relative h-96 w-[420px] max-w-full overflow-hidden rounded-2xl border-2 border-primary/20">
                  <img src="/images/portrait.webp" alt="Portrait de Thibaud Rocipon" className="absolute inset-0 h-full w-full object-cover" />
                </div>
                {/* Decorative accent */}
                <div className="absolute -bottom-3 -right-3 h-full w-full rounded-2xl border-2 border-primary/10 -z-10" aria-hidden="true" />
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
