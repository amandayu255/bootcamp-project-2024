import React from "react";
import connectDB from "@/app/database/db";
import Blog from "@/app/database/blogSchema";
import Link from "next/link";
import "./Blogs.css";

async function getBlogs() {
  await connectDB();
  try {
    const blogs = await Blog.find().sort({ date: -1 }).orFail();
    return blogs;
  } catch (err) {
    return [];
  }
}

export default async function BlogsPage() {
  const blogs = await getBlogs();

  return (
    <div className="blogs-container">
      <h1>My Blogs</h1>

      <div className="blog-list">
        {blogs.length > 0 ? (
          blogs.map((blog) => (
            <Link href={`/blogs/${blog.slug}`} key={blog.slug}>
              <div className="blog-item">
                <h2>{blog.title}</h2>
                <p>{blog.description}</p>
                <img src={blog.image} alt={blog.image_alt} />
              </div>
            </Link>
          ))
        ) : (
          <p>No blogs found.</p>
        )}
      </div>
    </div>
  );
}
