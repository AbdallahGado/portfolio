"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { H2, P } from "@/components/ui/typography/Typography";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/buttons/Button";
import { fadeInUp, fadeIn, staggerContainer } from "@/animations/motion";
import { FaLocationArrow, FaPaperPlane } from "react-icons/fa6";
import { GiScales } from "react-icons/gi";

export function ContactSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_100%,rgba(212,175,55,0.03)_0%,transparent_70%)]" />

      <Container size="md">
        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <span className="text-xs text-[#D4AF37]/60 tracking-[0.4em] uppercase mb-4 block font-light">
              Get In Touch
            </span>
            <H2 className="text-4xl md:text-5xl font-extralight">
              Let's Work <span className="text-[#E2E8F0] font-light">Together</span>
            </H2>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 1.2, delay: 0.3 }}
              className="w-24 h-[1px] bg-gradient-to-r from-[#F3EAC2]/50 to-[#D4AF37]/50 mx-auto mt-6"
            />
          </motion.div>

          <motion.div variants={fadeInUp} className="max-w-2xl mx-auto">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-[#D4AF37]/5 to-[#F3EAC2]/5 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500" />
              <div className="relative bg-black/40 border border-white/[0.05] rounded-3xl p-8 md:p-10 backdrop-blur-md">
                <div className="flex items-center gap-3 mb-8">
                  <GiScales className="text-[#D4AF37]" size={20} />
                  <span className="text-sm text-white/40 tracking-widest uppercase font-light">
                    Available for opportunities
                  </span>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <motion.div variants={fadeIn} transition={{ delay: 0.1 }}>
                    <label htmlFor="name" className="block text-xs text-white/50 mb-2 tracking-widest uppercase font-light">
                      Your Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.02] border border-white/[0.05] text-white font-light placeholder:text-white/20 focus:outline-none focus:border-[#D4AF37]/50 focus:bg-white/[0.04] transition-all"
                      placeholder="Abdallah El-Hassanen"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </motion.div>

                  <motion.div variants={fadeIn} transition={{ delay: 0.2 }}>
                    <label htmlFor="email" className="block text-xs text-white/50 mb-2 tracking-widest uppercase font-light">
                      Email Address
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.02] border border-white/[0.05] text-white font-light placeholder:text-white/20 focus:outline-none focus:border-[#D4AF37]/50 focus:bg-white/[0.04] transition-all"
                      placeholder="abdallah@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </motion.div>

                  <motion.div variants={fadeIn} transition={{ delay: 0.3 }}>
                    <label htmlFor="message" className="block text-xs text-white/50 mb-2 tracking-widest uppercase font-light">
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={5}
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.02] border border-white/[0.05] text-white font-light placeholder:text-white/20 focus:outline-none focus:border-[#D4AF37]/50 focus:bg-white/[0.04] resize-none transition-all"
                      placeholder="Tell me about your project..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    />
                  </motion.div>

                  <motion.div variants={fadeIn} transition={{ delay: 0.4 }}>
                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-black/40 hover:bg-black/60 text-[#F3EAC2] border border-[#D4AF37]/30 hover:border-[#D4AF37]/60 group backdrop-blur-md transition-all duration-500 font-light tracking-wide"
                    >
                      {submitted ? "Message Sent!" : "Send Message"}
                      <FaPaperPlane className="ml-3 text-xs opacity-70 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:opacity-100 transition-all duration-300" />
                    </Button>
                  </motion.div>
                </form>

                <div className="mt-10 pt-8 border-t border-white/[0.05] text-center">
                  <P className="text-sm text-white/40 font-light">
                    Or email me directly at{" "}
                    <a
                      href="mailto:Abdallahelhassanen@gmail.com"
                      className="text-[#D4AF37] hover:text-[#F3EAC2] transition-colors"
                    >
                      Abdallahelhassanen@gmail.com
                    </a>
                  </P>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
