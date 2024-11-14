"use client";

import { useEffect, useRef, useState } from "react";

const allTabs = [
  { id: "Writing", name: "Writing" },
  { id: "Reading", name: "Reading" },
];

type TabslideProps = {
  onTabChange: (index: number) => void;
  initialTab: number;
};

const Tabslide = ({ onTabChange, initialTab }: TabslideProps) => {
  const tabsRef = useRef<(HTMLElement | null)[]>([]);
  const [activeTabIndex, setActiveTabIndex] = useState<number>(initialTab);
  const [tabUnderlineWidth, setTabUnderlineWidth] = useState(0);
  const [tabUnderlineLeft, setTabUnderlineLeft] = useState(0);

  useEffect(() => {
    const setTabPosition = () => {
      const currentTab = tabsRef.current[activeTabIndex] as HTMLElement;
      setTabUnderlineLeft(currentTab?.offsetLeft ?? 0);
      setTabUnderlineWidth(currentTab?.clientWidth ?? 0);
    };

    setTabPosition();
  }, [activeTabIndex]);

  const handleTabClick = (index: number) => {
    setActiveTabIndex(index);
    onTabChange(index); // Notify parent component of tab change
  };

  return (
    <div className="flex relative mb-2 h-12 rounded-3xl border border-black/40 px-2 backdrop-blur-sm">
      <span
        className="absolute bottom-0 top-0 flex overflow-hidden rounded-3xl py-2 transition-all duration-400"
        style={{ left: tabUnderlineLeft, width: tabUnderlineWidth }}
      >
        <span className="h-full w-full rounded-3xl bg-gray-200/30" />
      </span>

      {allTabs.map((tab, index) => (
        <button
          key={index}
          ref={(el) => {
            if (el) tabsRef.current[index] = el;
          }}
          className={`${
            activeTabIndex === index ? "" : "hover:text-neutral-300"
          } my-auto cursor-pointer select-none rounded-full px-4 text-center font-light text-white`}
          onClick={() => handleTabClick(index)}
        >
          {tab.name}
        </button>
      ))}
    </div>
  );
};

export default Tabslide;
