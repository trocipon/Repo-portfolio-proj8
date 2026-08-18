import { FadeIn } from "@/components/ui/fade-in";
import { SectionHeading } from "@/components/ui/section-heading";
import data from "@/data/data.json";
import { TestimonialCard, Testimonial } from "@/components/ui/testimonial-card";

export function TestimonialsSection() {
  const testimonials = data.testimonials as Testimonial[];

  return (
    <section id="temoignages" tabIndex={-1} className="px-4 py-8 sm:px-6 md:py-12 lg:py-16" aria-label="Témoignages">
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <SectionHeading badge="Témoignages" title="Ce que disent mes collaborateurs" />
        </FadeIn>

        <FadeIn delay={200}>
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.author} testimonial={testimonial} />
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
