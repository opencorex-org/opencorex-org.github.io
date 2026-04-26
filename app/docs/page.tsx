import { ArrowRight, BookOpen, FileText, Layers, Package, Shield, Terminal } from "lucide-react";

import Link from "next/link";

import {
  collaborationRoutes,
  cookieStorageItems,
  docsCollections,
  docsQuickStart,
  qualityStandards,
  reviewChecklist,
  siteLinks,
} from "@/lib/site-content";

const docsNavigation = [
  { id: "overview", title: "Overview" },
  { id: "quick-start", title: "Quick start" },
  ...docsCollections.map((item) => ({ id: item.id, title: item.title })),
  { id: "cookies-storage", title: "Cookies and storage" },
  { id: "quality-gates", title: "Quality gates" },
  { id: "support-paths", title: "Support paths" },
];

const installSnippet = `pnpm install
pnpm dev
pnpm build
pnpm lint`;

const structureSnippet = `app/
  (client)/
    (home)/page.tsx
    about/page.tsx
    contribute/page.tsx
    projects/page.tsx
    team/page.tsx
  docs/
components/common/
lib/site-content.ts
app/globals.css`;

export default function DocsPage() {
  return (
    <div className="space-y-8 pb-10 lg:space-y-12">
      <section className="panel-strong rounded-[2rem] p-8 sm:p-10 lg:p-12">
        <div className="accent-rule" />
        <p className="eyebrow mt-6">
          <BookOpen className="h-4 w-4" />
          Documentation hub
        </p>
        <h1 className="mt-5 max-w-4xl text-4xl font-medium leading-tight text-[var(--foreground)] sm:text-5xl">
          A site handbook for shared content, design rules, and release-ready public pages.
        </h1>
        <p className="mt-5 max-w-3xl text-base leading-8 text-[var(--muted)] sm:text-lg">
          This documentation is about how OpenCorex is structured and maintained. It explains how
          content flows through the site, where the design language lives, and what to verify
          before shipping an update.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link href={siteLinks.contribute} className="button-primary px-5 py-4">
            Contribution guide
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link href={siteLinks.projects} className="button-secondary px-5 py-4">
            Platform tracks
          </Link>
        </div>
      </section>

      <div className="grid gap-6 xl:grid-cols-[260px_minmax(0,1fr)] xl:items-start">
        <aside className="panel sticky top-28 rounded-[2rem] p-6">
          <p className="eyebrow">On this page</p>
          <nav className="mt-5 space-y-2">
            {docsNavigation.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="block rounded-xl px-3 py-2 text-sm font-medium text-[var(--muted-strong)] transition hover:bg-[var(--surface-strong)] hover:text-[var(--brand)]"
              >
                {item.title}
              </a>
            ))}
          </nav>
        </aside>

        <div className="space-y-6">
          <section id="overview" className="panel rounded-[2rem] p-8">
            <p className="eyebrow">
              <Layers className="h-4 w-4" />
              Overview
            </p>
            <h2 className="mt-5 text-3xl font-medium text-[var(--foreground)]">
              The public site is structured as a shared content system, not a collection of isolated pages.
            </h2>
            <p className="mt-4 text-sm leading-7 text-[var(--muted)]">
              Most public copy, project metadata, and recurring section content live in one module
              so homepage highlights, project detail cards, and documentation references stay in
              sync as the platform evolves.
            </p>
          </section>

          <section id="quick-start" className="panel-strong rounded-[2rem] p-8">
            <p className="eyebrow">
              <Package className="h-4 w-4" />
              Quick start
            </p>
            <div className="mt-6 grid gap-4 lg:grid-cols-3">
              {docsQuickStart.map((item) => (
                <div key={item.title} className="rounded-[1.5rem] border border-[var(--line)] bg-[var(--surface-muted)] p-5">
                  <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[var(--brand)]">
                    {item.title}
                  </p>
                  <p className="mt-3 text-sm leading-7 text-[var(--muted-strong)]">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-6 grid gap-4 lg:grid-cols-2">
              <div className="rounded-[1.6rem] border border-[var(--line)] bg-[var(--brand-deep)] p-5 text-white">
                <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.14em] text-white/68">
                  <Terminal className="h-4 w-4" />
                  Core commands
                </div>
                <pre className="mt-4 overflow-x-auto text-sm leading-7 text-white">
                  <code>{installSnippet}</code>
                </pre>
              </div>

              <div className="rounded-[1.6rem] border border-[var(--line)] bg-[var(--surface-strong)] p-5">
                <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.14em] text-[var(--brand)]">
                  <FileText className="h-4 w-4" />
                  Key files
                </div>
                <pre className="mt-4 overflow-x-auto text-sm leading-7 text-[var(--muted-strong)]">
                  <code>{structureSnippet}</code>
                </pre>
              </div>
            </div>
          </section>

          {docsCollections.map((collection) => (
            <section key={collection.id} id={collection.id} className="panel rounded-[2rem] p-8">
              <p className="eyebrow">{collection.title}</p>
              <h2 className="mt-5 text-3xl font-medium text-[var(--foreground)]">
                {collection.summary}
              </h2>
              <div className="mt-6 grid gap-3">
                {collection.bullets.map((bullet) => (
                  <div
                    key={bullet}
                    className="rounded-[1.35rem] border border-[var(--line)] bg-[var(--surface-strong)] px-5 py-4 text-sm leading-7 text-[var(--muted-strong)]"
                  >
                    {bullet}
                  </div>
                ))}
              </div>
            </section>
          ))}

          <section id="cookies-storage" className="panel rounded-[2rem] p-8">
            <p className="eyebrow">
              <Shield className="h-4 w-4" />
              Cookies and storage
            </p>
            <h2 className="mt-5 text-3xl font-medium text-[var(--foreground)]">
              OpenCorex stores only the minimum needed to remember cookie consent.
            </h2>
            <p className="mt-4 text-sm leading-7 text-[var(--muted)]">
              The site uses a small consent cookie and a matching local storage record so the cookie
              banner does not reappear on every page load after a visitor makes a choice. We do not
              use this storage for advertising or behavioral profiling in the current public site.
            </p>

            <div className="mt-6 grid gap-4">
              {cookieStorageItems.map((item) => (
                <div
                  key={item.name}
                  className="rounded-[1.5rem] border border-[var(--line)] bg-[var(--surface-strong)] p-5"
                >
                  <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                    <div>
                      <p className="text-lg font-medium text-[var(--foreground)]">{item.name}</p>
                      <p className="mt-1 text-sm font-semibold uppercase tracking-[0.14em] text-[var(--brand)]">
                        {item.type}
                      </p>
                    </div>
                    <p className="text-sm text-[var(--muted)]">{item.duration}</p>
                  </div>
                  <p className="mt-3 text-sm leading-7 text-[var(--muted-strong)]">
                    {item.purpose}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section id="quality-gates" className="panel-strong rounded-[2rem] p-8">
            <p className="eyebrow">
              <Shield className="h-4 w-4" />
              Quality gates
            </p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {qualityStandards.map((standard) => (
                <div key={standard.title} className="rounded-[1.6rem] border border-[var(--line)] bg-[var(--surface-strong)] p-6">
                  <h3 className="text-xl font-medium text-[var(--foreground)]">{standard.title}</h3>
                  <div className="mt-4 space-y-3">
                    {standard.points.map((point) => (
                      <p key={point} className="text-sm leading-7 text-[var(--muted)]">
                        {point}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-[1.75rem] border border-[var(--line)] bg-[var(--surface-muted)] p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[var(--brand)]">
                Release checklist
              </p>
              <div className="mt-4 grid gap-3">
                {reviewChecklist.map((item) => (
                  <div key={item} className="rounded-[1.25rem] border border-[var(--line)] bg-[var(--surface-strong)] px-4 py-3 text-sm leading-7 text-[var(--muted-strong)]">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section id="support-paths" className="panel-brand rounded-[2rem] p-8 text-white">
            <p className="eyebrow eyebrow-muted">Support paths</p>
            <h2 className="mt-5 text-3xl font-medium leading-tight">
              Route public questions, maintainer contact, and security concerns through the right channel.
            </h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {collaborationRoutes.map((route) => {
                const external = route.href.startsWith("http") || route.href.startsWith("mailto:");

                return external ? (
                  <a
                    key={route.label}
                    href={route.href}
                    target={route.href.startsWith("http") ? "_blank" : undefined}
                    rel={route.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="rounded-[1.5rem] border border-white/10 bg-white/10 p-5"
                  >
                    <p className="text-lg font-medium text-white">{route.label}</p>
                    <p className="mt-3 text-sm leading-7 text-white/82">{route.description}</p>
                  </a>
                ) : null;
              })}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
