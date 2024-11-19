export interface ProjectType {
  slug: string;
  name: string;
  description: string;
  technologies: string[];
  url?: string;
  code?: string,
  document?: string,
  publishedAt?: string;
}
