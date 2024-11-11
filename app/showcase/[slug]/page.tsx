import { notFound } from "next/navigation";
import { getProjects, getProject } from "app/showcase/utils";
import { baseUrl } from "app/sitemap";

import Image from "next/image";
import Link from "next/link";

export async function generateStaticParams() {
  let projects = getProjects();

  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata(props) {
  const params = await props.params;
  let project = getProjects().find((project) => project.slug === params.slug);
  if (!project) {
    return;
  }

  let { name: title, description, image, publishedAt } = project;
  let ogImage = image
    ? image
    : `${baseUrl}/og?title=${encodeURIComponent(title)}`;

  return {
    title,
    publishedAt,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      url: `${baseUrl}/showcase/${project.slug}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export default async function Project(props) {
  const params = await props.params;
  let project = getProject(params.slug);

  if (!project) {
    notFound();
  }

  return (
    <div>
      <div className="flex flex-col">
        <h1 className="mb-6 text-5xl md:text-6xl font-semibold tracking-tighter text-center">
          {project.name}
        </h1>
        <Link
          href={project.url}
          target="_blank"
          className="group relative mb-4 flex items-stretch bg-zinc-900 border border-neutral-700 p-2 rounded-xl hover:bg-zinc-800 hover:border-neutral-600 duration-200 ease-in-out"
        >
          <Image
            placeholder="blur"
            blurDataURL={project.blurImage}
            src={project.image}
            alt={project.name}
            width={500}
            height={200}
            className="object-cover rounded-lg aspect-video grow"
          />

          <h2 className="absolute inset-0 flex items-center justify-center text-2xl font-semibold tracking-tighter text-white bg-black/80 opacity-100 md:opacity-0 rounded-xl opacity-0 md:group-hover:opacity-100 duration-200 ease-in-out">
            Visit project
          </h2>
        </Link>
        <div className="flex flex-col text-neutral-400 tabular-nums">
          <p className="mb-4">{project.description}</p>
          <ul className="mb-4 flex flex-wrap gap-2 text-neutral-400">
            {project.technologies.map((technology, index) => (
              <li
                key={index}
                className="after:content-[','] last:after:content-[''] text-sm"
              >
                {technology}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
