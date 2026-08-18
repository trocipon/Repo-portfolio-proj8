import data from "../../data/data.json";
import { getIconUrl } from "./shared-utils";

export const techBadges = data.skills.techBadges as { name: string }[];

// Suppression de l'icône pour CSS dans le carrousel
export const techBadgesWithIcons = techBadges.map((tech) => ({
  name: tech.name,
  iconUrl: getIconUrl(tech.name),
}));
