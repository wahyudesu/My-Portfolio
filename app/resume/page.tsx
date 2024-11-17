"use client";

import { useState } from "react";
import { badgeVariants } from "app/components/ui/badge";
import NumberTicker from "@/components/ui/number-ticker";

export default function Resume() {
  const [cvAtsText, setCvAtsText] = useState("CV ATS");
  const [resumeKreatifText, setResumeKreatifText] = useState("Resume Kreatif");

  const handleCvAtsClick = () => {
    setCvAtsText((prevText) => (prevText === "CV ATS" ? "Done" : "CV ATS"));
    window.open("https://drive.google.com/file/d/19D8u5UzKSp1F3XDs22rzW6TEfBt1e1v3/view?usp=sharing", '_blank');
  };

  const handleResumeKreatifClick = () => {
    setResumeKreatifText((prevText) => (prevText === "Resume Kreatif" ? "Done" : "Resume Kreatif"));
    window.open("https://drive.google.com/file/d/19D8u5UzKSp1F3XDs22rzW6TEfBt1e1v3/view?usp=sharing", '_blank');
  };

  return (
    <div>
      <h1 className="font-semibold text-5xl md:text-6xl mb-8 tracking-tighter">
        My Resume
      </h1>
      <p className="mb-4">
        A summary of my educational background, experiences, and skills. Download my resume to learn more about my journey.
      </p>
      <h3 className="font-bold text-xl">My Skill</h3>
      <div className="flex gap-2 mt-4">
        <span className={badgeVariants({ variant: "outline" })}>Artificial Intelligence</span>
        <span className={badgeVariants({ variant: "outline" })}>Data analysis</span>
        <span className={badgeVariants({ variant: "outline" })}>UI/UX</span>
      </div>
      <div className="flex items-start content-around gap-2 flex-wrap mt-2 mb-8">
        <span className={badgeVariants({ variant: "outline" })}>Problem Solving</span>
        <span className={badgeVariants({ variant: "outline" })}>Management</span>
        <span className={badgeVariants({ variant: "outline" })}>Teamwork</span>
        <span className={badgeVariants({ variant: "outline" })}>Project Management</span>
      </div>

      
      <section>
        <h2 className="font-semibold text-3xl md:text-4xl mb-12">
          <NumberTicker value={10} />+ Project
        </h2>
        <h2 className="font-semibold text-3xl md:text-4xl mb-12">
          <NumberTicker value={50} />+ Certificate
        </h2>
        <h2 className="font-semibold text-3xl md:text-4xl mb-12">
          <NumberTicker value={10} />+ Experience
        </h2>
        <h2 className="font-semibold text-3xl md:text-4xl mb-12">
          <NumberTicker value={3} />+ Volunteer
        </h2>
      </section>
      <div className="flex space-x-4 mt-4">
        <button
          onClick={handleCvAtsClick}
          className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded focus:bg-blue-900"
        >
          {cvAtsText}
        </button>
        <button
          onClick={handleResumeKreatifClick}
          className="bg-green-500 hover:bg-green-400 text-white font-bold py-2 px-4 border-b-4 border-green-700 hover:border-green-500 rounded focus:bg-green-900"
        >
          {resumeKreatifText}
        </button>
      </div>
    </div>
  );
}
