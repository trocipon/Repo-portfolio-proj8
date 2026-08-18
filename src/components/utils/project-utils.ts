import data from "../../data/data.json";

export interface Project {
  title: string;
  year: number;
  introduction: string;
  description: {
    context: string;
    objectives: string | string[];
    skillsDeveloped: string | string[];
    results: string | string[];
    deliverables?: string;
    improvements: string;
  };
  tags: string[];
  githubUrl: string;
  images: string[];
  featured?: boolean;
  liveDemoUrl?: string;
  beforeUrl?: string;
  documents?: { label: string; url: string }[];
  type: "pédagogique" | "professionnel" | "personnel"; // Added type field to differentiate project categories
}

export const projects: Project[] = data.projects as Project[];

export const allTags = Array.from(new Set(projects.flatMap((p) => p.tags))).sort();

// Partagé entre project-card.tsx et project-modal.tsx : même code couleur/
// emoji par type de projet des deux côtés, une seule source à maintenir.
export const projectTypeBadgeStyles: Record<Project["type"], string> = {
  "pédagogique": "border-blue-500/30 bg-blue-500/10",
  "professionnel": "border-violet-500/30 bg-violet-500/10",
  "personnel": "border-amber-500/30 bg-amber-500/10",
};

export const projectTypeEmoji: Record<Project["type"], string> = {
  "pédagogique": "🎓",
  "professionnel": "💼",
  "personnel": "🌟",
};
