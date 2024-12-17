import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/app/database/db";
import blogSchema from "@/app/database/blogSchema";

export async function GET(req: NextRequest) {
  await connectDB();

  const slug = req.nextUrl.pathname.split("/").pop();

  if (!slug) {
    return NextResponse.json({ error: "Slug parameter is missing." }, { status: 400 });
  }

  try {
    const blog = await blogSchema.findOne({ slug }).orFail();
    return NextResponse.json(blog);
  } catch (err) {
    console.error("Error fetching blog:", err);
    return NextResponse.json({ error: "Blog not found." }, { status: 404 });
  }
}
