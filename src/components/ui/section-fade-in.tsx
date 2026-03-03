import { FadeIn } from "./fade-in";
import { ReactNode } from "react";

interface SectionFadeInProps {
  children: ReactNode;
  delay?: number;
}

export function SectionFadeIn({ children, delay }: SectionFadeInProps) {
  return <FadeIn delay={delay}>{children}</FadeIn>;
}
