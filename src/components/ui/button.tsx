import React from "react";

type ButtonVariant = "primary" | "secondary" | "tertiary";

interface BaseProps {
  variant?: ButtonVariant;
  className?: string;
  children: React.ReactNode;
}

type ButtonAsButton = BaseProps & React.ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

type ButtonAsAnchor = BaseProps & React.AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

type ButtonProps = ButtonAsButton | ButtonAsAnchor;

const variantClasses: Record<ButtonVariant, string> = {
  // "btn-cta" porte l'ombre au survol et le tassement au clic (globals.css) :
  // réservé aux deux variantes qui ont réellement l'apparence d'un bouton.
  primary: "btn-cta px-6 py-3 bg-primary text-primary-foreground hover:bg-primary/90 active:bg-primary/80",
  // Contour plutôt que remplissage plein : la hiérarchie avec le primary
  // repose sur une différence de forme (plein/contour), pas seulement sur une
  // nuance de couleur — plus robuste visuellement et en accessibilité. Le
  // texte utilise --foreground (fort contraste garanti dans les deux thèmes)
  // plutôt que --primary, qui n'est pas assez contrasté sur fond sombre.
  secondary: "btn-cta px-6 py-3 border border-primary bg-transparent text-foreground hover:bg-primary/10 active:bg-primary/20",
  // Action de faible priorité (bascule "voir plus", lien secondaire) : pas de
  // fond ni de contour ni ombre au survol pour ne pas concurrencer les vrais
  // CTA — seulement le soulignement (plus le curseur et une icône, le cas
  // échéant). On garde quand même le tassement au clic (sans ombre) : c'est
  // un retour tactile cohérent avec les autres boutons, pas un effet visuel
  // "carte" comme le hover de btn-cta.
  tertiary: "px-1 py-2 bg-transparent text-primary hover:underline underline-offset-4 active:text-primary/70 active:scale-95 cursor-pointer",
};

const baseClasses = "inline-flex items-center justify-center gap-2 rounded-lg text-sm font-medium transition-[background-color,box-shadow,transform,color] duration-200";

export function Button({ variant = "primary", className = "", children, ...props }: ButtonProps) {
  const classes = `${baseClasses} ${variantClasses[variant]} ${className}`;

  if (props.href) {
    const { href, ...anchorProps } = props as React.AnchorHTMLAttributes<HTMLAnchorElement>;
    return (
      <a href={href} className={classes} {...anchorProps}>
        {children}
      </a>
    );
  }

  const buttonProps = props as React.ButtonHTMLAttributes<HTMLButtonElement>;
  return (
    <button className={classes} {...buttonProps}>
      {children}
    </button>
  );
}
