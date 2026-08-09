import { ArrowRight, ExternalLink, Wrench } from "lucide-react";
import type { Metadata } from "next";

import Link from "next/link";
import { tools } from "@/lib/tools";

export const metadata: Metadata = {
  title: "Tools | OpenCorex",
  description: "Explore advanced, privacy-first tools built by the OpenCorex community for documents, media, development, and productivity.",
};

export default function ToolsPage() {
  return (
    <div className="space-y-10 pb-12 lg:space-y-14">

      {/* ── Hero ── */}
      <section className="section-grid">
        <div className="panel-strong rounded-[2rem] p-8 sm:p-10 lg:p-12">
          <div className="accent-rule" />
          <p className="eyebrow mt-6">
            <Wrench className="h-4 w-4" />
            Community tools
          </p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-[var(--foreground)] sm:text-4xl lg:text-5xl">
            Open-source tools<br className="hidden sm:block" /> built for everyone
          </h1>
          <p className="mt-4 max-w-2xl text-[var(--muted)] text-base leading-relaxed">
            Free, no-account-required utilities crafted by the OpenCorex community.
            Every tool runs in your browser and respects your privacy.
          </p>
        </div>
      </section>

      {/* ── Tool Grid ── */}
      <section>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {tools.map((tool) => {
            const Icon = tool.icon;
            return (
              <Link
                key={tool.slug}
                href={tool.href}
                target={tool.external ? "_blank" : undefined}
                rel={tool.external ? "noreferrer" : undefined}
                className="group relative flex flex-col overflow-hidden rounded-[1.75rem] border border-[var(--line)] bg-[var(--surface)] p-6 transition-all duration-200 hover:-translate-y-1"
              >
                {/* Icon */}
                <div
                  className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl"
                  style={{
                    background: `${tool.accent}14`,
                    border: `1px solid ${tool.accent}33`,
                  }}
                >
                  <Icon className="h-5 w-5" style={{ color: tool.accent }} />
                </div>

                {/* Label */}
                <span
                  className="mb-2 text-[0.7rem] font-bold uppercase tracking-widest"
                  style={{ color: tool.accent }}
                >
                  {tool.label}
                </span>

                {/* Title */}
                <h2 className="text-lg font-bold leading-snug text-[var(--foreground)]">
                  {tool.title}
                </h2>

                {/* Description */}
                <p className="mt-2 flex-1 text-sm leading-relaxed text-[var(--muted)]">
                  {tool.description}
                </p>

                {/* CTA */}
                <div className="mt-5 flex items-center gap-1.5 text-sm font-semibold text-[var(--foreground)] transition-colors duration-150 group-hover:text-[var(--brand)]">
                  Open tool
                  {tool.external ? <ExternalLink className="h-4 w-4" /> : <ArrowRight className="h-4 w-4 transition-transform duration-150 group-hover:translate-x-1" />}
                </div>

                {/* Bottom accent line */}
                <div
                  className="absolute bottom-0 left-6 right-6 h-[2px] rounded-full opacity-0 transition-opacity duration-200 group-hover:opacity-100"
                  style={{ backgroundColor: tool.accent }}
                />
              </Link>
            );
          })}
        </div>
      </section>

    </div>
  );
}
