import { Link } from "react-router-dom";
import "./Services.css";

import aiService from "../assets/ai.jpg";
import cloudService from "../assets/cloudservice.jpg";
import iotService from "../assets/iot.jpg";
import softwareService from "../assets/software.jpg";
import automationService from "../assets/automationImg.jpg";
import digitalService from "../assets/digitalTransformationImg.jpg";

function Services() {
  const services = [
    {
      image: aiService,
      title: "Artificial Intelligence",
      description:
        "Build intelligent applications using AI, Machine Learning, Natural Language Processing, and Predictive Analytics.",
      link: "/services/artificial-intelligence",
    },
    {
      image: cloudService,
      title: "Cloud Computing",
      description:
        "Secure, scalable cloud infrastructure and migration services for modern businesses.",
      link: "/services/cloud-computing",
    },
    {
      image: iotService,
      title: "Internet of Things",
      description:
        "Connect devices and enable smart automation through IoT technologies and real-time monitoring.",
      link: "/services/iot",
    },
    {
      image: softwareService,
      title: "Software Development",
      description:
        "Custom software solutions tailored to your business needs using modern technologies.",
      link: "/services/software-development",
    },
    {
      image: automationService,
      title: "Automation",
      description:
        "Automate repetitive tasks and streamline workflows to improve efficiency and productivity.",
      link: "/services/automation",
    },
    {
      image: digitalService,
      title: "Digital Transformation",
      description:
        "Modernize your business with innovative digital technologies that accelerate growth.",
      link: "/services/digital-transformation",
    },
  ];

  return (
    <section className="services">
      <div className="container">

        <h2>Our Services</h2>

        <p className="services-subtitle">
          We provide innovative technology solutions that help businesses
          improve productivity, security, and accelerate digital transformation.
        </p>

        <div className="services-grid">
          {services.map((service, index) => (
            <div className="service-card" key={index}>

              <img
                src={service.image}
                alt={service.title}
                className="service-image"
              />

              <h3>{service.title}</h3>

              <p>{service.description}</p>

              <Link
                to={service.link}
                className="service-btn"
              >
                Read More
              </Link>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Services;