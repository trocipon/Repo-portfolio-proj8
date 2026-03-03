import { ContactForm } from "../features/contact-form";
import { ContactInfo } from "../features/contact-info";

export function ContactSection() {
  return (
    <section id="contact" className="bg-secondary/50 px-4 py-8 sm:px-6 md:py-12 lg:py-16" aria-label="Me contacter">
      <div className="mx-auto max-w-6xl">
        <div className="mb-4 text-sm font-medium uppercase tracking-widest text-primary">Contact</div>
        <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">Travaillons ensemble !</h2>
        <p className="mt-4 max-w-2xl text-sm sm:text-base leading-relaxed text-foreground/80">N'hésitez pas à me contacter via le formulaire ci-dessous ou sur mes réseaux.</p>
        <div className="mt-8 md:mt-12 grid gap-8 md:gap-12 grid-cols-1 lg:grid-cols-3">
          <ContactForm />
          <ContactInfo />
        </div>
      </div>
    </section>
  );
}
