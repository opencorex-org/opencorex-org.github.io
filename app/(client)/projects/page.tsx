"use client";

import React, { useEffect, useMemo, useState } from "react";
import {
  Book,
  Github,
  Rocket,
  Star,
  Users,
  Download,
  ExternalLink,
  TrendingUp,
  Code,
  Package,
  Sparkles,
  Search,
  Award,
  Heart,
} from "lucide-react";

type ProjectItem = {
  name: string;
  category: string;
  stars: number;
  color: string;
  url?: string;
};

export default function Projects() {
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [projects, setProjects] = useState<ProjectItem[]>([]);
  const [loading, setLoading] = useState(true);

  // Fetch real projects from API
  useEffect(() => {
    let mounted = true;
    (async () => {
      try {
        const res = await fetch("/api/projects", { cache: "no-store" });
        const data = await res.json();
        if (mounted) setProjects(Array.isArray(data) ? data : []);
      } catch (e) {
        console.error("Failed to fetch projects:", e);
        if (mounted) setProjects([]);
      } finally {
        if (mounted) setLoading(false);
      }
    })();
    return () => {
      mounted = false;
    };
  }, []);

  const categories = [
    { id: "all", label: "All Projects", icon: Rocket },
    { id: "healthcare", label: "Healthcare", icon: Heart },
    { id: "framework", label: "Frameworks", icon: Code },
    { id: "library", label: "Libraries", icon: Package },
    { id: "data", label: "Data", icon: TrendingUp },
    { id: "infrastructure", label: "Infrastructure", icon: Award },
    { id: "devops", label: "DevOps", icon: Star },
  ];

  const filteredProjects = useMemo(() => {
    const q = searchQuery.toLowerCase();
    return projects.filter((p) => {
      const matchesFilter = selectedFilter === "all" || p.category === selectedFilter;
      const matchesSearch =
        p.name.toLowerCase().includes(q) || p.category.toLowerCase().includes(q);
      return matchesFilter && matchesSearch;
    });
  }, [projects, selectedFilter, searchQuery]);

  const totalStats = useMemo(() => {
    return {
      projects: projects.length,
      stars: projects.reduce((sum, p) => sum + (p.stars ?? 0), 0),
      contributors: 0, // Not available from /api/projects; keep 0 or fetch separately
      downloads: 0, // Not available; keep 0 or integrate npm/GitHub releases API
    };
  }, [projects]);

  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16 relative">
          <div className="absolute inset-0 -z-10 overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#8D153A]/5 rounded-full blur-3xl"></div>
          </div>

          <div
            className="inline-flex items-center px-5 py-2 border-2 rounded-full text-sm font-semibold mb-8 bg-white shadow-md hover:shadow-lg transition-shadow"
            style={{ borderColor: "#8D153A", color: "#8D153A" }}
          >
            <Rocket className="w-4 h-4 mr-2" />
            Our Projects
          </div>

          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-[#8D153A] to-gray-900 bg-clip-text text-transparent">
            Innovative Open Source<br />Solutions
          </h1>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-10">
            Explore our collection of cutting-edge projects built by and for the developer community. Each project solves real-world problems with modern technology.
          </p>

          {/* Stats Overview */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { label: "Projects", value: totalStats.projects, icon: Rocket },
              { label: "GitHub Stars", value: totalStats.stars.toLocaleString(), icon: Star },
              { label: "Contributors", value: totalStats.contributors, icon: Users },
              { label: "Downloads", value: totalStats.downloads, icon: Download },
            ].map((stat, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              >
                <stat.icon className="w-8 h-8 mx-auto mb-2" style={{ color: "#8D153A" }} />
                <div className="text-3xl font-bold mb-1" style={{ color: "#8D153A" }}>
                  {typeof stat.value === "number" ? stat.value : String(stat.value)}
                </div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Search and Filter */}
        <div className="mb-12">
          {/* Search Bar */}
          <div className="relative max-w-2xl mx-auto mb-8">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search projects..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 rounded-xl border-2 border-gray-200 focus:border-[#8D153A] focus:outline-none text-gray-700 bg-white shadow-sm"
            />
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedFilter(category.id)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-medium transition-all duration-300 ${
                  selectedFilter === category.id ? "shadow-lg scale-105" : "bg-white shadow-sm hover:shadow-md"
                }`}
                style={{
                  backgroundColor: selectedFilter === category.id ? "#8D153A" : "white",
                  color: selectedFilter === category.id ? "white" : "#8D153A",
                }}
              >
                <category.icon className="w-4 h-4" />
                {category.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {loading &&
            [0, 1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 animate-pulse">
                <div className="h-6 w-2/3 bg-gray-200 rounded mb-3"></div>
                <div className="h-4 w-1/3 bg-gray-200 rounded mb-4"></div>
                <div className="h-4 w-full bg-gray-200 rounded mb-2"></div>
                <div className="h-4 w-5/6 bg-gray-200 rounded mb-6"></div>
                <div className="h-8 w-full bg-gray-200 rounded"></div>
              </div>
            ))}

          {!loading &&
            filteredProjects.map((project, i) => (
              <div
                key={i}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 overflow-hidden"
              >
                {/* Header */}
                <div className="p-6 pb-4 relative overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-1" style={{ backgroundColor: project.color }}></div>

                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-800 mb-2 group-hover:text-[#8D153A] transition-colors">
                        {project.name}
                      </h3>
                      <span className="text-xs text-gray-500 font-medium">{project.category}</span>
                    </div>
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-gray-100 text-gray-700">
                      Stars {project.stars}
                    </span>
                  </div>

                  {/* Minimal description from name/category */}
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Explore {project.name} in {project.category}. Check out the repository for details.
                  </p>

                  {/* Tech tags unavailable from API response; use category */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span
                      className="px-3 py-1 rounded-full text-xs font-medium"
                      style={{ backgroundColor: `${project.color}15`, color: project.color }}
                    >
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Footer Actions */}
                <div className="px-6 pb-6 bg-gray-50 border-t border-gray-100">
                  <div className="flex gap-2 pt-4">
                    <a
                      href={project.url ?? "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 py-2.5 px-4 text-white rounded-lg font-medium hover:opacity-90 transition-all shadow-sm hover:shadow"
                      style={{ backgroundColor: project.color }}
                    >
                      <ExternalLink className="w-4 h-4" />
                      View Project
                    </a>
                    <a
                      href={project.url ?? "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 border-2 rounded-lg hover:bg-white transition-colors"
                      style={{ borderColor: project.color }}
                    >
                      <Book className="w-5 h-5" style={{ color: project.color }} />
                    </a>
                    <a
                      href={project.url ?? "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 border-2 rounded-lg hover:bg-white transition-colors"
                      style={{ borderColor: project.color }}
                    >
                      <Github className="w-5 h-5" style={{ color: project.color }} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
        </div>

        {/* No Results */}
        {!loading && filteredProjects.length === 0 && (
          <div className="text-center py-16">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gray-100 mb-4">
              <Search className="w-10 h-10 text-gray-400" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">No projects found</h3>
            <p className="text-gray-600">Try adjusting your search or filter criteria</p>
          </div>
        )}

        {/* Call to Action */}
        <div className="mt-20 relative overflow-hidden bg-gradient-to-r from-[#8d1539] via-[#8D153A] to-[#b01d4a] rounded-3xl p-12 text-white shadow-2xl">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjEiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-20"></div>

          <div className="relative z-10 text-center">
            <Sparkles className="w-12 h-12 mx-auto mb-6" />
            <h3 className="text-4xl font-bold mb-4">Have a Project Idea?</h3>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Join our community and start building your next open-source project with support from developers worldwide.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="#"
                className="flex items-center gap-2 px-8 py-4 text-[#8D153A] bg-white rounded-xl font-semibold hover:scale-105 transition-transform shadow-lg"
              >
                <Rocket className="w-5 h-5" />
                Submit Your Project
              </a>

              <a
                href="https://github.com/opencorex-org"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-8 py-4 text-white bg-white/10 backdrop-blur-sm rounded-xl font-semibold hover:bg-white/20 transition-colors border-2 border-white/30"
              >
                <Github className="w-5 h-5" />
                View Org on GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}