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
    const repos = (await ghFetch(`/orgs/${ORG}/repos?per_page=50&sort=updated`)) as any[];
    const top = repos
      .sort((a, b) => (b.stargazers_count ?? 0) - (a.stargazers_count ?? 0))
      .slice(0, 6)
      .map((r) => ({
        name: r.name,
        category: r.topics?.[0] ?? "Repository",
        stars: r.stargazers_count ?? 0,
        url: r.html_url,
        color: "#8D153A",
      }));
    return NextResponse.json(top);
  } catch (e: any) {
    return NextResponse.json([], { status: 500 });
  }
}