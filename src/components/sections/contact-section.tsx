import { ContactForm } from "../features/contact-form";
import { ContactPhoto, ContactLinks, ContactLinksCompact } from "../features/contact-info";
import { SectionHeading } from "../ui/section-heading";

export function ContactSection() {
  return (
    <section id="contact" tabIndex={-1} className="bg-secondary/50 px-4 py-8 sm:px-6 md:py-12 lg:py-16" aria-label="Me contacter">
      <div className="mx-auto max-w-6xl">
        <SectionHeading badge="Contact" title="Travaillons ensemble !" badgeAction={<ContactLinksCompact />} />
        <p className="mt-4 max-w-2xl text-center text-sm leading-relaxed text-foreground/80 sm:text-left sm:text-base">N'hésitez pas à me contacter via le formulaire ci-dessous ou sur LinkedIn.</p>
        <div className="mt-8 md:mt-12 grid gap-8 md:gap-12 grid-cols-1 lg:grid-cols-3">
          <ContactForm />
          <ContactPhoto />
        </div>
        <ContactLinks />
      </div>
    </section>
  );
}
