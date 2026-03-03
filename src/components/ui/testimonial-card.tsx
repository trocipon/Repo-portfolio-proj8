import { Quote } from "../utils/icons";

interface Testimonial {
  author: string;
  quote: string;
  role: string;
  company: string;
}

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <blockquote className="relative flex flex-col rounded-2xl border border-border bg-card p-8 md:col-span-2">
      {/* Quote icon */}
      <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
        <Quote className="h-5 w-5 text-primary" />
      </div>

      {/* Quote text */}
      <p className="flex-1 text-base leading-relaxed text-foreground italic">{`"${testimonial.quote}"`}</p>

      {/* Author */}
      <footer className="mt-6 flex items-center gap-4 border-t border-border pt-6">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/15 text-sm font-bold text-primary">
          {testimonial.author
            .split(" ")
            .map((n: string) => n[0])
            .join("")}
        </div>
        <div>
          <cite className="not-italic text-sm font-semibold text-foreground">{testimonial.author}</cite>
          <p className="text-xs text-foreground/80">
            {testimonial.role} - {testimonial.company}
          </p>
        </div>
      </footer>

      {/* Decorative large quote mark */}
      <div className="pointer-events-none absolute right-6 top-6 text-6xl font-sans text-primary/5 select-none" aria-hidden="true">
        {"\u201D"}
      </div>
    </blockquote>
  );
}
