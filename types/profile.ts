export interface ProfileLinks {
  linkedin: string;
  github: string;
  patent: string;
  portfolio: string;
}

export interface WorkRole {
  title: string;
  period: string;
  duration: string;
  highlights: string[];
}

export interface ExperienceBlock {
  company: string;
  location: string;
  roles: WorkRole[];
}

export interface ProjectBlock {
  name: string;
  category: string;
  showOnResume: boolean;
  description: string;
  features: string[];
  tech: string[];
  role: string;
}

export interface Skills {
  [category: string]: Object[];
}

export interface Education {
    institution: string;
    affiliation: string;
    degree: string;
    period: string; 
}

export interface Patent {
    title: string;
    applicationNo: string;
    publicationNo: string;
    publicationDate: string;
    url: string;
}

export interface Stats {
  years: number;
  users: string;
  reusability: string;
  devTimeReduction: string;
}

export interface UserProfile {
  name: string;
  highLights: string;
  shortName: string;
  title: string;
  tagline: string;
  location: string;
  email: string;
  phone: string;
  locationPreference: string;
  links: ProfileLinks;
  summary: string;
  workStatus: string;
  experience: ExperienceBlock[];
  projects: ProjectBlock[];
  skills: Skills;
  education: Education;
  patent: Patent;
  achievements: string[];
  languages: string[];
  stats: Stats;
}
