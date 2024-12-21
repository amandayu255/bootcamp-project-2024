import React from "react";
import CommentsSection from "@/app/components/CommentsSection";
import Image from "next/image";
import "./Project.css";

type Props = {
  params: Promise<{ slug: string }>;
};

async function getProject(slug: string) {
  try {
    const res = await fetch(`${process.env.URL}/api/Portfolio/${slug}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch project");
    }

    return res.json();
  } catch (err) {
    console.error(`Error fetching project: ${err}`);
    return null;
  }
}

export default async function Project({ params }: Props) {
  const { slug } = await params;
  const project = await getProject(slug);

  if (!project) {
    return (
      <div className="portfolio-container">
        <h1>Project Not Found</h1>
        <p>Sorry, the project you are looking for does not exist.</p>
      </div>
    );
  }

  return (
    <div className="portfolio-container">
      <h1>{project.title}</h1>
      <p>{project.description}</p>
      {project.image && (
        <div className="project-image">
          <Image
            src={project.image}
            alt={project.image_alt || "Project image"}
            width={800}
            height={500}
            priority
          />
        </div>
      )}
      <div className="project-content">{project.content}</div>
      <div className="project-links">
        {project.links?.github && (
          <a
            href={project.links.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        )}
        {project.links?.liveDemo && (
          <>
            {" | "}
            <a
              href={project.links.liveDemo}
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Demo
            </a>
          </>
        )}
      </div>
      
      <CommentsSection
        slug={slug}
        type="Portfolio"
        initialComments={project.comments || []}
      />
    </div>
  );
}
