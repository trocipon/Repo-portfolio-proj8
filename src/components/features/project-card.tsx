import React from "react";
import { Project, projectTypeBadgeStyles, projectTypeEmoji } from "../utils/project-utils";
import { Github } from "../utils/icons";
import { getTagVisual } from "../utils/tag-visuals";
import { TagPill } from "../ui/tag-pill";

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onClick }) => {
  return (
    <article
      className="card-interactive group relative flex cursor-pointer flex-col overflow-hidden rounded-xl border border-border bg-card hover:border-primary/30"
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onClick();
        }
      }}
      aria-label={`Voir les détails du projet ${project.title}`}
    >
      {/* Image */}
      <div className="relative h-44 bg-muted/50 flex items-center justify-center overflow-hidden">
        {project.images.length > 0 ? (
          <img src={project.images[0]} alt={`Aperçu du projet ${project.title}`} className="max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-105" loading="lazy" decoding="async" style={{ contain: "content", willChange: "transform" }} />
        ) : (
          <div className="flex h-full items-center justify-center">
            <span className="text-sm text-muted-foreground">Aperçu</span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-center justify-between">
          <h3 className="text-base font-semibold text-foreground flex items-center gap-2">{project.title}</h3>
        </div>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground line-clamp-2">{project.introduction}</p>

        {/* Bottom row */}
        <div className="mt-4 flex items-end justify-between gap-2">
          <div className="flex flex-1 min-w-0 flex-wrap gap-1">
            {project.tags
              .filter((tag) => getTagVisual(tag).kind !== "none")
              .slice(0, 3)
              .map((tag) => (
                <TagPill key={tag} name={tag} />
              ))}
          </div>
          <span className={`inline-flex shrink-0 items-center gap-1 rounded-md border px-2 py-0.5 text-[10px] font-medium text-muted-foreground ${projectTypeBadgeStyles[project.type]}`}>
            <span className="text-sm" title={`Projet ${project.type}`}>
              {projectTypeEmoji[project.type]}
            </span>
            {project.year}
          </span>
        </div>
      </div>
    </article>
  );
};
