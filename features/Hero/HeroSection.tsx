"use client";

import { motion, useScroll, useTransform, useSpring, useInView, AnimatePresence } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Button } from "@/components/ui/buttons/Button";
import { Container } from "@/components/ui/Container";
import { FaLocationArrow, FaGithub, FaLinkedin } from "react-icons/fa6";
import { GiScales, GiJusticeStar, GiCircuitry } from "react-icons/gi";
import { HiOutlineSparkles } from "react-icons/hi2";

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-150px" });
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end start"] });

  const heroScale = useSpring(useTransform(scrollYProgress, [0, 0.3], [1, 0.95]), { stiffness: 100, damping: 30 });
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  const [textIndex, setTextIndex] = useState(0);
  const narrativeTexts = [
    "Law Graduate",
    "Problem Solver",
    "Code Architect",
    "Next.js Expert"
  ];

  useEffect(() => {
    if (!isInView) return;
    const interval = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % narrativeTexts.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [isInView]);

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0a0a0f]">
      {/* Layered luxury background */}
      <div className="absolute inset-0">
        {/* Deep luxurious gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(212,175,55,0.05)_0%,rgba(5,5,5,1)_70%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_80%,rgba(255,255,255,0.03)_0%,transparent_50%)]" />

        {/* Refined subtle grid */}
        <motion.div
          animate={{ backgroundPosition: ['0px 0px', '80px 80px'] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
            backgroundSize: '80px 80px'
          }}
        />

        {/* Floating legal & code symbols - Minimalist luxury */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[
            { symbol: '§', x: '10%', y: '20%', delay: 0, size: 'text-4xl', color: 'text-white/5' },
            { symbol: '{}', x: '85%', y: '15%', delay: 0.5, size: 'text-3xl', color: 'text-[#D4AF37]/5' },
            { symbol: 'if()', x: '8%', y: '70%', delay: 1, size: 'text-xl font-mono', color: 'text-white/5' },
            { symbol: 'λ', x: '88%', y: '75%', delay: 1.5, size: 'text-3xl', color: 'text-[#D4AF37]/5' },
            { symbol: '§', x: '20%', y: '50%', delay: 2, size: 'text-2xl', color: 'text-[#D4AF37]/5' },
            { symbol: '=>', x: '75%', y: '45%', delay: 2.5, size: 'text-xl font-mono', color: 'text-white/5' },
          ].map((item, i) => (
            <motion.div
              key={i}
              className={`absolute ${item.color} ${item.size} font-light`}
              style={{ left: item.x, top: item.y }}
              initial={{ opacity: 0, rotateX: 45, rotateY: -20 }}
              animate={isInView ? {
                opacity: 1,
                rotateX: 0,
                rotateY: 0,
                y: [0, -30, 0],
              } : {}}
              transition={{
                duration: 10 + i * 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: item.delay,
                opacity: { duration: 3, delay: item.delay }
              }}
            >
              {item.symbol}
            </motion.div>
          ))}
        </div>

        {/* Subtle luxury glow orbs */}
        <motion.div
          style={{ opacity: heroOpacity }}
          className="absolute inset-0 pointer-events-none"
        >
          <div className="absolute top-[10%] left-[20%] w-[500px] h-[500px] bg-[#D4AF37]/[0.03] rounded-full blur-[120px]" />
          <div className="absolute bottom-[20%] right-[10%] w-[600px] h-[600px] bg-white/[0.02] rounded-full blur-[150px]" />
        </motion.div>
      </div>

      {/* Main content */}
      <Container size="default" className="relative z-10">
        <motion.div style={{ scale: heroScale, opacity: heroOpacity }} className="text-center">
          {/* Unique badge - Luxury Edition */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.8 }}
            animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ duration: 1.2, delay: 0.3, type: "spring", stiffness: 100 }}
            className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full bg-black/20 border border-[#D4AF37]/20 mb-10 backdrop-blur-md shadow-[0_4px_20px_rgba(212,175,55,0.05)]"
          >
            <GiScales className="text-[#D4AF37]" size={18} />
            <div className="h-4 w-px bg-white/10" />
            <GiCircuitry className="text-[#E2E8F0]" size={18} />
            <span className="text-xs md:text-sm text-[#E2E8F0]/80 tracking-[0.3em] font-light ml-2 uppercase">
              Unique Blend
            </span>
          </motion.div>

          {/* Main headline - Editorial luxury masterpiece */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.5, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <h1 className="text-6xl md:text-8xl lg:text-[8.5rem] font-extralight tracking-[-0.02em] leading-[0.85]">
              <span className="block text-white/90 mb-4">
                Abdallah
              </span>
              <span className="block relative pb-2">
                <span className="bg-gradient-to-r from-[#F3EAC2] via-[#D4AF37] to-[#AA7C11] bg-clip-text text-transparent drop-shadow-sm">
                  El-Hassanen
                </span>
                {/* Refined animated underline */}
                <motion.span
                  className="absolute bottom-0 left-[10%] right-[10%] h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/70 to-transparent"
                  initial={{ scaleX: 0, opacity: 0 }}
                  animate={isInView ? { scaleX: 1, opacity: 1 } : {}}
                  transition={{ duration: 1.8, delay: 1.2 }}
                />
              </span>
              <span className="block text-white/80 mt-4">
                Elsaid
              </span>
            </h1>
          </motion.div>

          {/* Dynamic narrative text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="mt-8 h-12 flex items-center justify-center"
          >
            <AnimatePresence mode="wait">
              <motion.p
                key={textIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="text-xl md:text-2xl text-white/40 font-extralight"
              >
                {narrativeTexts[textIndex]}
              </motion.p>
            </AnimatePresence>
          </motion.div>

          {/* Statistics with luxury styling */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 1.1 }}
            className="mt-14 flex items-center justify-center gap-12 md:gap-20"
          >
            {[
              { number: '88.9%', label: 'Public Law', sub: 'Diploma', color: 'from-[#E2E8F0] to-[#94A3B8]' },
              { number: '91.2%', label: 'Economics', sub: 'Diploma', color: 'from-[#F3EAC2] to-[#D4AF37]' },
              { number: '73.8%', label: 'Law Degree', sub: 'Bachelor', color: 'from-[#E2E8F0] to-[#94A3B8]' },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 1.2 + i * 0.15 }}
                className="text-center relative group cursor-default"
              >
                <div className={`text-3xl md:text-4xl font-light bg-gradient-to-br ${stat.color} bg-clip-text text-transparent`}>
                  {stat.number}
                </div>
                <div className="text-xs md:text-sm text-white/40 mt-2 uppercase tracking-[0.1em] font-medium">{stat.label}</div>
                <div className="text-[10px] text-white/20 tracking-wider mt-1">{stat.sub}</div>
                {/* Hover glow */}
                <div className={`absolute inset-0 bg-gradient-to-r ${stat.color} opacity-0 group-hover:opacity-[0.08] transition-opacity duration-700 rounded-lg blur-xl -z-10`} />
              </motion.div>
            ))}
          </motion.div>

          {/* Description with refined typography */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 1.4 }}
            className="mt-12 text-lg md:text-xl text-white/40 max-w-3xl mx-auto leading-relaxed font-light"
          >
            Bridging <span className="text-[#D4AF37]/80">legal precision</span> with
            <span className="text-[#E2E8F0]/80"> architectural thinking</span> and
            <span className="text-[#E2E8F0]/80"> creative engineering</span>.
            Crafting premium digital experiences.
          </motion.p>

          {/* High-end CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 1.6 }}
            className="mt-14 flex flex-wrap items-center justify-center gap-6"
          >
            <Button
              size="lg"
              className="group relative px-10 py-7 text-lg bg-black/40 hover:bg-black/60 text-[#F3EAC2] border border-[#D4AF37]/30 hover:border-[#D4AF37]/60 overflow-hidden transition-all duration-500 backdrop-blur-md"
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
            >
              <span className="relative z-10 font-light tracking-wide flex items-center">
                Explore Portfolio
                <FaLocationArrow className="ml-3 text-[14px] opacity-70 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </span>
              <motion.div
                className="absolute inset-0 bg-[#D4AF37]/5"
                whileHover={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              />
              {/* Subtle gold shimmer */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-[#D4AF37]/10 to-transparent -skew-x-12"
                animate={{ x: ['-200%', '200%'] }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear", repeatDelay: 2 }}
              />
            </Button>

            <div className="flex items-center gap-4">
              {[
                { Icon: FaGithub, url: "https://github.com/AbdallahGado", label: "GitHub" },
                { Icon: FaLinkedin, url: "https://linkedin.com/in/abdallah-gado-0ab60b234", label: "LinkedIn" },
              ].map(({ Icon, url, label }, i) => (
                <motion.a
                  key={i}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 1.8 + i * 0.1 }}
                  className="group relative w-14 h-14 rounded-full bg-white/[0.02] border border-white/[0.05] flex items-center justify-center text-white/40 hover:text-[#D4AF37] hover:border-[#D4AF37]/40 hover:bg-[#D4AF37]/5 transition-all duration-500"
                  aria-label={label}
                >
                  <Icon size={20} />
                  <motion.div
                    className="absolute inset-0 rounded-full border border-[#D4AF37]/0"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Refined scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 2, duration: 1 }}
            className="absolute -bottom-20 left-1/2 -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="flex flex-col items-center gap-3"
            >
              <span className="text-[#D4AF37]/40 text-[9px] tracking-[0.4em] uppercase font-light">Scroll</span>
              <div className="w-[1px] h-12 bg-gradient-to-b from-[#D4AF37]/30 to-transparent" />
            </motion.div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
