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
      "Project and task tracker with separate permissions for admins, managers, and members. Its /agent chat assistant calls DeepSeek tools to query or update records under the signed-in user's role.",
    imageAlt: "Canyon project and task tracker interface",
    techStack: ["Next.js", "Express", "Drizzle ORM", "MySQL", "Bun"],
  },
  {
    owner: "achinisubasinghe",
    repo: "uni-life-reborn",
    title: "UniLife",
    description:
      "Campus directory for Sri Lankan university students to find nearby housing, food, and services. Providers submit listings for admin approval, students post reviews, and UniBot answers campus questions via Groq.",
    imageAlt: "UniLife campus services directory landing page",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Firebase", "Groq"],
  },
  {
    owner: "achinisubasinghe",
    repo: "project-approval-system",
    title: "Project Approval System",
    description:
      "Final-year project matching app where students submit proposals and supervisors review them anonymously. Confirming a match within capacity limits reveals both identities, with a Groq assistant for role-scoped queries.",
    imageAlt: "Project Approval System dashboard and assistant interface",
    techStack: [".NET 10", "Blazor Server", "MudBlazor", "SQL Server", "EF Core", "Groq"],
  },
];
