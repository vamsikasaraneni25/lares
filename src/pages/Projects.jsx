import React from "react";
import PageBanner from "../components/PageBanner";
import projectsBanner from "../assets/banners/projects-banner.png";

import enterpriseProject from "../assets/enterpriseProject.jpg";
import mobileProject from "../assets/mobileProject.jpg";
import cloudMigrationProject from "../assets/cloudMigrationProject.jpg";
import dataManagementProject from "../assets/dataManagementProject.jpg";
import aiAutomationProject from "../assets/aiAutomationProject.jpg";
import webApplicationProject from "../assets/webApplicationProject.jpg";

import "./Projects.css";

function Projects() {
  const projects = [
    {
      image: enterpriseProject,
      title: "Enterprise Software Platform",
      description:
        "A customized enterprise software solution developed to automate business operations and improve productivity.",
    },

    {
      image: mobileProject,
      title: "Mobile Application",
      description:
        "A user-friendly mobile application designed with modern UI and advanced functionality for customers.",
    },

    {
      image: cloudMigrationProject,
      title: "Cloud Migration Solution",
      description:
        "Helping businesses move their applications and data securely to scalable cloud platforms.",
    },

    {
      image: dataManagementProject,
      title: "Data Management System",
      description:
        "A powerful database management system developed for efficient storage, processing, and reporting.",
    },

    {
      image: aiAutomationProject,
      title: "AI Automation Project",
      description:
        "Artificial intelligence-based automation solutions that reduce manual effort and increase efficiency.",
    },

    {
      image: webApplicationProject,
      title: "Web Application Development",
      description:
        "Modern responsive web applications built with secure architecture and high performance.",
    },
  ];

  return (
    <>
      <PageBanner
        title="Our Projects"
        image={projectsBanner}
      />

      <section className="projects-section">
        <div className="projects-intro">
          <h2>Our Latest Projects</h2>

          <p>
            We deliver innovative technology solutions that help
            businesses transform digitally and achieve their goals.
          </p>
        </div>

        <div className="projects-container">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <img
                src={project.image}
                alt={project.title}
                className="project-image"
              />

              <h3>{project.title}</h3>

              <p>{project.description}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Projects;