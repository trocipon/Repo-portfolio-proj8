import React from "react";
import { techBadgesWithIcons } from "../utils/techbadges";

interface FilterProps {
  options: string[];
  activeFilter: string | null;
  onFilterChange: (filter: string | null) => void;
}

export const Filter: React.FC<FilterProps> = ({
  options,
  activeFilter,
  onFilterChange,
}) => {
  return (
    <div
      className="flex flex-wrap gap-2 mb-4"
      role="group"
      aria-label="Filtrer les projets par technologie"
    >
      {options.map((option) => {
        const badge = techBadgesWithIcons.find(
          (badge) => badge.name === option
        );

        const isActive = activeFilter === option;

        return (
          <button
            key={option}
            type="button"
            aria-pressed={isActive}
            onClick={() => onFilterChange(option)}
            className={`
              group inline-flex shrink-0 items-center gap-2.5 
              rounded-full border px-4 py-2 text-sm font-medium 
              transition-all
              focus:outline-none focus-visible:ring-2 
              focus-visible:ring-primary focus-visible:ring-offset-2
              active:scale-95
              ${
                isActive
                  ? "bg-primary text-white border-primary"
                  : "bg-card text-muted-foreground border-border hover:border-primary hover:bg-emerald-100"
              }
            `}
          >
            {badge?.iconUrl && (
              <img
                src={badge.iconUrl}
                alt=""
                aria-hidden="true"
                className="h-4 w-4"
                loading="lazy"
                decoding="async"
              />
            )}
            {option}
          </button>
        );
      })}
    </div>
  );
};