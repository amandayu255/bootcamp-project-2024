import React from "react";
import connectDB from "@/app/database/db";
import Blog from "@/app/database/blogSchema";

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
    <div>
      <h1>Blog List</h1>
      
      <div>
        {blogs.length > 0 ? (
          blogs.map((blog) => (
            <div key={blog.slug}>
              <h2>{blog.title}</h2>
              <p>{blog.description}</p>
              <img src={blog.image} alt={blog.image_alt} />
            </div>
          ))
        ) : (
          <p>No blogs found.</p>
        )}
      </div>
    </div>
  );
}
