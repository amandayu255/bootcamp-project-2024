import React from "react";
import Image from "next/image";
import CommentsSection from "@/app/components/CommentsSection";
import "./Blog.css";

type Props = {
  params: { slug: string };
};

async function getBlog(slug: string) {
  try {
    const res = await fetch(`http://localhost:3000/api/Blogs/${slug}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch blog");
    }

    return res.json();
  } catch (err) {
    console.error(`Error fetching blog: ${err}`);
    return null;
  }
}

export default async function Blog(props: Props) {
  const { params } = props;
  const { slug } = params;

  const blog = await getBlog(slug);

  if (!blog) {
    return (
      <div className="blog-container">
        <h1>Blog Not Found</h1>
        <p>Sorry, the blog you are looking for does not exist.</p>
      </div>
    );
  }

  return (
    <div className="blog-container">
      <h1>{blog.title}</h1>
      <p>{blog.content}</p>
      {blog.image && (
        <div className="blog-image">
          <Image
            src={blog.image}
            alt={blog.image_alt || "Blog image"}
            width={800}
            height={500}
            priority
          />
        </div>
      )}

      <CommentsSection slug={slug} initialComments={blog.comments} />
    </div>
  );
}
