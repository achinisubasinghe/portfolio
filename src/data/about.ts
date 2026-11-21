export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  details?: string;
}

export interface SkillItem {
  name: string;
  category: string;
}

export interface AboutTab {
  id: "education" | "tools" | "technologies";
  label: string;
  education?: EducationItem[];
  skills?: SkillItem[];
}

export const aboutTabs: AboutTab[] = [
  {
    id: "education",
    label: "Education",
    education: [
      {
        degree: "BSc Hons in Software Engineering",
        institution: "NSBM Green University, University of Plymouth program",
        period: "2024 to 2027",
        details: "In progress",
      },
      {
        degree: "Advanced Full Stack Development Program",
        institution: "Academy of Computer Programming and Training",
        period: "Completed",
      },
      {
        degree: "G.C.E. Advanced Level, Commerce stream",
        institution: "Sujatha Vidyalaya, Nugegoda",
        period: "2023",
        details: "Economics, Information Technology, and Accounting",
      },
    ],
  },
  {
    id: "tools",
    label: "Tools",
    skills: [
      { name: "VS Code", category: "Development" },
      { name: "IntelliJ IDEA", category: "Development" },
      { name: "Android Studio", category: "Development" },
      { name: "Git and GitHub", category: "Version control" },
      { name: "Docker", category: "Containers" },
      { name: "Postman", category: "API testing" },
      { name: "Figma", category: "Design" },
      { name: "Canva", category: "Design" },
      { name: "Jira", category: "Project tracking" },
      { name: "Linux and WSL", category: "Environment" },
      { name: "Vercel", category: "Deployment" },
      { name: "DigitalOcean", category: "Deployment" },
      { name: "AWS", category: "Deployment" },
      { name: "Firebase", category: "Backend services" },
      { name: "Supabase", category: "Backend services" },
    ],
  },
  {
    id: "technologies",
    label: "Technologies",
    skills: [
      { name: "TypeScript", category: "Languages" },
      { name: "JavaScript", category: "Languages" },
      { name: "Python", category: "Languages" },
      { name: "Java", category: "Languages" },
      { name: "React", category: "Frontend" },
      { name: "Next.js", category: "Frontend" },
      { name: "Node.js", category: "Backend" },
      { name: "Express", category: "Backend" },
      { name: "Spring Boot", category: "Backend" },
      { name: "MongoDB", category: "Databases" },
      { name: "PostgreSQL", category: "Databases" },
      { name: "Tailwind CSS", category: "Styling" },
    ],
  },
];
