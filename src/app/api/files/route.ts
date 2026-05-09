import { prisma } from "@/shared/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const files = await prisma.file.findMany();

  return NextResponse.json(files);
}
