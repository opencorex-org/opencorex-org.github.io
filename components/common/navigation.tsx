"use client";

import { ArrowUpRight, BookText, Home, Info, Layers3, Menu, Users, X } from "lucide-react";
import { useState } from "react";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { siteLinks } from "@/lib/site-content";

const navItems = [
  { href: siteLinks.home, label: "Home", icon: Home },
  { href: siteLinks.projects, label: "Projects", icon: Layers3 },
  { href: siteLinks.contribute, label: "Contribute", icon: Users },
  { href: siteLinks.team, label: "Team", icon: Users },
  { href: siteLinks.about, label: "About", icon: Info },
  { href: siteLinks.docs, label: "Docs", icon: BookText },
];

const matchesPath = (pathname: string, href: string) => {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
};

const Navigation = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--line)] bg-[rgba(5,5,5,0.92)] backdrop-blur">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
        <div className="flex min-h-[5rem] items-center justify-between gap-6">
          <Link href={siteLinks.home} className="flex items-center gap-4">
            <div className="flex h-16 w-28 items-center justify-center">
              <Image src="/logo.png" alt="OpenCoreX" width={100} height={100} />
            </div>
          </Link>

          <nav className="hidden items-center gap-6 lg:flex">
            {navItems.map((item) => {
              const active = matchesPath(pathname, item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`border-b-2 pb-1 text-sm font-medium transition ${
                    active
                      ? "border-[var(--brand)] text-[var(--foreground)]"
                      : "border-transparent text-[var(--muted)] hover:text-[var(--foreground)]"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <a
              href={siteLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="button-secondary px-4 py-3"
            >
              GitHub
              <ArrowUpRight className="h-4 w-4 text-[var(--brand)]" />
            </a>
            <Link href={siteLinks.contribute} className="button-primary px-4 py-3">
              Get involved
            </Link>
          </div>

          <button
            onClick={() => setIsMenuOpen((value) => !value)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-[var(--line)] bg-[var(--surface-strong)] text-[var(--foreground)] lg:hidden"
            aria-label="Toggle navigation menu"
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {isMenuOpen ? (
        <div className="border-t border-[var(--line)] bg-[rgba(5,5,5,0.98)] lg:hidden">
          <div className="mx-auto max-w-[1440px] px-4 py-5 sm:px-6">
            <nav className="grid gap-2">
              {navItems.map((item) => {
                const Icon = item.icon;
                const active = matchesPath(pathname, item.href);

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`flex items-center justify-between rounded-2xl border px-4 py-3 text-sm font-medium transition ${
                      active
                        ? "border-[var(--brand)] bg-[var(--brand-soft)] text-[var(--foreground)]"
                        : "border-[var(--line)] bg-[var(--surface-strong)] text-[var(--muted-strong)]"
                    }`}
                  >
                    <span>{item.label}</span>
                    <Icon className="h-4 w-4 text-[var(--brand)]" />
                  </Link>
                );
              })}

              <div className="mt-3 grid gap-2 sm:grid-cols-2">
                <a
                  href={siteLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button-secondary px-4 py-3"
                >
                  GitHub
                  <ArrowUpRight className="h-4 w-4 text-[var(--brand)]" />
                </a>
                <Link
                  href={siteLinks.contribute}
                  onClick={() => setIsMenuOpen(false)}
                  className="button-primary px-4 py-3"
                >
                  Get involved
                </Link>
              </div>
            </nav>
          </div>
        </div>
      ) : null}
    </header>
  );
};

export default Navigation;
