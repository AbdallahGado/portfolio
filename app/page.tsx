"use client";

import { navItems } from "@/constants";
import { FloatingNav } from "@/components/ui/navigation/FloatingNav";
import { HeroSection } from "@/features/Hero/HeroSection";
import { AboutSection } from "@/features/About/AboutSection";
import { ProjectsSection } from "@/features/Projects/ProjectsSection";
import { ExperienceSection } from "@/features/Experience/ExperienceSection";
import { GitHubActivity } from "@/features/GitHubActivity/GitHubActivity";
import { ContactSection } from "@/features/Contact/ContactSection";

const Home = () => {
  return (
    <main className="relative bg-background flex justify-center items-center flex-col overflow-clip mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <ExperienceSection />
        <GitHubActivity />
        <ContactSection />
      </div>
    </main>
  );
};

export default Home;
