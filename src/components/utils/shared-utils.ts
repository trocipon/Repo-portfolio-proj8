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
};

export function normalizeKey(s: string): string {
  return s.replace(/\s+/g, "").replace(/&/g, "and").toLowerCase();
}

export const normalizedIconSlugs: Record<string, string> = Object.fromEntries(Object.entries(iconSlugs).map(([k, v]) => [normalizeKey(k), v]));

export const missingIcons = new Set<string>();

export function getIconUrl(name: string): string | null {
  const key = normalizeKey(name);
  const slug = normalizedIconSlugs[key];

  return slug ? `https://cdn.simpleicons.org/${slug}` : null;
}
