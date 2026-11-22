export interface ProjectConfig {
  owner: string;
  repo: string;
  title: string;
  description: string;
  imageAlt: string;
  techStack: string[];
}

export const projects: ProjectConfig[] = [
  {
    owner: "achinisubasinghe",
    repo: "canyon",
    title: "Canyon",
    description:
      "Project management web application with role-based access control for projects, tasks, and users. Includes an AI assistant at /agent that runs server-side actions limited to the signed-in user's permissions.",
    imageAlt: "Canyon sign-in screen for project and task management",
    techStack: ["Next.js", "Node.js", "Express", "MariaDB", "Bun"],
  },
  {
    owner: "achinisubasinghe",
    repo: "uni-life-reborn",
    title: "UniLife",
    description:
      "Full-stack directory that connects Sri Lankan university students with verified local businesses. Includes searchable listings, business onboarding, admin moderation, and an AI guide that answers campus questions.",
    imageAlt: "UniLife landing page showing campus directory search and UniBot assistant",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Firebase"],
  },
  {
    owner: "achinisubasinghe",
    repo: "project-approval-system",
    title: "Project Approval System",
    description:
      "Final-year project proposal and blind supervisor matching platform. Students submit proposals by research area, supervisors review anonymous matching proposals before identities are revealed, and module leaders manage allocations with a role-aware Groq assistant.",
    imageAlt: "Project Approval System application screenshot",
    techStack: [".NET 10", "Blazor Server", "MudBlazor", "SQL Server", "EF Core", "Groq"],
  },
];
