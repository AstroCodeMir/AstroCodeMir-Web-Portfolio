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

  const handleMouseEnter = () => {
    setHovered(true);
    setCurrentIndex(0); // start from the first image
  };

  const handleMouseLeave = () => {
    setHovered(false);
    setCurrentIndex(0); // reset to first image
  };

  return (
    <div
      className="project-card rounded-lg overflow-hidden flex flex-col bg-slate-900 shadow-lg"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Image Slider */}
      <div className="relative w-full h-60 sm:h-64 lg:h-60 overflow-hidden">
        <div
          className="flex transition-transform duration-[1000ms] ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * (100 / images.length)}%)`,
            width: `${100 * images.length}%`,
          }}
        >
          {images.map((img, index) => (
            <div
              key={index}
              className="h-60 sm:h-64 lg:h-60 relative flex-shrink-0"
              style={{ width: `${100 / images.length}%` }}
            >
              <Image
                src={img}
                alt={`${title} mockup ${index + 1}`}
                fill
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Card Content */}
      <div className="p-6 flex-grow flex flex-col">
        <h3 className="text-xl font-semibold mb-2 text-pink-400">{title}</h3>
        <p className="text-white text-sm mb-4 flex-grow">{description}</p>

        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-auto self-start text-pink-400 hover:text-indigo-300 transition-colors duration-300 font-medium inline-flex items-center"
          >
            Learn More
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 ml-2 learn-more-arrow"
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
