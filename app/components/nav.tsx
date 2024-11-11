import Link from "next/link";

const navItems = {
  "/": {
    name: "home",
  },
  "/showcase": {
    name: "showcase",
  },
  "/resume": {
    name: "resume",
  },
  "/blog": {
    name: "blog",
  },
  "/mybook": {
    name: "mybook",
  },
};

export function Navbar() {
  return (
    <aside className="-ml-[8px] mb-16 tracking-tight">
      <div className="lg:sticky lg:top-20">
        <nav
          className="flex flex-row items-start relative px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative"
          id="nav"
        >
          <div className="flex flex-row space-x-0 pr-10">
            {Object.entries(navItems).map(([path, { name }]) => {
              return (
                <Link
                  key={path}
                  href={path}
                  className="transition-all text-neutral-200 flex align-middle relative py-1 px-2 m-1 outline-2 outline-transparent focus:outline-blue-500"
                >
                  {name}
                </Link>
              );
            })}
            {/* <ModeToggle /> */}
          </div>
        </nav>
      </div>
    </aside>
  );
}
