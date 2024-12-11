import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/app/database/db";
import Project from "@/app/database/projectSchema";

export async function GET(req: NextRequest, { params }: { params: { slug: string } }) {
  await connectDB();
  try {
    const project = await Project.findOne({ slug: params.slug }).orFail();
    return NextResponse.json(project);
  } catch {
    return NextResponse.json({ error: "Project not found" }, { status: 404 });
  }
}
