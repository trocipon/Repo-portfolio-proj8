import { Project } from "../utils/project-utils";
import { techBadgesWithIcons } from "../utils/techbadges";
import { FaGithub as Github, FaExternalLinkAlt, FaFileDownload } from "react-icons/fa";
import Carousel from "./carousel";
import Collapse from "../ui/collapse";
import { useModalA11y } from "../utils/use-modal-a11y";
import { Button } from "../ui/button";

export function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  const dialogRef = useModalA11y(onClose);

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-foreground/60 backdrop-blur-sm p-4 sm:p-6" onClick={onClose} role="dialog" aria-modal="true" aria-label={`Details du projet ${project.title}`}>
      <div ref={dialogRef} className="relative w-full max-w-lg sm:max-w-5xl max-h-[95vh] sm:max-h-[90vh] rounded-2xl border border-border bg-card p-0 shadow-2xl flex flex-col overflow-y-auto" onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose} className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground hover:bg-muted z-10 cursor-pointer" aria-label="Fermer">
          <span className="h-4 w-4 flex items-center justify-center">✕</span>
        </button>

        {/* Zone d'accroche */}
        <div className="w-full p-6 sm:p-10 text-center">
          <h2 className="text-2xl font-bold text-foreground">{project.title}</h2>
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
                <p className="text-sm text-white/90">{project.description.context}</p>
              </Collapse>
              <Collapse title="Objectifs">
                <ul className="list-disc pl-5">
                  {Array.isArray(project.description.objectives) ? (
                    project.description.objectives.map((objective, index) => (
                      <li key={index} className="text-sm text-white/90">
                        {objective}
                      </li>
                    ))
                  ) : (
                    <li className="text-sm text-white/90">{project.description.objectives}</li>
                  )}
                </ul>
              </Collapse>
              <Collapse title="Compétences développées">
                <ul className="list-disc pl-5">
                  {Array.isArray(project.description.skillsDeveloped) ? (
                    project.description.skillsDeveloped.map((skill, index) => (
                      <li key={index} className="text-sm text-white/90">
                        {skill}
                      </li>
                    ))
                  ) : (
                    <li className="text-sm text-white/90">{project.description.skillsDeveloped}</li>
                  )}
                </ul>
              </Collapse>
              <Collapse title="Perspectives d'amélioration">
                <p className="text-sm text-white/90">{project.description.improvements}</p>
              </Collapse>
              <Collapse title="Résultats">
                <ul className="list-disc pl-5">
                  {Array.isArray(project.description.results) ? (
                    project.description.results.map((result, index) => (
                      <li key={index} className="text-sm text-white/90">
                        {result}
                      </li>
                    ))
                  ) : (
                    <li className="text-sm text-white/90">{project.description.results}</li>
                  )}
                </ul>
              </Collapse>
              <div className="w-full p-6 sm:p-10 border-t border-border">
                <div className="flex flex-wrap justify-center gap-3">
                  {project.githubUrl && project.githubUrl !== "#" ? (
                    <Button href={project.githubUrl} target="_blank" rel="noopener noreferrer" variant="secondary" onClick={(e) => e.stopPropagation()}>
                      <Github className="h-4 w-4" />
                      Code source
                    </Button>
                  ) : null}
                  {project.beforeUrl && (
                    <Button href={project.beforeUrl} target="_blank" rel="noopener noreferrer" variant="secondary" onClick={(e) => e.stopPropagation()}>
                      <FaExternalLinkAlt className="h-4 w-4" />
                      Voir la version initiale
                    </Button>
                  )}
                  {project.liveDemoUrl && (
                    <Button href={project.liveDemoUrl} target="_blank" rel="noopener noreferrer" variant="primary" onClick={(e) => e.stopPropagation()}>
                      <FaExternalLinkAlt className="h-4 w-4" />
                      Voir le prototype
                    </Button>
                  )}
                </div>
                {project.documents && project.documents.length > 0 && (
                  <div className="mt-5 flex flex-wrap justify-center gap-x-5 gap-y-2">
                    {project.documents.map((doc) => (
                      <a key={doc.url} href={doc.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-primary" onClick={(e) => e.stopPropagation()}>
                        <FaFileDownload className="h-3.5 w-3.5" />
                        {doc.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}
