import * as React from "react";
import { ThemeContext } from "./theme-provider";

export function useTheme() {
  const ctx = React.useContext(ThemeContext);
  if (!ctx) {
    return { theme: "light", setTheme: () => {} };
  }
  return ctx;
}
