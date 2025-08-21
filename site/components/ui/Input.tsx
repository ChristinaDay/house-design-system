import React from "react";

export type InputProps = {
  label?: string;
  hint?: string;
  error?: string;
  variant?: "default" | "filled";
  className?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

export function Input({ 
  label, 
  hint, 
  error, 
  variant = "default",
  className = "", 
  ...rest 
}: InputProps) {
  const baseClasses = "w-full px-3 py-2 border rounded-[var(--radius-md)] transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-500)] focus:border-transparent";
  
  const variantClasses = variant === "filled" 
    ? "bg-[var(--color-neutral-100)] border-[var(--color-neutral-200)]" 
    : "bg-white border-[var(--color-neutral-300)]";

  const errorClasses = error 
    ? "border-[var(--color-danger-500)] focus:ring-[var(--color-danger-500)]" 
    : "";

  return (
    <div className="space-y-1">
      {label && (
        <label className="block text-sm font-medium text-[var(--color-neutral-700)]">
          {label}
        </label>
      )}
      <input 
        className={`${baseClasses} ${variantClasses} ${errorClasses} ${className}`}
        {...rest}
      />
      {hint && !error && (
        <p className="text-xs text-[var(--color-neutral-500)]">{hint}</p>
      )}
      {error && (
        <p className="text-xs text-[var(--color-danger-500)]">{error}</p>
      )}
    </div>
  );
}