import "./technologies.css";

import aiTech from "../assets/aiTech.jpg";
import cloudTech from "../assets/cloudTech.jpg";
import webTech from "../assets/webTech.jpg";
import mobileTech from "../assets/mobileTech.jpg";
import cyberSecurityTech from "../assets/cybersecurityTech.jpg";
import devopsTech from "../assets/devopsTech.jpg";

function Technologies() {


  const technologies = [
    {
      image: aiTech,
      title: "Artificial Intelligence",
      description:
        "Building intelligent AI and machine learning solutions to automate processes and improve business efficiency.",
    },
    {
      image: cloudTech,
      title: "Cloud Computing",
      description:
        "Providing secure, scalable and flexible cloud solutions for modern enterprises.",
    },
    {
      image: webTech,
      title: "Web Technologies",
      description:
        "Developing responsive, high-performance websites and web applications using modern technologies.",
    },
    {
      image: mobileTech,
      title: "Mobile Technologies",
      description:
        "Creating Android and iOS applications with intuitive user experiences and seamless performance.",
    },
    {
      image: cyberSecurityTech,
      title: "Cyber Security",
      description:
        "Protecting business systems with advanced cybersecurity solutions and secure infrastructure.",
    },
    {
      image: devopsTech,
      title: "DevOps & Infrastructure",
      description:
        "Automating deployments, managing infrastructure, and improving software delivery pipelines.",
    },
  ];

  return (
    <section className="technologies">
      <div className="container">

        <h2>Technologies We Work With</h2>

        <p className="tech-subtitle">
          We leverage cutting-edge technologies to build innovative,
          scalable, and secure digital solutions for businesses.
        </p>

        <div className="tech-grid">
          {technologies.map((tech, index) => (
            <div className="tech-card" key={index}>

              <img
                src={tech.image}
                alt={tech.title}
                className="tech-image"
              />

              <h3>{tech.title}</h3>

              <p>{tech.description}</p>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Technologies;