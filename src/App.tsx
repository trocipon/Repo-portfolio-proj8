import { ThemeProvider } from "./components/ui/theme-provider";
import { Suspense, lazy } from "react";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
import { Header } from "./components/layout/header";
import { HeroSection } from "./components/sections/hero-section";
import { AboutSection } from "./components/sections/about-section";
import { SkillsSection } from "./components/sections/skills-section";
import { Footer } from "./components/layout/footer";
import { SectionLoader } from "./components/ui/section-loader";
import { RECAPTCHA_V3_SITE_KEY } from "./config/recaptcha";

// Lazy load les sections volumineuses pour réduire la chaîne critique
const LazyProjectsSection = lazy(() => import("./components/sections/projects-section").then((m) => ({ default: m.ProjectsSection })));
const LazyCareerSection = lazy(() => import("./components/sections/career-section").then((m) => ({ default: m.CareerSection })));
const LazyTestimonialsSection = lazy(() => import("./components/sections/testimonials-section").then((m) => ({ default: m.TestimonialsSection })));
const LazyContactSection = lazy(() => import("./components/sections/contact-section").then((m) => ({ default: m.ContactSection })));

export default function App() {
  return (
    <div className="font-sans antialiased">
      <GoogleReCaptchaProvider reCaptchaKey={RECAPTCHA_V3_SITE_KEY}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[200] focus:rounded-lg focus:bg-primary focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-primary-foreground">
            Aller au contenu principal
          </a>
          <Header />
          <main id="main-content">
            <HeroSection />
            <AboutSection />
            <Suspense fallback={<SectionLoader />}>
              <LazyProjectsSection />
            </Suspense>
            <SkillsSection />
            <Suspense fallback={<SectionLoader />}>
              <LazyCareerSection />
            </Suspense>
            <Suspense fallback={<SectionLoader />}>
              <LazyTestimonialsSection />
            </Suspense>
            <Suspense fallback={<SectionLoader />}>
              <LazyContactSection />
            </Suspense>
          </main>
          <Footer />
        </ThemeProvider>
      </GoogleReCaptchaProvider>
    </div>
  );
}
