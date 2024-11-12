import { getProjects } from "app/showcase/utils";

export const baseUrl = "https://whyikbal.vercel.app";

export default async function sitemap() {
    let projects = getProjects().map((project) => ({
    url: `${baseUrl}/showcase/${project.slug}`,
    lastModified: project.publishedAt,
  }));

  let routes = ["", "/blog", "/showcase"].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split("T")[0],
  }));

  return [...routes, ...projects];
}
