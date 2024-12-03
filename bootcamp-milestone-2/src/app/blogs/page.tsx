import React from "react";
import blogs from "../blogData";
import BlogPreview from "../components/blogPreview";

export default function Blog() {
  return (
    <div>
      <main>

        <div className="blog-previews">
          {blogs.map((blog) => (
            <BlogPreview
              key={blog.slug}
              title={blog.title}
              description={blog.description}
              image={blog.image}
            />
          ))}
        </div>
      </main>
      <footer className="footer">
        © 2024 Personal Website | All Rights Reserved
      </footer>
    </div>
  );
}
