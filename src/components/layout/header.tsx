import { useState } from "react";
import { ThemeToggle } from "../ui/theme-toggle";
import { FaBars as Menu, FaTimes as X, FaDownload as Download } from "react-icons/fa";
import { scrollToSection } from "../utils/shared-utils";
import { useCvDownload } from "../utils/use-cv-download";

// Le logo (lien vers #accueil) fait déjà office de retour à l'accueil dans le
// header desktop : "Accueil" y serait redondant. Le menu burger mobile garde
// l'entrée, le logo n'y étant pas toujours la première chose repérée.
const navLinks = [
  { label: "Accueil", href: "#accueil" },
  { label: "À propos", href: "#a-propos" },
  { label: "Projets", href: "#projets" },
  { label: "Compétences", href: "#competences" },
  { label: "Parcours", href: "#parcours" },
  { label: "Témoignages", href: "#temoignages" },
  { label: "Contact", href: "#contact" },
];

const desktopNavLinks = navLinks.filter((link) => link.href !== "#accueil");

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const downloadCv = useCvDownload();

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement> | React.KeyboardEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      scrollToSection(href.slice(1));
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLAnchorElement>) => {
    if (e.key === "Enter" || e.key === " ") {
      const href = e.currentTarget.getAttribute("href");
      if (href && href.startsWith("#")) {
        e.preventDefault();
        scrollToSection(href.slice(1));
      }
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-md" style={{ contain: "layout style" }}>
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 sm:px-8 py-3" aria-label="Navigation principale">
        <a
          href="#accueil"
          className="shrink-0 font-heading text-lg font-bold tracking-tight text-foreground transition-colors hover:text-primary"
          onClick={(e) => handleNavClick(e, "#accueil")}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              handleNavClick(e, "#accueil");
            }
          }}
        >
          Thibaud Rocipon
        </a>
        <ul className="hidden items-center gap-5 xl:flex" role="list">
          {desktopNavLinks.map((link) => (
            <li key={link.href} className="shrink-0">
              <a
                href={link.href}
                className="relative whitespace-nowrap text-base font-bold font-sans text-foreground transition-colors duration-200 px-2 py-1 tracking-wide hover:text-primary after:absolute after:left-0 after:-bottom-1 after:w-full after:h-0.5 after:bg-primary after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left"
                onClick={(e) => handleNavClick(e, link.href)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    handleNavClick(e, link.href);
                  }
                }}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 xl:flex">
          <button onClick={() => downloadCv()} className="inline-flex items-center gap-2 rounded-lg border border-primary bg-transparent px-3.5 py-2 text-sm font-medium text-foreground transition-colors hover:bg-primary/10 active:bg-primary/20 cursor-pointer" aria-label="Télécharger mon CV">
            <Download className="h-3.5 w-3.5" />
            CV
          </button>
          <ThemeToggle />
        </div>

        {/* Mobile menu button */}
        <div className="flex items-center gap-3 xl:hidden">
          <ThemeToggle />
          <button onClick={() => setMobileOpen(!mobileOpen)} className="flex h-9 w-9 items-center justify-center rounded-lg border border-border text-foreground font-sans sm:h-8 sm:w-8 cursor-pointer" aria-expanded={mobileOpen} aria-label={mobileOpen ? "Fermer le menu" : "Ouvrir le menu"}>
            {mobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </nav>
      {mobileOpen && (
        <div className="border-t border-border bg-background xl:hidden" style={{ contain: "layout style paint" }}>
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
            <li>
              <button
                onClick={() => {
                  downloadCv();
                  setMobileOpen(false);
                }}
                className="flex items-center gap-2 py-3 text-base font-bold text-foreground transition-colors duration-200 tracking-wide hover:text-primary px-2 cursor-pointer"
              >
                <Download className="h-4 w-4" />
                Télécharger mon CV
              </button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
