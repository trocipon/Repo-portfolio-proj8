import { Project } from "../utils/project-utils";
import { techBadgesWithIcons } from "../utils/techbadges";
import { FaGithub as Github, FaExternalLinkAlt } from "react-icons/fa";
import Carousel from "./carousel";
import Collapse from "../ui/collapse";

export function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-foreground/60 backdrop-blur-sm p-4 sm:p-6" onClick={onClose} role="dialog" aria-modal="true" aria-label={`Details du projet ${project.title}`}>
      <div className="relative w-full max-w-lg sm:max-w-5xl max-h-[95vh] sm:max-h-[90vh] rounded-2xl border border-border bg-card p-0 shadow-2xl flex flex-col overflow-y-auto" onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose} className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground hover:bg-muted z-10 cursor-pointer" aria-label="Fermer" tabIndex={0} autoFocus>
          <span className="h-4 w-4 flex items-center justify-center">✕</span>
        </button>

        {/* Zone d'accroche */}
        <div className="w-full p-6 sm:p-10 text-center">
          <h3 className="text-2xl font-bold text-foreground">{project.title}</h3>
          <p className="text-sm text-muted-foreground mt-2">{project.introduction}</p>
          <div className="flex flex-wrap justify-center gap-2 mt-4">
            {techBadgesWithIcons
              .filter((badge) => project.tags.includes(badge.name))
              .map((badge) => (
                <span key={badge.name} className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-4 py-2 text-[14px] font-medium text-muted-foreground">
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

        {/* Contenu principal */}
        <div className="flex flex-col sm:flex-row gap-6 p-6 sm:p-10">
          {/* Colonne gauche */}
          <div className="flex-1 sticky top-0 h-fit">
            <Carousel images={project.images} />
          </div>

          {/* Colonne droite */}
          <div className="flex-1">
            <Collapse title="Contexte">
                <p className="text-sm text-foreground/80">{project.description.context}</p>
              </Collapse>
              <Collapse title="Objectifs">
                <ul className="list-disc pl-5">
                  {Array.isArray(project.description.objectives) ? (
                    project.description.objectives.map((objective, index) => (
                      <li key={index} className="text-sm text-foreground/80">
                        {objective}
                      </li>
                    ))
                  ) : (
                    <li className="text-sm text-foreground/80">{project.description.objectives}</li>
                  )}
                </ul>
              </Collapse>
              <Collapse title="Compétences développées">
                <ul className="list-disc pl-5">
                  {Array.isArray(project.description.skillsDeveloped) ? (
                    project.description.skillsDeveloped.map((skill, index) => (
                      <li key={index} className="text-sm text-foreground/80">
                        {skill}
                      </li>
                    ))
                  ) : (
                    <li className="text-sm text-foreground/80">{project.description.skillsDeveloped}</li>
                  )}
                </ul>
              </Collapse>
              <Collapse title="Perspectives d'amélioration">
                <p className="text-sm text-foreground/80">{project.description.improvements}</p>
              </Collapse>
              <Collapse title="Résultats">
                <ul className="list-disc pl-5">
                  {Array.isArray(project.description.results) ? (
                    project.description.results.map((result, index) => (
                      <li key={index} className="text-sm text-foreground/80">
                        {result}
                      </li>
                    ))
                  ) : (
                    <li className="text-sm text-foreground/80">{project.description.results}</li>
                  )}
                </ul>
              </Collapse>
              <div className="w-full p-6 sm:p-10 border-t border-border">
                <div className="flex justify-center gap-4 mt-4">
                  {project.githubUrl && project.githubUrl !== "#" ? (
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground transition-colors hover:text-primary" onClick={(e) => e.stopPropagation()}>
                      <Github className="h-4 w-4" />
                      Code
                    </a>
                  ) : null}
                  {project.liveDemoUrl && (
                    <a href={project.liveDemoUrl} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground" aria-label="Voir la démo live">
                      <FaExternalLinkAlt size={24} />
                    </a>
                  )}
                </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}
