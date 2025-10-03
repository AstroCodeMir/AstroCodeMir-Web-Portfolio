"use client";

import ProjectCard from "./ProjectCard";

interface Project {
  id: string;
  title: string;
  description: string;
  images: string[];
  link?: string;
}

interface ProjectGridProps {
  projects: Project[];
}

export default function ProjectGrid({ projects }: ProjectGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      {projects.map((project) => (
        <ProjectCard
          key={project.id}
          title={project.title}
          description={project.description}
          images={project.images}
          link={project.link}
        />
      ))}
    </div>
  );
}
