export interface Project {
  title: string;
  description: string;
  image: string;
  githubUrl: string;
  liveUrl?: string;
  technologies: string[];
}

export interface Experience {
  company: string;
  position: string;
  period: string;
  description: string;
}

export interface Award {
  title: string;
  issuer: string;
  date: string;
  description: string;
}