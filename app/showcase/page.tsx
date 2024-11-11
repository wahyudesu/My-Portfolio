import type { Metadata } from "next";
import Projects from "app/components/projects";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Showcase",
  description:
    "An overview of both personal and professional projects I've made contributions to.",
  openGraph: {
    title: "Showcase",
  },
};

export default function Showcase() {
  return (
    <div>
      <h1 className="mb-8 text-5xl md:text-6xl font-semibold tracking-tighter">
        Showcase
      </h1>
      <span className="mb-4">
        Here's an overview of the projects I've contributed to. These include a
        mix of personal initiatives and my work at Hiyield. All these projects
        are live and available for you to explore. Any in-development personal
        work can be found open-sourced on my{" "}
        <Link
          href="https://github.com/jakemackie"
          target="_blank"
          className="text-blue-500 underline"
        >
          GitHub
        </Link>{" "}
        profile.
      </span>
      <div className="my-8 lg:my-12">
        <Projects />
      </div>
    </div>
  );
}
