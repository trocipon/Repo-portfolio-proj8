import data from "../../data/data.json";

export interface Project {
  title: string;
  year: string;
  introduction: string;
  description: {
    context: string;
    objectives: string;
    skillsDeveloped: string;
    results: string;
    deliverables?: string;
    improvements: string;
  };
  tags: string[];
  githubUrl: string;
  images: string[];
  featured?: boolean;
  duration: string;
  liveDemoUrl?: string;
  beforeUrl?: string;
  documents?: { label: string; url: string }[];
  type: "pédagogique" | "professionnel" | "personnel"; // Added type field to differentiate project categories
}

export const projects: Project[] = (data as any).projects as Project[];

export const allTags = Array.from(new Set(projects.flatMap((p) => p.tags))).sort();
