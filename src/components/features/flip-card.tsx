import { DesignServices, Insights, Monitor } from "../utils/icons";
import { techBadgesWithIcons } from "../utils/techbadges";

interface FlipCardProps {
  title: string;
  description: string;
  techBadges?: string[];
  className?: string;
}

const iconByTitle = {
  "Conception UX/UI": DesignServices,
  "Culture produit & business": Insights,
  "Culture technique & développement": Monitor,
};

export function FlipCard({ title, description, techBadges = [], className = "" }: FlipCardProps) {
  const Icon = iconByTitle[title as keyof typeof iconByTitle];
  const badges = techBadgesWithIcons.filter((badge) => techBadges.includes(badge.name));

  return (
    <div className={`flex flex-col items-center rounded-xl border border-border bg-card p-6 text-center ${className}`}>
      {Icon && (
        <div className="flex h-12 w-12 mb-4 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
          <Icon className="h-6 w-6" />
        </div>
      )}
      <h3 className="text-sm font-semibold text-foreground">{title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-foreground/80">{description}</p>

      {badges.length > 0 && (
        <div className="mt-4 flex flex-wrap justify-center gap-1.5">
          {badges.map((badge) => (
            <span key={badge.name} className="inline-flex items-center gap-1 rounded-full border border-border bg-secondary px-2 py-0.5 text-[10px] font-medium text-muted-foreground">
              {badge.iconUrl && (
                <img
                  src={badge.iconUrl}
                  alt=""
                  width="12"
                  height="12"
                  className="h-3 w-3"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).style.display = "none";
                  }}
                />
              )}
              {badge.name}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
