import { Link } from "react-router-dom";
import PageBanner from "../components/PageBanner";
import technologiesBanner from "../assets/banners/technologies-banner.png";

import aiTech from "../assets/aiTech.jpg";
import cloudTech from "../assets/cloudTech.jpg";
import webTech from "../assets/webTech.jpg";
import mobileTech from "../assets/mobileTech.jpg";
import cybersecurityTech from "../assets/cybersecurityTech.jpg";
import devopsTech from "../assets/devopsTech.jpg";

import "./Technologies.css";

function Technologies() {
  const technologies = [
    {
      image: aiTech,
      title: "Artificial Intelligence",
      description:
        "Building intelligent solutions using AI and Machine Learning to automate business processes and improve decision-making.",
      link: "/technologies/artificial-intelligence",
    },
    {
      image: cloudTech,
      title: "Cloud Computing",
      description:
        "Providing secure, scalable cloud infrastructure and services for modern businesses.",
      link: "/technologies/cloud-computing",
    },
    {
      image: webTech,
      title: "Web Technologies",
      description:
        "Developing responsive, secure, and high-performance web applications using modern technologies.",
      link: "/technologies/web-technologies",
    },
    {
      image: mobileTech,
      title: "Mobile Technologies",
      description:
        "Creating Android and iOS applications with outstanding user experiences.",
      link: "/technologies/mobile-technologies",
    },
    {
      image: cybersecurityTech,
      title: "Cyber Security",
      description:
        "Protecting applications, networks, and sensitive business data with advanced security practices.",
      link: "/technologies/cyber-security",
    },
    {
      image: devopsTech,
      title: "DevOps & Infrastructure",
      description:
        "Automating deployment pipelines and managing reliable cloud infrastructure.",
      link: "/technologies/devops-infrastructure",
    },
  ];

  return (
    <>
      <PageBanner
        title="Technologies"
        image={technologiesBanner}
      />

      <section className="technologies-section">
        <div className="technologies-intro">
          <h2>Technologies We Use</h2>

          <p>
            We leverage modern technologies to build secure, scalable, and
            innovative digital solutions for businesses across multiple
            industries.
          </p>
        </div>

        <div className="technologies-container">
          {technologies.map((technology, index) => (
            <div className="technology-card" key={index}>
              <img
                src={technology.image}
                alt={technology.title}
                className="technology-image"
              />

              <div className="technology-content">
                <h3>{technology.title}</h3>

                <p>{technology.description}</p>

                <Link
                  to={technology.link}
                  className="technology-btn"
                >
                  Read More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Technologies;