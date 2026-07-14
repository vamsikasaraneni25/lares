import React from "react";
import PageBanner from "../components/PageBanner";
import projectsBanner from "../assets/banners/projects-banner.png";

import {
  FaLaptopCode,
  FaMobileAlt,
  FaCloud,
  FaDatabase,
  FaRobot,
  FaGlobe
} from "react-icons/fa";

import "./Projects.css";


function Projects() {

  const projects = [
    {
      icon: <FaLaptopCode />,
      title: "Enterprise Software Platform",
      description:
        "A customized enterprise software solution developed to automate business operations and improve productivity."
    },

    {
      icon: <FaMobileAlt />,
      title: "Mobile Application",
      description:
        "A user-friendly mobile application designed with modern UI and advanced functionality for customers."
    },

    {
      icon: <FaCloud />,
      title: "Cloud Migration Solution",
      description:
        "Helping businesses move their applications and data securely to scalable cloud platforms."
    },

    {
      icon: <FaDatabase />,
      title: "Data Management System",
      description:
        "A powerful database management system developed for efficient storage, processing, and reporting."
    },

    {
      icon: <FaRobot />,
      title: "AI Automation Project",
      description:
        "Artificial intelligence based automation solutions that reduce manual effort and increase efficiency."
    },

    {
      icon: <FaGlobe />,
      title: "Web Application Development",
      description:
        "Modern responsive web applications built with secure architecture and high performance."
    }
  ];


  return (

    <>

      {/* Page Banner */}
      <PageBanner
        title="Our Projects"
        image={projectsBanner}
      />


      {/* Projects Section */}

      <section className="projects-section">


        <div className="projects-intro">

          <h2>
            Our Latest Projects
          </h2>


          <p>
            We deliver innovative technology solutions that help
            businesses transform digitally and achieve their goals.
          </p>

        </div>



        <div className="projects-container">


          {
            projects.map((project, index) => (

              <div
                className="project-card"
                key={index}
              >


                <div className="project-icon">

                  {project.icon}

                </div>



                <h3>
                  {project.title}
                </h3>



                <p>
                  {project.description}
                </p>


              </div>

            ))
          }


        </div>


      </section>


    </>

  );

}


export default Projects;