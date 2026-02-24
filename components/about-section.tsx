"use client";

import { useState } from "react";
import { Code2, Palette, Zap, ChevronDown } from "lucide-react";
import { FadeIn } from "@/components/fade-in";

const highlights = [
  {
    icon: Code2,
    title: "Code propre",
    description: "J'ecris un code lisible, maintenable et structure selon les meilleures pratiques. Chaque ligne est pensee pour la clarte et la reutilisabilite, en suivant les standards modernes du developpement web.",
  },
  {
    icon: Palette,
    title: "Design soigne",
    description: "Sensible au detail, je cree des interfaces qui allient esthetique et fonctionnalite. Je collabore etroitement avec les equipes design pour traduire les maquettes en experiences pixel-perfect.",
  },
  {
    icon: Zap,
    title: "Performance",
    description: "J'optimise chaque projet pour offrir une experience rapide et fluide. Lazy loading, code splitting, optimisation des assets et bonnes pratiques Core Web Vitals sont au coeur de mon approche.",
  },
];

function CollapsibleCard({ icon: Icon, title, description }: { icon: React.ComponentType<{ className?: string }>; title: string; description: string }) {
  const [open, setOpen] = useState(false);

  return (
    <button type="button" onClick={() => setOpen(!open)} className="flex w-full flex-col rounded-xl border border-border bg-card p-5 text-left transition-colors hover:border-primary/30">
      <div className="flex w-full items-center gap-4">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
          <Icon className="h-5 w-5" />
        </div>
        <h3 className="flex-1 text-sm font-semibold text-foreground">{title}</h3>
        <ChevronDown className={`h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
      </div>
      <div className={`overflow-hidden transition-all duration-300 ${open ? "mt-3 max-h-40 opacity-100" : "max-h-0 opacity-0"}`}>
        <p className="pl-14 text-sm leading-relaxed text-muted-foreground">{description}</p>
      </div>
    </button>
  );
}

export function AboutSection() {
  return (
    <section id="a-propos" className="px-6 py-24" aria-label="A propos de moi">
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <div className="mb-4 text-sm font-medium uppercase tracking-widest text-primary">A propos</div>
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">{"Qui suis-je ?"}</h2>
        </FadeIn>

        <div className="mt-12 grid gap-12 lg:grid-cols-5">
          {/* Text + cards - left side */}
          <FadeIn delay={100}>
            <div className="flex flex-col gap-6 lg:col-span-3">
              <p className="text-base leading-relaxed text-muted-foreground">{"Passionne par le developpement web depuis plusieurs annees, je me specialise dans la creation d'interfaces utilisateur modernes et accessibles. Mon approche combine creativite et rigueur technique pour livrer des experiences web de qualite."}</p>
              <p className="text-base leading-relaxed text-muted-foreground">{"Forme aux technologies front-end les plus actuelles, je travaille principalement avec React, JavaScript/TypeScript et Tailwind CSS. Je suis constamment en veille technologique pour integrer les meilleures pratiques et outils dans mes projets."}</p>
              <p className="text-base leading-relaxed text-muted-foreground">{"L'accessibilite et la performance sont au coeur de ma demarche. Chaque projet est une opportunite de creer quelque chose d'utile, d'elegant et d'inclusif."}</p>

              {/* Collapsible cards */}
              <div className="mt-4 flex flex-col gap-3">
                {highlights.map((item) => (
                  <CollapsibleCard key={item.title} {...item} />
                ))}
              </div>
            </div>
          </FadeIn>

          {/* Portrait - right side */}
          <FadeIn delay={200}>
            <div className="flex items-start justify-center lg:col-span-2">
              <div className="relative">
                <div className="relative h-80 w-64 overflow-hidden rounded-2xl border-2 border-primary/20 md:h-96 md:w-72">
                  <img src="/images/portrait.jpg" alt="Portrait de Thibaud Rocipon" className="absolute inset-0 h-full w-full object-cover" />
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
