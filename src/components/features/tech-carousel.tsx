import { useRef, useEffect } from "react";
import { techBadgesWithIcons } from "../utils/techbadges";

export function TechCarousel() {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | null>(null);
  const speedRef = useRef(0.5);
  const halfWidthRef = useRef(1);
  const isRunningRef = useRef(true);

  useEffect(() => {
    const container = containerRef.current;
    const content = contentRef.current;
    if (!container || !content) return;

    // Utiliser ResizeObserver pour éviter de lire scrollWidth à chaque frame
    const resizeObserver = new ResizeObserver(() => {
      halfWidthRef.current = content.scrollWidth / 2;
    });

    resizeObserver.observe(content);
    // Initial calculation
    halfWidthRef.current = content.scrollWidth / 2;

    let currentTranslate = 0;

    // Animation directe du DOM sans setState pour éviter les re-renders forcés
    function animate() {
      if (!content) return;
      if (isRunningRef.current) {
        currentTranslate -= speedRef.current;
        // Reset to create seamless loop
        if (Math.abs(currentTranslate) >= halfWidthRef.current) {
          currentTranslate = 0;
        }
        content.style.transform = `translateX(${currentTranslate}px)`;
      }
      animationRef.current = requestAnimationFrame(animate);
    }

    animationRef.current = requestAnimationFrame(animate);

    // Event listeners pour pause/resume
    const handleMouseEnter = () => {
      isRunningRef.current = false;
      if (content) content.style.willChange = "auto";
    };
    const handleMouseLeave = () => {
      isRunningRef.current = true;
      if (content) content.style.willChange = "transform";
    };

    container.addEventListener("mouseenter", handleMouseEnter);
    container.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
      resizeObserver.disconnect();
      container.removeEventListener("mouseenter", handleMouseEnter);
      container.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  // Duplicate badges for seamless loop
  const allBadges = [...techBadgesWithIcons, ...techBadgesWithIcons];

  return (
    <div ref={containerRef} className="mt-8 overflow-hidden" role="marquee" aria-label="Technologies maitrisees" style={{ contain: "layout style paint" }}>
      <div
        ref={contentRef}
        className="flex gap-3"
        style={{
          willChange: "transform",
          backfaceVisibility: "hidden",
          perspective: 1000,
        }}
      >
        {allBadges.map((tech, i) => (
          <a
            key={`${tech.name}-${i}`}
            href="#projets"
            className="group inline-flex shrink-0 items-center gap-2.5 rounded-full border border-border bg-card px-4 py-2 transition-all hover:border-primary/40 hover:shadow-sm"
            style={{ contain: "content" }}
            onClick={(e) => {
              e.preventDefault();
              const target = document.getElementById("projets");
              if (target) {
                target.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            {/* Suppression complète de l'image pour CSS */}
            {tech.name !== "CSS" && tech.iconUrl ? <img src={tech.iconUrl} alt={`${tech.name} icon`} width="16" height="16" className="h-4 w-4" style={{ contain: "strict", flexShrink: 0 }} loading="lazy" decoding="async" /> : null}
            <span className="whitespace-nowrap text-sm font-medium text-foreground/70 transition-colors group-hover:text-foreground">{tech.name}</span>
          </a>
        ))}
      </div>
    </div>
  );
}
