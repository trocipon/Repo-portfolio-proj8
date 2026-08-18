import { Briefcase, GraduationCap } from "../utils/icons";
import { TagPill } from "../ui/tag-pill";

export interface CareerItem {
  type: "work" | "education";
  title: string;
  organization: string;
  period: string;
  description: string;
  tags: string[];
  image: string;
  imagePosition?: "top";
}

export function CareerCard({ item }: { item: CareerItem }) {
  return (
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
        <p className="mt-2 text-sm leading-relaxed text-foreground/80">{item.description}</p>
        <div className="mt-3 flex flex-wrap gap-1.5">
          {item.tags.map((tag) => (
            <TagPill key={tag} name={tag} />
          ))}
        </div>
      </div>
    </div>
  );
}
