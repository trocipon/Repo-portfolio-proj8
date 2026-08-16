import { FadeIn } from "@/components/ui/fade-in";
import data from "@/data/data.json";
import { TestimonialCard } from "@/components/ui/testimonial-card";

export function TestimonialsSection() {
  const testimonials = (data as any).testimonials;

  return (
    <section id="temoignages" tabIndex={-1} className="px-4 py-8 sm:px-6 md:py-12 lg:py-16" aria-label="Temoignages">
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <div className="mb-4 flex justify-center sm:justify-start">
            <span className="rounded-full bg-foreground px-3 py-1 text-xs font-bold uppercase tracking-widest text-background">Témoignages</span>
          </div>
          <h2 className="text-balance text-center text-3xl font-bold tracking-tight text-foreground sm:text-left md:text-4xl lg:text-5xl">Ce que disent mes collaborateurs</h2>
        </FadeIn>

        <FadeIn delay={200}>
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {testimonials.map((testimonial: any) => (
              <TestimonialCard key={testimonial.author} testimonial={testimonial} />
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
