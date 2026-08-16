import { useState, Suspense, lazy } from "react";
import { FadeIn } from "@/components/ui/fade-in";
import { Project, projects } from "@/components/utils/project-utils";
import { ProjectCard } from "../features/project-card";
import { Button } from "../ui/button";

const ProjectModal = lazy(() => import("../features/project-modal").then((m) => ({ default: m.ProjectModal })));
const ProjectsGridFull = lazy(() => import("../features/projects-grid-full"));

const CROSSFADE_MS = 180;

export function ProjectsSection() {
  const [showAll, setShowAll] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const featuredProjects = projects.filter((p) => p.featured);

  function toggleShowAll() {
    // Le bouton reste ancré en haut de la section (à côté du titre), donc
    // aucun scroll n'est nécessaire : on ne fait qu'un fondu du contenu pour
    // signaler le changement sans déplacer la fenêtre.
    setIsTransitioning(true);
    window.setTimeout(() => {
      setShowAll((prev) => !prev);
      setIsTransitioning(false);
    }, CROSSFADE_MS);
  }

  return (
    <section id="projets" tabIndex={-1} className="bg-secondary/50 px-4 py-8 sm:px-6 md:py-12 lg:py-16" aria-label="Mes projets">
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <div className="mb-4 flex justify-center sm:justify-start">
            <span className="rounded-full bg-foreground px-3 py-1 text-xs font-bold uppercase tracking-widest text-background">Projets</span>
          </div>
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between">
            <h2 className="text-balance text-center text-3xl font-bold tracking-tight text-foreground sm:text-left md:text-4xl lg:text-5xl">Travaux réalisés</h2>
            <Button type="button" variant="secondary" onClick={toggleShowAll}>
              {showAll ? "Voir moins de projets" : "Voir tous les projets"}
            </Button>
          </div>
        </FadeIn>

        <div className={`mt-10 transition-opacity duration-200 ${isTransitioning ? "opacity-0" : "opacity-100"}`}>
          {!showAll ? (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {featuredProjects.map((project) => (
                <ProjectCard key={project.title} project={project} onClick={() => setSelectedProject(project)} />
              ))}
            </div>
          ) : (
            <Suspense fallback={<div className="text-center text-sm text-muted-foreground">Chargement des projets...</div>}>
              <ProjectsGridFull onSelectProject={setSelectedProject} />
            </Suspense>
          )}
        </div>
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
