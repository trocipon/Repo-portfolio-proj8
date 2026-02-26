import * as React from "react";

type Theme = "light" | "dark" | "system";

interface ThemeContextValue {
  theme: string;
  setTheme: (theme: string) => void;
}

const ThemeContext = React.createContext<ThemeContextValue | undefined>(undefined);

export function ThemeProvider({ children, attribute, defaultTheme = "light", enableSystem = true }: any) {
  const [theme, setTheme] = React.useState<string>(() => {
    try {
      const stored = typeof window !== "undefined" ? localStorage.getItem("theme") : null;
      if (stored) return stored;
      if (enableSystem && typeof window !== "undefined") {
        return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
      }
      return defaultTheme;
    } catch {
      return defaultTheme;
    }
  });

  React.useEffect(() => {
    try {
      localStorage.setItem("theme", theme);
      if (attribute === "class" || !attribute) {
        document.documentElement.classList.remove("light", "dark");
        document.documentElement.classList.add(theme);
      } else {
        document.documentElement.setAttribute(attribute, theme);
      }
    } catch {}
  }, [theme, attribute]);

  return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const ctx = React.useContext(ThemeContext);
  if (!ctx) {
    return { theme: "light", setTheme: () => {} };
  }
  return ctx;
}
