import { ContactForm } from "../features/contact-form";
import { ContactInfo } from "../features/contact-info";

export function ContactSection() {
  return (
    <section id="contact" tabIndex={-1} className="bg-secondary/50 px-4 py-8 sm:px-6 md:py-12 lg:py-16" aria-label="Me contacter">
      <div className="mx-auto max-w-6xl">
        <div className="mb-4 flex justify-center sm:justify-start">
          <span className="rounded-full bg-foreground px-3 py-1 text-xs font-bold uppercase tracking-widest text-background">Contact</span>
        </div>
        <h2 className="text-balance text-center text-3xl font-bold tracking-tight text-foreground sm:text-left md:text-4xl lg:text-5xl">Travaillons ensemble !</h2>
        <p className="mt-4 max-w-2xl text-center text-sm leading-relaxed text-foreground/80 sm:text-left sm:text-base">N'hésitez pas à me contacter via le formulaire ci-dessous ou sur mes réseaux.</p>
        <div className="mt-8 md:mt-12 grid gap-8 md:gap-12 grid-cols-1 lg:grid-cols-3">
          <ContactForm />
          <ContactInfo />
        </div>
      </div>
    </section>
  );
}
