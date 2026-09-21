import type { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  className?: string;
  as?: "button" | "a";
  href?: string;
  download?: string;
  type?: "button" | "submit";
  onClick?: () => void;
}

export function Button({
  children,
  className = "",
  as = "button",
  href,
  download,
  type = "button",
  onClick,
}: ButtonProps) {
  const baseClasses = `inline-flex items-center justify-center rounded-full border border-white/25 bg-white/8 px-6 py-2.5 text-base text-ice backdrop-blur-md transition-all duration-200 hover:border-accent/50 hover:bg-white/14 active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent ${className}`;

  if (as === "a" && href) {
    return (
      <a href={href} download={download} className={baseClasses}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={baseClasses}>
      {children}
    </button>
  );
}
