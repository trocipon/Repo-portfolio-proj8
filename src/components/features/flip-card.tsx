import { DesignServices, Insights, Monitor, Search } from "../utils/icons";
import { TagPill } from "../ui/tag-pill";

interface FlipCardProps {
  title: string;
  description: string;
  techBadges?: string[];
  className?: string;
}

const iconByTitle = {
  "UX — Recherche & structuration": Search,
  "UI — Design & prototypage": DesignServices,
  "Culture produit & business": Insights,
  "Culture technique & développement": Monitor,
};

export function FlipCard({ title, description, techBadges = [], className = "" }: FlipCardProps) {
  const Icon = iconByTitle[title as keyof typeof iconByTitle];

  return (
    <div className={`flex flex-col items-center rounded-xl border border-border bg-card p-6 text-center ${className}`}>
      {Icon && (
        <div className="flex h-12 w-12 mb-4 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
          <Icon className="h-6 w-6" />
        </div>
      )}
      <h3 className="text-base font-semibold text-foreground">{title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-foreground/80">{description}</p>

      {techBadges.length > 0 && (
        <div className="mt-4 flex flex-wrap justify-center gap-1.5">
          {techBadges.map((name) => (
            <TagPill key={name} name={name} />
          ))}
        </div>
      )}
    </div>
  );
}
