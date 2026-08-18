import { FadeIn } from "@/components/ui/fade-in";
import { SectionHeading } from "@/components/ui/section-heading";
import { FlipCard } from "../features/flip-card";
import data from "../../data/data.json";

const services = data.skills.services;

export function SkillsSection() {
  return (
    <section id="competences" tabIndex={-1} className="px-4 py-10 md:py-16" aria-label="Compétences techniques">
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <SectionHeading badge="Compétences" title="Méthode et outils" />
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
