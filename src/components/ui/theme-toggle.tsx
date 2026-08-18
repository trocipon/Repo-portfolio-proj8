import { useTheme } from "./use-theme";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button className="flex h-11 items-center gap-1 rounded-lg border border-primary bg-transparent px-2.5 text-muted-foreground cursor-pointer" aria-label="Changer le thème">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="5" />
          <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
        </svg>
        <span className="text-muted-foreground/50">/</span>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
        </svg>
      </button>
    );
  }

  // Bordure primary + hover teinté (au lieu du gris neutre border-border/
  // hover:bg-muted) et btn-cta (ombre au survol, tassement au clic, comme
  // globals.css) : aligné sur le style et le comportement du bouton CV juste
  // à côté, plutôt que deux traitements visuels différents dans la même
  // rangée. transition étendue à box-shadow/transform (pas juste les
  // couleurs) pour que l'effet btn-cta s'anime, comme sur le composant Button.
  return (
    <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")} className="btn-cta flex h-11 items-center gap-1 rounded-lg border border-primary bg-transparent text-foreground transition-[background-color,box-shadow,transform,color] duration-200 hover:bg-primary/10 active:bg-primary/20 px-2.5 cursor-pointer" aria-label={theme === "dark" ? "Passer au thème clair" : "Passer au thème sombre"}>
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={theme === "light" ? "text-primary" : "text-muted-foreground"}>
        <circle cx="12" cy="12" r="5" />
        <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
      </svg>
      <span className="text-muted-foreground/50 text-sm">/</span>
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={theme === "dark" ? "text-primary" : "text-muted-foreground"}>
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
      </svg>
    </button>
  );
}
