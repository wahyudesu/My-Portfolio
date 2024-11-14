import { ProjectType } from "app/types/projectType";

import Image from "next/image";
import Link from "next/link";

interface CardProps {
  data: ProjectType;
}

export default function Card({ data }: CardProps) {
  return (
    <Link href={`/showcase/${data.slug}`} className="group">
      <div className="flex flex-col">
        <div className="relative mb-4 flex items-stretch bg-zinc-900 border border-neutral-700 p-2 rounded-xl group-hover:bg-zinc-800 group-hover:border-neutral-600 duration-200 ease-in-out">
          <Image
            placeholder="blur"
            blurDataURL={data.blurImage}
            src={data.image}
            alt={data.name}
            width={500}
            height={200}
            className="object-cover rounded-lg aspect-video grow"
          />

          <div
            className="absolute inset-0 flex flex-col items-start justify-end px-5 pb-7 tracking-tighter bg-black/70 group-hover:bg-black/40 
          rounded-xl duration-200 ease-in-out"
          >
            <h2 className="text-white text-xl sm:text-2xl font-semibold">
              {data.name}
            </h2>
            <p className="text-sm md:text-base font-medium text-neutral-300 tabular-nums leading-normal">
              {data.description.length > 70
                ? (() => {
                    const truncationPoint = 70;
                    const nextSpaceIndex = data.description.indexOf(
                      " ",
                      truncationPoint
                    );

                    const cutoffIndex =
                      nextSpaceIndex !== -1
                        ? nextSpaceIndex
                        : data.description.length;

                    let truncatedText = data.description.substring(
                      0,
                      cutoffIndex
                    );

                    if (!/[a-zA-Z]$/.test(truncatedText)) {
                      truncatedText = truncatedText.slice(0, -1);
                    }

                    return `${truncatedText}...`;
                  })()
                : data.description}
            </p>
          </div>
        </div>
        <div className="ml-2 text-neutral-400 tabular-nums leading-normal">
          <ul className="flex flex-wrap gap-2">
            {data.technologies.map((technology, index) => (
              <li
                key={index}
                className="after:content-[','] last:after:content-[''] text-xs md:text-sm"
              >
                {technology}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Link>
  );
}
