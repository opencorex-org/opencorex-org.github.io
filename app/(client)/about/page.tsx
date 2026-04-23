import { ArrowRight, Compass, Layers3, ShieldCheck } from "lucide-react";

import Link from "next/link";

import {
  aboutPrinciples,
  operatingModel,
  roadmapMilestones,
  siteLinks,
  siteSnapshot,
} from "@/lib/site-content";

export default function AboutPage() {
  return (
    <div className="space-y-8 pb-10 lg:space-y-12">
      <section className="section-grid xl:grid-cols-[1.12fr_0.88fr]">
        <div className="panel-strong rounded-[2rem] p-8 sm:p-10 lg:p-12">
          <div className="accent-rule" />
          <p className="eyebrow mt-6">
            <Compass className="h-4 w-4" />
            About OpenCoreX
          </p>
          <h1 className="mt-5 text-4xl font-medium leading-tight text-[var(--foreground)] sm:text-5xl">
            OpenCoreX exists to make resilience software clearer, calmer, and easier to sustain.
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-8 text-[var(--muted)] sm:text-lg">
            The platform is shaped around public understanding as much as implementation. We treat
            product structure, contributor onboarding, and documentation quality as part of the
            product itself, not afterthoughts around it.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link href={siteLinks.projects} className="button-primary px-5 py-4">
              Explore the platform
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href={siteLinks.docs} className="button-secondary px-5 py-4">
              Read the handbook
            </Link>
          </div>
        </div>

        <div className="panel-brand rounded-[2rem] p-6 text-white sm:p-8">
          <p className="eyebrow eyebrow-muted">
            <ShieldCheck className="h-4 w-4" />
            What this site reflects
          </p>
          <h2 className="mt-5 text-3xl font-medium leading-tight">
            The public experience should feel as dependable as the tools behind it.
          </h2>
          <div className="mt-6 grid gap-4">
            {siteSnapshot.slice(0, 3).map((item) => (
              <div
                key={item.label}
                className="rounded-[1.4rem] border border-white/10 bg-white/10 px-4 py-4"
              >
                <p className="text-3xl font-medium text-white">{item.value}</p>
                <p className="mt-1 text-sm font-semibold uppercase tracking-[0.14em] text-white/68">
                  {item.label}
                </p>
                <p className="mt-2 text-sm leading-7 text-white/80">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="panel rounded-[2rem] p-8 sm:p-10">
        <div className="max-w-3xl">
          <p className="eyebrow">Operating beliefs</p>
          <h2 className="mt-5 text-3xl font-medium text-[var(--foreground)] sm:text-4xl">
            The platform is designed around local reality, public clarity, and maintainable growth.
          </h2>
        </div>

        <div className="mt-8 grid gap-4 lg:grid-cols-2">
          {aboutPrinciples.map((principle) => (
            <div key={principle.title} className="rounded-[1.75rem] border border-[var(--line)] bg-[var(--surface-strong)] p-6">
              <p className="eyebrow">Principle</p>
              <h3 className="mt-4 text-2xl font-medium text-[var(--foreground)]">
                {principle.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
                {principle.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-grid xl:grid-cols-[0.92fr_1.08fr] xl:items-start">
        <div className="panel-muted rounded-[2rem] p-8">
          <p className="eyebrow">
            <Layers3 className="h-4 w-4" />
            Operating model
          </p>
          <h2 className="mt-5 text-3xl font-medium text-[var(--foreground)]">
            Strategy, design, delivery, and support are treated as one system.
          </h2>
          <p className="mt-4 text-sm leading-7 text-[var(--muted)]">
            We avoid the pattern where implementation gets all the attention while content,
            onboarding, and support are left to catch up later.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {operatingModel.map((item) => (
            <div key={item.title} className="panel rounded-[1.75rem] p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--brand)]">
                {item.title}
              </p>
              <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="panel-strong rounded-[2rem] p-8 sm:p-10">
        <div className="max-w-3xl border-b border-[var(--line)] pb-6">
          <p className="eyebrow">Roadmap context</p>
          <h2 className="mt-5 text-3xl font-medium text-[var(--foreground)] sm:text-4xl">
            The public story has evolved from early coordination experiments into a stronger
            ecosystem hub.
          </h2>
        </div>

        <div className="mt-8 grid gap-4 lg:grid-cols-4">
          {roadmapMilestones.map((milestone) => (
            <div key={milestone.year} className="rounded-[1.75rem] border border-[var(--line)] bg-[var(--surface-strong)] p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--brand)]">
                {milestone.year}
              </p>
              <h3 className="mt-3 text-xl font-medium text-[var(--foreground)]">
                {milestone.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
                {milestone.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="panel-brand rounded-[2rem] p-8 text-white sm:p-10">
        <div className="grid gap-6 lg:grid-cols-[1.08fr_0.92fr] lg:items-end">
          <div>
            <p className="eyebrow eyebrow-muted">
              <Compass className="h-4 w-4" />
              Keep exploring
            </p>
            <h2 className="mt-5 text-3xl font-medium leading-tight sm:text-4xl">
              The clearest way to understand OpenCoreX is to see the platform tracks and the work
              routes side by side.
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-white/82">
              Browse the project catalog for delivery context, then move into the contribution and
              documentation pages for implementation detail.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 lg:justify-end">
            <Link href={siteLinks.projects} className="button-secondary px-5 py-4 text-[var(--brand)]">
              Project tracks
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href={siteLinks.contribute} className="button-ghost px-5 py-4">
              Contribution guide
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
