import React, { Suspense } from "react";
import { Project } from "../utils/project-utils";
import { techBadgesWithIcons } from "../utils/techbadges";
const Carousel = React.lazy(() => import("./carousel"));

export function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-foreground/60 backdrop-blur-sm p-4 sm:p-6" onClick={onClose} role="dialog" aria-modal="true" aria-label={`Details du projet ${project.title}`}>
      <div className="relative w-full max-w-lg sm:max-w-5xl max-h-[95vh] sm:max-h-[90vh] rounded-2xl border border-border bg-card p-0 shadow-2xl flex flex-col overflow-y-auto" onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose} className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground hover:bg-muted z-10 cursor-pointer" aria-label="Fermer">
          <span className="h-4 w-4 flex items-center justify-center">✕</span>
        </button>
        {/* Contenu avec scroll unique */}
        <div className="w-full flex flex-col gap-6 p-6 sm:p-10">
          {/* Texte */}
          <div>
            <h3 className="text-xl font-bold text-foreground text-center">{project.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-foreground/80 text-justify">
              {typeof project.description === "string" ? (
                project.description
              ) : (
                <>
                  {(project.description as Record<string, string | undefined>).context && (
                    <span>
                      <strong>Contexte :</strong> {(project.description as Record<string, string | undefined>).context}
                    </span>
                  )}
                  <br />
                  {(project.description as Record<string, string | undefined>).objectives && (
                    <span>
                      <strong>Objectifs :</strong> {(project.description as Record<string, string | undefined>).objectives}
                    </span>
                  )}
                  <br />
                  {(project.description as Record<string, string | undefined>).results && (
                    <span>
                      <strong>Résultats :</strong> {(project.description as Record<string, string | undefined>).results}
                    </span>
                  )}
                  <br />
                  {(project.description as Record<string, string | undefined>).improvements && (
                    <span>
                      <strong>Améliorations :</strong> {(project.description as Record<string, string | undefined>).improvements}
                    </span>
                  )}
                  <br />
                  {(project.description as Record<string, string | undefined>)["skillsDeveloped"] && (
                    <span>
                      <strong>Compétences développées :</strong> {(project.description as Record<string, string | undefined>)["skillsDeveloped"]}
                    </span>
                  )}
                </>
              )}
            </p>
            <div className="mt-6 flex flex-wrap gap-1.5">
              {techBadgesWithIcons
                .filter((badge) => project.tags.includes(badge.name))
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
          {/* Images */}
          <div className="flex flex-col gap-4">
            {project.images.length === 1 && (
              <img
                src={project.images[0]}
                alt={`Capture d'écran du projet`}
                className="w-full rounded-lg border border-border block md:hidden"
                loading="lazy"
                decoding="async"
              />
            )}
            {project.images.length > 1 && (
              <div className="block md:hidden">
                {" "}
                {/* Show all images for mobile */}
                {project.images.map((image, index) => (
                  <img key={index} src={image} alt={`Capture d'écran ${index + 1} du projet`} className="w-full rounded-lg border border-border mb-4" loading="lazy" decoding="async" />
                ))}
              </div>
            )}
          </div>
          {project.images.length > 1 && (
            <div className="hidden md:block">
              {" "}
              {/* Show carousel only for tablet and larger screens */}
              <Suspense fallback={<div>Chargement...</div>}>
                <Carousel images={project.images} />
              </Suspense>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
