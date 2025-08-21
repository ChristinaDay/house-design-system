import React from "react";

export type ButtonProps = {
  variant?: "solid" | "outline";
  size?: "sm" | "md";
  className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({ variant = "solid", size = "md", className = "", children, ...rest }: ButtonProps) {
  const baseClasses = "inline-flex items-center justify-center font-medium focus:outline-none";
  const sizeClasses = size === "sm" ? "h-8 px-[var(--space-4)]" : "h-10 px-[var(--space-4)]";
  const variantClasses =
    variant === "solid"
      ? "bg-[var(--color-brand-500)] text-[var(--color-neutral-0)] rounded-[var(--radius-md)]"
      : "border border-[var(--color-neutral-900)] text-[var(--color-neutral-900)] rounded-[var(--radius-md)]";

  return (
    <button className={`${baseClasses} ${sizeClasses} ${variantClasses} ${className}`} {...rest}>
      {children}
    </button>
  );
}
