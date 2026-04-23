import { NextResponse } from "next/server";

import { siteProjects } from "@/lib/site-content";

export const revalidate = 300;

export async function GET() {
  return NextResponse.json(
    siteProjects.slice(0, 6).map((project) => ({
      name: project.name,
      category: project.category,
      stage: project.stage,
      summary: project.summary,
      url: `${project.slug}`,
      color: project.accent,
    }))
  );
}
