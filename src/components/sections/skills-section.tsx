import { FadeIn } from "@/components/ui/fade-in";
import { FlipCard } from "../features/flip-card";
import { TechCarousel } from "../features/tech-carousel";
import data from "../../data/data.json";

const services = data.skills.services.map((service) => ({
  ...service,
  title: service.title,
}));

export function SkillsSection() {
  return (
    <section id="competences" tabIndex={-1} className="bg-secondary/50 px-4 py-10 md:py-16" aria-label="Competences techniques">
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <div className="mb-4 text-sm font-medium uppercase tracking-widest text-primary">Compétences</div>
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">Services et stack technique</h2>
        </FadeIn>
        <FadeIn delay={100}>
          <TechCarousel />
        </FadeIn>
        <FadeIn delay={200}>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <FlipCard key={service.title} title={service.title} description={service.description} className="rounded-xl border border-border bg-card min-h-[150px]" />
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
