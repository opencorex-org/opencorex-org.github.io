import {
  ArrowRight,
  BookText,
  Compass,
  Layers3,
  ShieldCheck,
  Users,
  Workflow,
} from "lucide-react";

import Image from "next/image";
import Link from "next/link";

import {
  deliveryPhases,
  heroProofPoints,
  platformPillars,
  siteLinks,
  siteProjects,
  siteSnapshot,
  workingGroups,
} from "@/lib/site-content";

const featuredProjects = siteProjects.slice(0, 4);
const featuredGroups = workingGroups.slice(0, 3);

export default function HomePage() {
  return (
    <div className="space-y-8 pb-10 lg:space-y-12">
      <section className="section-grid xl:grid-cols-[1.18fr_0.82fr]">
        <div className="panel-strong overflow-hidden rounded-[2rem] p-8 sm:p-10 lg:p-12">
          <div className="accent-rule" />
          <p className="eyebrow mt-6">
            <ShieldCheck className="h-4 w-4" />
            Trusted open resilience software
          </p>

          <div className="mt-6 max-w-4xl">
            <h1 className="text-4xl font-medium leading-tight text-[var(--foreground)] sm:text-5xl lg:text-[4.25rem]">
              A clearer front door for preparedness, mapping, and response products.
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-8 text-[var(--muted)] sm:text-lg">
              OpenCorex brings project tracks, contribution routes, and documentation into one
              durable public experience so visitors can understand the work before they try to
              change it.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link href={siteLinks.projects} className="button-primary px-5 py-4">
              Explore project tracks
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href={siteLinks.docs} className="button-secondary px-5 py-4">
              <BookText className="h-4 w-4 text-[var(--brand)]" />
              Open the handbook
            </Link>
            <Link href={siteLinks.contribute} className="button-secondary px-5 py-4">
              <Users className="h-4 w-4 text-[var(--brand)]" />
              Start contributing
            </Link>
          </div>

          <div className="mt-10 grid gap-3 sm:grid-cols-3">
            {heroProofPoints.map((item) => (
              <div
                key={item}
                className="rounded-[1.25rem] border border-[var(--line)] bg-[var(--surface-strong)] px-4 py-4 text-sm font-medium text-[var(--muted-strong)]"
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="section-grid">
          <div className="panel-muted rounded-[2rem] p-6 sm:p-8">
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center">
                <Image src="/logo.png" alt="OpenCorex" width={100} height={36} />
              </div>
              <div>
                <p className="eyebrow">Platform snapshot</p>
                <p className="mt-2 text-sm leading-7 text-[var(--muted)]">
                  Shared content, reusable sections, and calmer hierarchy across the whole site.
                </p>
              </div>
            </div>

            <div className="mt-8 space-y-4">
              {siteSnapshot.slice(0, 3).map((item) => (
                <div key={item.label} className="border-t border-[var(--line)] pt-4 first:border-t-0 first:pt-0">
                  <p className="text-3xl font-medium text-[var(--foreground)]">{item.value}</p>
                  <p className="mt-1 text-sm font-semibold uppercase tracking-[0.14em] text-[var(--brand)]">
                    {item.label}
                  </p>
                  <p className="mt-2 text-sm leading-7 text-[var(--muted)]">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="panel-brand rounded-[2rem] p-6 text-white sm:p-8">
            <p className="eyebrow eyebrow-muted">
              <Compass className="h-4 w-4" />
              How the hub works
            </p>
            <h2 className="mt-5 text-3xl font-medium leading-tight">
              Visitors can move from discovery into contribution without losing context.
            </h2>
            <div className="mt-6 grid gap-3">
              {[
                "Projects explain what the platform is building.",
                "Team shows how work is owned and coordinated.",
                "Docs and contribute cover the practical next steps.",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-[1.35rem] border border-white/10 bg-white/10 px-4 py-4 text-sm leading-7 text-white/82"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {siteSnapshot.map((signal) => (
          <div key={signal.label} className="panel rounded-[1.75rem] p-6">
            <p className="text-4xl font-medium text-[var(--foreground)]">{signal.value}</p>
            <p className="mt-2 text-sm font-semibold uppercase tracking-[0.16em] text-[var(--brand)]">
              {signal.label}
            </p>
            <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{signal.detail}</p>
          </div>
        ))}
      </section>

      <section className="section-grid xl:grid-cols-[0.9fr_1.1fr] xl:items-start">
        <div className="panel-strong rounded-[2rem] p-8">
          <p className="eyebrow">
            <Workflow className="h-4 w-4" />
            Platform posture
          </p>
          <h2 className="mt-5 text-3xl font-medium leading-tight text-[var(--foreground)] sm:text-4xl">
            Clear public explanations, strong defaults, and less dependency on live external data.
          </h2>
          <p className="mt-4 text-sm leading-7 text-[var(--muted)]">
            The site now behaves more like a product handbook than a placeholder landing page. Each
            section is there to answer a practical question: what OpenCorex builds, how the work is
            organized, and where contributors can help.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {platformPillars.map((pillar) => (
            <div key={pillar.title} className="panel rounded-[1.75rem] p-6">
              <p className="eyebrow">Principle</p>
              <h3 className="mt-4 text-xl font-medium text-[var(--foreground)]">{pillar.title}</h3>
              <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{pillar.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="panel-strong rounded-[2rem] p-8 sm:p-10">
        <div className="flex flex-col gap-4 border-b border-[var(--line)] pb-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <p className="eyebrow">
              <Layers3 className="h-4 w-4" />
              Flagship tracks
            </p>
            <h2 className="mt-5 text-3xl font-medium text-[var(--foreground)] sm:text-4xl">
              Platform tracks explained through audience, stage, and delivery priorities.
            </h2>
            <p className="mt-4 text-sm leading-7 text-[var(--muted)]">
              Instead of generic placeholders, the public story now stays close to the actual
              platform lanes and the people those lanes are designed to support.
            </p>
          </div>
          <Link href={siteLinks.projects} className="button-secondary self-start px-5 py-4">
            See every track
            <ArrowRight className="h-4 w-4 text-[var(--brand)]" />
          </Link>
        </div>

        <div className="mt-8 grid gap-5 xl:grid-cols-2">
          {featuredProjects.map((project) => (
            <article
              key={project.slug}
              className="rounded-[1.75rem] border border-[var(--line)] bg-[var(--surface-strong)] p-6"
            >
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <span className="h-3 w-3 rounded-full" style={{ backgroundColor: project.accent }} />
                  <p className="text-sm font-semibold text-[var(--muted-strong)]">
                    {project.category}
                  </p>
                </div>
                <span className="rounded-full bg-[var(--brand-soft)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-[var(--brand)]">
                  {project.stage}
                </span>
              </div>

              <h3 className="mt-5 text-2xl font-medium text-[var(--foreground)]">{project.name}</h3>
              <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{project.summary}</p>
              <p className="mt-4 text-sm leading-7 text-[var(--muted-strong)]">
                {project.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.highlights.map((highlight) => (
                  <span
                    key={highlight}
                    className="rounded-full px-3 py-1 text-xs font-semibold"
                    style={{
                      backgroundColor: `${project.accent}14`,
                      color: project.accent,
                    }}
                  >
                    {highlight}
                  </span>
                ))}
              </div>

              <Link
                href={`${siteLinks.projects}#${project.slug}`}
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[var(--brand)]"
              >
                Open project profile
                <ArrowRight className="h-4 w-4" />
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="section-grid xl:grid-cols-[0.95fr_1.05fr]">
        <div className="panel-muted rounded-[2rem] p-8">
          <p className="eyebrow">
            <Workflow className="h-4 w-4" />
            Delivery rhythm
          </p>
          <div className="mt-6 space-y-5">
            {deliveryPhases.map((phase, index) => (
              <div key={phase.title} className="border-t border-[var(--line)] pt-5 first:border-t-0 first:pt-0">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--brand)] text-sm font-semibold text-white">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-medium text-[var(--foreground)]">{phase.title}</h3>
                </div>
                <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="panel-strong rounded-[2rem] p-8">
          <p className="eyebrow">
            <Users className="h-4 w-4" />
            Working groups
          </p>
          <h2 className="mt-5 text-3xl font-medium text-[var(--foreground)]">
            Cross-functional ownership is visible, not hidden inside the codebase.
          </h2>
          <div className="mt-6 grid gap-4">
            {featuredGroups.map((group) => (
              <div
                key={group.name}
                className="rounded-[1.5rem] border border-[var(--line)] bg-[var(--surface-strong)] p-5"
              >
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <h3 className="text-lg font-medium text-[var(--foreground)]">{group.name}</h3>
                  <span className="rounded-full bg-[var(--brand-deep-soft)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-[var(--brand)]">
                    {group.category}
                  </span>
                </div>
                <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{group.summary}</p>
                <p className="mt-3 text-sm text-[var(--muted-strong)]">
                  <span className="font-semibold">Looking for:</span> {group.lookingFor}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="panel-brand rounded-[2rem] p-8 text-white sm:p-10">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div>
            <p className="eyebrow eyebrow-muted">
              <ShieldCheck className="h-4 w-4" />
              Next steps
            </p>
            <h2 className="mt-5 text-3xl font-medium leading-tight sm:text-4xl">
              Move from the high-level story into the practical work without a dead end.
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-white/82">
              Browse the tracks, review the docs, or jump into contribution guidance. Every route
              now points back into the same shared platform narrative.
            </p>
          </div>

          <div className="grid gap-3">
            <Link href={siteLinks.projects} className="button-secondary px-5 py-4 text-[var(--brand)]">
              Browse project tracks
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href={siteLinks.contribute} className="button-ghost px-5 py-4">
              Read contribution guidance
            </Link>
            <Link href={siteLinks.docs} className="button-ghost px-5 py-4">
              Open the documentation hub
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
