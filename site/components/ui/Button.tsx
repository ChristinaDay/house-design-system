import React from "react";

export type ButtonProps = {
  variant?: "solid" | "outline" | "ghost" | "accent";
  size?: "xs" | "sm" | "md" | "lg";
  destructive?: boolean;
  className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({ 
  variant = "solid", 
  size = "md", 
  destructive = false,
  className = "", 
  children, 
  ...rest 
}: ButtonProps) {
  const baseClasses = "inline-flex items-center justify-center font-medium focus:outline-none transition-all duration-[var(--transition-duration-base)] rounded-[var(--radius-md)]";
  
  const sizeClasses = {
    xs: "h-[var(--spacing-6)] px-[var(--spacing-2)] text-[var(--typography-fontSize-xs)]",
    sm: "h-[var(--spacing-8)] px-[var(--spacing-3)] text-[var(--typography-fontSize-sm)]", 
    md: "h-[var(--spacing-10)] px-[var(--spacing-4)] text-[var(--typography-fontSize-base)]",
    lg: "h-[var(--spacing-12)] px-[var(--spacing-6)] text-[var(--typography-fontSize-lg)]"
  }[size];

  const getVariantClasses = () => {
    if (destructive) {
      switch (variant) {
        case "solid":
          return "bg-[var(--color-danger-500)] text-[var(--color-neutral-0)] shadow-[var(--shadow-sm)] hover:bg-[var(--color-danger-600)]";
        case "outline":
          return "border border-[var(--color-danger-500)] text-[var(--color-danger-500)] bg-transparent hover:bg-[var(--color-danger-50)]";
        case "ghost":
          return "text-[var(--color-danger-500)] bg-transparent hover:bg-[var(--color-danger-50)]";
        case "accent":
          return "bg-[var(--color-danger-500)] text-[var(--color-neutral-0)] shadow-[var(--shadow-sm)] hover:bg-[var(--color-danger-600)]";
      }
    }

    switch (variant) {
      case "solid":
        return "bg-[var(--color-brand-500)] text-[var(--color-neutral-0)] shadow-[var(--shadow-sm)] hover:bg-[var(--color-brand-600)]";
      case "outline":
        return "border border-[var(--color-brand-500)] text-[var(--color-brand-500)] bg-transparent hover:bg-[var(--color-brand-50)]";
      case "ghost":
        return "text-[var(--color-brand-500)] bg-transparent hover:bg-[var(--color-brand-50)]";
      case "accent":
        return "bg-[var(--color-accent-500)] text-[var(--color-neutral-0)] shadow-[var(--shadow-sm)] hover:bg-[var(--color-accent-600)]";
      default:
        return "bg-[var(--color-brand-500)] text-[var(--color-neutral-0)] shadow-[var(--shadow-sm)] hover:bg-[var(--color-brand-600)]";
    }
  };

  const variantClasses = getVariantClasses();

  return (
    <button 
      className={`${baseClasses} ${sizeClasses} ${variantClasses} ${className}`} 
      {...rest}
    >
      {children}
    </button>
  );
}
