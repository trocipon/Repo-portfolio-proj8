import React from "react";

type ButtonVariant = "primary" | "secondary";

interface BaseProps {
  variant?: ButtonVariant;
  className?: string;
  children: React.ReactNode;
}

type ButtonAsButton = BaseProps & React.ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

type ButtonAsAnchor = BaseProps & React.AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

type ButtonProps = ButtonAsButton | ButtonAsAnchor;

const variantClasses: Record<ButtonVariant, string> = {
  primary: "bg-primary text-primary-foreground hover:bg-primary/90 active:bg-primary/80",
  // Contour plutôt que remplissage plein : la hiérarchie avec le primary
  // repose sur une différence de forme (plein/contour), pas seulement sur une
  // nuance de couleur — plus robuste visuellement et en accessibilité. Le
  // texte utilise --foreground (fort contraste garanti dans les deux thèmes)
  // plutôt que --primary, qui n'est pas assez contrasté sur fond sombre.
  secondary: "border border-primary bg-transparent text-foreground hover:bg-primary/10 active:bg-primary/20",
};

const baseClasses = "btn-cta inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3 text-sm font-medium transition-[background-color,box-shadow,transform] duration-200";

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
