import { NextResponse } from "next/server";

import { getAllChangelogItems } from "@/lib/getChangelog";

export async function GET() {
  try {
    const changes = getAllChangelogItems();
    return NextResponse.json(changes);
  } catch (error) {
    console.error("Error fetching changelog:", error);
    return NextResponse.json(
      { error: "Failed to fetch changelog" },
      { status: 500 },
    );
  }
}
