export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  image: string;
  link: string;
  github: string;
}

export interface Skill {
  name: string;
  category: "Frontend" | "Backend" | "DevOps" | "Database" | "Tools";
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  link: string;
  icon: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  description: string[];
}
