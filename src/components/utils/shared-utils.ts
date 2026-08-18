// Map des noms vers les Simple Icons connus
export const iconSlugs: Record<string, string> = {
  HTML5: "html5",
  CSS3: "css",
  JavaScript: "javascript",
  TypeScript: "typescript",
  React: "react",
  Vite: "vite",
  Sass: "sass",
  "Tailwind CSS": "tailwindcss",
  Tailwind: "tailwindcss",
  "Node.js": "nodedotjs",
  "Express.js": "express",
  Express: "express",
  ExpressJS: "express",
  MongoDB: "mongodb",
  Git: "git",
  Figma: "figma",
  Lighthouse: "lighthouse",
  Notion: "notion",
  Canva: "canva",
  Miro: "miro",
  GIMP: "gimp",
  "Google Search Console": "googlesearchconsole",
  "Google Analytics": "googleanalytics",
  Claude: "claude",
  ChatGPT: "openai",
  "GitHub Copilot": "githubcopilot",
  Vercel: "vercel",
};

export function normalizeKey(s: string): string {
  return s.replace(/\s+/g, "").replace(/&/g, "and").toLowerCase();
}

export const normalizedIconSlugs: Record<string, string> = Object.fromEntries(Object.entries(iconSlugs).map(([k, v]) => [normalizeKey(k), v]));

export function getIconUrl(name: string): string | null {
  const key = normalizeKey(name);
  const slug = normalizedIconSlugs[key];

  return slug ? `https://cdn.simpleicons.org/${slug}` : null;
}

/**
 * Défile en douceur jusqu'à la section ciblée puis y déplace le focus,
 * sans laisser le focus déclencher son propre saut de scroll (preventScroll)
 * qui viendrait interrompre/écraser l'animation en cours. Point d'entrée
 * unique utilisé par tous les liens d'ancre du site (nav, boutons du hero,
 * carrousel de compétences) pour garantir un comportement identique partout.
 */
export function prefersReducedMotion(): boolean {
  return typeof window !== "undefined" && window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
}

export function scrollToSection(id: string): void {
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: prefersReducedMotion() ? "auto" : "smooth", block: "start" });
  el.focus({ preventScroll: true });
}
