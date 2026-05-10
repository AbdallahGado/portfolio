"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { H2, H3, P } from "@/components/ui/typography/Typography";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/cards/Card";
import { fadeInUp, fadeInLeft, staggerContainer, viewportOnce } from "@/animations/motion";
import { FaBriefcase, FaCode, FaLaptopCode } from "react-icons/fa6";

const experiences = [
  {
    id: 1,
    title: "Front-End Developer Intern",
    company: "Geexer",
    period: "Aug 2024 – March 2025",
    type: "Internship",
    icon: FaCode,
    colorClass: "text-[#D4AF37]",
    bgClass: "bg-[#D4AF37]/10",
    gradientClass: "from-[#F3EAC2] to-[#8A6D3B]",
    achievements: [
      "Built responsive, performance-optimized interfaces with cross-device compatibility",
      "Participated in code reviews with senior developers, improving code quality",
      "Collaborated in a team using modern web technologies"
    ]
  },
  {
    id: 2,
    title: "Freelance Full-Stack Developer",
    company: "Remote",
    period: "Ongoing",
    type: "Freelance",
    icon: FaLaptopCode,
    colorClass: "text-[#E2E8F0]",
    bgClass: "bg-[#E2E8F0]/10",
    gradientClass: "from-white to-[#94A3B8]",
    achievements: [
      "Delivered complete front-end solutions for multiple clients",
      "Managed timelines and client communication independently",
      "Achieved high client satisfaction through quality deliverables"
    ]
  },
];

export function ExperienceSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_60%_40%,rgba(212,175,55,0.03)_0%,transparent_70%)]" />

      <Container>
        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <span className="text-xs text-[#D4AF37]/60 tracking-[0.4em] uppercase mb-4 block font-light">
              Professional Journey
            </span>
            <H2 className="text-4xl md:text-5xl font-extralight">
              Work <span className="text-[#D4AF37] font-light">Experience</span>
            </H2>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-8">
            {experiences.map((exp, i) => {
              const Icon = exp.icon;
              return (
                <motion.div
                  key={exp.id}
                  variants={fadeInLeft}
                  transition={{ delay: i * 0.2 }}
                >
                  <Card className="relative overflow-hidden p-0 bg-black/40 backdrop-blur-sm border border-white/[0.05] hover:border-white/[0.1] transition-all duration-300">
                    <div className={`absolute top-0 left-0 w-1 h-full bg-gradient-to-b ${exp.gradientClass}`} />
                    <div className="pl-8 p-6 md:p-8">
                      <div className="flex flex-wrap items-start gap-4 mb-4">
                        <div className={`p-3 rounded-xl ${exp.bgClass}`}>
                          <Icon className={exp.colorClass} size={24} />
                        </div>
                        <div className="flex-1">
                          <H3 className="text-xl text-white mb-1 font-light">{exp.title}</H3>
                          <div className="flex flex-wrap items-center gap-3 text-sm">
                            <span className="text-white/60 font-light">{exp.company}</span>
                            <span className={`px-3 py-1 rounded-sm text-xs ${exp.bgClass} ${exp.colorClass} tracking-wider font-light uppercase`}>
                              {exp.type}
                            </span>
                            <span className="text-white/40 font-light tracking-wide">{exp.period}</span>
                          </div>
                        </div>
                      </div>

                      <ul className="space-y-3 text-sm text-white/60 font-light leading-relaxed">
                        {exp.achievements.map((ach, j) => (
                          <motion.li
                            key={j}
                            initial={{ opacity: 0, x: -10 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ delay: 0.5 + i * 0.2 + j * 0.1 }}
                            className="flex items-start gap-3"
                          >
                            <span className={`${exp.colorClass} mt-0.5 text-xs`}>◆</span>
                            {ach}
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
