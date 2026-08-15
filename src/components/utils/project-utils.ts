import data from "../../data/data.json";
import { normalizeKey, normalizedIconSlugs, missingIcons } from "./shared-utils";

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
  type: "pédagogique" | "professionnel" | "personnel"; // Added type field to differentiate project categories
}

const PLACEHOLDER_ICON_URL = "/images/placeholder-icon.svg";

export function getIconUrl(name: string): string | null {
  const key = normalizeKey(name);
  const slug = normalizedIconSlugs[key];

  if (!slug) {
    missingIcons.add(name);
    console.warn(`Icône manquante pour: ${name}`);
    return null;
  }
  return `https://cdn.simpleicons.org/${slug}`;
}

export const projects: Project[] = (data as any).projects as Project[];

export const allTags = Array.from(new Set(projects.flatMap((p) => p.tags))).sort();
