import { ArrowRight, BookText, CheckCircle2, ShieldCheck, Terminal, Users } from "lucide-react";

import Link from "next/link";

import {
  collaborationRoutes,
  contributionCommands,
  contributionSteps,
  contributionTracks,
  docsQuickStart,
  qualityStandards,
  reviewChecklist,
  siteLinks,
} from "@/lib/site-content";

const setupCommands = `git clone https://github.com/OpenCorex-org/OpenCorex-org.github.io.git
cd OpenCorex-org.github.io
pnpm install
pnpm dev`;

export default function ContributePage() {
  return (
    <div className="space-y-8 pb-10 lg:space-y-12">
      <section className="section-grid xl:grid-cols-[1.08fr_0.92fr]">
        <div className="panel-strong rounded-[2rem] p-8 sm:p-10 lg:p-12">
          <div className="accent-rule" />
          <p className="eyebrow mt-6">
            <Users className="h-4 w-4" />
            Contribution guide
          </p>
          <h1 className="mt-5 text-4xl font-medium leading-tight text-[var(--foreground)] sm:text-5xl">
            Join the work with enough context to ship something useful on your first pass.
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-8 text-[var(--muted)] sm:text-lg">
            OpenCorex is easier to contribute to when the public story, the design language, and
            the implementation details stay aligned. This page focuses on the practical working
            rhythm rather than live vanity metrics.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link href={siteLinks.projects} className="button-primary px-5 py-4">
              See the tracks first
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href={siteLinks.docs} className="button-secondary px-5 py-4">
              <BookText className="h-4 w-4 text-[var(--brand)]" />
              Review the docs hub
            </Link>
          </div>
        </div>

        <div className="panel-muted rounded-[2rem] p-6 sm:p-8">
          <p className="eyebrow">
            <ShieldCheck className="h-4 w-4" />
            Start here this week
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="data-card rounded-[1.4rem] p-5">
              <p className="text-3xl font-medium text-[var(--foreground)]">{contributionTracks.length}</p>
              <p className="mt-2 text-sm font-semibold uppercase tracking-[0.14em] text-[var(--brand)]">
                contribution lanes
              </p>
            </div>
            <div className="data-card rounded-[1.4rem] p-5">
              <p className="text-3xl font-medium text-[var(--foreground)]">{qualityStandards.length}</p>
              <p className="mt-2 text-sm font-semibold uppercase tracking-[0.14em] text-[var(--brand)]">
                quality pillars
              </p>
            </div>
          </div>

          <div className="mt-6 rounded-[1.5rem] border border-[var(--line)] bg-[var(--surface-strong)] p-5">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[var(--muted)]">
              Working note
            </p>
            <p className="mt-3 text-sm leading-7 text-[var(--muted-strong)]">
              The public UI is now static-first. We do not rely on runtime GitHub API calls to
              populate contributor stats, project lists, or team content.
            </p>
          </div>
        </div>
      </section>

      <section className="panel rounded-[2rem] p-8 sm:p-10">
        <div className="max-w-3xl">
          <p className="eyebrow">Choose a lane</p>
          <h2 className="mt-5 text-3xl font-medium text-[var(--foreground)] sm:text-4xl">
            Contributions are organized around clear output, not vague requests for help.
          </h2>
        </div>

        <div className="mt-8 grid gap-4 lg:grid-cols-2 xl:grid-cols-3">
          {contributionTracks.map((track) => (
            <article
              key={track.title}
              className="rounded-[1.75rem] border border-[var(--line)] bg-[var(--surface-strong)] p-6"
            >
              <div
                className="h-1.5 w-16 rounded-full"
                style={{ backgroundColor: track.accent }}
              />
              <h3 className="mt-5 text-xl font-medium text-[var(--foreground)]">{track.title}</h3>
              <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{track.description}</p>
              <p className="mt-4 text-sm text-[var(--muted-strong)]">
                <span className="font-semibold">Ideal for:</span> {track.idealFor}
              </p>
              <p className="mt-2 text-sm text-[var(--muted-strong)]">
                <span className="font-semibold">Output:</span> {track.output}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-grid xl:grid-cols-[0.92fr_1.08fr] xl:items-start">
        <div className="panel-muted rounded-[2rem] p-8">
          <p className="eyebrow">
            <CheckCircle2 className="h-4 w-4" />
            Working rhythm
          </p>
          <div className="mt-6 space-y-5">
            {contributionSteps.map((step, index) => (
              <div key={step.title} className="border-t border-[var(--line)] pt-5 first:border-t-0 first:pt-0">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--brand)] text-sm font-semibold text-white">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-medium text-[var(--foreground)]">{step.title}</h3>
                </div>
                <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="panel-strong rounded-[2rem] p-8">
          <p className="eyebrow">
            <Terminal className="h-4 w-4" />
            Local setup
          </p>
          <h2 className="mt-5 text-3xl font-medium text-[var(--foreground)]">
            Run the site, review the shared content, and keep changes small enough to verify well.
          </h2>

          <pre className="mt-6 overflow-x-auto rounded-[1.5rem] border border-[var(--line)] bg-[var(--brand-deep)] p-5 text-sm leading-7 text-white">
            <code>{setupCommands}</code>
          </pre>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {contributionCommands.map((item) => (
              <div key={item.command} className="rounded-[1.4rem] border border-[var(--line)] bg-[var(--surface-strong)] p-5">
                <code className="text-sm font-semibold text-[var(--foreground)]">{item.command}</code>
                <p className="mt-2 text-sm leading-7 text-[var(--muted)]">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {docsQuickStart.map((item) => (
              <div key={item.title} className="rounded-[1.4rem] border border-[var(--line)] bg-[var(--surface-muted)] p-5">
                <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[var(--brand)]">
                  {item.title}
                </p>
                <p className="mt-3 text-sm leading-7 text-[var(--muted-strong)]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-grid xl:grid-cols-[1.05fr_0.95fr] xl:items-start">
        <div className="panel-strong rounded-[2rem] p-8 sm:p-10">
          <p className="eyebrow">Quality expectations</p>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {qualityStandards.map((standard) => (
              <div key={standard.title} className="rounded-[1.6rem] border border-[var(--line)] bg-[var(--surface-strong)] p-6">
                <h3 className="text-xl font-medium text-[var(--foreground)]">{standard.title}</h3>
                <div className="mt-4 space-y-3">
                  {standard.points.map((point) => (
                    <div key={point} className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[var(--brand)]" />
                      <p className="text-sm leading-7 text-[var(--muted)]">{point}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="panel-muted rounded-[2rem] p-8">
          <p className="eyebrow">Review checklist</p>
          <h2 className="mt-5 text-3xl font-medium text-[var(--foreground)]">
            Before handing work over, make sure the whole site still feels coordinated.
          </h2>
          <div className="mt-6 space-y-4">
            {reviewChecklist.map((item) => (
              <div
                key={item}
                className="rounded-[1.4rem] border border-[var(--line)] bg-[var(--surface-strong)] px-5 py-4 text-sm leading-7 text-[var(--muted-strong)]"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="panel rounded-[2rem] p-8 sm:p-10">
        <div className="max-w-3xl">
          <p className="eyebrow">Support routes</p>
          <h2 className="mt-5 text-3xl font-medium text-[var(--foreground)] sm:text-4xl">
            Ask for help in the right place so the next contributor can learn from the answer too.
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
