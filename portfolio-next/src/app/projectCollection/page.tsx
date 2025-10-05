"use client";

import { useState } from "react";
import Background from "../../components/Background";
import ProjectGrid from "../../components/ProjectGrid";

export default function ProjectCollection() {
  const [activeTab, setActiveTab] = useState("web-dev");

  const tabs = [
    { id: "web-dev", label: "Web Development" },
    { id: "docs", label: "Documentation & Templates" },
    { id: "research", label: "Research & Development" },
    { id: "others", label: "Others" },
  ];
  const webDevProjects = [
  {
    id: "web1",
    title: "Daily-Dash",
    description: "A dashboard project with e-commerce solution, users, and admin features with a modern, responsive user interface and a back-end. (Ongoing)",
    images: ["/dash/DL001.png", "/dash/DL002.png", "/dash/DL003.png", "/dash/DL004.png"],
    link: "#",
  },
  {
    id: "web2",
    title: "Aly's Craft",
    description: "Mobile-responsive project currently being migrated to another deployment app. (Ongoing).",
    images: ["/alys/AC001.png", "/alys/AC002.png", "/alys/AC003.png", "/alys/AC004.png"],
    link: "#",
  },
    {
    id: "web3",
    title: "Portfolio Website",
    description: "A personal portfolio website showcasing projects, skills, and experience with a clean and modern design.",
    images: ["/portfolio/AS001.png", "/portfolio/AS002.png", "/portfolio/AS003.png", "/portfolio/AS004.png"],
    link: "#",
  },
    {
    id: "web4",
    title: "Lucent Chandelier",
    description: "Completed showcase website for various chandelier lights. Fully mobile-responsive.",
    images: ["/lucent/LC001.png", "/lucent/LC002.png", "/lucent/LC003.png", "/lucent/LC004.png"],
    link: "#",
  },
      {
    id: "web5",
    title: "Baked Cookies",
    description: "Completed project with a mini responsive cart system. Fully mobile-responsive..",
    images: ["/baked/BC001.png", "/baked/BC002.png", "/baked/BC003.png", "/baked/BC004.png"],
    link: "#",
  },
];

const resProjects = [
{
    id: "res1",
    title: "Academic Thesis Assistance",
    description: "Supported clients with research, documentation, and visual representation for academic theses.",
    images: ["/res/RD001.jpg"],
    link:"/projectCollection/thesis-sustainable-dev",
},
{
    id: "res2",
    title: "Cybersecurity & Digital Forensics",
    description: "Supported clients with research, documentation, and visual representation for academic theses.",
    images: ["/res/RD002.jpg"],
    link:"/projectCollection/iloveyou-virus",
},
{
    id: "res3",
    title: "Finance & Economics",
    description: "Supported clients with research, documentation, and visual representation for academic theses.",
    images: ["/res/RD003.jpg"],
    link:"#",
},
];

  return (
    <div className="relative">
      {/* Background (Reusable) */}
      <Background />

      {/* Content */}
      <main className="container mx-auto px-4 py-16 md:py-24 pt-32">
        {/* Page Header */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">
            My Professional Portfolio
          </h1>
          <p className="text-lg md:text-xl text-white max-w-3xl mx-auto">
            A curated collection of my work, from full-stack web applications to research and creative projects.
          </p>
        </section>

        {/* Tabs */}
        <div className="mb-12">
          <div className="flex justify-center">
            <nav
              className="flex space-x-2 md:space-x-4 bg-slate-800/60 p-2 rounded-lg border border-slate-700"
              aria-label="Tabs"
            >
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`py-2 px-4 rounded-md font-medium text-sm transition-colors duration-300
                    ${
                      activeTab === tab.id
                        ? "bg-purple-600 text-white shadow-lg"
                        : "text-gray-400 hover:text-white"
                    }`}
                >
                  {tab.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Tab Content */}
          <div className="mt-6 text-white text-center">
              {activeTab === "web-dev" && <ProjectGrid projects={webDevProjects} />}
            {activeTab === "docs" && <div>📄 Documentation & Templates Content</div>}
            {activeTab === "research" && <ProjectGrid projects={resProjects}/>}
            {activeTab === "others" && <div>🗂️ Other Content Here</div>}
          </div>
          
        </div>
      </main>
    </div>
  );
}
