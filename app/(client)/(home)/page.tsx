"use client";

import { useState, useEffect } from "react";
import {
  BookOpen,
  Code,
  Globe,
  Rocket,
  ShieldCheck,
  Users,
  Star,
  TrendingUp,
  ArrowRight,
  Github,
  MessageCircle,
  Award,
  Heart,
  Target,
  Code2,
} from "lucide-react";
import Image from "next/image";

export default function Home() {
  const [stats, setStats] = useState({
    contributors: 0,
    projects: 0,
    commits: 0,
    countries: 0,
  });

  const [recentProjects, setRecentProjects] = useState<
    { name: string; category: string; stars: number; color: string; url?: string }[]
  >([]); // no dummy placeholders

  // Animate towards fetched stats
  const [statsTarget, setStatsTarget] = useState({
    contributors: 0,
    projects: 0,
    commits: 0,
    countries: 0,
  });

  useEffect(() => {
    let raf = 0;
    const duration = 1000;
    const start = performance.now();
    const from = { ...stats };

    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      const ease = 1 - Math.pow(1 - t, 3);
      setStats({
        contributors: Math.round(
          from.contributors +
            (statsTarget.contributors - from.contributors) * ease
        ),
        projects: Math.round(
          from.projects + (statsTarget.projects - from.projects) * ease
        ),
        commits: Math.round(
          from.commits + (statsTarget.commits - from.commits) * ease
        ),
        countries: Math.round(
          from.countries + (statsTarget.countries - from.countries) * ease
        ),
      });
      if (t < 1) raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [statsTarget]);

  useEffect(() => {
    async function fetchStats() {
      try {
        const res = await fetch("/api/org-stats");
        if (!res.ok) throw new Error(`Failed: ${res.status}`);
        const data = await res.json();
        setStatsTarget({
          contributors: Number(data.contributors) || 0,
          projects: Number(data.projects) || 0,
          commits: Number(data.commits) || 0,
          countries: Number(data.countries) || 0,
        });
      } catch (err) {
        console.error("Failed to fetch org stats:", err);
      }
    }
    async function fetchProjects() {
      try {
        const res = await fetch("/api/projects");
        if (!res.ok) throw new Error(`Failed: ${res.status}`);
        const data = await res.json();
        setRecentProjects(Array.isArray(data) ? data : []);
      } catch (err) {
        console.error("Failed to fetch projects:", err);
      }
    }
    fetchStats();
    fetchProjects();
  }, []);

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-50 via-white to-gray-50">
      {/* Hero Section */}
      <div className="relative w-screen overflow-hidden py-20">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-[#8D153A]/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        </div>

        <div className="text-center mx-auto bg-linear-to-b from-slate-50 to-white">
          {/* Logo */}
          <div className="mb-8">
            <div className="w-full h-24 mx-auto mb-6 rounded-full flex items-center justify-center  transform hover:scale-105 transition-transform duration-300">
              <Image
                src="/logo.png"
                alt="Platform Logo"
                width={500}
                height={500}
              />
            </div>

            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-linear-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent leading-tight">
              Welcome to Our Open Source
              <br />
              Community
            </h1>

            <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
              Building the future of open-source development through innovation,
              collaboration, and community-driven solutions that make a real
              impact.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            <a
              href="/projects"
              className="group flex items-center gap-2 px-8 py-4 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 bg-[#8D153A]"
            >
              <Rocket className="w-5 h-5" />
              Explore Projects
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="/contribute"
              className="group flex items-center gap-2 px-8 py-4 text-[#8D153A] font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 border-2 border-[#8D153A] hover:bg-[#8D153A] hover:text-white bg-white"
            >
              <Heart className="w-5 h-5" />
              Start Contributing
            </a>

            <a
              href="https://github.com/opencorex-org"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 px-8 py-4 text-gray-700 font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 bg-white border-2 border-gray-200 hover:border-gray-300"
            >
              <Github className="w-5 h-5" />
              View on GitHub
            </a>
          </div>

          {/* Live Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              {
                icon: Users,
                label: "Contributors",
                value: stats.contributors,
                suffix: "+",
              },
              {
                icon: Code2,
                label: "Projects",
                value: stats.projects,
                suffix: "+",
              },
              {
                icon: Code,
                label: "Commits",
                value: stats.commits,
                suffix: "+",
              },
              {
                icon: Globe,
                label: "Countries",
                value: stats.countries,
                suffix: "+",
              },
            ].map((stat, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
              >
                <stat.icon
                  className="w-8 h-8 mx-auto mb-2"
                  style={{ color: "#8D153A" }}
                />
                <div
                  className="text-3xl font-bold mb-1"
                  style={{ color: "#8D153A" }}
                >
                  {typeof stat.value === "number"
                    ? stat.value.toLocaleString()
                    : stat.value}
                  {stat.suffix}
                </div>
                <div className="text-sm text-gray-600 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Core Values Section */}
      <div className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-white rounded-full shadow-md mb-4">
              <Target className="w-4 h-4 mr-2 text-[#8D153A]" />
              <span className="text-sm font-semibold text-[#8D153A]">
                Why Choose Us
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              What Makes Us Different
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We&apos;re more than just a platform-we&apos;re a movement transforming how
              developers collaborate globally.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Rocket,
                title: "Innovation First",
                desc: "Pioneering open-source technologies to tackle real-world challenges with cutting-edge solutions.",
                color: "#8D153A",
              },
              {
                icon: Users,
                title: "Global Community",
                desc: "A diverse, global community of contributors united by passion and purpose.",
                color: "#2563eb",
              },
              {
                icon: BookOpen,
                title: "Comprehensive Resources",
                desc: "Well-structured documentation, guides, and tutorials designed for developers at all skill levels.",
                color: "#059669",
              },
              {
                icon: Code,
                title: "True Collaboration",
                desc: "Build together, learn together. Every contribution is valued and every voice is heard.",
                color: "#7c3aed",
              },
              {
                icon: ShieldCheck,
                title: "Quality & Security",
                desc: "Peer-reviewed code, rigorous testing, and industry best practices ensure reliable software.",
                color: "#dc2626",
              },
              {
                icon: Globe,
                title: "Open & Inclusive",
                desc: "Completely transparent and accessible to everyone, everywhere. No barriers, no boundaries.",
                color: "#ea580c",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="group p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
              >
                <div
                  className="w-16 h-16 mx-auto mb-6 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform"
                  style={{ backgroundColor: `#8D153A15` }}
                >
                  <item.icon
                    className="w-8 h-8"
                    style={{ color: `#8D153A` }}
                  />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-gray-800 group-hover:text-[#8D153A] transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Featured Projects Section */}
      <div className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 bg-white rounded-full shadow-md mb-4">
              <Star className="w-4 h-4 mr-2 text-[#8D153A]" />
              <span className="text-sm font-semibold text-[#8D153A]">
                Popular Projects
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              Trending in Our Community
            </h2>
            <p className="text-xl text-gray-600">
              Explore some of our most impactful open-source projects
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {recentProjects.length > 0
              ? recentProjects.map((project, idx) => (
                  <div
                    key={idx}
                    className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <div
                          className="w-3 h-3 rounded-full"
                          style={{ backgroundColor: project.color }}
                        ></div>
                        <span className="text-sm font-semibold text-gray-600">
                          {project.category}
                        </span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-yellow-500" />
                        <span className="font-semibold text-gray-700">
                          {project.stars}
                        </span>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-gray-800">
                      {project.name}
                    </h3>
                    <a
                      href={project.url ?? "/projects"}
                      target={project.url ? "_blank" : undefined}
                      rel={project.url ? "noopener noreferrer" : undefined}
                      className="inline-flex items-center gap-2 text-sm font-semibold hover:gap-3 transition-all"
                      style={{ color: project.color }}
                    >
                      View Project
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                ))
              : [0, 1, 2].map((i) => (
                  <div
                    key={i}
                    className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 animate-pulse"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-gray-200"></div>
                        <div className="h-4 w-24 bg-gray-200 rounded"></div>
                      </div>
                      <div className="flex items-center gap-1">
                        <div className="w-4 h-4 bg-gray-200 rounded"></div>
                        <div className="h-4 w-8 bg-gray-200 rounded"></div>
                      </div>
                    </div>
                    <div className="h-6 w-3/4 bg-gray-200 rounded mb-4"></div>
                    <div className="h-4 w-24 bg-gray-200 rounded"></div>
                  </div>
                ))}
          </div>

          <div className="text-center mt-12">
            <a
              href="/projects"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#8D153A] font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 border-2 border-[#8D153A]"
            >
              View All Projects
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-linear-to-r from-[#8d1539] via-[#8D153A] to-[#b01d4a] rounded-3xl p-12 text-white text-center shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjEiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-30"></div>

            <div className="relative z-10">
              <Award className="w-16 h-16 mx-auto mb-6" />
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Ready to Make an Impact?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Join our thriving community of developers building the future of
                open source. Your next contribution could change everything.
              </p>

              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="/contribute"
                  className="flex items-center gap-2 px-8 py-4 text-[#8D153A] bg-white rounded-xl font-semibold hover:scale-105 transition-transform shadow-lg"
                >
                  <TrendingUp className="w-5 h-5" />
                  Start Contributing Today
                </a>

                <a
                  href="https://discord.gg/EyfpRmEn9v"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-8 py-4 text-white bg-white/10 backdrop-blur-sm rounded-xl font-semibold hover:bg-white/20 transition-colors border-2 border-white/30"
                >
                  <MessageCircle className="w-5 h-5" />
                  Join Discord
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
