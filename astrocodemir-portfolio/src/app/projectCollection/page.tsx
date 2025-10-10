"use client";

import { useState } from "react";
import ProjectGrid from "../../components/ProjectGrid";

export default function ProjectCollection() {
  const [activeTab, setActiveTab] = useState("web-dev");

const tabs = [
    { id: "web-dev", label: "Web" },
    { id: "docs", label: "Docs" },
    { id: "vids", label: "Media" },
    { id: "others", label: "Others" },
  ];
  const webDevProjects = [
  {
    id: "web1",
    title: "Daily-Dash",
    description: "A dashboard project with e-commerce solution, users, and admin features with a modern, responsive user interface and a back-end. (Ongoing)",
    images: ["/dash/DL001.png", "/dash/DL002.png", "/dash/DL003.png", "/dash/DL004.png"],
    link: "/projectCollection/project-daily-dash",
  },
{
    id: "web2",
    title: "Aly's Craft",
    description: "Mobile-responsive project currently being migrated to another deployment app. (Ongoing).",
    images: ["/alys/AC001.png", "/alys/AC002.png", "/alys/AC003.png", "/alys/AC004.png"],
    link: "/projectCollection/project-alys-craft",
  },
    {
    id: "web3",
    title: "Portfolio Website",
    description: "A personal portfolio website showcasing projects, skills, and experience with a clean and modern design.",
    images: ["/portfolio/AS001.png", "/portfolio/AS002.png", "/portfolio/AS003.png", "/portfolio/AS004.png"],
    link: "/projectCollection/project-portfolio",
  },
    {
    id: "web4",
    title: "Lucent Chandelier",
    description: "Completed showcase website for various chandelier lights. Fully mobile-responsive.",
    images: ["/lucent/LC001.png", "/lucent/LC002.png", "/lucent/LC003.png", "/lucent/LC004.png"],
    link: "/projectCollection/project-lucent-chandelier",
  },
      {
    id: "web5",
    title: "Baked Cookies",
    description: "Completed project with a mini responsive cart system. Fully mobile-responsive..",
    images: ["/baked/BC001.png", "/baked/BC002.png", "/baked/BC003.png", "/baked/BC004.png"],
    link: "/projectCollection/project-baked-cookies",
  },
];

const docsProjects = [
{
    id: "doc1",
    title: "Academic Thesis Assistance",
    description: "Supported clients with research, documentation, and visual representation for academic theses.",
    images: ["/docs/DOC001.jpg"],
    link:"/projectCollection/thesis-sustainable-dev",
},
{
    id: "doc2",
    title: "Cybersecurity & Digital Forensics",
    description: "Supported clients with research, documentation, and visual representation for academic theses.",
    images: ["/docs/DOC002.jpg"],
    link:"/projectCollection/iloveyou-virus",
},
{
    id: "doc3",
    title: "Finance & Economics",
    description: "Supported clients with research, documentation, and visual representation for academic theses.",
    images: ["/docs/DOC003.jpg"],
    link:"/projectCollection/finance-research",
},
];

const vidProjects = [
{
    id: "vid1",
    title: "Youtube & Tiktok Creations",
    description: "Produced engaging short-form and long-form videos for social media platforms, focusing on storytelling, editing flow, and audience engagement strategies.",
    images: ["/vids/VD001.jpg"],
    link:"/projectCollection/video-creations-1",
},
{
    id: "vid2",
    title: "Promotional Video Projects",
    description: "Created visually appealing promotional videos for events and campaigns, handling script flow, editing, and branding consistency across all visuals.",
    images: ["/vids/VD002.jpg"],
    link:"/projectCollection/video-promotion-4",
},
{
    id: "vid3",
    title: "Ads",
    description: "Developed concise ad-style videos highlighting brand messages through motion graphics, sound synchronization, and strong visual identity.",
    images: ["/vids/VD003.jpg"],
    link:"/projectCollection/video-ads-5",
}
];

  return (
    <div className="relative">
      {/* Content */}
      <main className="container mx-auto px-4 py-16 md:py-24 pt-32">
        {/* Page Header */}
        <section className="text-center mb-16">
  <h1 className="text-3xl md:text-5xl font-bold mb-3 bg-gradient-to-r from-purple-400 via-indigo-300 to-blue-400 bg-clip-text text-transparent drop-shadow-[0_0_8px_rgba(120,100,255,0.3)]">
    My Professional Portfolio
  </h1>
  <p className="text-base md:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
    A showcase of my web development, research, and creative work — built with passion, precision, and purpose.
  </p>
</section>


        {/* Tabs */}

<div className="mb-10">
  <div className="flex justify-center">
    <nav
      className="flex flex-wrap justify-center gap-1.5 bg-[#0f0a1a]/70 backdrop-blur-sm p-1.5 rounded-xl border border-[#1e1830]/70 shadow-inner"
      aria-label="Tabs"
    >
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => setActiveTab(tab.id)}
          className={`relative py-1.5 px-4 rounded-md font-medium text-sm transition-all duration-300
            ${
              activeTab === tab.id
                ? "bg-gradient-to-r from-[#1b1733] to-[#2a2250] text-white shadow-md shadow-[#2a2250]/30"
                : "text-gray-300 hover:text-white hover:bg-[#1b1733]/60"
            }`}
        >
          {tab.label}

          {/* Soft underline for active tab */}
          {activeTab === tab.id && (
            <span className="absolute inset-x-3 bottom-0 h-[2px] bg-gradient-to-r from-[#6b61ff] via-[#8a7dff] to-transparent rounded-full opacity-70"></span>
          )}
        </button>
      ))}
    </nav>
  </div>

  {/* Tab Content */}
  <div className="mt-6 text-white text-center">
    {activeTab === "web-dev" && <ProjectGrid projects={webDevProjects} />}
    {activeTab === "docs" && <ProjectGrid projects={docsProjects} />}
    {activeTab === "vids" && <ProjectGrid projects={vidProjects} />}
    {activeTab === "others" && <div>🗂️ Other Content Here</div>}
  </div>
</div>



      </main>
    </div>
  );
}
