import React from "react";
import { ThemeProvider } from "@/src/components/ui/theme-provider";
import { Header } from "@/src/components/layout/header";
import { HeroSection } from "@/src/components/sections/hero-section";
import { AboutSection } from "@/src/components/sections/about-section";
import { SkillsSection } from "@/src/components/sections/skills-section";
import { ProjectsSection } from "@/src/components/sections/projects-section";
import { CareerSection } from "@/src/components/sections/career-section";
import { TestimonialsSection } from "@/src/components/sections/testimonials-section";
import { ContactSection } from "@/src/components/sections/contact-section";
import { Footer } from "@/src/components/layout/footer";

export default function App() {
  return (
    <div className="font-sans antialiased">
      <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
        <Header />
        <main>
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
          <CareerSection />
          <TestimonialsSection />
          <ContactSection />
        </main>
        <Footer />
      </ThemeProvider>
    </div>
  );
}
