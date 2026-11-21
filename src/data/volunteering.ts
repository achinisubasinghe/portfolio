export interface VolunteeringExperience {
  title: string;
  role: string;
  organization: string;
  period: string;
  description: string;
  image1: string;
  image1Alt: string;
  image1Contain?: boolean;
  image2: string;
  image2Alt: string;
  image2Position?: string;
}

export const volunteeringExperiences: VolunteeringExperience[] = [
  {
    title: "Nexora 1.0",
    role: "Content Team Member",
    organization: "Association of Computer and Data Science, NSBM Green University",
    period: "June 2025",
    description:
      "Served on the content team for Nexora 1.0, an inter-university datathon hosted at NSBM Green University on 14 June 2025. Prepared event copy, participant communications, and promotional materials across campus.",
    image1: "/images/nexoraCertificate.jpeg",
    image1Alt:
      "Certificate of Appreciation awarded to Achini Subasinghe as a Content Team Member for Nexora 1.0",
    image1Contain: true,
    image2: "/images/nexora.jpeg",
    image2Alt: "Nexora 1.0 organizing team standing on stage in front of the event backdrop",
  },
  {
    title: "IEEE Day 2025",
    role: "Development Team Member",
    organization: "IEEE Computer Society Student Branch, NSBM Green University",
    period: "2025",
    description:
      "Worked on the development team for IEEE Day 2025 at NSBM Green University, building and maintaining the event website and supporting technical logistics during the event.",
    image1: "/images/ieeeMe.jpeg",
    image1Alt: "Achini Subasinghe standing in front of the IEEE Day 2025 banner at NSBM Green University",
    image2: "/images/ieeeDay.jpeg",
    image2Alt: "IEEE Day 2025 organizing team at NSBM Green University",
    image2Position: "object-[50%_20%]",
  },
  {
    title: "Plymhack",
    role: "Organizing Volunteer",
    organization: "Hackathon Hub of NSBM",
    period: "2026",
    description:
      "Volunteered with the Hackathon Hub of NSBM to support Plymhack, assisting with event operations, participant coordination, and on-site activities.",
    image1: "/images/plmyhack.jpeg",
    image1Alt: "Achini Subasinghe presenting a token during Plymhack at NSBM Green University",
    image2: "/images/octo.jpeg",
    image2Alt: "Purple octopus prop built for the Plymhack event",
    image2Position: "object-[50%_68%]",
  },
];
