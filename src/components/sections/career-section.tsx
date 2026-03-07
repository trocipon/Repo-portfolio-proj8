import { GraduationCap, Briefcase } from "../utils/icons";
import { FadeIn } from "../ui/fade-in";
import data from "../../data/data.json";
import { CareerCard } from "../features/career-card";

export function CareerSection() {
  const timeline = (data as any).career.timeline;

  return (
    <section id="parcours" tabIndex={-1} className="bg-secondary/50 px-4 py-24" aria-label="Mon parcours">
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <div className="mb-4 text-sm font-medium uppercase tracking-widest text-primary">Parcours</div>
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">Mon chemin professionnel</h2>
        </FadeIn>

        <FadeIn delay={200}>
          <div className="mt-12 flex flex-col gap-10">
            {timeline.map((item: any, index: number) => {
              const isEven = index % 2 === 0;
              return (
                <div key={item.title} className={`flex flex-col gap-6 md:flex-row md:items-center ${isEven ? "" : "md:flex-row-reverse"}`}>
                  {/* Watermark image */}
                  <div className="hidden md:block md:w-2/5">
                    <div className="relative h-48 overflow-hidden rounded-xl opacity-20">
                      <img src={item.image} alt="" className="absolute inset-0 h-full w-full object-cover" aria-hidden="true" style={{ contain: "content" }} />
                    </div>
                  </div>

                  {/* Timeline dot */}
                  <div className="hidden md:flex md:flex-col md:items-center md:w-12">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-primary bg-background">{item.type === "work" ? <Briefcase className="h-4 w-4 text-primary" /> : <GraduationCap className="h-4 w-4 text-primary" />}</div>
                    {index < timeline.length - 1 && <div className="mt-2 h-full w-px bg-border" aria-hidden="true" />}
                  </div>

                  <CareerCard item={item} />
                </div>
              );
            })}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
