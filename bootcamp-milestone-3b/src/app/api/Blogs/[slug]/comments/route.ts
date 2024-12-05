import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/app/database/db";
import blogSchema from "@/app/database/blogSchema";

export async function POST(req: NextRequest, { params }: { params: { slug: string } }) {
  await connectDB();

  const { slug } = params;
  const { user, comment } = await req.json();

  if (!user || !comment) {
    return NextResponse.json({ error: "User and comment are required" }, { status: 400 });
  }

  try {
    const blog = await blogSchema.findOne({ slug }).orFail();

    blog.comments.push({ user, comment, time: new Date() });
    await blog.save();

    return NextResponse.json(blog.comments);
  } catch (err) {
    console.error("Error saving comment:", err);
    return NextResponse.json({ error: "Failed to save comment" }, { status: 500 });
  }
}
