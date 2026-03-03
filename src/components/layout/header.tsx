import { useState } from "react";
import { ThemeToggle } from "../ui/theme-toggle";
import { Menu, X, Download } from "../utils/icons";

const navLinks = [
  { label: "Accueil", href: "#accueil" },
  { label: "À propos", href: "#a-propos" },
  { label: "Compétences", href: "#competences" },
  { label: "Projets", href: "#projets" },
  { label: "Parcours", href: "#parcours" },
  { label: "Témoignages", href: "#temoignages" },
  { label: "Contact", href: "#contact" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const el = document.querySelector(href);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-md" style={{ contain: "layout style" }}>
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 sm:px-8 py-3" aria-label="Navigation principale">
        <a role="img" aria-label="Retour à l'accueil" href="#accueil" className="w-12 h-8 flex items-center justify-center" onClick={(e) => handleNavClick(e, "#accueil")}></a>
        <ul className="hidden items-center gap-6 md:flex" role="list">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="relative text-base font-bold font-sans text-foreground transition-colors duration-200 px-2 py-1 tracking-wide hover:text-primary after:absolute after:left-0 after:-bottom-1 after:w-full after:h-0.5 after:bg-primary after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left" onClick={(e) => handleNavClick(e, link.href)}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 md:flex">
          <ThemeToggle />
        </div>

        {/* Mobile menu button */}
        <div className="flex items-center gap-3 md:hidden">
          <ThemeToggle />
          <button onClick={() => setMobileOpen(!mobileOpen)} className="flex h-9 w-9 items-center justify-center rounded-lg border border-border text-foreground font-sans md:hidden sm:h-8 sm:w-8" aria-expanded={mobileOpen} aria-label={mobileOpen ? "Fermer le menu" : "Ouvrir le menu"}>
            {mobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </nav>
      {mobileOpen && (
        <div className="border-t border-border bg-background md:hidden" style={{ contain: "layout style paint" }}>
          <ul className="flex flex-col px-6 py-4" role="list">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => {
                    handleNavClick(e, link.href);
                    setMobileOpen(false);
                  }}
                  className="relative block py-3 text-base font-bold text-foreground transition-colors duration-200 tracking-wide hover:text-primary px-2 after:absolute after:left-0 after:-bottom-1 after:w-full after:h-0.5 after:bg-primary after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
