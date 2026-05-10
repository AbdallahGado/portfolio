"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { H2 } from "@/components/ui/typography/Typography";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/buttons/Button";
import { fadeInUp, staggerContainer, viewportOnce } from "@/animations/motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { GiScales, GiCircuitry } from "react-icons/gi";

const projects = [
  {
    id: 1,
    title: "Jotion",
    subtitle: "Notion-Inspired Collaborative Workspace",
    description: "Full-stack real-time workspace with Convex BaaS, rich-text editor, and multi-user collaboration.",
    tech: ["Next.js 14", "TypeScript", "Convex", "Clerk", "Tiptap"],
    liveUrl: "https://jotion-orpin.vercel.app",
    githubUrl: "https://github.com/AbdallahGado/notion-app",
    color: "from-[#E2E8F0] to-[#94A3B8]",
    icon: GiCircuitry,
  },
  {
    id: 2,
    title: "BrewHouse",
    subtitle: "Coffee Shop Digital Experience",
    description: "Responsive landing page with mobile-first design and clean modern UI.",
    tech: ["HTML5", "CSS3", "Responsive Design"],
    liveUrl: "https://brew-house-tau.vercel.app",
    githubUrl: "https://github.com/AbdallahGado/BrewHouse",
    color: "from-[#F3EAC2] to-[#D4AF37]",
    icon: GiScales,
  },
  {
    id: 3,
    title: "Space",
    subtitle: "CRUD Management System",
    description: "Efficient project management with modern React patterns and TypeScript.",
    tech: ["React", "Tailwind", "TypeScript", "Framer Motion"],
    githubUrl: "https://github.com/AbdallahGado",
    color: "from-[#D4AF37] to-[#8A6D3B]",
    icon: GiCircuitry,
  },
];

export function ProjectsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="projects" className="relative py-32 overflow-hidden">
      {/* Background effect */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.03)_0%,transparent_70%)]" />

      <Container>
        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <span className="text-xs text-[#D4AF37]/80 tracking-[0.3em] uppercase mb-4 block font-light">
              Selected Work
            </span>
            <H2 className="text-4xl md:text-5xl font-extralight">
              Projects with <span className="bg-gradient-to-r from-[#F3EAC2] via-[#D4AF37] to-[#8A6D3B] bg-clip-text text-transparent font-normal">Purpose</span>
            </H2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, i) => {
              const Icon = project.icon;
              return (
                <motion.div
                  key={project.id}
                  variants={fadeInUp}
                  transition={{ delay: i * 0.15 }}
                  className="group relative"
                >
                  <div className="relative h-full bg-black/40 backdrop-blur-sm border border-white/[0.05] rounded-2xl overflow-hidden hover:border-[#D4AF37]/30 hover:shadow-[0_8px_30px_rgb(212,175,55,0.05)] transition-all duration-500">
                    {/* Gradient top bar */}
                    <div className={`h-1 bg-gradient-to-r ${project.color}`} />

                    <div className="p-6 md:p-8">
                      {/* Icon & Title */}
                      <div className="flex items-start gap-4 mb-4">
                        <div className={`p-3 rounded-xl bg-gradient-to-br ${project.color} bg-opacity-10`}>
                          <Icon className="text-white" size={24} />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-white mb-1">{project.title}</h3>
                          <p className="text-sm text-white/40">{project.subtitle}</p>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-white/60 text-sm leading-relaxed mb-6">
                        {project.description}
                      </p>

                      {/* Tech Stack */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tech.map((tech) => (
                          <span
                            key={tech}
                            className="text-xs px-3 py-1 rounded-full bg-white/[0.05] text-white/50 border border-white/[0.05]"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Links */}
                      <div className="flex items-center gap-3">
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl} target="_blank" rel="noopener noreferrer"
                            className={`inline-flex items-center gap-2 px-4 py-2 rounded-md text-sm bg-gradient-to-r ${project.color} text-black font-medium`}
                          >
                            Live Demo <FaExternalLinkAlt className="ml-2" size={12} />
                          </a>
                        )}
                        <a
                          href={project.githubUrl} target="_blank" rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 rounded-md text-sm text-white/60 hover:text-white border border-white/10 hover:border-white/20 transition-colors"
                        >
                          <FaGithub className="mr-2" size={14} /> Code
                        </a>
                      </div>
                    </div>

                    {/* Hover glow effect */}
                    <div className={`absolute inset-0 bg-gradient-to-r ${project.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none`} />
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* View All CTA */}
          <motion.div variants={fadeInUp} className="text-center mt-14">
            <a
              href="https://github.com/AbdallahGado"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-lg border border-[#D4AF37]/30 text-[#F3EAC2] hover:bg-[#D4AF37]/10 hover:border-[#D4AF37]/60 transition-all duration-500 text-lg font-light tracking-wide backdrop-blur-sm"
            >
              View All Projects on GitHub <FaGithub className="ml-2 opacity-80" />
            </a>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
