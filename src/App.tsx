import { ThemeProvider } from "./components/ui/theme-provider";
import { Suspense, lazy } from "react";
import { Header } from "./components/layout/header";
import { HeroSection } from "./components/sections/hero-section";
import { AboutSection } from "./components/sections/about-section";
import { SkillsSection } from "./components/sections/skills-section";
import { Footer } from "./components/layout/footer";
import { BackgroundPattern } from "./components/ui/background-pattern";
import { SectionLoader } from "./components/ui/section-loader";

// Lazy load les sections volumineuses pour réduire la chaîne critique
const LazyProjectsSection = lazy(() => import("./components/sections/projects-section").then((m) => ({ default: m.ProjectsSection })));
const LazyCareerSection = lazy(() => import("./components/sections/career-section").then((m) => ({ default: m.CareerSection })));
const LazyTestimonialsSection = lazy(() => import("./components/sections/testimonials-section").then((m) => ({ default: m.TestimonialsSection })));
const LazyContactSection = lazy(() => import("./components/sections/contact-section").then((m) => ({ default: m.ContactSection })));

export default function App() {
  return (
    <div className="font-sans antialiased">
      <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
        <Header />
        <main>
          <HeroSection />
          <div style={{ position: "relative" }}>
            <BackgroundPattern />
            <AboutSection />
            <SkillsSection />
            <Suspense fallback={<SectionLoader />}>
              <LazyProjectsSection />
            </Suspense>
            <Suspense fallback={<SectionLoader />}>
              <LazyCareerSection />
            </Suspense>
            <Suspense fallback={<SectionLoader />}>
              <LazyTestimonialsSection />
            </Suspense>
            <Suspense fallback={<SectionLoader />}>
              <LazyContactSection />
            </Suspense>
          </div>
        </main>
        <Footer />
      </ThemeProvider>
    </div>
  );
}
