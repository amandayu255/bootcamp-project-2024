import React from "react";
import './Resume.css'

export default function Resume() {
  return (
    <div className="resume">
      <section className="section">
        <h1 className="section-title">Education</h1>
        <div className="entry">
          <h3 className="entry-title">Bachelor of Science in Computer Science</h3>
          <p className="entry-info">
            California Polytechnic State University, San Luis Obispo (Cal Poly)
            | June 2026
          </p>
        </div>
      </section>
      <section className="section">
        <h1 className="section-title">Coursework</h1>
        <div className="entry">
          <ul className="course-list">
            <li>Hack4Impact HTML, CSS, & Git Starter Pack</li>
            <li>Data Structures</li>
            <li>Object-Oriented Programming</li>
            <li>Intro to Computer Organization</li>
            <li>Systems Programming</li>
            <li>Discrete Structures</li>
            <li>Design and Analysis of Algorithms</li>
            <li>Introduction to Database Systems</li>
            <li>Theory of Computation I</li>
            <li>Introduction to Software Engineering</li>
          </ul>
        </div>
      </section>
      <section className="section">
        <h1 className="section-title">Skills</h1>
        <div className="entry">
          <h3 className="entry-title">Technical skills</h3>
          <p className="entry-info">A summary of skills gained from projects and experience:</p>
          <ul className="skill-list">
            <li>
              Python, Java, Kotlin, JavaScript, React, SQL, TensorFlow, PyTorch,
              MongoDB, Linux, GitHub, Git, Visual Studio Code, Android Studio,
              Microsoft Office, Microsoft Excel, Slack, G-suite
            </li>
          </ul>
        </div>
      </section>
      <section className="section">
        <h1 className="section-title">Projects</h1>
        <div className="entry">
          <h3 className="entry-title">Recipe Database Project</h3>
          <ul>
            <li>
              Designed and developed a relational database system for organizing recipes, ingredients, cooking methods, and grocery shopping details, enhancing meal planning and preparation
            </li>
            <li>
              Implemented a user-friendly frontend using React.js, allowing users to interact with the database to discover recipes, track ingredients, and manage nutrition information
            </li>
            <li>
              Collaborated with peers to ensure seamless integration between the frontend and backend, enhancing overall system functionality and user experience
            </li>
            <li>Utilized: React, MySQL, Node.js, GitHub</li>
          </ul>
        </div>
      </section>

      <section className="section">
        <h1 className="section-title">Experience</h1>
        <div className="entry">

          <h3 className="entry-title">AI Studio Intern @ Break Through Tech AI / Google</h3>
          <p className="entry-info">Break Through Tech AI / Google | August 2024 - December 2024</p>
          <ul>
            <li>
              Develop a machine learning model that suggests relevant search queries to users based on their current search term and their past search history
            </li>
          </ul>

          <h3 className="entry-title">Break Through Tech AI Fellow</h3>
          <p className="entry-info">Break Through Tech AI | May 2024 - Present</p>
          <ul>
            <li>
              Selected from 3000+ applicants for Break Through Tech AI, a year-long fellowship program designed to support women and other underrepresented people in AI, ML, and Data Science
            </li>
            <li>
              Contributed towards 12-month long program including Machine Learning Certificate with Cornell faculty, experiential learning experiences, and mentorship from industry professionals
            </li>
          </ul>
          
        </div>
      </section>
    </div>
  );
}