"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/cards/Card";
import { fadeInUp, viewportOnce } from "@/animations/motion";
import { H2 } from "@/components/ui/typography/Typography";
import { Container } from "@/components/ui/Container";

interface GitHubRepo {
  id: number;
  name: string;
  description: string;
  stargazers_count: number;
  html_url: string;
  language: string;
}

export function GitHubActivity() {
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const cached = localStorage.getItem("github-repos");
    if (cached) {
      setRepos(JSON.parse(cached));
      setLoading(false);
      return;
    }

    fetch("https://api.github.com/users/AbdallahGado/repos?sort=stars&per_page=6")
      .then((res) => {
        if (!res.ok) throw new Error("Rate limited or error");
        return res.json();
      })
      .then((data) => {
        setRepos(data);
        localStorage.setItem("github-repos", JSON.stringify(data));
        setTimeout(() => localStorage.removeItem("github-repos"), 10 * 60 * 1000);
      })
      .catch(() => setError("Unable to load GitHub data"))
      .finally(() => setLoading(false));
  }, []);

  return (
    <section className="py-20 bg-background">
      <Container>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeInUp}
        >
          <H2 className="text-center mb-12 font-extralight">
            GitHub <span className="text-[#D4AF37] font-light">Activity</span>
          </H2>
        </motion.div>

        {loading && (
          <p className="text-center text-muted-foreground">Loading repositories...</p>
        )}

        {error && (
          <p className="text-center text-muted-foreground">{error}</p>
        )}

        {!loading && !error && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {repos.map((repo, i) => (
              <motion.div
                key={repo.id}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={viewportOnce}
                transition={{ delay: i * 0.1 }}
              >
                <Card className="p-6 h-full bg-black/40 backdrop-blur-sm border border-white/[0.05] hover:border-[#D4AF37]/30 transition-all duration-300">
                  <h3 className="text-lg font-light mb-3">
                    <a
                      href={repo.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-[#D4AF37] transition-colors"
                    >
                      {repo.name}
                    </a>
                  </h3>
                  <p className="text-sm text-white/50 mb-5 font-light leading-relaxed line-clamp-2">
                    {repo.description || "No description"}
                  </p>
                  <div className="flex items-center justify-between text-xs text-white/40 font-light tracking-wide mt-auto">
                    {repo.language ? (
                      <span className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-[#D4AF37]/80" />
                        {repo.language}
                      </span>
                    ) : (
                      <span />
                    )}
                    <span className="flex items-center gap-1"><span className="text-[#D4AF37]">★</span> {repo.stargazers_count}</span>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        )}
      </Container>
    </section>
  );
}
