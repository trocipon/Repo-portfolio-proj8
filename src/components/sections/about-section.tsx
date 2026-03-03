import { FadeIn } from "@/components/ui/fade-in";

export function AboutSection() {
  return (
    <section id="a-propos" className="px-4 py-8 sm:px-6 md:py-12 lg:py-16" aria-label="À propos de moi">
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <div className="mb-4 text-sm font-medium uppercase tracking-widest text-primary">À propos</div>
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">Qui suis-je ?</h2>
        </FadeIn>

        <div className="mt-8 md:mt-12 grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-8 md:gap-12 items-center">
          {/* Colonne gauche : photo */}
          <FadeIn delay={100}>
            <div className="flex items-center justify-center w-full h-full">
              <div className="relative w-full sm:w-80 md:w-96 lg:w-[420px] aspect-[3/4] overflow-hidden rounded-2xl border-2 border-primary/20 shadow-xl">
                <img src="/images/empreinte-intro.webp" alt="Empreinte digitale intro" width="384" height="384" loading="lazy" className="h-full w-full object-cover" style={{ contain: "content", aspectRatio: "1/1" }} />
              </div>
              <div className="hidden lg:block absolute -bottom-3 -left-3 w-96 aspect-square rounded-2xl border-2 border-primary/10 -z-10" aria-hidden="true" />
            </div>
          </FadeIn>
          {/* Colonne droite : texte */}
          <FadeIn delay={200}>
            <div className="flex flex-col gap-6 lg:pr-12 text-justify">
              <p className="text-base leading-relaxed text-muted-foreground">Policier scientifique pendant dix ans, j’ai construit ma carrière autour d’un fil conducteur simple : comprendre les systèmes pour mieux les améliorer.</p>
              <p className="text-base leading-relaxed text-muted-foreground">
                Sur le terrain, j’ai appris que chaque détail compte. Observer, analyser, formuler des hypothèses, documenter, tester, ajuster. Je ne codais pas encore, mais je participais déjà à la <strong>réflexion produit</strong>.
              </p>
              <p className="text-base leading-relaxed text-muted-foreground">
                Ma rencontre avec le développement web, dans un cours OpenClassrooms, a prolongé cette trajectoire naturellement. Créer une interface, améliorer un parcours utilisateur, transformer une idée en produit fonctionnel : c’est le même travail d’analyse et de précision, avec un nouveau terrain d’expression. J'ai donc suivi un parcours de formation au code source, JavaScript et React, avec un intérêt particulier pour <strong>l’expérience utilisateur</strong>. J'ai également appris à utiliser Node.js, Express, les API et MongoDB, côté back-end.
              </p>
              <p className="text-base leading-relaxed text-muted-foreground">
                Ce que je veux aujourd'hui ? Intégrer une équipe dynamique où mettre à profit ma rigueur, mon sens du détail, et mon engagement. Construire des <strong>produits utiles, modernes et performants</strong> n’est pas une rupture. C’en est la continuité.
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
