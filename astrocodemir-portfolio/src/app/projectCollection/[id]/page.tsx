"use client";

import { useParams, useRouter } from "next/navigation";
import { useState } from "react";
import Image from "next/image";
import { projects } from "../projectData";

export default function ProjectDetail() {
  const { id } = useParams();
  const router = useRouter();
  const [currentIndex, setCurrentIndex] = useState(0);

  const currentProject = projects.find((p) => p.id === id);
  if (!currentProject)
    return <div className="p-10 text-gray-300">404 – Project not found</div>;

  const images = currentProject.images || [];

  // Filter same-category projects for pagination
  const filteredProjects = projects.filter(
    (p) => p.category === currentProject.category
  );
  const currentProjectIndex = filteredProjects.findIndex((p) => p.id === id);

  return (
    <div className="min-h-screen bg-[#0a0a0f] flex flex-col items-center py-24 px-4">
      {/* 🌌 Project Card */}
      <div className="max-w-6xl w-full bg-gradient-to-r from-[#0f0a1a] to-[#12122a] rounded-2xl shadow-2xl overflow-hidden grid md:grid-cols-2 gap-6">
        
        {/* 🧠 LEFT COLUMN */}
        <div className="p-10 flex flex-col justify-center text-gray-200">
          <button
            onClick={() => router.push("/projectCollection")}
            className="text-sm text-gray-400 hover:text-indigo-400 mb-6 transition-colors"
          >
            ← Back to Projects
          </button>

          <h1 className="text-3xl md:text-4xl font-bold text-indigo-400 mb-4">
            {currentProject.title}
          </h1>

          <p className="text-gray-400 mb-6 leading-relaxed">
            {currentProject.content ||
              "A detailed look into my project, including technical stack, design approach, and execution details."}
          </p>

          {/* Contributions */}
          {currentProject.contributions && (
            <div className="mb-6">
              <h2 className="text-lg font-semibold text-indigo-300 mb-2">
                Contributions
              </h2>
              <ul className="list-disc pl-6 space-y-1 text-gray-300 text-sm">
                {currentProject.contributions.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Skills */}
          {currentProject.skills && (
            <div className="mb-8">
              <h2 className="text-lg font-semibold text-indigo-300 mb-2">
                Skills Used
              </h2>
              <div className="flex flex-wrap gap-2">
                {currentProject.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-[#1a1a2e] border border-indigo-600 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Link Button */}
          {currentProject.link && (
            <a
              href={currentProject.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block w-fit px-6 py-3 bg-indigo-600 hover:bg-indigo-500 rounded-full text-white font-semibold transition-all"
            >
              🔗 View Project
            </a>
          )}
        </div>

        {/* 🖼️ / 🎬 RIGHT MEDIA COLUMN */}
        <div className="flex items-center justify-center p-6">
          {currentProject.videoSrc ? (
            <div className="relative w-full aspect-video max-w-full">
              <iframe
                className="absolute inset-0 w-full h-full"
                src={currentProject.videoSrc}
                title={currentProject.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          ) : images.length > 0 ? (
            <div className="relative w-full h-full overflow-hidden flex items-center justify-center">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{
                  transform: `translateX(-${currentIndex * 100}%)`,
                  width: `${100 * images.length}%`
                }}
              >
                {images.map((src, index) => (
                  <div key={index} className="flex-shrink-0 w-full flex items-center justify-center">
                    <Image
                      src={src}
                      alt={`${currentProject.title} image ${index + 1}`}
                      width={900}
                      height={600}
                      sizes="(max-width: 768px) 90vw, (max-width: 1200px) 70vw, 900px"
                      className="object-contain w-full h-auto"
                    />
                  </div>
                ))}
              </div>

              {/* Slider Dots */}
              {images.length > 1 && (
                <div className="absolute bottom-4 flex gap-2 justify-center w-full">
                  {images.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentIndex(idx)}
                      className={`w-2.5 h-2.5 rounded-full transition-all ${
                        idx === currentIndex ? "bg-indigo-400" : "bg-gray-600"
                      }`}
                    />
                  ))}
                </div>
              )}
            </div>
          ) : (
            <div className="flex items-center justify-center w-full h-60 text-gray-500">
              No media available
            </div>
          )}
        </div>
      </div>

      {/* 🔢 Pagination BELOW Card */}
      <div className="flex flex-col items-center gap-3 mt-10">
        <div className="flex gap-2">
          {filteredProjects.map((p, index) => (
            <button
              key={p.id}
              onClick={() => router.push(`/projectCollection/${p.id}`)}
              className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
                index === currentProjectIndex
                  ? "bg-indigo-600 text-white"
                  : "bg-[#1a1a2e] text-gray-300 hover:bg-[#242447]"
              }`}
            >
              {index + 1}
            </button>
          ))}
        </div>

        <span className="text-sm text-gray-400">
          Project {currentProjectIndex + 1} of {filteredProjects.length}
        </span>
      </div>
    </div>
  );
}
