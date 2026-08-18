import type { ComponentType } from "react";
import { techBadgesWithIcons } from "./tech-badges";
import { Search, People, Blueprint, Journey, Flow, Kpi, Priority, Wireframe, Prototype, Accessibility, Security, TrendingUp, Schema, Kanban, Speed, AuditCheck } from "./icons";

// Concepts méthodo/process qui n'ont pas de logo de marque (donc pas d'entrée
// Simple Icons) mais qui méritent tout de même un pictogramme pour rester
// lisibles au même titre que les outils dans les cards projets/compétences/parcours.
// Volontairement sélectif : seuls les concepts qui reviennent sur plusieurs
// fiches ou qui sont de vrais différenciateurs (a11y, sécurité, perf) sont
// couverts, pour ne pas diluer le système en icônifiant chaque tag.
export const conceptIcons: Record<string, ComponentType<{ className?: string }>> = {
  "Recherche utilisateur": Search,
  Personas: People,
  "Service Blueprint": Blueprint,
  "Customer Journey Map": Journey,
  "User flows": Flow,
  KPI: Kpi,
  Priorisation: Priority,
  Wireframing: Wireframe,
  Prototypage: Prototype,
  Accessibilité: Accessibility,
  Performance: Speed,
  Sécurité: Security,
  "Optimisation SEO": TrendingUp,
  "Modélisation de données": Schema,
  Kanban: Kanban,
  // WAVE (webaim.org) n'a pas de logo dans Simple Icons : pictogramme dédié
  // (plutôt que de réutiliser celui d'Accessibilité, pour ne pas créer deux
  // badges visuellement identiques avec des libellés différents).
  Wave: AuditCheck,
};

export type TagVisual = { kind: "brand"; iconUrl: string } | { kind: "concept"; Icon: ComponentType<{ className?: string }> } | { kind: "none" };

export function getTagVisual(name: string): TagVisual {
  const brand = techBadgesWithIcons.find((badge) => badge.name === name);
  if (brand?.iconUrl) return { kind: "brand", iconUrl: brand.iconUrl };

  const Icon = conceptIcons[name];
  if (Icon) return { kind: "concept", Icon };

  return { kind: "none" };
}
