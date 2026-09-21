import type { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  className?: string;
}

export function Section({ children, className = "" }: SectionProps) {
  return (
    <section className={`glass rounded-3xl p-6 md:p-8 ${className}`}>
      {children}
    </section>
  );
}
