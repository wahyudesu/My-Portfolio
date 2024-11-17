import allProjects from "app/json/projects.json";
import { Card, CardHeader, CardTitle, CardDescription, CardFooter } from "app/components/cards";
import { Badge } from "@/components/ui/badge"; // Import Badge
import Aos from "app/components/aos";
import Link from "next/link";

export default function Projects() {
  return (
    <div className="container mx-auto">
      <Aos />
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        {allProjects.map((project, index) => (
          <div key={index} data-aos="fade-up">
            <Card className="flex flex-col overflow-hidden p-4 border border-gray-800 hover:shadow-lg transition-all duration-300 ease-out h-full shadow-md">
              {/* Card Content */}
              <div className="flex-grow space-y-2">
                <CardHeader>
                  <CardTitle className="mb-2 text-lg">
                    {project.name}
                  </CardTitle>
                  <CardDescription className="prose max-w-full text-pretty text-xs text-muted-foreground dark:prose-invert">
                    {project.description}
                  </CardDescription>
                </CardHeader>
              </div>
              {/* Card Footer */}
              <CardFooter className="mt-auto">
                <div className="flex flex-col gap-2 w-full">
                  {/* Tags Section */}
                  <div className="mt-2 flex flex-wrap gap-1">
                    {project.technologies?.map((tag) => (
                      <Badge
                        className="px-1 py-0 text-[10px]"
                        variant="secondary"
                        key={tag}
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  {/* Link Section */}
                  <div className="flex flex-row flex-wrap items-start gap-1">
                    {project.url && (
                      <Link href={project.url} target="_blank">
                        <Badge className="flex gap-1.5 px-2 text-[11px]">
                          <img src="/icons/internet.svg" alt="Website" width={12} height={12} />
                          Website
                        </Badge>
                      </Link>
                    )}
                    {project.code && (
                      <Link href={project.code} target="_blank">
                        <Badge className="flex gap-1.5 px-2 text-[11px]">
                          <img src="/icons/github_2.svg" alt="Code" width={12} height={12} />
                          Code
                        </Badge>
                      </Link>
                    )}
                    {project.document && (
                      <Link href={project.document} target="_blank">
                        <Badge className="flex gap-1.5 px-2 text-[11px]">
                          <img src="/icons/document.svg" alt="Paper" width={12} height={12} />
                          Paper
                        </Badge>
                      </Link>
                    )}
                  </div>
                </div>
              </CardFooter>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}
