export interface Project {
  id: string;
  title: string;
  description: string;
  challenges: string[];
  solutions: string[];
  technologies: string[];
  imageUrl: string;
  githubUrl: string;
  liveUrl?: string;
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  duration: string;
  achievements: string[];
}

export interface Award {
  id: string;
  title: string;
  issuer: string;
  date: string;
  description: string;
}

export interface Skill {
  category: string;
  items: string[];
}