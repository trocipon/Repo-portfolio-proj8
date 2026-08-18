import { FadeIn } from "@/components/ui/fade-in";
import { FlipCard } from "../features/flip-card";
import data from "../../data/data.json";

const services = data.skills.services;

export function SkillsSection() {
  return (
    <section id="competences" tabIndex={-1} className="px-4 py-10 md:py-16" aria-label="Compétences techniques">
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <div className="mb-4 flex justify-center sm:justify-start">
            <span className="rounded-full bg-foreground px-3 py-1 text-xs font-bold uppercase tracking-widest text-background">Compétences</span>
          </div>
          <h2 className="text-balance text-center text-3xl font-bold tracking-tight text-foreground sm:text-left md:text-4xl lg:text-5xl">Méthode et outils</h2>
        </FadeIn>
        <FadeIn delay={200}>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {services.map((service) => (
              <FlipCard key={service.title} title={service.title} description={service.description} techBadges={service.techBadges} className="min-h-[150px]" />
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
