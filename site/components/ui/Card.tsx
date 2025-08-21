import React from "react";

export type CardProps = {
  variant?: "default" | "outlined" | "elevated";
  className?: string;
} & React.HTMLAttributes<HTMLDivElement>;

export function Card({ variant = "default", className = "", children, ...rest }: CardProps) {
  const baseClasses = "rounded-[var(--radius-lg)] p-6";
  
  const variantClasses = {
    default: "border border-[var(--color-neutral-200)] bg-white",
    outlined: "border-2 border-[var(--color-neutral-300)] bg-white",
    elevated: "bg-white shadow-[var(--shadow-lg)]"
  }[variant];

  return (
    <div className={`${baseClasses} ${variantClasses} ${className}`} {...rest}>
      {children}
    </div>
  );
}

export function CardHeader({ className = "", children, ...rest }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={`mb-4 ${className}`} {...rest}>
      {children}
    </div>
  );
}

export function CardContent({ className = "", children, ...rest }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={`mb-4 ${className}`} {...rest}>
      {children}
    </div>
  );
}

export function CardFooter({ className = "", children, ...rest }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={`${className}`} {...rest}>
      {children}
    </div>
  );
}