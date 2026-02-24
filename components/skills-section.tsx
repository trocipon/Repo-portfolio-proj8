"use client";

import { useRef, useEffect, useState } from "react";
import { Globe, Search, Accessibility, Gauge, Smartphone, Paintbrush } from "lucide-react";
import { FadeIn } from "@/components/fade-in";

const techBadges = [
  { name: "HTML5", color: "#E34F26" },
  { name: "CSS3", color: "#1572B6" },
  { name: "JavaScript", color: "#F7DF1E" },
  { name: "TypeScript", color: "#3178C6" },
  { name: "React", color: "#61DAFB" },
  { name: "Tailwind CSS", color: "#06B6D4" },
  { name: "Sass", color: "#CC6699" },
  { name: "Node.js", color: "#339933" },
  { name: "Git", color: "#F05032" },
  { name: "Figma", color: "#F24E1E" },
  { name: "Framer Motion", color: "#0055FF" },
  { name: "Vite", color: "#646CFF" },
  { name: "REST API", color: "#009688" },
  { name: "Recharts", color: "#22B5BF" },
  { name: "MDX", color: "#FCB32C" },
];

const services = [
  {
    icon: Globe,
    title: "Developpement Web",
    description: "Creation de sites vitrines, portfolios et applications web modernes avec React.",
  },
  {
    icon: Search,
    title: "Referencement SEO",
    description: "Optimisation technique pour le referencement naturel : balises, structure, meta, performance.",
  },
  {
    icon: Accessibility,
    title: "Accessibilite",
    description: "Mise en conformite WCAG AA : navigation clavier, lecteurs d'ecran, contrastes, aria.",
  },
  {
    icon: Gauge,
    title: "Optimisation",
    description: "Amelioration des Core Web Vitals, lazy loading, code splitting et mise en cache.",
  },
  {
    icon: Smartphone,
    title: "Responsive Design",
    description: "Interfaces adaptatives pour tous les ecrans : mobile, tablette, desktop.",
  },
  {
    icon: Paintbrush,
    title: "Integration UI",
    description: "Traduction pixel-perfect de maquettes Figma en composants React reutilisables.",
  },
];

function TechCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const animationRef = useRef<number | null>(null);
  const scrollPosRef = useRef(0);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const speed = 0.5;
    const totalWidth = el.scrollWidth / 2;

    function animate() {
      if (!isPaused) {
        scrollPosRef.current += speed;
        if (scrollPosRef.current >= totalWidth) {
          scrollPosRef.current = 0;
        }
        if (el) {
          el.scrollLeft = scrollPosRef.current;
        }
      }
      animationRef.current = requestAnimationFrame(animate);
    }

    animationRef.current = requestAnimationFrame(animate);
    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [isPaused]);

  // Duplicate badges for seamless loop
  const allBadges = [...techBadges, ...techBadges];

  return (
    <div ref={scrollRef} className="mt-8 flex gap-3 overflow-hidden" onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)} role="marquee" aria-label="Technologies maitrisees">
      {allBadges.map((tech, i) => (
        <a key={`${tech.name}-${i}`} href="#projets" className="group inline-flex shrink-0 items-center gap-2.5 rounded-full border border-border bg-card px-4 py-2 transition-all hover:border-primary/40 hover:shadow-sm">
          <span className="h-3 w-3 rounded-full shrink-0 transition-transform group-hover:scale-125" style={{ backgroundColor: tech.color }} aria-hidden="true" />
          <span className="whitespace-nowrap text-sm font-medium text-foreground/70 transition-colors group-hover:text-foreground">{tech.name}</span>
        </a>
      ))}
    </div>
  );
}

export function SkillsSection() {
  return (
    <section id="competences" className="bg-secondary/50 px-6 py-24" aria-label="Competences techniques">
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <div className="mb-4 text-sm font-medium uppercase tracking-widest text-primary">Competences</div>
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">Mon expertise technique</h2>
        </FadeIn>

        {/* Tech carousel */}
        <FadeIn delay={100}>
          <TechCarousel />
        </FadeIn>

        {/* Service cards */}
        <FadeIn delay={200}>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div key={service.title} className="group rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/30 hover:shadow-sm">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary/15">
                  <service.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-sm font-semibold text-foreground">{service.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{service.description}</p>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
