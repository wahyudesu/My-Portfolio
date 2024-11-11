import { ProjectType } from "../types/projectType";
import allProjects from "../json/projects.json";

export function getProject(key: string): ProjectType | undefined {
  return allProjects.find((project) => project.slug === key);
}

export function getProjects(): ProjectType[] {
  return allProjects;
}
