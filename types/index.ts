export interface Project {
  id: number;
  title: string;
  description: string;
  longDescription?: string;
  image: string;
  techStack: string[];
  liveUrl?: string;
  githubUrl?: string;
  features?: string[];
  challenges?: string[];
  outcomes?: string[];
  metrics?: Record<string, string>;
}

export interface GridItem {
  id: number;
  title: string;
  description: string;
  className: string;
  imgClassName: string;
  titleClassName: string;
  img: string;
  spareImg: string;
}

export interface WorkExperience {
  id: number;
  title: string;
  desc: string;
  className: string;
  thumbnail: string;
}

export interface Experience {
  id: number;
  title: string;
  company: string;
  period: string;
  description: string;
  techStack?: string[];
}

export interface Testimonial {
  id?: number;
  quote: string;
  name: string;
  title: string;
  avatar?: string;
}

export interface NavItem {
  name: string;
  link: string;
  icon?: React.ReactNode;
}

export interface SocialMedia {
  id: number;
  img: string;
  link: string;
}

export interface Company {
  id: number;
  name: string;
  img: string;
  nameImg: string;
}
