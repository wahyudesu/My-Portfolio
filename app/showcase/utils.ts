// import { ProjectType } from "../types/projectType";
import allProjects from "../json/projects.json";

export interface ProjectType {
  slug: string;
  name: string;
  description: string;
  technologies: string[];
  url?: string;
  code?: string,
  document?: string,
  publishedAt: string;
}

export function getProject(key: string): ProjectType | undefined {
  return allProjects.find((project) => project.slug === key);
}

export function getProjects(): ProjectType[] {
  return allProjects;
}
