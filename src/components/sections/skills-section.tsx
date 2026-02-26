import { useRef, useEffect, useState } from "react";
import { Globe, Search, Accessibility, Gauge, Smartphone, Paintbrush, Code2, Palette, Zap, ChevronDown } from "lucide-react";
import { FadeIn } from "@/src/components/ui/fade-in";

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
    title: "Développement Web",
    description: "Création de sites vitrines, portfolios et applications web modernes.",
  },
  {
    icon: Paintbrush,
    title: "Intégration UI",
    description: "Traduction pixel-perfect de maquettes Figma en composants React réutilisables.",
  },
  {
    icon: Gauge,
    title: "Optimisation et performance",
    description: "Optimisation des performances : lazy loading, code splitting, bonnes pratiques pour des sites rapides.",
  },
  {
    icon: Zap,
    title: "Performance",
    description: "Optimisation, lazy loading, code splitting et bonnes pratiques pour de meilleures performances.",
  },
  {
    icon: Code2,
    title: "Code propre",
    description: "J'écris un code lisible, maintenable et structuré selon les bonnes pratiques de développement.",
  },
  {
    icon: Palette,
    title: "Design soigné",
    description: "Je crée des interfaces esthétiques et fonctionnelles, en traduisant fidèlement les maquettes.",
  },
  {
    icon: Search,
    title: "Référencement SEO",
    description: "Optimisation technique pour le référencement naturel : balises, structure, meta, performance.",
  },
  {
    icon: Accessibility,
    title: "Accessibilité",
    description: "Mise en conformité WCAG AA : navigation clavier, lecteurs d'écran, contrastes, aria.",
  },
  {
    icon: Smartphone,
    title: "Responsive Design",
    description: "Interfaces adaptatives pour tous les écrans : mobile, tablette, desktop.",
  },
];

function CollapsibleCard({ icon: Icon, title, description }: { icon: React.ComponentType<{ className?: string }>; title: string; description: string }) {
  const [open, setOpen] = useState(false);

  return (
    <button type="button" onClick={() => setOpen((s) => !s)} className="group w-full rounded-xl border border-border bg-card p-6 text-left transition-all hover:border-primary/30 hover:shadow-sm" aria-expanded={open}>
      <div className="flex items-center gap-4">
        <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary/15">
          <Icon className="h-5 w-5" />
        </div>
        <h3 className="flex-1 text-sm font-semibold text-foreground">{title}</h3>
        <ChevronDown className={`h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
      </div>
      <div className={`mt-3 overflow-hidden transition-all duration-300 ${open ? "max-h-40 opacity-100" : "max-h-0 opacity-0"}`}>
        <p className="text-sm leading-relaxed text-muted-foreground">{description}</p>
      </div>
    </button>
  );
}

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

        {/* Service cards (collapsible) */}
        <FadeIn delay={200}>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <CollapsibleCard key={service.title} icon={service.icon} title={service.title} description={service.description} />
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
