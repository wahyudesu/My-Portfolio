import Link from "next/link";
import Image from "next/image";
import Github from "@/public/icons/github.svg";
import LinkedIn from "@/public/icons/linkedin.svg";

export default function Footer() {
  return (
    <footer className="mt-8 mb-16 flex flex-col sm:flex-row justify-center sm:justify-start sm:items-center gap-4 sm:gap-8">
      <p className="text-neutral-300">
        © {new Date().getFullYear()} Wahyu Ikbal Maulana. All rights reserved.
      </p>
      <div className="flex items-center gap-4 shrink-0">
        <Link
          aria-label="Github"
          href="https://github.com/wahyudesu"
          target="_blank"
          rel="noopener noreferrer"
          className="outline-2 outline-transparent focus:outline-blue-500"
        >
          <Image
            src={Github}
            alt="Github"
            width={32}
            height={32}
            className="opacity-50 hover:opacity-100 duration-300 ease-in-out"
          />
        </Link>

        <Link
          aria-label="LinkedIn"
          href="https://www.linkedin.com/in/wahyuikbalmaulana/"
          target="_blank"
          rel="noopener noreferrer"
          className="outline-2 outline-transparent focus:outline-blue-500"
        >
          <Image
            src={LinkedIn}
            alt="LinkedIn"
            width={32}
            height={32}
            className="opacity-50 hover:opacity-100 duration-300 ease-in-out"
          />
        </Link>
      </div>
    </footer>
  );
}
