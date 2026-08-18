import { getTagVisual } from "../utils/tag-visuals";

interface TagPillProps {
  name: string;
  size?: "sm" | "lg";
}

// Pastille de tag partagée par les cards projets, compétences et parcours :
// logo de marque (Simple Icons) si l'outil en a un, pictogramme monochrome
// (react-icons) si c'est un concept process référencé, sinon texte seul.
export function TagPill({ name, size = "sm" }: TagPillProps) {
  const visual = getTagVisual(name);
  const isLarge = size === "lg";
  const sizeClasses = isLarge ? "gap-2 px-4 py-2 text-[14px]" : "gap-1 px-2 py-0.5 text-[10px]";
  const iconClasses = isLarge ? "h-4 w-4" : "h-3 w-3";

  return (
    <span className={`inline-flex items-center rounded-full border border-border bg-secondary font-medium text-muted-foreground ${sizeClasses}`}>
      {visual.kind === "brand" && (
        <img
          src={visual.iconUrl}
          alt=""
          width="12"
          height="12"
          className={iconClasses}
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).style.display = "none";
          }}
        />
      )}
      {visual.kind === "concept" && <visual.Icon className={iconClasses} />}
      {name}
    </span>
  );
}
