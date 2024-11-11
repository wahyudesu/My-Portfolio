"use client";

import { useState } from "react";

export default function Resume() {
  const [cvAtsText, setCvAtsText] = useState("CV ATS");
  const [resumeKreatifText, setResumeKreatifText] = useState("Resume Kreatif");

  const handleCvAtsClick = () => {
    setCvAtsText((prevText) => (prevText === "CV ATS" ? "Done" : "CV ATS"));
    // Tambahkan logika untuk mengunduh file CV ATS di sini, jika diperlukan
    window.open("https://drive.google.com/file/d/19D8u5UzKSp1F3XDs22rzW6TEfBt1e1v3/view?usp=sharing", '_blank'); // Sample link untuk CV ATS
  };

  const handleResumeKreatifClick = () => {
    setResumeKreatifText((prevText) => (prevText === "Resume Kreatif" ? "Done" : "Resume Kreatif"));
    // Tambahkan logika untuk mengunduh file Resume Kreatif di sini, jika diperlukan
    window.open("https://drive.google.com/file/d/19D8u5UzKSp1F3XDs22rzW6TEfBt1e1v3/view?usp=sharing", '_blank'); // Sample link untuk Resume Kreatif
  };

  return (
    <div>
      <h1 className="font-semibold text-5xl md:text-6xl mb-8 tracking-tighter">
        My Resume
      </h1>
      <p className="mb-4">
        A summary of my educational background, experiences, and skills. Download my resume to learn more about my journey.
      </p>

      <section>
        <h2 className="font-semibold text-3xl md:text-4xl mb-4">Education</h2>
        <ul>
          <li className="mb-2">
            <h3 className="font-medium text-xl">Politeknik Elektronika Negeri Surabaya</h3>
            <p>Applied Data Science, 2023 - Present</p>
          </li>
          {/* Tambahkan lebih banyak item pendidikan jika diperlukan */}
        </ul>
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
