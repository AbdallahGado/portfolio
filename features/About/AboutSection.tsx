"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { H2, H3, P } from "@/components/ui/typography/Typography";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/cards/Card";
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer, viewportOnce } from "@/animations/motion";
import { GiJusticeStar, GiScales, GiBookshelf } from "react-icons/gi";
import { FaGraduationCap } from "react-icons/fa";

export function AboutSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const achievements = [
    { icon: GiJusticeStar, label: "Law Degree", value: "73.8%", sub: "Good", colorClass: "text-[#E2E8F0]", bgClass: "bg-[#E2E8F0]/5", gradientClass: "from-[#E2E8F0] to-[#94A3B8]" },
    { icon: GiScales, label: "Public Law", value: "88.9%", sub: "Very Good", colorClass: "text-[#D4AF37]", bgClass: "bg-[#D4AF37]/10", gradientClass: "from-[#F3EAC2] to-[#D4AF37]" },
    { icon: GiBookshelf, label: "Economics", value: "91.2%", sub: "Excellent", colorClass: "text-[#E2E8F0]", bgClass: "bg-[#E2E8F0]/5", gradientClass: "from-[#E2E8F0] to-[#94A3B8]" },
  ];

  const skills = {
    legal: ["Legal Research", "Document Drafting", "Public Law", "Constitutional Analysis", "Economics Analysis"],
    tech: ["Next.js 14", "TypeScript", "React", "Tailwind CSS", "Framer Motion", "Node.js", "Convex", "Three.js"],
    soft: ["Problem Solving", "Analytical Thinking", "Cross-Disciplinary", "Client Communication"]
  };

  return (
    <section id="about" className="relative py-32 overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_50%,rgba(212,175,55,0.03)_0%,transparent_70%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_50%,rgba(255,255,255,0.02)_0%,transparent_70%)]" />

      <Container>
        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Section header */}
          <motion.div variants={fadeInUp} className="text-center mb-20">
            <span className="text-xs text-[#D4AF37]/60 tracking-[0.4em] uppercase mb-4 block font-light">
              About Me
            </span>
            <H2 className="text-4xl md:text-5xl lg:text-6xl font-extralight">
              Where <span className="text-[#D4AF37] font-light">Law</span> Meets
              <br />
              <span className="text-[#E2E8F0] font-light">Technology</span>
            </H2>
          </motion.div>

          {/* Main content grid */}
          <div className="grid lg:grid-cols-12 gap-8 items-start">
            {/* Left column - Story */}
            <motion.div variants={fadeInLeft} className="lg:col-span-7 space-y-6">
              <Card className="relative overflow-hidden p-8 md:p-10 bg-black/40 backdrop-blur-sm border border-white/[0.05]">
                <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-[#F3EAC2] via-[#D4AF37] to-[#8A6D3B]" />
                <div className="pl-6">
                  <h3 className="text-2xl font-light mb-6 text-white/90">
                    My <span className="text-[#D4AF37]">Journey</span>
                  </h3>
                  <div className="space-y-4 text-white/60 leading-relaxed font-light">
                    <P>
                      I am a <span className="text-white/80 font-normal">Full-Stack Developer</span> with a unique perspective -
                      combining a <span className="text-[#D4AF37]/90 font-normal">Law degree</span> with hands-on engineering experience.
                      This cross-disciplinary background gives me a distinctive approach to problem-solving:
                      <span className="text-[#E2E8F0]/90 font-normal"> precision from legal training</span> paired with
                      <span className="text-[#D4AF37]/90 font-normal"> creative technical execution</span>.
                    </P>
                    <P>
                      My academic excellence in <span className="text-white/80 font-normal">Public Law (88.9%)</span> and
                      <span className="text-white/80 font-normal"> Economics (91.2%)</span> taught me to analyze complex systems,
                      while building real-world applications like <span className="text-[#D4AF37]/90 font-normal">Jotion</span> and
                      <span className="text-[#E2E8F0]/90 font-normal"> BrewHouse</span> honed my technical craft.
                    </P>
                    <P>
                      Currently advancing into <span className="text-white/80 font-normal">.NET backend development</span>,
                      I bridge the gap between <span className="text-[#D4AF37]/90 font-normal">legal precision</span> and
                      <span className="text-[#E2E8F0]/90 font-normal"> modern web technologies</span>, delivering solutions that are
                      architecturally sound, user-centric, and business-minded.
                    </P>
                  </div>
                </div>
              </Card>

              {/* Philosophy card */}
              <Card className="relative overflow-hidden p-8 md:p-10 bg-black/40 backdrop-blur-sm border border-white/[0.05]">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(212,175,55,0.05)_0%,transparent_50%)]" />
                <div className="relative z-10">
                  <h3 className="text-xl font-light mb-4 text-white/90">
                    Engineering <span className="text-[#D4AF37]">Philosophy</span>
                  </h3>
                  <p className="text-white/60 leading-relaxed font-light italic">
                    "I believe in writing <span className="text-white/80 font-normal">clean, purposeful code</span> that solves real problems.
                    Every line should serve a user need or business goal. My legal background ensures
                    I consider <span className="text-[#D4AF37]/90 font-normal">structure, precision, and user advocacy</span> in every solution."
                  </p>
                  <div className="mt-6 flex items-center gap-3 text-sm text-[#D4AF37]/50 font-light">
                    <FaGraduationCap size={16} />
                    <span className="tracking-widest uppercase text-xs">— Abdallah El-Hassanen</span>
                  </div>
                </div>
              </Card>
            </motion.div>

            {/* Right column - Stats & Skills */}
            <motion.div variants={fadeInRight} className="lg:col-span-5 space-y-6">
              {/* Achievements */}
              <Card className="p-6 md:p-8 bg-black/40 backdrop-blur-sm border border-white/[0.05]">
                <h3 className="text-lg font-light mb-6 text-white/90">
                  Academic <span className="text-[#D4AF37]">Excellence</span>
                </h3>
                <div className="space-y-4">
                  {achievements.map((ach, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: 20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.2 * i + 0.5 }}
                      className="flex items-center justify-between p-4 rounded-xl bg-white/[0.01] hover:bg-white/[0.03] border border-white/[0.03] transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <div className={`p-2.5 rounded-lg ${ach.bgClass}`}>
                          <ach.icon className={ach.colorClass} size={20} />
                        </div>
                        <div>
                          <div className="text-sm text-white/70 tracking-wide">{ach.label}</div>
                          <div className="text-[10px] text-white/40 tracking-wider uppercase mt-0.5">{ach.sub}</div>
                        </div>
                      </div>
                      <div className={`text-2xl font-light bg-gradient-to-r ${ach.gradientClass} bg-clip-text text-transparent`}>
                        {ach.value}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </Card>

              {/* Skills */}
              {Object.entries(skills).map(([category, items], idx) => (
                <Card key={category} className="p-6 md:p-8 bg-black/40 backdrop-blur-sm border border-white/[0.05]">
                  <h4 className="text-[10px] font-medium mb-5 text-white/40 uppercase tracking-[0.3em]">
                    {category === "legal" ? "Legal" : category === "tech" ? "Technical" : "Soft"} Skills
                  </h4>
                  <div className="flex flex-wrap gap-2.5">
                    {items.map((skill) => (
                      <span
                        key={skill}
                        className={`px-3 py-1.5 rounded-sm text-xs font-light tracking-wide ${
                          category === "legal" ? "bg-[#D4AF37]/5 text-[#D4AF37]/90 border border-[#D4AF37]/20" :
                          category === "tech" ? "bg-[#E2E8F0]/5 text-[#E2E8F0]/90 border border-[#E2E8F0]/20" :
                          "bg-white/[0.02] text-white/60 border border-white/10"
                        }`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </Card>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
