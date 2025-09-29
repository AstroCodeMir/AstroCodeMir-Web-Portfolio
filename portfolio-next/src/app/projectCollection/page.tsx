"use client";

import { useState } from "react";
import Background from "../../components/Background";

export default function ProjectCollection() {
  const [activeTab, setActiveTab] = useState("web-dev");

  const tabs = [
    { id: "web-dev", label: "Web Development" },
    { id: "docs", label: "Documentation & Templates" },
    { id: "research", label: "Research & Development" },
    { id: "others", label: "Others" },
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
            {activeTab === "web-dev" && <div>🌐 Web Development Content Here</div>}
            {activeTab === "docs" && <div>📄 Documentation & Templates Content</div>}
            {activeTab === "research" && <div>🔬 Research & Development Content</div>}
            {activeTab === "others" && <div>🗂️ Other Content Here</div>}
          </div>
        </div>
      </main>
    </div>
  );
}
