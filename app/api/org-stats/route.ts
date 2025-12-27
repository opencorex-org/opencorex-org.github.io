import { NextResponse } from "next/server";

const ORG = "opencorex-org";
const GITHUB_API = "https://api.github.com";

async function ghFetch(path: string) {
  const headers: Record<string, string> = { Accept: "application/vnd.github+json" };
  if (process.env.GITHUB_TOKEN) headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
  const res = await fetch(`${GITHUB_API}${path}`, { headers, next: { revalidate: 300 } });
  if (!res.ok) throw new Error(`GitHub API error: ${res.status} ${res.statusText}`);
  return res.json();
}

export async function GET() {
  try {
    // Public members
    const members = await ghFetch(`/orgs/${ORG}/members`);
    const contributors = Array.isArray(members) ? members.length : 0;

    // Fetch up to 300 repos and aggregate stats
    const pages = await Promise.all([
      ghFetch(`/orgs/${ORG}/repos?per_page=100&type=public&page=1`),
      ghFetch(`/orgs/${ORG}/repos?per_page=100&type=public&page=2`).catch(() => []),
      ghFetch(`/orgs/${ORG}/repos?per_page=100&type=public&page=3`).catch(() => []),
    ]);
    const repos = ([] as any[]).concat(...pages);

    const projects = repos.length;
    const stars = repos.reduce((sum, r: any) => sum + (r.stargazers_count ?? 0), 0);
    const commitsProxy = repos.reduce(
      (sum, r: any) => sum + (r.stargazers_count ?? 0) + (r.open_issues_count ?? 0),
      0
    );

    return NextResponse.json({
      contributors,
      projects,
      commits: commitsProxy,
      countries: 1, // not available via GitHub API
      stars,
    });
  } catch (e: any) {
    return NextResponse.json(
      { error: e.message, contributors: 0, projects: 0, commits: 0, countries: 0, stars: 0 },
      { status: 500 }
    );
  }
}