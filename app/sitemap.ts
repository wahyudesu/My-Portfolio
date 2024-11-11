import { getBlogPosts } from "app/blog/utils";
import { getProjects } from "app/showcase/utils";

export const baseUrl = "https://jakemackie.co.uk";

export default async function sitemap() {
  let blogs = getBlogPosts().map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: post.metadata.publishedAt,
  }));

  let projects = getProjects().map((project) => ({
    url: `${baseUrl}/showcase/${project.slug}`,
    lastModified: project.publishedAt,
  }));

  let routes = ["", "/blog", "/showcase"].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split("T")[0],
  }));

  return [...routes, ...blogs, ...projects];
}
