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
