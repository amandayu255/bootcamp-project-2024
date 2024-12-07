import React from "react";
import connectDB from "@/app/database/db";
import Project from "@/app/database/projectSchema";
import "./Portfolio.css";

async function getProjects() {
  await connectDB();
  try {
    const projects = await Project.find().sort({ date: -1 }).orFail();
    return projects;
  } catch (err) {
    console.error("Error fetching projects:", err);
    return [];
  }
}

export default async function ProjectsPage() {
  const projects = await getProjects();

  return (
    <div className="projects-container">
      <h1>My Portfolio</h1>

      <div className="project-list">
        {projects.length > 0 ? (
          projects.map((project) => (
            <div className="project-item" key={project.slug}>
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              <img src={project.image} alt={project.image_alt} />

              <p>
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
              </p>
            </div>
          ))
        ) : (
          <p className="no-projects-message">No projects found.</p>
        )}
      </div>
    </div>
  );
}
