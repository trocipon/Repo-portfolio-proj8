import React from "react";

type ButtonVariant = "primary" | "secondary" | "tertiary";
type ButtonSize = "md" | "icon";

interface BaseProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  children: React.ReactNode;
}

type ButtonAsButton = BaseProps & React.ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

type ButtonAsAnchor = BaseProps & React.AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

type ButtonProps = ButtonAsButton | ButtonAsAnchor;

const variantClasses: Record<ButtonVariant, string> = {
  // "btn-cta" porte l'ombre au survol et le tassement au clic (globals.css) :
  // réservé aux deux variantes qui ont réellement l'apparence d'un bouton.
  primary: "btn-cta bg-primary text-primary-foreground hover:bg-primary/90 active:bg-primary/80",
  // Contour plutôt que remplissage plein : la hiérarchie avec le primary
  // repose sur une différence de forme (plein/contour), pas seulement sur une
  // nuance de couleur — plus robuste visuellement et en accessibilité. Le
  // texte utilise --foreground (fort contraste garanti dans les deux thèmes)
  // plutôt que --primary, qui n'est pas assez contrasté sur fond sombre.
  secondary: "btn-cta border border-primary bg-transparent text-foreground hover:bg-primary/10 active:bg-primary/20",
  // Action de faible priorité (bascule "voir plus", lien secondaire) : pas de
  // fond ni de contour ni ombre au survol pour ne pas concurrencer les vrais
  // CTA — seulement le soulignement (plus le curseur et une icône, le cas
  // échéant). On garde quand même le tassement au clic (sans ombre) : c'est
  // un retour tactile cohérent avec les autres boutons, pas un effet visuel
  // "carte" comme le hover de btn-cta.
  tertiary: "bg-transparent text-primary hover:underline underline-offset-4 active:text-primary/70 active:scale-95",
};

// Le padding vit à part de variantClasses : tertiary a toujours eu un
// padding horizontal réduit (px-1, pas de fond/contour à faire respirer), et
// la taille "icon" (boutons carrés sans texte, cible tactile 44×44px) a
// besoin d'un padding neutre quel que soit le variant — mélanger padding et
// couleurs dans une seule classe empêchait de faire varier l'un sans l'autre.
const paddingByVariant: Record<ButtonVariant, string> = {
  primary: "px-6 py-3",
  secondary: "px-6 py-3",
  tertiary: "px-1 py-3",
};

const baseClasses = "inline-flex items-center justify-center gap-2 rounded-lg text-sm font-medium cursor-pointer transition-[background-color,box-shadow,transform,color] duration-200";

export function Button({ variant = "primary", size = "md", className = "", children, ...props }: ButtonProps) {
  const sizeClasses = size === "icon" ? "h-11 w-11" : paddingByVariant[variant];
  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses} ${className}`;

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
