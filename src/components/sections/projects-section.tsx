import { useState, Suspense, lazy } from "react";
import { FadeIn } from "@/components/ui/fade-in";
import { Project, projects } from "@/components/utils/project-utils";
import { Filter } from "../features/filter";
import { ProjectCard } from "../features/project-card";

const ProjectModal = lazy(() => import("../features/project-modal").then((m) => ({ default: m.ProjectModal })));

export function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState<string | null>("Tous");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filtered = activeFilter && activeFilter !== "Tous" ? projects.filter((p) => p.tags.includes(activeFilter)) : projects;
  const techBadges = ["Tous", "HTML5", "JavaScript", "React", "Node.js"];

  return (
    <section id="projets" tabIndex={-1} className="px-4 py-8 sm:px-6 md:py-12 lg:py-16" aria-label="Mes projets">
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <div className="mb-4 text-sm font-medium uppercase tracking-widest text-primary">Projets</div>
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">Travaux réalisés</h2>
          <div className="mt-4 flex items-center justify-between">
            <div className="flex flex-wrap gap-2">
              <Filter options={techBadges} activeFilter={activeFilter} onFilterChange={setActiveFilter} />
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={200}>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filtered.map((project) => (
              <ProjectCard key={project.title} project={project} onClick={() => setSelectedProject(project)} />
            ))}
          </div>
        </FadeIn>
      </div>

      {/* Modal */}
      {selectedProject && (
        <Suspense fallback={null}>
          <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
        </Suspense>
      )}
    </section>
  );
}
