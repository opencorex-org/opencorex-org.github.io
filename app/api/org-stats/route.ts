import { NextResponse } from "next/server";

import { contributionTracks, docsCollections, siteProjects, workingGroups } from "@/lib/site-content";

export const revalidate = 300;

export async function GET() {
  return NextResponse.json({
    projects: siteProjects.length,
    workingGroups: workingGroups.length,
    docsCollections: docsCollections.length,
    contributionTracks: contributionTracks.length,
    contributors: workingGroups.length,
    commits: docsCollections.length + contributionTracks.length + siteProjects.length,
    countries: 0,
    stars: siteProjects.length,
    source: "static-site-content",
  });
}
