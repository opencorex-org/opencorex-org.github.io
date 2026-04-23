import { NextResponse } from "next/server";

import { workingGroups } from "@/lib/site-content";

export const revalidate = 300;

export async function GET() {
  return NextResponse.json(workingGroups);
}
