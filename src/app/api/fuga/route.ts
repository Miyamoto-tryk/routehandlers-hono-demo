import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const name = searchParams.get("name") ?? "anonymous";

  return NextResponse.json({
    message: `Hello, ${name}! Received via query parameter.`,
  });
}
