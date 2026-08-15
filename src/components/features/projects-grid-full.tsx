import { useState } from "react";
import { Project, projects } from "../utils/project-utils";
import { Filter } from "./filter";
import { ProjectCard } from "./project-card";

interface ProjectsGridFullProps {
  onSelectProject: (project: Project) => void;
}

const techBadges = ["Tous", "HTML5", "JavaScript", "React", "Node.js"];

export default function ProjectsGridFull({ onSelectProject }: ProjectsGridFullProps) {
  const [activeFilter, setActiveFilter] = useState<string | null>("Tous");

  const filtered = activeFilter && activeFilter !== "Tous" ? projects.filter((p) => p.tags.includes(activeFilter)) : projects;

  return (
    <>
      <div className="flex flex-wrap gap-2">
        <Filter options={techBadges} activeFilter={activeFilter} onFilterChange={setActiveFilter} />
      </div>
      <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filtered.map((project) => (
          <ProjectCard key={project.title} project={project} onClick={() => onSelectProject(project)} />
        ))}
      </div>
    </>
  );
}
