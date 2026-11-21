import type { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  className?: string;
  as?: "section" | "article" | "div";
}

export function Section({ children, className = "", as = "section" }: SectionProps) {
  const Component = as;
  return (
    <Component className={`glass rounded-2xl p-6 md:p-8 ${className}`}>
      {children}
    </Component>
  );
}
