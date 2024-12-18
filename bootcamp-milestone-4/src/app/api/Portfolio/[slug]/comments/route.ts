import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/app/database/db";
import projectSchema from "@/app/database/projectSchema";

export async function POST(req: NextRequest) {
  await connectDB();

  try {
    const slug = req.nextUrl.pathname.split("/").slice(-2, -1)[0];

    const { user, comment } = await req.json();

    if (!user || !comment) {
      return NextResponse.json(
        { error: "User and comment are required" },
        { status: 400 }
      );
    }

    const project = await projectSchema.findOne({ slug }).orFail();

    project.comments.push({ user, comment, time: new Date() });
    await project.save();

    return NextResponse.json(project.comments);
  } catch (err) {
    console.error("Error saving comment:", err);
    return NextResponse.json({ error: "Failed to save comment" }, { status: 500 });
  }
}
