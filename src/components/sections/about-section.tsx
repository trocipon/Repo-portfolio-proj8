import { FadeIn } from "@/components/ui/fade-in";

export function AboutSection() {
  return (
    <section id="a-propos" tabIndex={-1} className="px-4 py-8 sm:px-6 md:py-12 lg:py-16" aria-label="À propos de moi">
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <div className="mb-4 flex justify-center sm:justify-start">
            <span className="rounded-full bg-foreground px-3 py-1 text-xs font-bold uppercase tracking-widest text-background">À propos</span>
          </div>
          <h2 className="text-balance text-center text-3xl font-bold tracking-tight text-foreground sm:text-left md:text-4xl lg:text-5xl">Qui suis-je ?</h2>
        </FadeIn>

        <div className="mt-8 md:mt-12 grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-8 md:gap-12 items-center">
          {/* Colonne gauche : photo */}
          <FadeIn delay={100}>
            <div className="flex items-center justify-center w-full h-full">
              <div className="relative w-56 sm:w-80 md:w-96 lg:w-[420px] aspect-[3/4]">
                <div className="relative h-full w-full overflow-hidden rounded-2xl border-2 border-primary/20 shadow-xl">
                  <img src="/images/empreinte-intro.webp" alt="Empreinte digitale intro" width="384" height="384" loading="lazy" className="h-full w-full object-cover" style={{ contain: "content", aspectRatio: "1/1" }} />
                </div>
                <div className="hidden lg:block absolute -bottom-3 -left-3 h-full w-full rounded-2xl border-2 border-primary/10 -z-10" aria-hidden="true" />
              </div>
            </div>
          </FadeIn>
          {/* Colonne droite : texte */}
          <FadeIn delay={200}>
            <div className="flex flex-col gap-6 lg:pr-12">
              <p className="text-base leading-relaxed text-muted-foreground">
                Après douze ans en police scientifique, je me reconvertis vers le <strong>Product Design</strong>. Mon parcours m’a appris à analyser des situations complexes, recueillir et croiser l’information, collaborer avec des interlocuteurs très différents et formuler des conclusions précises. Des réflexes qui trouvent naturellement leur place dans une démarche centrée sur les besoins des utilisateurs.
              </p>
              <p className="text-base leading-relaxed text-muted-foreground">
                J’ai également été <strong>correspondant projet</strong> sur un outil métier interne : j’ai recueilli les besoins des utilisateurs, suivi les évolutions avec l’équipe technique et testé les fonctionnalités avant leur déploiement. Une première immersion dans le cycle produit, avec la conviction qu’une conception bien pensée peut simplifier le travail quotidien et faire gagner du temps à toute une équipe.
              </p>
              <p className="text-base leading-relaxed text-muted-foreground">
                Aujourd’hui, je me forme au Product Design chez OpenClassrooms. Ma façon de travailler reste la même : <strong>comprendre avant de proposer</strong>. J’observe, j’écoute, j’analyse et je structure avant de concevoir, puis je mesure l’impact pour améliorer les solutions.
              </p>
              <p className="text-base leading-relaxed text-muted-foreground">
                Formé au développement web (JavaScript, React), je peux dialoguer efficacement avec les équipes de développement. Je m’intéresse particulièrement aux produits B2B et SaaS à forte profondeur fonctionnelle, où le design consiste à rendre simples des outils complexes. Je recherche un premier poste de Product Designer junior à partir de <strong>novembre 2026</strong>, mobile dans le Sud-Ouest et le Nord-Ouest.
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
