"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

interface ProjectCardProps {
  title: string;
  description: string;
  images: string[];
  link?: string;
}

export default function ProjectCard({ title, description, images, link }: ProjectCardProps) {
  const [hovered, setHovered] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (hovered && images.length > 1) {
      interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
      }, 3000); // 3 seconds delay for each image
    }

    return () => clearInterval(interval);
  }, [hovered, images.length]);

  return (
    <div
      className="group rounded-2xl overflow-hidden bg-gradient-to-b from-[#0f0a1a] to-[#05060d] 
      border border-white/5 shadow-[0_0_25px_rgba(255,255,255,0.05)] 
      transition-all duration-500 hover:shadow-[0_0_40px_rgba(255,255,255,0.08)] hover:-translate-y-1"
    >
    {/* Image Area */}
<div
  className="relative w-full h-60 sm:h-64 lg:h-60 overflow-hidden cursor-pointer"
  onMouseEnter={() => setHovered(true)}
  onMouseLeave={() => {
    setHovered(false);
    setCurrentIndex(0); // 👈 return to first image when mouse leaves
  }}
>
  {images.map((img, index) => (
    <Image
      key={index}
      src={img}
      alt={`${title} mockup ${index + 1}`}
      fill
      className={`object-cover absolute inset-0 transition-opacity duration-1000 ease-in-out
        ${index === currentIndex ? "opacity-100" : "opacity-0"}`}
    />
  ))}
</div>


      {/* Card Content */}
      <div className="p-6 flex flex-col text-white">
        <h3 className="text-lg font-semibold mb-2 text-slate-200 group-hover:text-slate-100 transition-colors duration-300">
          {title}
        </h3>
        <p className="text-sm text-gray-400 leading-relaxed mb-4">{description}</p>

        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-auto text-indigo-300 hover:text-indigo-200 transition-colors duration-300 font-medium inline-flex items-center gap-2"
          >
            Learn More
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        )}
      </div>
    </div>
  );
}
