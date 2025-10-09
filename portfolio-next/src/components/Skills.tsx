"use client";

import React from "react";
import Image from "next/image";

interface Skill {
  name: string;
  img: string;
  alt: string;
  glowClass?: string; // Optional glow class if you want to add glow per skill
}

const skills: Skill[] = [
  { name: "HTML", img: "/images/HTML.png", alt: "HTML" },
  { name: "CSS", img: "/images/CSS.png", alt: "CSS" },
  { name: "JavaScript", img: "/images/JS.png", alt: "JavaScript" },
  { name: "Tailwind CSS", img: "/images/Tailwind CSS.png", alt: "Tailwind CSS" },
  { name: "Bootstrap", img: "/images/Bootstrap.png", alt: "Bootstrap" },
  { name: "Git", img: "/images/git.png", alt: "Git" },
  { name: "Github", img: "/images/GitHub.png", alt: "GitHub" },
  { name: "Figma", img: "/images/figma.png", alt: "Figma" },
  { name: "NextJS", img: "/images/Next.js.png", alt: "NextJS" },
  { name: "NodeJS", img: "/images/nodeJS.png", alt: "NodeJS" },
  { name: "Vite.js", img: "/images/Vite.js.png", alt: "ViteJS" },
  { name: "TypeScript", img: "/images/TypeScript.png", alt: "Typescript" },
  { name: "Vercel", img: "/images/Vercel.png", alt: "Vercel" },
  { name: "Sequelize", img: "/images/sequelize.png", alt: "Sequelize" },
  { name: "MySQL", img: "/images/mysql.png", alt: "MySQL" },
  { name: "Express", img: "/images/express.png", alt: "Express" },
];

const Skills: React.FC = () => {
  return (
    <section
      id="skills"
      className="relative bg-gradient-to-b via-[#1b1733] to-[#0f0a1a] py-20"
    >
      {/* Subtle overlay to match galaxy theme */}
      <div className="absolute inset-0 bg-black/10 pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6">
        {/* Title */}
        <h2 className="text-4xl font-bold text-center text-[#cfcff9] mb-12 drop-shadow-[0_0_10px_rgba(180,170,255,0.3)]">
          My Skills
        </h2>

        {/* Skills Grid */}
        <div
          className="
            grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6
            gap-10 place-items-center
          "
        >
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="
                flex flex-col items-center text-center transition-transform duration-300
                hover:scale-110 hover:drop-shadow-[0_0_12px_rgba(168,158,252,0.7)]
              "
            >
              {/* Updated Image wrapper for Next.js fill */}
              <div className="relative w-14 h-14 mb-2">
                <Image
                  src={skill.img}
                  alt={skill.alt}
                  fill // <-- NEW: required by Next.js for responsive images
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" // <-- NEW: responsive sizing
                  className="object-contain rounded-lg" // keeps aspect ratio
                />
              </div>

              <span className="text-sm text-gray-300">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
