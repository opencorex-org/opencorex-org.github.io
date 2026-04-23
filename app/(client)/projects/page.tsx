"use client";

import { ArrowRight, BookText, Search, Target, Workflow } from "lucide-react";
import { useDeferredValue, useState } from "react";

import Link from "next/link";

import {
  docsCollections,
  projectCategories,
  siteLinks,
  siteProjects,
  workingGroups,
} from "@/lib/site-content";

const projectStages = Array.from(new Set(siteProjects.map((project) => project.stage)));

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const deferredQuery = useDeferredValue(searchQuery.trim().toLowerCase());

  const filteredProjects = siteProjects.filter((project) => {
    const matchesCategory =
      selectedCategory === "All" || project.category === selectedCategory;
    const matchesQuery =
      deferredQuery.length === 0 ||
      `${project.name} ${project.summary} ${project.description} ${project.audience} ${project.highlights.join(" ")} ${project.focus.join(" ")}`
        .toLowerCase()
        .includes(deferredQuery);

    return matchesCategory && matchesQuery;
  });

  return (
    <div className="space-y-8 pb-10 lg:space-y-12">
      <section className="section-grid xl:grid-cols-[1.12fr_0.88fr]">
        <div className="panel-strong rounded-[2rem] p-8 sm:p-10 lg:p-12">
          <div className="accent-rule" />
          <p className="eyebrow mt-6">
            <Workflow className="h-4 w-4" />
            Project tracks
          </p>
          <h1 className="mt-5 text-4xl font-medium leading-tight text-[var(--foreground)] sm:text-5xl">
            A more detailed, filterable view of what OpenCoreX is actively building.
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-8 text-[var(--muted)] sm:text-lg">
            Every track is described with a practical audience, a delivery stage, and the specific
            capabilities the team is shaping next. The goal is to help contributors understand the
            work before they choose a lane.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            <div className="data-card rounded-[1.5rem] p-5">
              <p className="text-3xl font-medium text-[var(--foreground)]">{siteProjects.length}</p>
              <p className="mt-2 text-sm font-semibold uppercase tracking-[0.14em] text-[var(--brand)]">
                active tracks
              </p>
            </div>
            <div className="data-card rounded-[1.5rem] p-5">
              <p className="text-3xl font-medium text-[var(--foreground)]">{projectStages.length}</p>
              <p className="mt-2 text-sm font-semibold uppercase tracking-[0.14em] text-[var(--brand)]">
                delivery stages
              </p>
            </div>
            <div className="data-card rounded-[1.5rem] p-5">
              <p className="text-3xl font-medium text-[var(--foreground)]">
                {projectCategories.length - 1}
              </p>
              <p className="mt-2 text-sm font-semibold uppercase tracking-[0.14em] text-[var(--brand)]">
                focus areas
              </p>
            </div>
          </div>
        </div>

        <div className="panel-muted rounded-[2rem] p-6 sm:p-8">
          <p className="eyebrow">Why this page matters</p>
          <div className="mt-6 space-y-4">
            {[
              "Tracks stay rooted in the operational problem they are trying to reduce.",
              "Stage labels make it obvious whether something is exploratory, piloting, or scaling.",
              "The same shared content also powers the homepage, docs, and contribution pathways.",
            ].map((item) => (
              <div
                key={item}
                className="rounded-[1.4rem] border border-[var(--line)] bg-[var(--surface-strong)] px-5 py-4 text-sm leading-7 text-[var(--muted-strong)]"
              >
                {item}
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-[1.5rem] border border-[var(--line)] bg-[var(--brand-deep)] p-5 text-white">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-white/65">
              Connected systems
            </p>
            <p className="mt-3 text-sm leading-7 text-white/82">
              {workingGroups.length} working groups and {docsCollections.length} documentation lanes
              support the delivery of these tracks.
            </p>
          </div>
        </div>
      </section>

      <section className="panel rounded-[2rem] p-6 sm:p-8">
        <div className="flex flex-col gap-5 xl:flex-row xl:items-end xl:justify-between">
          <div>
            <p className="eyebrow">Filter and search</p>
            <h2 className="mt-3 text-2xl font-medium text-[var(--foreground)] sm:text-3xl">
              Scan by problem area, then narrow the list by capability or audience.
            </h2>
          </div>

          <label className="relative block w-full max-w-xl">
            <Search className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-[var(--muted)]" />
            <input
              type="text"
              value={searchQuery}
              onChange={(event) => setSearchQuery(event.target.value)}
              placeholder="Search by audience, capability, or project name"
              className="w-full rounded-[1rem] border border-[var(--line)] bg-[var(--surface-strong)] px-12 py-3 text-sm text-[var(--foreground)] outline-none transition focus:border-[var(--brand)]"
            />
          </label>
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          {projectCategories.map((category) => {
            const active = selectedCategory === category;

            return (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`rounded-full border px-4 py-2 text-sm font-semibold transition ${
                  active
                    ? "border-[var(--brand)] bg-[var(--brand)] text-white"
                    : "border-[var(--line)] bg-[var(--surface-strong)] text-[var(--muted-strong)] hover:text-[var(--brand)]"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>
      </section>

      <section className="grid gap-5 xl:grid-cols-2">
        {filteredProjects.map((project) => (
          <article
            id={project.slug}
            key={project.slug}
            className="panel-strong rounded-[2rem] p-6 sm:p-8"
          >
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <span className="h-3 w-3 rounded-full" style={{ backgroundColor: project.accent }} />
                <p className="text-sm font-semibold text-[var(--muted-strong)]">{project.category}</p>
              </div>
              <span className="rounded-full bg-[var(--brand-soft)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-[var(--brand)]">
                {project.stage}
              </span>
            </div>

            <h2 className="mt-5 text-3xl font-medium text-[var(--foreground)]">{project.name}</h2>
            <p className="mt-3 text-base leading-8 text-[var(--muted)]">{project.summary}</p>
            <p className="mt-4 text-sm leading-7 text-[var(--muted-strong)]">
              {project.description}
            </p>

            <div className="mt-6 grid gap-4 md:grid-cols-[1fr_0.95fr]">
              <div className="rounded-[1.5rem] border border-[var(--line)] bg-[var(--surface-muted)] p-5">
                <div className="flex items-center gap-2 text-sm font-semibold text-[var(--brand)]">
                  <Target className="h-4 w-4" />
                  Audience
                </div>
                <p className="mt-3 text-sm leading-7 text-[var(--muted-strong)]">{project.audience}</p>
              </div>

              <div className="rounded-[1.5rem] border border-[var(--line)] bg-[var(--surface-strong)] p-5">
                <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[var(--muted)]">
                  Current focus
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {project.focus.map((item) => (
                    <span
                      key={item}
                      className="rounded-full px-3 py-1 text-xs font-semibold"
                      style={{
                        backgroundColor: `${project.accent}15`,
                        color: project.accent,
                      }}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-6 border-t border-[var(--line)] pt-5">
              <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[var(--muted)]">
                Highlights
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {project.highlights.map((highlight) => (
                  <span
                    key={highlight}
                    className="rounded-full border border-[var(--line)] bg-[var(--surface-strong)] px-3 py-1 text-xs font-semibold text-[var(--muted-strong)]"
                  >
                    {highlight}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </section>

      {filteredProjects.length === 0 ? (
        <section className="panel rounded-[2rem] p-10 text-center">
          <p className="text-2xl font-medium text-[var(--foreground)]">No matching track yet.</p>
          <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
            Try a broader query or reset the category filter to scan the full program list again.
          </p>
        </section>
      ) : null}

      <section className="panel-brand rounded-[2rem] p-8 text-white sm:p-10">
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div>
            <p className="eyebrow eyebrow-muted">
              <BookText className="h-4 w-4" />
              Move into the details
            </p>
            <h2 className="mt-5 text-3xl font-medium leading-tight sm:text-4xl">
              Ready to go from track context into contribution guidance and site documentation?
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-white/82">
              The contribution page explains the working rhythm. The docs hub explains how shared
              content, design rules, and release checks fit together.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 lg:justify-end">
            <Link href={siteLinks.contribute} className="button-secondary px-5 py-4 text-[var(--brand)]">
              Contribution guide
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href={siteLinks.docs} className="button-ghost px-5 py-4">
              Read docs
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
