"use client"

import { Quote } from "lucide-react"
import { FadeIn } from "@/components/fade-in"

const testimonials = [
  {
    quote: "Thibaud a fait un travail remarquable sur notre refonte web. Son sens du detail, sa rigueur technique et sa capacite a proposer des solutions elegantes ont fait la difference. Il a su comprendre nos besoins et livrer une interface moderne et performante dans les delais.",
    author: "Marie Durand",
    role: "Directrice Produit",
    company: "Entreprise Tech",
  },
  {
    quote: "Collaborer avec Thibaud a ete un vrai plaisir. Il maitrise parfaitement React et Tailwind CSS, et sait traduire une maquette Figma en une interface pixel-perfect. Son engagement pour l'accessibilite et la qualite du code en fait un atout precieux pour toute equipe.",
    author: "Lucas Martin",
    role: "Lead Designer",
    company: "Agence Digitale",
  },
]

export function TestimonialsSection() {
  return (
    <section
      id="temoignages"
      className="px-6 py-24"
      aria-label="Temoignages"
    >
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <div className="mb-4 text-sm font-medium uppercase tracking-widest text-primary">
            Temoignages
          </div>
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Ce que disent mes collaborateurs
          </h2>
        </FadeIn>

        <FadeIn delay={200}>
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {testimonials.map((testimonial) => (
              <blockquote
                key={testimonial.author}
                className="relative flex flex-col rounded-2xl border border-border bg-card p-8"
              >
                {/* Quote icon */}
                <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                  <Quote className="h-5 w-5 text-primary" />
                </div>

                {/* Quote text */}
                <p className="flex-1 text-base leading-relaxed text-foreground italic">
                  {`"${testimonial.quote}"`}
                </p>

                {/* Author */}
                <footer className="mt-6 flex items-center gap-4 border-t border-border pt-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/15 text-sm font-bold text-primary">
                    {testimonial.author.split(" ").map((n) => n[0]).join("")}
                  </div>
                  <div>
                    <cite className="not-italic text-sm font-semibold text-foreground">
                      {testimonial.author}
                    </cite>
                    <p className="text-xs text-muted-foreground">
                      {testimonial.role} - {testimonial.company}
                    </p>
                  </div>
                </footer>

                {/* Decorative large quote mark */}
                <div className="pointer-events-none absolute right-6 top-6 text-6xl font-serif text-primary/5 select-none" aria-hidden="true">
                  {"\u201D"}
                </div>
              </blockquote>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
