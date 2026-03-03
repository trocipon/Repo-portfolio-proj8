import React from "react";
import { Project } from "../utils/project-utils";
import { Github } from "../utils/icons";
import { techBadgesWithIcons } from "../utils/techbadges";

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onClick }) => {
  return (
    <article
      className="group relative flex cursor-pointer flex-col overflow-hidden rounded-xl border border-border bg-card transition-all hover:border-primary/30 hover:shadow-sm"
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
        <h3 className="text-base font-semibold text-foreground">{project.title}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground line-clamp-2">
          {typeof project.description === "string"
            ? project.description
            : typeof project.description === "object" && project.description !== null
              ? Object.entries(project.description).map(([key, value]) => (
                  <span key={key}>
                    <strong>{key === "context" ? "Contexte" : key.charAt(0).toUpperCase() + key.slice(1)} :</strong> {String(value)}
                    <br />
                  </span>
                ))
              : null}
        </p>

        {/* Bottom row */}
        <div className="mt-4 flex items-end justify-between">
          {project.githubUrl && project.githubUrl !== "#" ? (
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground transition-colors hover:text-primary" onClick={(e) => e.stopPropagation()}>
              <Github className="h-4 w-4" />
              Code
            </a>
          ) : null}
          <div className="flex flex-wrap justify-end gap-1">
            {techBadgesWithIcons
              .filter((badge) => project.tags.includes(badge.name))
              .slice(0, 3)
              .map((badge) => (
                <span key={badge.name} className="inline-flex items-center gap-1 rounded-full border border-border bg-secondary px-2 py-0.5 text-[10px] font-medium text-muted-foreground">
                  {badge.iconUrl && (
                    <img
                      src={badge.iconUrl}
                      alt={`${badge.name} icon`}
                      width="12"
                      height="12"
                      className="h-3 w-3"
                      onError={(e) => {
                        (e.currentTarget as HTMLImageElement).style.display = "none";
                      }}
                    />
                  )}
                  {badge.name}
                </span>
              ))}
          </div>
        </div>
      </div>
    </article>
  );
};
