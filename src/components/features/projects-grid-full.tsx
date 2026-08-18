import { useState } from "react";
import { Project, projects } from "../utils/project-utils";
import { Filter } from "./filter";
import { ProjectCard } from "./project-card";

interface ProjectsGridFullProps {
  onSelectProject: (project: Project) => void;
}

// Filtres orientés démarche Product Design plutôt que stack technique. La
// dimension produit/business (impact chiffré, priorisation, gestion de
// projet) a sa propre catégorie pour ne pas être invisible à côté de UX/UI.
// "Bases techniques" reste disponible pour qui veut vérifier la compétence
// dev, sans être mis au même niveau que la démarche design — elle vient en
// appui du propos, pas en concurrence avec lui.
const filterOptions = ["Tous", "UX", "UI", "Stratégie produit", "Bases techniques"];

export default function ProjectsGridFull({ onSelectProject }: ProjectsGridFullProps) {
  const [activeFilter, setActiveFilter] = useState<string | null>("Tous");

  const filtered = activeFilter && activeFilter !== "Tous" ? projects.filter((p) => p.tags.includes(activeFilter)) : projects;

  return (
    <>
      <div className="flex flex-wrap gap-2">
        <Filter options={filterOptions} activeFilter={activeFilter} onFilterChange={setActiveFilter} />
      </div>
      {/* Le filtre ne réordonne jamais les projets restants (seulement un
          retrait), donc le même projet peut rester en tête d'une liste à
          l'autre selon ses tags : ce rappel du nombre de résultats confirme
          que le filtre a bien été pris en compte, sans changer d'ordre. */}
      {activeFilter && activeFilter !== "Tous" && (
        <p className="mt-4 text-xs text-muted-foreground">
          {filtered.length} {filtered.length > 1 ? "projets trouvés" : "projet trouvé"}
        </p>
      )}
      {filtered.length > 0 ? (
        <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((project) => (
            <ProjectCard key={project.title} project={project} onClick={() => onSelectProject(project)} />
          ))}
        </div>
      ) : (
        <p className="mt-6 text-sm text-muted-foreground">Aucun projet ne correspond à ce filtre pour le moment.</p>
      )}
    </>
  );
}
