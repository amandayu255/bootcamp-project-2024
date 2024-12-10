import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/app/database/db";
import Project from "@/app/database/projectSchema";

export async function POST(
  req: NextRequest,
  { params }: { params: { slug: string } }
) {
  await connectDB();

  const { slug } = params;
  const { user, comment } = await req.json();

  if (!user || !comment) {
    return NextResponse.json({ error: "User and comment are required" }, { status: 400 });
  }

  try {
    const project = await Project.findOne({ slug }).orFail();

    project.comments.push({ user, comment, time: new Date() });
    await project.save();

    return NextResponse.json(project.comments, { status: 200 });
  } catch (err) {
    console.error("Error saving comment:", err);
    return NextResponse.json({ error: "Failed to save comment" }, { status: 500 });
  }
}
