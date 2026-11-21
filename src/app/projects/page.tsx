import type { Metadata } from "next";
import Image from "next/image";
import { projects, type Project } from "@/data/projects";
import { Section } from "@/components/Section";

export const metadata: Metadata = {
  title: "Projects",
  description: "Web applications built by Achini Subasinghe, including Canyon, UniLife, and Enerlytics.",
};

function ExternalArrow() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M7 17 17 7" />
      <path d="M7 7h10v10" />
    </svg>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const reverse = index % 2 === 1;
  const orderNumber = String(index + 1).padStart(2, "0");

  return (
    <Section as="article" className="glass-interactive">
      <div className="grid grid-cols-1 items-stretch gap-8 lg:grid-cols-12">
        <div className={`lg:col-span-6 ${reverse ? "lg:order-2" : ""}`}>
          <div className="group flex h-full flex-col overflow-hidden rounded-xl border border-white/14 bg-[#0b1018]">
            <div className="flex items-center gap-1.5 border-b border-white/10 bg-white/[0.03] px-3.5 py-2.5">
              <span className="size-2 rounded-full bg-white/20" aria-hidden="true" />
              <span className="size-2 rounded-full bg-white/20" aria-hidden="true" />
              <span className="size-2 rounded-full bg-white/20" aria-hidden="true" />
              <span className="ml-2 truncate font-mono text-[11px] text-muted">
                {project.liveDemoUrl.replace("https://", "")}
              </span>
            </div>
            <div className="aspect-video w-full overflow-hidden">
              <Image
                src={project.image}
                alt={project.imageAlt}
                width={1366}
                height={768}
                className="h-full w-full object-cover transition-transform duration-300 ease-out group-hover:scale-[1.02]"
              />
            </div>
          </div>
        </div>

        <div className={`flex flex-col lg:col-span-6 ${reverse ? "lg:order-1" : ""}`}>
          <span className="font-mono text-xs tracking-[0.05em] tabular-nums text-accent">
            {orderNumber}
          </span>
          <h2 className="mt-1.5 text-2xl font-semibold tracking-[-0.02em] text-ice sm:text-3xl">
            {project.title}
          </h2>
          <p className="mt-3 max-w-[56ch] text-[15px] leading-[1.7] text-pretty text-ice/80">
            {project.description}
          </p>

          <ul className="mt-5 flex flex-wrap gap-2" aria-label="Technologies used">
            {project.techStack.map((tech) => (
              <li
                key={tech}
                className="rounded-md border border-white/12 bg-white/[0.04] px-2.5 py-1 font-mono text-xs text-ice/85"
              >
                {tech}
              </li>
            ))}
          </ul>

          <div className="mt-auto flex flex-wrap items-center gap-3 pt-7">
            <a
              href={project.liveDemoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-accent/45 bg-accent/15 px-4 py-2.5 text-sm font-medium text-ice transition-all duration-200 hover:border-accent/70 hover:bg-accent/25 active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              <span>Live demo</span>
              <ExternalArrow />
            </a>
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-white/14 bg-white/[0.04] px-4 py-2.5 text-sm font-medium text-muted transition-all duration-200 hover:border-white/30 hover:bg-white/[0.09] hover:text-ice active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              <span>GitHub</span>
              <ExternalArrow />
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
}

export default function ProjectsPage() {
  return (
    <div className="space-y-10">
      <header className="space-y-3">
        <p className="font-mono text-xs tracking-[0.06em] text-accent">02 / Projects</p>
        <h1 className="text-3xl font-semibold leading-[1.1] tracking-[-0.025em] text-balance text-ice md:text-5xl">
          Projects
        </h1>
        <p className="max-w-[60ch] text-[15px] leading-[1.7] text-pretty text-muted sm:text-base">
          Full-stack web applications built with Next.js, TypeScript, relational databases, and
          role-based access control.
        </p>
      </header>

      <div className="flex flex-col gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={project.repoUrl} project={project} index={index} />
        ))}
      </div>
    </div>
  );
}
