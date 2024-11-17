import Image from "next/image";

interface TechnologyProps {
  icon: string;
  highlight: string;
  name: string;
  type: string;
}

export default function Technology({
  icon,
  highlight,
  name,
  type,
}: TechnologyProps) {
  return (
    <div className="relative w-full group">
      <div className="w-fit bg-zinc-950 border border-neutral-800 p-1 rounded-xl hover:bg-zinc-900 hover:border-neutral-700 duration-200 ease-in-out">
        <div className={`p-2 ${highlight} rounded-lg overflow-hidden`}>
          <Image
            src={icon}
            alt={name}
            width={35}
            height={35}
            className="object-cover rounded-md"
            draggable={false}
          />
        </div>
      </div>

      <div className="pointer-events-none z-10 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out absolute left-0 right-0 w-fit justify-center py-1 px-4 bg-zinc-950 border border-neutral-800 rounded-xl">
        {name}
      </div>
    </div>
  );
}
