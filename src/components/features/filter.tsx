import React from "react";
import { techBadgesWithIcons } from "../utils/techbadges";

interface FilterProps {
  options: string[];
  activeFilter: string | null;
  onFilterChange: (filter: string | null) => void;
}

export const Filter: React.FC<FilterProps> = ({ options, activeFilter, onFilterChange }) => {
  return (
    <div className="flex flex-wrap gap-2 mb-4">
      {options.map((option) => {
        const badge = techBadgesWithIcons.find((badge) => badge.name === option);
        return (
          <button key={option} className={`group inline-flex shrink-0 items-center gap-2.5 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium transition-all cursor-pointer hover:border-emerald-500 hover:bg-emerald-100 hover:shadow-md active:scale-95 ${activeFilter === option ? "bg-emerald-500 text-white" : "bg-white text-foreground/70"}`} onClick={() => onFilterChange(option)}>
            {badge?.iconUrl && <img src={badge.iconUrl} alt={`${badge.name} icon`} className="h-4 w-4" loading="lazy" decoding="async" />}
            {option}
          </button>
        );
      })}
    </div>
  );
};
