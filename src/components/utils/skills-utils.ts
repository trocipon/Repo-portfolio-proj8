import { Monitor, Zap, Server, Gauge, Rocket, Kanban } from "./icons";
import data from "../../data/data.json";

// Mapping des noms vers les fichiers SVG locaux
const iconSlugs: Record<string, string> = {
  html5: "/images/icons/html5.svg",
  css3: "/images/icons/css3.svg",
  javascript: "/images/icons/javascript.svg",
  typescript: "/images/icons/typescript.svg",
  react: "/images/icons/react.svg",
  vite: "/images/icons/vite.svg",
  sass: "/images/icons/sass.svg",
  tailwindcss: "/images/icons/tailwindcss.svg",
  nodedotjs: "/images/icons/nodejs.svg",
  express: "/images/icons/express.svg",
  mongodb: "/images/icons/mongodb.svg",
  git: "/images/icons/git.svg",
  figma: "/images/icons/figma.svg",
  lighthouse: "/images/icons/lighthouse.svg",
};

const PLACEHOLDER_ICON_URL = "/images/placeholder-icon.svg"; // Icône par défaut

// Fonction pour récupérer l'URL de l'icône
export function getIconUrlSkill(name: string): string {
  const key = name.replace(/\s+/g, "").replace(/&/g, "and").toLowerCase();
  return iconSlugs[key] || PLACEHOLDER_ICON_URL;
}

// Mapping des catégories vers des composants React
export const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  "Développement Front-End moderne": Monitor,
  "Interactivité et API": Zap,
  "Développement Back-End sécurisé": Server,
  "Performance, accessibilité et qualité": Gauge,
  "Déploiement & environnement": Rocket,
  "Méthodologie et gestion de projet": Kanban,
};

// Réexporter techBadges depuis data.json
export const techBadges = (data as any).skills.techBadges as { name: string }[];
