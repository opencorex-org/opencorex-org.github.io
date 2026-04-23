import { ArrowUpRight, Mail, MessageCircle, Shield } from "lucide-react";

import Image from "next/image";
import Link from "next/link";

import { footerLinkGroups, siteLinks } from "@/lib/site-content";

const Footer = () => {
  return (
    <footer className="px-4 pb-8 pt-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1440px] overflow-hidden rounded-[2rem] border border-[var(--line)] bg-[#050505] text-white">
        <div className="grid gap-10 border-b border-white/12 px-6 py-8 sm:px-8 lg:grid-cols-[1.2fr_0.8fr] lg:px-10">
          <div className="max-w-2xl">
            <div className="mb-5 flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl">
                <Image src="/logo-white.png" alt="OpenCoreX" width={100} height={34} />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/60">
                  OpenCoreX
                </p>
                <p className="text-sm text-white/82">Open resilience software, clearly documented</p>
              </div>
            </div>
            <p className="max-w-xl text-sm leading-7 text-white/80">
              OpenCoreX brings product tracks, contribution guidance, and operational documentation
              into one durable public experience so teams can understand the work before they
              change it.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            <a
              href={siteLinks.discord}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-3 rounded-[1.4rem] border border-white/12 bg-white/10 p-4 transition hover:bg-white/15"
            >
              <MessageCircle className="mt-0.5 h-5 w-5 text-white" />
              <div>
                <p className="text-sm font-semibold text-white">Community chat</p>
                <p className="mt-1 text-sm leading-6 text-white/72">
                  Ask questions, coordinate work, and stay close to active contributors.
                </p>
              </div>
            </a>
            <a
              href={siteLinks.security}
              className="flex items-start gap-3 rounded-[1.4rem] border border-white/12 bg-white/10 p-4 transition hover:bg-white/15"
            >
              <Shield className="mt-0.5 h-5 w-5 text-white" />
              <div>
                <p className="text-sm font-semibold text-white">Security route</p>
                <p className="mt-1 text-sm leading-6 text-white/72">
                  Use a private path for vulnerabilities and sensitive operational concerns.
                </p>
              </div>
            </a>
          </div>
        </div>

        <div className="grid gap-10 px-6 py-10 sm:px-8 lg:grid-cols-[1.2fr_repeat(3,1fr)] lg:px-10">
          <div className="max-w-md">
            <div className="accent-rule bg-white/90" />
            <p className="mt-5 text-sm leading-7 text-white/78">
              The site is designed as a static-first hub with shared content, calmer hierarchy, and
              no live GitHub data dependency in the public UI.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={siteLinks.contact}
                className="button-ghost px-4 py-3"
              >
                <Mail className="h-4 w-4" />
                Contact maintainers
              </a>
              <a
                href={siteLinks.security}
                className="button-ghost px-4 py-3"
              >
                <Shield className="h-4 w-4" />
                Security
              </a>
            </div>
          </div>

          {footerLinkGroups.map((group) => (
            <div key={group.title}>
              <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-white/55">
                {group.title}
              </h3>
              <div className="mt-4 flex flex-col gap-3">
                {group.links.map((link) => {
                  const external = link.href.startsWith("http") || link.href.startsWith("mailto:");

                  return external ? (
                    <a
                      key={link.label}
                      href={link.href}
                      target={link.href.startsWith("http") ? "_blank" : undefined}
                      rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="inline-flex items-center gap-2 text-sm text-white/72 transition hover:text-white"
                    >
                      {link.label}
                      {link.href.startsWith("http") ? (
                        <ArrowUpRight className="h-3.5 w-3.5" />
                      ) : null}
                    </a>
                  ) : (
                    <Link
                      key={link.label}
                      href={link.href}
                      className="inline-flex items-center gap-2 text-sm text-white/72 transition hover:text-white"
                    >
                      {link.label}
                    </Link>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        <div className="border-t border-white/12 px-6 py-4 text-sm text-white/60 sm:px-8 lg:px-10">
          OpenCoreX site experience, contributor handbook, and project overview. Static content,
          consistent design language, and clearer routes into the work.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
