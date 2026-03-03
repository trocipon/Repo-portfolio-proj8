import { Linkedin, MapPin } from "../utils/icons";

export function ContactInfo() {
  return (
    <div className="flex flex-col gap-4 md:gap-6 lg:col-span-1">
      <div className="rounded-xl border border-border bg-card p-6">
        <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">Retrouvez-moi</h3>
        <div className="mt-5 flex flex-col gap-4">
          <a href="https://github.com/trocipon" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-primary">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77a5.07 5.07 0 0 0-.09-3.73S18.73.69 16 2.29a13.38 13.38 0 0 0-7 0C5.27.69 4.09 1.04 4.09 1.04A5.07 5.07 0 0 0 4 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
              </svg>
            </div>
            github.com/trocipon
          </a>
          <a href="https://linkedin.com/in/thibaudrocipon" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-primary">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <Linkedin className="h-4 w-4" />
            </div>
            linkedin.com/in/thibaudrocipon/
          </a>
        </div>
      </div>

      <div className="rounded-xl border border-border bg-card p-6">
        <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">Localisation</h3>
        <div className="mt-3 flex items-start gap-3">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
            <MapPin className="h-4 w-4" />
          </div>
          <div>
            <p className="mt-2 text-sm text-foreground/80">Mobile sur toute la France</p>
          </div>
        </div>
      </div>
    </div>
  );
}
