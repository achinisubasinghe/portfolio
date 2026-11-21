import type { ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost";

interface ButtonProps {
  children: ReactNode;
  className?: string;
  variant?: ButtonVariant;
  as?: "button" | "a";
  href?: string;
  download?: string;
  type?: "button" | "submit";
  disabled?: boolean;
  onClick?: () => void;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "border border-accent/45 bg-accent/15 text-ice hover:border-accent/70 hover:bg-accent/25",
  secondary:
    "border border-white/16 bg-white/[0.06] text-ice hover:border-accent/40 hover:bg-white/[0.11]",
  ghost:
    "border border-transparent bg-transparent text-muted hover:bg-white/[0.06] hover:text-ice",
};

export function Button({
  children,
  className = "",
  variant = "primary",
  as = "button",
  href,
  download,
  type = "button",
  disabled = false,
  onClick,
}: ButtonProps) {
  const baseClasses = `inline-flex items-center justify-center gap-2 rounded-xl px-5 py-2.5 text-sm font-medium tracking-[-0.01em] backdrop-blur-md transition-all duration-200 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-55 disabled:active:scale-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent ${variantClasses[variant]} ${className}`;

  if (as === "a" && href) {
    return (
      <a href={href} download={download} className={baseClasses}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} disabled={disabled} onClick={onClick} className={baseClasses}>
      {children}
    </button>
  );
}
