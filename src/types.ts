export interface Experience {
  id: string;
  company: string;
  position: string;
  period: string;
  description: string[];
  technologies: string[];
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  period: string;
  description?: string;
}

export interface Project {
  id: string;
  name: string;
  description: string;
  technologies: string[];
  link?: string;
  github?: string;
}

export interface Contact {
  email: string;
  phone?: string;
  linkedin: string;
  github: string;
  location: string;
}

export interface Skills {
  category: string;
  items: string[];
}

export interface CommandOutput {
  command: string;
  output: string;
  timestamp: Date;
}