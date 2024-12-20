"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Technologies from "../components/technologies";
import { DotPattern } from "../components/ui/dot-pattern";
import { cn } from "lib/utils";
import Aos from "../components/aos";
import { TextGenerateEffect } from "../components/ui/text-generate-effect";
import React from 'react';
import Typewriter from 'typewriter-effect';
import { AnimatedList } from "../components/ui/animated-list";
import { SocialIcon } from 'react-social-icons'
import 'react-social-icons/email'
import 'react-social-icons/linkedin'
import 'react-social-icons/instagram'
import 'react-social-icons/youtube'
import 'react-social-icons/behance'
import { CircleArrowOutUpRight } from 'lucide-react';

interface Item {
  name: string;
  description: string;
  icon: string;
  color: string;
  time: string;
}
 
let notifications = [
  {
    name: "Selamat datang",
    description: "@wahyu_ikbal",
    time: "Now",
 
    icon: "👋🏻",
    color: "#00C9A7",
  }
];

const Notification = ({ name, description, icon, color, time, onClick }: Item & { onClick: () => void }) => {
  return (
    <figure
      className={cn(
        "relative mx-auto min-h-fit w-full max-w-[400px] cursor-pointer overflow-hidden rounded-2xl p-4",
        // animation styles
        "transition-all duration-200 ease-in-out hover:scale-[103%]",
        // light styles
        "bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
        // dark styles
        "transform-gpu dark:bg-transparent dark:backdrop-blur-md dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
      )}
      onClick={onClick}
    >
      <div className="flex flex-row items-center gap-3">
        <div
          className="flex size-10 items-center justify-center rounded-2xl"
          style={{
            backgroundColor: color,
          }}
        >
          <span className="text-lg">{icon}</span>
        </div>
        <div className="flex flex-col overflow-hidden">
          <figcaption className="flex flex-row items-center whitespace-pre text-lg font-medium dark:text-white ">
            <span className="text-sm sm:text-lg">{name}</span>
            <span className="mx-1">·</span>
            <span className="text-xs text-gray-500">{time}</span>
          </figcaption>
          <p className="text-sm font-normal dark:text-white/60">
            {description}
          </p>
        </div>
      </div>
    </figure>
  );
};

notifications = Array.from({ length: 1 }, () => notifications).flat();

function TypewriterEffectDemo() {
  const [startAnimation, setStartAnimation] = useState(false);

  useEffect(() => {
    // Set a 2-second delay before starting the animation
    const timer = setTimeout(() => {
      setStartAnimation(true);
    }, 0);

    return () => clearTimeout(timer); // Clean up the timer on component unmount
  }, []);

  return (
    <div className="flex flex-col items-center justify-center">
      {startAnimation && (
        <Typewriter
          options={{
            strings: [
              " ",
              "Data Analyst",
              "Full Stack Developer",
              "UI/UX Designer",
              "AI Engineer",
              "Data Scientist",
              "Data Engineer"
            ],
            autoStart: true,
            loop: true,
            wrapperClassName: "text-xl",
            cursorClassName: "text-blue-500 dark:text-blue-500",
            delay: 50, // Decrease delay between each character
            deleteSpeed: 20, // Increase delete speed
          }}
        />
      )}
    </div>
  );
}

export default function Page() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isPopoverVisible, setIsPopoverVisible] = useState(false);
  const [showNotifications, setShowNotifications] = useState(true);
  const baseUrl = "https://whyikbal.vercel.app";

  const toggleModal = () => setIsModalOpen(!isModalOpen);
  const closeModal = () => setIsModalOpen(false);

  // const showPopover = () => setIsPopoverVisible(true);
  // const hidePopover = () => setIsPopoverVisible(false);

  const handleNotificationClick = () => {
    setShowNotifications(false);
    setTimeout(() => {
      setShowNotifications(true);
    }, 100000000); // Show notifications again after 5 seconds
  };

  return (
    <div>
      {showNotifications && (
        <div className="absolute">
          <AnimatedList>
            {notifications.map((item, idx) => (
              <Notification {...item} key={idx} onClick={handleNotificationClick} />
            ))}
          </AnimatedList>
        </div>
      )}

      <div className="h-[calc(100vh-10rem)] flex flex-col justify-center">
        <h1 className="mb-2 text-6xl sm:text-7xl font-semibold tracking-tighter text-center">
          <TextGenerateEffect words="Wahyu Ikbal Maulana" />
        </h1>
        <p className="mx-auto max-w-sm sm:max-w-md mb-2 text-center font-medium sm:text-xl">
          I was a Data Science student at the number 1 best Polytechnic in Southeast Asia.
        </p>
        <Aos />
        <Link
          href="#"
          onClick={toggleModal}
          className="mx-auto my-4 sm:my-6 group w-fit flex items-stretch bg-zinc-950 border border-neutral-700 
            px-4 sm:px-6 py-2 rounded-xl hover:bg-zinc-900 hover:border-neutral-600 duration-200 
            ease-in-out outline-2 outline-transparent focus:outline-blue-500 font-medium"
          data-aos="zoom-out"
          data-aos-delay="150"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="300"
        >
          Connect with me
        </Link>
        <div>
          <TypewriterEffectDemo />
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div
          tabIndex={-1}
          aria-hidden={!isModalOpen}
          className="fixed inset-0 flex items-center justify-center z-50 overflow-y-auto bg-black bg-opacity-50"
          onClick={closeModal}
        >
          <div className="relative p-4 w-full max-w-sm max-h-full" onClick={(e) => e.stopPropagation()}>
            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
              {/* Modal header */}
              <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Connect With Me</h3>
                <button
                  type="button"
                  onClick={closeModal}
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
                    href="mailto:why.ikbal@gmail.com"
                    className="group relative gap-2 flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white"
                  >
                    <SocialIcon
                      url="www.email.com"
                      style={{ width: '28px', height: '28px' }}
                    />
                    Email Me
                    <span
                      className="absolute right-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-300"
                    >
                      <CircleArrowOutUpRight size={15} strokeWidth={2} />
                    </span>
                  </a>
                </li>

                  <li>
                    <div className="relative">
                      <a
                        href="https://www.linkedin.com/in/wahyuikbalmaulana"
                        // onMouseEnter={showPopover}
                        // onMouseLeave={hidePopover}
                        className="gap-2 flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300"
                      >
                      <SocialIcon url="www.linkedin.com" style={{ width: '28px', height: '28px' }}/>

                        Connect Linkedin
                      </a>

                    </div>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/@why_ikbal"
                      className="gap-2 flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white"
                    >
                      <SocialIcon url="www.instagram.com" style={{ width: '28px', height: '28px' }}/>
                      Follow Instagram
                    </a> 
                  </li>
                  <li>
                    <a
                      href="https://www.youtube.com/@Wahyuikbalmaulana"
                      className="gap-2 flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white"
                    >
                      <SocialIcon url="www.youtube.com" style={{ width: '28px', height: '28px' }}/>
                      Subscribe my YouTube
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.behance.net/wahyuikbal"
                      className="gap-2 flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white"
                    >
                      <SocialIcon url="www.behance.com" style={{ width: '28px', height: '28px' }}/>
                      Follow my Behance
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
      
      <div className="space-y-10 mt-14 lg:mt-19">
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
                  Kanotaria
                </Link>
                {","} where I contribute to various real-world projects. You can
                find these on the{" "}
                <Link
                  href={`${baseUrl}/showcase`}
                  className="text-blue-500 underline outline-2 outline-transparent focus:outline-blue-500"
                >
                  showcase
                </Link>{" "}
                page. Where I explain my involvement in each project and provide
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
                Lorem ipsum {" "}
                {" (NHS) "} 
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-8 mt-16 flex flex-col gap-8">
        <div className="mt-10 lg:mt-1">
          <h2 className="text-2xl lg:text-3xl font-semibold tracking-tighter text-center sm:text-left">
            Skills - Tools
          </h2>
          <p className="mt-2 text-neutral-400 text-center sm:text-left">
            <span className="inline-block sm:hidden">Tap</span>
            <span className="hidden sm:inline-block">Hover</span> on an icon to
            view its name.
          </p>
          <Technologies />
        </div>
      </div>
      <DotPattern className={cn("-z-10 opacity-50 [mask-image:radial-gradient(300px_circle_at_center,white,transparent)]")}/>
    </div>
  );
}
