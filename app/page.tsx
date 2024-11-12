"use client";

import { useState } from "react";
import Link from "next/link";
import Technologies from "app/components/technologies";
import DotPattern from "app/components/ui/dot-pattern";
import { cn } from "lib/utils";
import Aos from "app/components/aos";

export default function Page() {
  const [isModalOpen, setIsModalOpen] = useState(false); // State for modal visibility
  const baseUrl = "YOUR_BASE_URL"; // Replace with your actual base URL

  // Function to toggle the modal visibility
  const toggleModal = () => setIsModalOpen(!isModalOpen);

  // Close modal when clicking outside the modal content
  const closeModal = () => setIsModalOpen(false);

  return (
    <div>
      <div className="h-[calc(100vh-15rem)] flex flex-col justify-center">
        <h1 className="mb-2 text-6xl sm:text-7xl font-semibold tracking-tighter text-center">
          Wahyu Ikbal Maulana
        </h1>
        <p className="mx-auto max-w-sm sm:max-w-md mb-2 text-center font-medium sm:text-xl">
          I am a Data Science student at the top polytechnic in Southeast Asia.
        </p>
        <Aos />
        <Link
          href="#"
          onClick={toggleModal} // Open modal when clicked
          className="mx-auto my-4 sm:my-6 group w-fit flex items-stretch bg-zinc-950 border border-neutral-700 
            px-4 sm:px-6 py-2 rounded-xl hover:bg-zinc-900 hover:border-neutral-600 duration-200 
            ease-in-out outline-2 outline-transparent focus:outline-blue-500 font-medium"
          data-aos="zoom-out"
          data-aos-delay="150"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="300"
        >
          Contact me
        </Link>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div
          tabIndex={-1}
          aria-hidden={!isModalOpen}
          className="fixed inset-0 flex items-center justify-center z-50 overflow-y-auto bg-black bg-opacity-50"
          onClick={closeModal} // Close modal when clicked outside
        >
          <div className="relative p-4 w-full max-w-sm max-h-full" onClick={(e) => e.stopPropagation()}>
            {/* Modal content */}
            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
              {/* Modal header */}
              <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Connect With Me
                </h3>
                <button
                  type="button"
                  onClick={closeModal} // Close the modal on click
                  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm h-8 w-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  <svg
                    className="w-3 h-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 14"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                    />
                  </svg>
                  <span className="sr-only">Close modal</span>
                </button>
              </div>
              {/* Modal body */}
              <div className="p-4 md:p-5">
                <p className="text-sm font-normal text-gray-500 dark:text-gray-400">
                  Connect with me on any of the following platforms:
                </p>
                <ul className="my-4 space-y-3">
                  <li>
                    <a
                      href="mailto:your.email@example.com"
                      className="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white"
                    >
                      Email Me
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/in/wahyuikbalmaulana"
                      className="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white"
                    >
                      Connect Linkedin
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/@why_ikbal"
                      className="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white"
                    >
                      Follow Instagram
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.youtube.com/channel/your-channel"
                      className="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white"
                    >
                      Subscribe my YouTube
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.behance.net/your-profile"
                      className="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white"
                    >
                      Follow my Behance
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="space-y-8">
        <h2 className="text-2xl lg:text-3xl font-semibold tracking-tighter text-center sm:text-left">
          My experience
        </h2>
        <div className="flex flex-col gap-8">
          <div className="flex flex-col">
            <h3 className="text-xl lg:text-2xl font-semibold tracking-tighter mb-4">
              Data Analyst
            </h3>
            <div className="h-full border-l-2 pl-4 border-zinc-600">
              <p className="text-lg font-semibold tracking-tighter">
                2024 - Current
              </p>
              <p className="text-neutral-400">
                I am currently working at{" "}
                <Link
                  href="https://hiyield.co.uk/"
                  target="_blank"
                  className="text-blue-500 underline outline-2 outline-transparent focus:outline-blue-500"
                >
                  Hiyield
                </Link>
                , where I contribute to various real-world projects. You can
                find these on the{" "}
                <Link
                  href={`${baseUrl}/showcase`}
                  className="text-blue-500 underline outline-2 outline-transparent focus:outline-blue-500"
                >
                  showcase
                </Link>{" "}
                page, where I explain my involvement in each project and provide
                a link to the live site.
              </p>
            </div>
          </div>

          <div className="flex flex-col">
            <h3 className="text-xl lg:text-2xl font-semibold tracking-tighter mb-4">
              Freelance Data Infographics
            </h3>
            <div className="h-full border-l-2 pl-4 border-zinc-600">
              <p className="text-lg font-semibold tracking-tighter">2023</p>
              <p className="text-neutral-400">
                Work experience at{" "}
                <Link
                  href="https://cits.royalcornwallhospitals.nhs.uk/"
                  target="_blank"
                  className="text-blue-500 underline outline-2 outline-transparent focus:outline-blue-500"
                >
                  CITS
                </Link>
                . As a freelancer, I contributed to the company's data
                visualization for hospital performance monitoring.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Technologies />
      
      <DotPattern
        className={cn(
          "-z-10 opacity-50 [mask-image:radial-gradient(300px_circle_at_center,white,transparent)]"
        )}
      />
    </div>
  );
}
