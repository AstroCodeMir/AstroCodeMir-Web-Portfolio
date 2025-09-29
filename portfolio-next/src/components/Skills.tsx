// src/components/Skills.tsx
"use client";

import React from "react";

interface Skill {
  name: string;
  img: string;
  alt: string;
  glowClass?: string;
}

const skills: Skill[] = [
  { name: "HTML", img: "/images/HTML.png", alt: "HTML", glowClass: "html-glow" },
  { name: "CSS", img: "/images/CSS.png", alt: "CSS", glowClass: "css-glow" },
  { name: "JavaScript", img: "/images/JS.png", alt: "JavaScript", glowClass: "js-glow" },
  { name: "Tailwind CSS", img: "/images/Tailwind CSS.png", alt: "Tailwind CSS", glowClass: "tailwind-glow" },
  { name: "Bootstrap", img: "/images/Bootstrap.png", alt: "Bootstrap", glowClass: "bootstrap-glow" },
  { name: "Git", img: "/images/git.png", alt: "Git", glowClass: "git-glow" },
  { name: "Figma", img: "/images/figma.png", alt: "Figma", glowClass: "figma-glow" },
  { name: "NodeJS", img: "/images/nodeJS.png", alt: "NodeJS", glowClass: "node-glow" },
  { name: "Vite.js", img: "/images/Vite.js.png", alt: "ViteJS", glowClass: "vite-glow" },
  { name: "Vercel", img: "/images/Vercel.png", alt: "Vercel", glowClass: "vercel-glow" },
  { name: "Sequelize", img: "/images/sequelize.png", alt: "Sequelize", glowClass: "sequelize-glow" },
  { name: "MySQL", img: "/images/mysql.png", alt: "MySQL", glowClass: "mysql-glow" },
  { name: "Express", img: "/images/express.png", alt: "Express", glowClass: "express-glow" },
];

const Skills: React.FC = () => {
  return (
    <section id="skills">
      <div className="max-w-6xl mx-auto px-6">
        {/* Title */}
        <div
          data-animate
          className="relative block w-full opacity-0 translate-y-5 transition-all duration-700 ease-out delay-100"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-white mb-12">
            My Skills
          </h2>
        </div>
      </div>

      {/* Skills Grid */}
      <div className="flex flex-wrap justify-center gap-10">
        {skills.map((skill, index) => (
          <div
            key={skill.name}
            data-animate
            className={`relative inline-block opacity-0 translate-y-5 transition-all duration-700 ease-out delay-${
              100 + index * 100
            }`}
          >
            <div className="flex flex-col items-center">
              <img
                src={skill.img}
                alt={skill.alt}
                className={`w-14 h-14 mb-2 icon-glow ${skill.glowClass || ""}`}
              />
              <span className="text-white">{skill.name}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
