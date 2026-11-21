export interface NavLink {
  label: string;
  href: string;
}

export const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Volunteering", href: "/volunteering" },
  { label: "Experience", href: "/work-experience" },
  { label: "Contact", href: "/contact" },
];
