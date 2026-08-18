import { Project, projectTypeBadgeStyles, projectTypeEmoji } from "../utils/project-utils";
import { getTagVisual } from "../utils/tag-visuals";
import { TagPill } from "../ui/tag-pill";
import { FaGithub as Github, FaExternalLinkAlt, FaFileDownload } from "react-icons/fa";
import Carousel from "./carousel";
import Collapse from "../ui/collapse";
import { useModalA11y } from "../utils/use-modal-a11y";
import { Button } from "../ui/button";

export function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  const dialogRef = useModalA11y(onClose);

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center sm:bg-foreground/60 sm:backdrop-blur-sm sm:p-6" onClick={onClose} role="dialog" aria-modal="true" aria-label={`Details du projet ${project.title}`}>
      {/* Plein écran sur mobile plutôt qu'une carte flottante avec fond
          assombri : sur petit écran une carte "flottante" occupe de toute
          façon presque tout l'espace, autant l'assumer comme un vrai écran
          (pas d'arrondi/bordure/backdrop). Carte centrée classique dès sm. */}
      <div ref={dialogRef} className="relative w-full h-full sm:h-auto sm:max-w-5xl max-h-none sm:max-h-[90vh] rounded-none sm:rounded-2xl border-0 sm:border sm:border-border bg-card p-0 shadow-none sm:shadow-2xl flex flex-col overflow-y-auto" onClick={(e) => e.stopPropagation()}>
        {/* Barre fixe : reste au sommet pendant le défilement du contenu
            (contrairement au bouton de fermeture ex-absolu, qui défilait hors
            champ avec le reste). Ne reprend que le titre, pas l'accroche
            complète, pour ne pas rogner l'espace de lecture. */}
        <div className="sticky top-0 z-10 flex items-center justify-between gap-4 border-b border-border bg-card/95 px-4 py-3 backdrop-blur-sm sm:px-6">
          <p className="truncate text-sm font-semibold text-foreground sm:text-base" aria-hidden="true">
            {project.title}
          </p>
          <button onClick={onClose} className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground hover:bg-muted cursor-pointer" aria-label="Fermer">
            <span className="h-4 w-4 flex items-center justify-center">✕</span>
          </button>
        </div>

        {/* Zone d'accroche */}
        <div className="w-full p-6 sm:p-10 text-center">
          <h2 className="text-2xl font-bold text-foreground">{project.title}</h2>
          <p className="text-sm text-muted-foreground mt-2">{project.introduction}</p>
          {/* Rappel année ici aussi (même pastille que la carte, picto +
              année seulement, sans le libellé du type) : la modale peut
              s'ouvrir depuis la page Projets complète (grille filtrable),
              qui n'affiche pas forcément la carte d'origine sous les yeux
              au moment de lire le détail. */}
          <span className={`mt-3 inline-flex items-center gap-1 rounded-md border px-2.5 py-1 text-xs font-medium text-muted-foreground ${projectTypeBadgeStyles[project.type]}`}>
            <span title={`Projet ${project.type}`}>{projectTypeEmoji[project.type]}</span>
            {project.year}
          </span>
          <div className="flex flex-wrap justify-center gap-2 mt-4">
            {project.tags
              .filter((tag) => getTagVisual(tag).kind !== "none")
              .map((tag) => (
                <TagPill key={tag} name={tag} size="lg" />
              ))}
          </div>
        </div>

        {/* Contenu principal */}
        <div className="flex flex-col sm:flex-row gap-6 p-6 sm:p-10">
          {/* Colonne gauche : sticky uniquement à partir de sm (deux colonnes
              côte à côte). En pile mobile, un sticky top-0 sans conditionner
              au breakpoint restait accroché en haut pendant le défilement et
              se superposait aux accordéons Collapse en dessous. */}
          <div className="flex-1 sm:sticky sm:top-0 sm:h-fit">
            <Carousel images={project.images} projectTitle={project.title} />
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
                {/* Deux rangées distinctes : les actions (primary/secondary,
                    gabarit pill) d'un côté, les documents (tertiary, gabarit
                    lien texte) de l'autre. Le nombre variable de documents par
                    projet (1 à 4+) ferait retomber la ligne de façon
                    imprévisible si les deux gabarits de bouton se mélangeaient
                    sur une même rangée centrée. */}
                {(project.liveDemoUrl || (project.githubUrl && project.githubUrl !== "#") || project.beforeUrl) && (
                  <div className="flex flex-wrap items-center justify-center gap-3">
                    {project.liveDemoUrl && (
                      <Button href={project.liveDemoUrl} target="_blank" rel="noopener noreferrer" variant="primary" onClick={(e) => e.stopPropagation()}>
                        <FaExternalLinkAlt className="h-4 w-4" />
                        Voir le prototype
                      </Button>
                    )}
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
                  </div>
                )}
                {project.documents && project.documents.length > 0 && (
                  <div className="mt-3 flex flex-wrap items-center justify-center gap-x-4 gap-y-2">
                    {project.documents.map((doc) => (
                      <Button key={doc.url} href={doc.url} target="_blank" rel="noopener noreferrer" variant="tertiary" onClick={(e) => e.stopPropagation()}>
                        <FaFileDownload className="h-4 w-4" />
                        {doc.label}
                      </Button>
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
