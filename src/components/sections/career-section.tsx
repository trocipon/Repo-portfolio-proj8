import { GraduationCap, Briefcase } from "lucide-react";
import { FadeIn } from "@/src/components/ui/fade-in";

const timeline = [
  {
    type: "work" as const,
    title: "Developpeur Front-End",
    organization: "Entreprise Tech",
    period: "2024 - Present",
    description: "Developpement d'interfaces utilisateur avec React et TypeScript. Collaboration etroite avec l'equipe design pour implementer des composants accessibles et performants.",
    tags: ["React", "TypeScript", "Tailwind CSS"],
    image: "/images/career-tech.jpg",
  },
  {
    type: "work" as const,
    title: "Developpeur Web Junior",
    organization: "Agence Digitale",
    period: "2022 - 2024",
    description: "Integration de maquettes Figma, developpement de sites responsive et maintenance d'applications web existantes. Initiation aux pratiques d'accessibilite.",
    tags: ["HTML/CSS", "JavaScript", "React"],
    image: "/images/career-agency.jpg",
  },
  {
    type: "education" as const,
    title: "Formation Developpeur Web",
    organization: "Ecole du Numerique",
    period: "2021 - 2022",
    description: "Formation intensive en developpement web full-stack avec specialisation front-end. Projets pratiques et certifications en HTML, CSS, JavaScript et React.",
    tags: ["HTML/CSS", "JavaScript", "React", "Node.js"],
    image: "/images/career-school.jpg",
  },
  {
    type: "education" as const,
    title: "Baccalaureat",
    organization: "Lycee",
    period: "2020 - 2021",
    description: "Obtention du baccalaureat avec mention. Decouverte de la programmation et premiers projets personnels.",
    tags: ["Informatique", "Mathematiques"],
    image: "/images/career-bac.jpg",
  },
];

export function CareerSection() {
  return (
    <section id="parcours" className="bg-secondary/50 px-6 py-24" aria-label="Mon parcours">
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <div className="mb-4 text-sm font-medium uppercase tracking-widest text-primary">Parcours</div>
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">Mon chemin professionnel</h2>
        </FadeIn>

        <FadeIn delay={200}>
          <div className="mt-12 flex flex-col gap-10">
            {timeline.map((item, index) => {
              const isEven = index % 2 === 0;
              return (
                <div key={item.title} className={`flex flex-col gap-6 md:flex-row md:items-center ${isEven ? "" : "md:flex-row-reverse"}`}>
                  {/* Watermark image */}
                  <div className="hidden md:block md:w-2/5">
                    <div className="relative h-48 overflow-hidden rounded-xl opacity-20">
                      <img src={item.image} alt="" className="absolute inset-0 h-full w-full object-cover" aria-hidden="true" />
                    </div>
                  </div>

                  {/* Timeline dot */}
                  <div className="hidden md:flex md:flex-col md:items-center md:w-12">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-primary bg-background">{item.type === "work" ? <Briefcase className="h-4 w-4 text-primary" /> : <GraduationCap className="h-4 w-4 text-primary" />}</div>
                    {index < timeline.length - 1 && <div className="mt-2 h-full w-px bg-border" aria-hidden="true" />}
                  </div>

                  {/* Card */}
                  <div className="flex-1 md:w-2/5">
                    <div className="rounded-xl border border-border bg-card p-6">
                      {/* Mobile icon */}
                      <div className="mb-3 flex items-center gap-3 md:hidden">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-primary bg-background">{item.type === "work" ? <Briefcase className="h-3.5 w-3.5 text-primary" /> : <GraduationCap className="h-3.5 w-3.5 text-primary" />}</div>
                        <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">{item.period}</span>
                      </div>

                      <span className="hidden rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary md:inline-flex">{item.period}</span>
                      <h3 className="mt-3 text-base font-semibold text-foreground">{item.title}</h3>
                      <p className="text-sm text-primary">{item.organization}</p>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
                      <div className="mt-3 flex flex-wrap gap-1.5">
                        {item.tags.map((tag) => (
                          <span key={tag} className="rounded bg-muted px-2 py-0.5 text-[11px] font-medium text-muted-foreground">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
