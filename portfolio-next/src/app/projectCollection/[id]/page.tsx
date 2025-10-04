"use client";

import { useParams, useRouter } from "next/navigation";
import { projects } from "../projectData";

export default function ProjectDetail() {
  const { id } = useParams();
  const router = useRouter();

  const currentIndex = projects.findIndex((p) => p.id === id);
  const project = projects[currentIndex];

  if (!project) {
    return <div className="p-10 text-white">404 – Project not found</div>;
  }

  return (
    <div className="max-w-3xl mx-auto pt-28 pb-16 text-white">
      {/* Numbering */}
      <span className="text-sm text-gray-400">
        Project {currentIndex + 1} of {projects.length}
      </span>

      {/* Title */}
      <h1 className="text-3xl font-bold text-pink-400 mb-4">
        {project.title}
      </h1>

      {/* Content */}
      <p className="text-gray-200 mb-8 leading-relaxed whitespace-pre-line">
        {project.content}
      </p>

      {/* Contributions */}
      {project.contributions && (
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-indigo-300 mb-3">
            My Contributions
          </h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-300">
            {project.contributions.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Skills */}
      {project.skills && (
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-indigo-300 mb-3">
            Skills Used
          </h2>
          <div className="flex flex-wrap gap-2">
            {project.skills.map((skill, idx) => (
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
          <strong>Confidentiality Note:</strong>  
          Some details are summarized or anonymized to respect client and professor confidentiality. 
          Only a high-level overview of my contributions is shared.
        </p>
      </div>

      {/* Numbered Navigation */}
      <div className="flex gap-2 mt-6">
        {projects.map((p, index) => (
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

      {/* Prev / Next */}
      <div className="flex justify-between mt-6">
        {currentIndex > 0 && (
          <button
            onClick={() =>
              router.push(`/projectCollection/${projects[currentIndex - 1].id}`)
            }
            className="px-4 py-2 bg-indigo-500 rounded hover:bg-indigo-400"
          >
            ← Previous
          </button>
        )}
        {currentIndex < projects.length - 1 && (
          <button
            onClick={() =>
              router.push(`/projectCollection/${projects[currentIndex + 1].id}`)
            }
            className="ml-auto px-4 py-2 bg-indigo-500 rounded hover:bg-indigo-400"
          >
            Next →
          </button>
        )}
      </div>
    </div>
  );
}
