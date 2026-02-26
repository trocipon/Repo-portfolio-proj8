import { useState, useEffect, useCallback } from "react";
import { Github, X, ChevronLeft, ChevronRight } from "lucide-react";
import { FadeIn } from "@/src/components/ui/fade-in";

const techColors: Record<string, string> = {
  React: "#61DAFB",
  TypeScript: "#3178C6",
  JavaScript: "#F7DF1E",
  "Tailwind CSS": "#06B6D4",
  "Framer Motion": "#0055FF",
  Recharts: "#22B5BF",
  "DnD Kit": "#FF6B6B",
  "CSS Modules": "#1572B6",
  "REST API": "#009688",
  MDX: "#FCB32C",
  "Node.js": "#339933",
};

interface Project {
  title: string;
  description: string;
  tags: string[];
  githubUrl: string;
  images: string[];
  featured: boolean;
}

const projects: Project[] = [
  {
    title: "Dashboard Analytics",
    description: "Application de tableau de bord interactif avec visualisation de donnees en temps reel. Interface reactive et performante construite avec React et Recharts.",
    tags: ["React", "TypeScript", "Tailwind CSS", "Recharts"],
    githubUrl: "#",
    images: ["/images/project-dashboard.jpg", "/images/project-dashboard-2.jpg", "/images/project-dashboard-3.jpg"],
    featured: true,
  },
  {
    title: "E-commerce UI Kit",
    description: "Kit d'interface utilisateur complet pour site e-commerce, avec composants reutilisables, systeme de design et animations fluides.",
    tags: ["React", "Tailwind CSS", "Framer Motion"],
    githubUrl: "#",
    images: ["/images/project-ecommerce.jpg", "/images/project-ecommerce-2.jpg", "/images/project-ecommerce-3.jpg"],
    featured: true,
  },
  {
    title: "Task Manager App",
    description: "Application de gestion de taches avec drag & drop, filtres avances et stockage local. Experience utilisateur optimisee pour la productivite.",
    tags: ["React", "TypeScript", "DnD Kit"],
    githubUrl: "#",
    images: [],
    featured: false,
  },
  {
    title: "Portfolio Photographe",
    description: "Site portfolio pour un photographe professionnel avec galerie responsive, lazy loading et optimisation des images.",
    tags: ["React", "Tailwind CSS", "Image Optimization"],
    githubUrl: "#",
    images: [],
    featured: false,
  },
  {
    title: "Weather App",
    description: "Application meteo minimaliste utilisant une API REST, avec geolocalisation automatique et previsions sur 7 jours.",
    tags: ["React", "REST API", "CSS Modules"],
    githubUrl: "#",
    images: [],
    featured: false,
  },
  {
    title: "Blog Tech",
    description: "Blog statique optimise pour le SEO avec rendu cote serveur, mode sombre et systeme de tags pour la navigation.",
    tags: ["React", "MDX", "Tailwind CSS"],
    githubUrl: "#",
    images: [],
    featured: false,
  },
];

// Extract unique tags for filter
const allTags = Array.from(new Set(projects.flatMap((p) => p.tags))).sort();

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  const [currentImage, setCurrentImage] = useState(0);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") setCurrentImage((i) => (i > 0 ? i - 1 : project.images.length - 1));
      if (e.key === "ArrowRight") setCurrentImage((i) => (i < project.images.length - 1 ? i + 1 : 0));
    },
    [onClose, project.images.length],
  );

  useEffect(() => {
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown]);

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-foreground/60 backdrop-blur-sm p-4" onClick={onClose} role="dialog" aria-modal="true" aria-label={`Details du projet ${project.title}`}>
      <div className="relative w-full max-w-3xl rounded-2xl border border-border bg-card p-6 shadow-xl" onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose} className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground hover:bg-muted z-10" aria-label="Fermer">
          <X className="h-4 w-4" />
        </button>

        <h3 className="text-xl font-bold text-foreground">{project.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{project.description}</p>

        {/* Image carousel */}
        {project.images.length > 0 && (
          <div className="relative mt-6">
            <div className="relative h-64 overflow-hidden rounded-xl bg-muted/50 md:h-80">
              <img src={project.images[currentImage]} alt={`Capture ${currentImage + 1} du projet ${project.title}`} className="absolute inset-0 h-full w-full object-cover" />
            </div>
            {project.images.length > 1 && (
              <>
                <button onClick={() => setCurrentImage((i) => (i > 0 ? i - 1 : project.images.length - 1))} className="absolute left-2 top-1/2 -translate-y-1/2 flex h-8 w-8 items-center justify-center rounded-full bg-background/80 text-foreground shadow backdrop-blur-sm transition-colors hover:bg-background" aria-label="Image precedente">
                  <ChevronLeft className="h-4 w-4" />
                </button>
                <button onClick={() => setCurrentImage((i) => (i < project.images.length - 1 ? i + 1 : 0))} className="absolute right-2 top-1/2 -translate-y-1/2 flex h-8 w-8 items-center justify-center rounded-full bg-background/80 text-foreground shadow backdrop-blur-sm transition-colors hover:bg-background" aria-label="Image suivante">
                  <ChevronRight className="h-4 w-4" />
                </button>
                {/* Dots */}
                <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5">
                  {project.images.map((_, i) => (
                    <button key={i} onClick={() => setCurrentImage(i)} className={`h-2 w-2 rounded-full transition-colors ${i === currentImage ? "bg-primary" : "bg-background/60"}`} aria-label={`Image ${i + 1}`} />
                  ))}
                </div>
              </>
            )}
          </div>
        )}

        {/* Tags + link */}
        <div className="mt-6 flex items-center justify-between">
          <div className="flex flex-wrap gap-1.5">
            {project.tags.map((tag) => (
              <span key={tag} className="inline-flex items-center gap-1.5 rounded-full border border-border bg-secondary px-2.5 py-0.5 text-xs font-medium text-foreground">
                <span className="h-2 w-2 rounded-full shrink-0" style={{ backgroundColor: techColors[tag] || "var(--primary)" }} aria-hidden="true" />
                {tag}
              </span>
            ))}
          </div>
          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90">
            <Github className="h-4 w-4" />
            Code
          </a>
        </div>
      </div>
    </div>
  );
}

export function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filtered = activeFilter ? projects.filter((p) => p.tags.includes(activeFilter)) : projects;

  return (
    <section id="projets" className="px-6 py-24" aria-label="Mes projets">
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <div className="mb-4 text-sm font-medium uppercase tracking-widest text-primary">Projets</div>
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">Travaux selectionnes</h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">{"Decouvrez une selection de mes projets recents. Chaque realisation reflete mon engagement pour la qualite, l'accessibilite et la performance."}</p>
        </FadeIn>

        {/* Filter buttons */}
        <FadeIn delay={100}>
          <div className="mt-8 flex flex-wrap gap-2">
            <button onClick={() => setActiveFilter(null)} className={`inline-flex items-center rounded-full px-3.5 py-1.5 text-xs font-medium transition-colors ${activeFilter === null ? "bg-primary text-primary-foreground" : "border border-primary/30 bg-primary/5 text-primary hover:bg-primary/10"}`}>
              Tous
            </button>
            {allTags.map((tag) => (
              <button key={tag} onClick={() => setActiveFilter(tag === activeFilter ? null : tag)} className={`inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs font-medium transition-colors ${tag === activeFilter ? "bg-primary text-primary-foreground" : "border border-primary/30 bg-primary/5 text-primary hover:bg-primary/10"}`}>
                <span className="h-2 w-2 rounded-full shrink-0" style={{ backgroundColor: techColors[tag] || "var(--primary)" }} aria-hidden="true" />
                {tag}
              </button>
            ))}
          </div>
        </FadeIn>

        {/* Project grid */}
        <FadeIn delay={200}>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filtered.map((project) => (
              <article
                key={project.title}
                className="group relative flex cursor-pointer flex-col overflow-hidden rounded-xl border border-border bg-card transition-all hover:border-primary/30 hover:shadow-sm"
                onClick={() => setSelectedProject(project)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setSelectedProject(project);
                  }
                }}
                aria-label={`Voir les details du projet ${project.title}`}
              >
                {/* Image */}
                <div className="relative h-44 bg-muted/50">
                  {project.images.length > 0 ? (
                    <img src={project.images[0]} alt={`Apercu du projet ${project.title}`} className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" />
                  ) : (
                    <div className="flex h-full items-center justify-center">
                      <span className="text-sm text-muted-foreground">Apercu</span>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="text-base font-semibold text-foreground">{project.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground line-clamp-2">{project.description}</p>

                  {/* Bottom row: code link + stack badges */}
                  <div className="mt-4 flex items-end justify-between">
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground transition-colors hover:text-primary" onClick={(e) => e.stopPropagation()}>
                      <Github className="h-4 w-4" />
                      Code
                    </a>
                    <div className="flex flex-wrap justify-end gap-1">
                      {project.tags.slice(0, 3).map((tag) => (
                        <span key={tag} className="inline-flex items-center gap-1 rounded-full border border-border bg-secondary px-2 py-0.5 text-[10px] font-medium text-muted-foreground">
                          <span className="h-1.5 w-1.5 rounded-full shrink-0" style={{ backgroundColor: techColors[tag] || "var(--primary)" }} aria-hidden="true" />
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </FadeIn>
      </div>

      {/* Modal */}
      {selectedProject && <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />}
    </section>
  );
}
