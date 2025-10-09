"use client";

import { useParams, useRouter } from "next/navigation";
import { projects } from "../projectData";

export default function ProjectDetail() {
  const { id } = useParams();
  const router = useRouter();

  // Find the current project
  const currentProject = projects.find((p) => p.id === id);

  if (!currentProject) {
    return <div className="p-10 text-white">404 – Project not found</div>;
  }

  // Filter projects within the same category/tab
  const filteredProjects = projects.filter(
    (p) => p.category === currentProject.category
  );

  // Find the current project's index within that filtered group
  const currentIndex = filteredProjects.findIndex((p) => p.id === id);

  return (
    <div className="max-w-3xl mx-auto pt-28 pb-16 text-white">
      {/* 🔙 Back Button */}
      <button
        onClick={() => router.push("/projectCollection")}
        className="mb-6 inline-flex items-center text-sm text-gray-300 hover:text-pink-400 transition-colors"
      >
        ← Back to Projects
      </button>

      {/* Title */}
      <h1 className="text-3xl font-bold text-pink-400 mb-4">
        {currentProject.title}
      </h1>

      {/* 🖼️ Content / Image / Embedded HTML */}
      <div
        className="text-gray-200 mb-8 leading-relaxed prose prose-invert max-w-none"
        dangerouslySetInnerHTML={{ __html: currentProject.content }}
      />

      {/* Project Images (if available) */}
{currentProject.images && currentProject.images.length > 0 && (
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
    {currentProject.images.map((src, index) => (
      <img
        key={index}
        src={src}
        alt={`${currentProject.title} screenshot ${index + 1}`}
        className="rounded-lg shadow-lg object-cover hover:scale-105 transition-transform duration-300"
      />
    ))}
  </div>
)}

{/* 🔗 Project Link (if available) */}
{currentProject.link && (
  <div className="mb-10 text-center">
    <a
      href={currentProject.link}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block px-6 py-2 bg-pink-500 hover:bg-pink-600 text-white font-semibold rounded-full shadow-md transition-all duration-300"
    >
      🔗 View Live Project
    </a>
  </div>
)}



      {/* Contributions */}
      {currentProject.contributions && (
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-indigo-300 mb-3">
            My Contributions
          </h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-300">
            {currentProject.contributions.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Skills */}
      {currentProject.skills && (
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-indigo-300 mb-3">
            Skills Used
          </h2>
          <div className="flex flex-wrap gap-2">
            {currentProject.skills.map((skill, idx) => (
              <span
                key={idx}
                className="px-3 py-1 bg-gray-700 rounded-full text-sm text-gray-200"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Confidentiality Note */}
      <div className="mt-10 border-t border-gray-700 pt-4">
        <p className="text-sm text-gray-400 italic">
          <strong>Confidentiality Note:</strong> Some details are summarized or
          anonymized to respect client and professor confidentiality. Only a
          high-level overview of my contributions is shared.
        </p>
      </div>

      {/* Numbered Navigation */}
      <div className="flex flex-col items-center gap-3 mt-8">
        <div className="flex gap-2">
          {filteredProjects.map((p, index) => (
            <button
              key={p.id}
              onClick={() => router.push(`/projectCollection/${p.id}`)}
              className={`px-3 py-1 rounded ${
                index === currentIndex
                  ? "bg-pink-500 text-white"
                  : "bg-gray-700 hover:bg-gray-600 text-gray-200"
              }`}
            >
              {index + 1}
            </button>
          ))}
        </div>

        {/* Project count */}
        <span className="text-sm text-gray-400">
          Project {currentIndex + 1} of {filteredProjects.length}
        </span>
      </div>
    </div>
  );
}
