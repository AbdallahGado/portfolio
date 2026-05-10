"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/cards/Card";
import { fadeInUp, viewportOnce } from "@/animations/motion";
import { Project } from "@/types";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.div variants={fadeInUp} viewport={viewportOnce}>
      <Card className="overflow-hidden hover:shadow-lg transition-all duration-300">
        <div className="relative h-48 w-full">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
          <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
          {project.techStack && (
            <div className="flex flex-wrap gap-2 mb-4">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-1 bg-secondary text-secondary-foreground rounded text-xs"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}
          <div className="flex gap-2">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-400 hover:text-purple-300 text-sm"
              >
                Live Demo →
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-400 hover:text-purple-300 text-sm"
              >
                GitHub →
              </a>
            )}
          </div>
        </div>
      </Card>
    </motion.div>
  );
}
