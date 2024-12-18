import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/app/database/db";
import projectSchema from "@/app/database/projectSchema";

export async function GET(req: NextRequest) {
  await connectDB();

  const slug = req.nextUrl.pathname.split("/").pop();

  if (!slug) {
    return NextResponse.json({ error: "Slug parameter is missing." }, { status: 400 });
  }

  try {
    const project = await projectSchema.findOne({ slug }).orFail();
    return NextResponse.json(project);
  } catch (err) {
    console.error("Error fetching project:", err);
    return NextResponse.json({ error: "Project not found." }, { status: 404 });
  }
}
