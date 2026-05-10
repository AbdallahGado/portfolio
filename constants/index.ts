import { NavItem } from "@/types";

// Re-export all data from the centralized data file
export {
  gridItems,
  projects,
  testimonials,
  companies,
  workExperience,
  socialMedia,
} from "./data";

export const navItems: NavItem[] = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Experience", link: "#experience" },
  { name: "Contact", link: "#contact" },
];

export const siteConfig = {
  name: "Abdallah Gado",
  title: "Abdallah Gado – Full-Stack Developer",
  description: "Premium developer portfolio showcasing modern web applications, Next.js expertise, and creative-tech solutions.",
  url: "https://portfolio-vert-alpha-57.vercel.app",
  ogImage: "https://portfolio-vert-alpha-57.vercel.app/og-image.jpg",
  links: {
    github: "https://github.com/AbdallahGado",
    linkedin: "https://www.linkedin.com/in/abdallah-gado-0ab60b234",
    instagram: "https://www.instagram.com/abdallah_gado_22/",
    email: "mailto:abdallahgado22@gmail.com",
  },
};
