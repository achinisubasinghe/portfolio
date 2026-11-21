export interface WorkEntry {
  title: string;
  company: string;
  type: string;
  period: string;
  description: string;
}

export const workEntries: WorkEntry[] = [
  {
    title: "Contact support agent",
    company: "IWI Corporation Pvt Ltd",
    type: "Part-time",
    period: "Jan 2026 to present",
    description:
      "Handle customer support requests by phone and email. Investigate software issues and database queries, and work with the development team to reproduce and log bugs.",
  },
];
