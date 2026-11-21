export interface Project {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  repoUrl: string;
  liveDemoUrl: string;
  techStack: string[];
}

export const projects: Project[] = [
  {
    title: "Canyon",
    description:
      "Project management web application with role-based access control for projects, tasks, and users. Includes an AI assistant at /agent that runs server-side actions limited to the signed-in user's permissions.",
    image: "/images/canyon.png",
    imageAlt: "Canyon sign-in screen for project and task management",
    repoUrl: "https://github.com/achinisubasinghe/canyon.git",
    liveDemoUrl: "https://canyon.achini.space",
    techStack: ["Next.js", "Node.js", "Express", "MariaDB", "Bun"],
  },
  {
    title: "UniLife",
    description:
      "Full-stack directory that connects Sri Lankan university students with verified local businesses. Includes searchable listings, business onboarding, admin moderation, and an AI guide that answers campus questions.",
    image: "/images/unilife.png",
    imageAlt: "UniLife landing page showing campus directory search and UniBot assistant",
    repoUrl: "https://github.com/achinisubasinghe/uni-life-reborn.git",
    liveDemoUrl: "https://unilife.achini.space",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Firebase"],
  },
  {
    title: "Enerlytics",
    description:
      "Utility management and billing platform with separate portals for administrators, staff, meter readers, cashiers, managers, and customers. Supports customer onboarding, meter readings, billing, payments, usage analytics, and support tickets.",
    image: "/images/enerlytics.png",
    imageAlt: "Enerlytics utility management platform login screen",
    repoUrl: "https://github.com/achinisubasinghe/enerlytics.git",
    liveDemoUrl: "https://enerlytics.achini.space",
    techStack: ["Next.js", "React", "MariaDB", "Chart.js"],
  },
];
