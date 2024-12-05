import React from "react";
import connectDB from "@/app/database/db";
import Project from "@/app/database/projectSchema";

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
    <div>
      <h1>Project List</h1>

      <div>
        {projects.length > 0 ? (
          projects.map((project) => (
            <div key={project.slug}>
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              <img src={project.image} alt={project.image_alt} />
              {/* <ul>
                {project.tags?.map((tag, index) => (
                  <li key={index}>{tag}</li>
                ))}
              </ul> */}
              
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
          <p>No projects found.</p>
        )}
      </div>
    </div>
  );
}
