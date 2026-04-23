import { ArrowRight, Heart, Layers3, ShieldCheck, Users } from "lucide-react";

import Link from "next/link";

import {
  collaborationRoutes,
  siteLinks,
  teamPrinciples,
  workingGroups,
} from "@/lib/site-content";

const categoryAccents: Record<string, { bg: string; color: string }> = {
  product: { bg: "rgba(233,84,32,0.12)", color: "#E95420" },
  engineering: { bg: "rgba(12,123,147,0.14)", color: "#0C7B93" },
  design: { bg: "rgba(94,39,80,0.14)", color: "#5E2750" },
  community: { bg: "rgba(242,150,37,0.16)", color: "#F29625" },
  operations: { bg: "rgba(43,122,90,0.14)", color: "#2B7A5A" },
};

const collaborationStats = [
  { value: `${workingGroups.length}`, label: "working groups" },
  { value: `${new Set(workingGroups.map((group) => group.category)).size}`, label: "disciplines in play" },
  { value: `${teamPrinciples.length}`, label: "shared operating principles" },
];

export default function TeamPage() {
  return (
    <div className="space-y-8 pb-10 lg:space-y-12">
      <section className="section-grid xl:grid-cols-[1.08fr_0.92fr]">
        <div className="panel-strong rounded-[2rem] p-8 sm:p-10 lg:p-12">
          <div className="accent-rule" />
          <p className="eyebrow mt-6">
            <Users className="h-4 w-4" />
            Team and collaboration
          </p>
          <h1 className="mt-5 text-4xl font-medium leading-tight text-[var(--foreground)] sm:text-5xl">
            OpenCorex operates through visible working groups instead of a generic staff directory.
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-8 text-[var(--muted)] sm:text-lg">
            This page focuses on ownership, cadence, and the kind of contributors each lane is
            looking for. That makes the collaboration model more honest and more useful than a
            list of invented titles or vanity biographies.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link href={siteLinks.contribute} className="button-primary px-5 py-4">
              Join a working lane
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href={siteLinks.projects} className="button-secondary px-5 py-4">
              Browse platform tracks
            </Link>
          </div>
        </div>

        <div className="panel-brand rounded-[2rem] p-6 text-white sm:p-8">
          <p className="eyebrow eyebrow-muted">
            <ShieldCheck className="h-4 w-4" />
            Collaboration snapshot
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-3 xl:grid-cols-1">
            {collaborationStats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-[1.4rem] border border-white/10 bg-white/10 px-4 py-4"
              >
                <p className="text-3xl font-medium text-white">{stat.value}</p>
                <p className="mt-2 text-sm font-semibold uppercase tracking-[0.14em] text-white/68">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          <p className="mt-6 text-sm leading-7 text-white/82">
            The people behind OpenCorex collaborate across product, engineering, design,
            community, and operations with shared context in public.
          </p>
        </div>
      </section>

      <section className="panel rounded-[2rem] p-8 sm:p-10">
        <div className="max-w-3xl">
          <p className="eyebrow">
            <Layers3 className="h-4 w-4" />
            Working groups
          </p>
          <h2 className="mt-5 text-3xl font-medium text-[var(--foreground)] sm:text-4xl">
            Each group owns a specific slice of the platform story and delivery process.
          </h2>
        </div>

        <div className="mt-8 grid gap-4 lg:grid-cols-2">
          {workingGroups.map((group) => {
            const accent = categoryAccents[group.category];

            return (
              <article key={group.name} className="rounded-[1.85rem] border border-[var(--line)] bg-[var(--surface-strong)] p-6">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <h3 className="text-2xl font-medium text-[var(--foreground)]">{group.name}</h3>
                  <span
                    className="rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em]"
                    style={{ backgroundColor: accent.bg, color: accent.color }}
                  >
                    {group.category}
                  </span>
                </div>

                <p className="mt-4 text-sm leading-7 text-[var(--muted)]">{group.summary}</p>

                <div className="mt-6 grid gap-4 md:grid-cols-2">
                  <div className="rounded-[1.35rem] border border-[var(--line)] bg-[var(--surface-muted)] p-4">
                    <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[var(--brand)]">
                      Ownership
                    </p>
                    <p className="mt-2 text-sm leading-7 text-[var(--muted-strong)]">
                      {group.ownership}
                    </p>
                  </div>
                  <div className="rounded-[1.35rem] border border-[var(--line)] bg-[var(--surface-strong)] p-4">
                    <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[var(--brand)]">
                      Cadence
                    </p>
                    <p className="mt-2 text-sm leading-7 text-[var(--muted-strong)]">
                      {group.cadence}
                    </p>
                  </div>
                </div>

                <p className="mt-5 text-sm text-[var(--muted-strong)]">
                  <span className="font-semibold">Looking for:</span> {group.lookingFor}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {group.priorities.map((priority) => (
                    <span
                      key={priority}
                      className="rounded-full border border-[var(--line)] bg-[var(--surface-strong)] px-3 py-1 text-xs font-semibold text-[var(--muted-strong)]"
                    >
                      {priority}
                    </span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="section-grid xl:grid-cols-[0.92fr_1.08fr] xl:items-start">
        <div className="panel-muted rounded-[2rem] p-8">
          <p className="eyebrow">
            <Heart className="h-4 w-4" />
            Shared principles
          </p>
          <h2 className="mt-5 text-3xl font-medium text-[var(--foreground)]">
            Warm collaboration and visible context are part of the product quality bar.
          </h2>
          <p className="mt-4 text-sm leading-7 text-[var(--muted)]">
            We treat contributor experience and operating clarity as first-class work, not side
            effects of the code.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {teamPrinciples.map((principle) => (
            <div key={principle.title} className="panel rounded-[1.75rem] p-6">
              <h3 className="text-xl font-medium text-[var(--foreground)]">{principle.title}</h3>
              <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{principle.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="panel-strong rounded-[2rem] p-8 sm:p-10">
        <div className="max-w-3xl border-b border-[var(--line)] pb-6">
          <p className="eyebrow">Collaboration routes</p>
          <h2 className="mt-5 text-3xl font-medium text-[var(--foreground)] sm:text-4xl">
            Pick the channel that fits the question so context stays visible and reusable.
          </h2>
        </div>

        <div className="mt-8 grid gap-4 lg:grid-cols-2 xl:grid-cols-4">
          {collaborationRoutes.map((route) => {
            const external = route.href.startsWith("http") || route.href.startsWith("mailto:");

            return external ? (
              <a
                key={route.label}
                href={route.href}
                target={route.href.startsWith("http") ? "_blank" : undefined}
                rel={route.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="rounded-[1.6rem] border border-[var(--line)] bg-[var(--surface-strong)] p-6 transition hover:-translate-y-0.5"
              >
                <p className="text-lg font-medium text-[var(--foreground)]">{route.label}</p>
                <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{route.description}</p>
              </a>
            ) : null;
          })}
        </div>
      </section>
    </div>
  );
}
