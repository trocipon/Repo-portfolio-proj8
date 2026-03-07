import { useState } from "react";
import { Monitor, Zap, Server, Gauge, Rocket, Kanban } from "../utils/icons";
import "../../styles/flip-card.css";

interface FlipCardProps {
  title: string;
  description: string;
  className?: string;
}

export function FlipCard({ title, description, className = "" }: FlipCardProps) {
  const [flipped, setFlipped] = useState(false);

  const Icon = {
    "Développement Front-End moderne": Monitor,
    "Interactivité et API": Zap,
    "Développement Back-End sécurisé": Server,
    "Performance, accessibilité et qualité": Gauge,
    "Déploiement & environnement": Rocket,
    "Méthodologie et gestion de projet": Kanban,
  }[title];

  return (
    <div
      className={`flip-card ${className}`}
      onClick={() => setFlipped((f) => !f)}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          setFlipped((f) => !f);
        }
      }}
      tabIndex={0}
      role="button"
      style={{ perspective: "1000px" }}
    >
      <div className={`flip-card-inner${flipped ? " flipped" : ""}`}>
        <div className="flip-card-face flip-card-front">
          {Icon && (
            <div className="flex h-12 w-12 mb-4 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <Icon className="h-6 w-6" />
            </div>
          )}
          <h3 className="text-sm font-semibold text-foreground text-center">{title}</h3>
        </div>
        <div className="flip-card-face flip-card-back">
          <p className="text-sm leading-relaxed text-foreground/80 text-center">{description}</p>
        </div>
      </div>
    </div>
  );
}
