/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", "./components/**/*.{ts,tsx}", "./src/styles/globals.css"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        card: {
          DEFAULT: "var(--card)",
          foreground: "var(--card-foreground)",
        },
        popover: {
          DEFAULT: "var(--popover)",
          foreground: "var(--popover-foreground)",
        },
        primary: {
          DEFAULT: "var(--primary)",
          foreground: "var(--primary-foreground)",
        },
        secondary: {
          DEFAULT: "var(--secondary)",
          foreground: "var(--secondary-foreground)",
        },
        muted: {
          DEFAULT: "var(--muted)",
          foreground: "var(--muted-foreground)",
        },
        accent: {
          DEFAULT: "var(--accent)",
          foreground: "var(--accent-foreground)",
        },
        destructive: {
          DEFAULT: "var(--destructive)",
          foreground: "var(--destructive-foreground)",
        },
        border: "var(--border)",
        input: "var(--input)",
        ring: "var(--ring)",
      },
      fontFamily: {
        sans: ["Montserrat", "Arial", "sans-serif"],
        serif: ["Georgia", "serif"],
      },
      fontSize: {
        xs: ["0.75rem", { lineHeight: "1.15", fontWeight: "400" }],
        sm: ["0.875rem", { lineHeight: "1.25", fontWeight: "400" }],
        base: ["1rem", { lineHeight: "1.5", fontWeight: "400" }],
        lg: ["1.125rem", { lineHeight: "1.6", fontWeight: "500" }],
        xl: ["1.25rem", { lineHeight: "1.6", fontWeight: "500" }],
        "2xl": ["1.5rem", { lineHeight: "1.2", fontWeight: "600" }],
        "3xl": ["1.875rem", { lineHeight: "1.2", fontWeight: "700" }],
        "4xl": ["2.25rem", { lineHeight: "1.1", fontWeight: "700" }],
        "5xl": ["3rem", { lineHeight: "1.1", fontWeight: "800" }],
        "6xl": ["3.75rem", { lineHeight: "1.05", fontWeight: "800" }],
        "7xl": ["4.5rem", { lineHeight: "1.05", fontWeight: "900" }],
      },
    },
  },
  plugins: [],
};
