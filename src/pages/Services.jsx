import "./Services.css";

import webService from "../assets/webservice.jpg";
import cloudService from "../assets/cloudservice.jpg";
import mobileService from "../assets/mobileservice.jpg";
import softwareService from "../assets/softwareservice.jpg";
import databaseService from "../assets/databaseservice.jpg";
import cyberService from "../assets/cyberservice.jpg";

function Services() {
  const services = [
    {
      image: webService,
      title: "Web Development",
      description:
        "We build modern, responsive, and high-performance websites using the latest technologies.",
    },
    {
      image: cloudService,
      title: "Cloud Solutions",
      description:
        "Secure and scalable cloud solutions that improve business efficiency and performance.",
    },
    {
      image: mobileService,
      title: "Mobile Application Development",
      description:
        "Custom Android and iOS applications designed with intuitive user experiences and seamless performance.",
    },
    {
      image: softwareService,
      title: "Software Development",
      description:
        "Powerful software solutions developed according to your business requirements and future growth.",
    },
    {
      image: databaseService,
      title: "Database Management",
      description:
        "Reliable database design, management, optimization, backup, and security services.",
    },
    {
      image: cyberService,
      title: "Cyber Security",
      description:
        "Protecting your digital assets with secure infrastructure and advanced cybersecurity solutions.",
    },
  ];

  return (
    <section className="services">
      <div className="container">

        <h2>Our Services</h2>

        <p className="services-subtitle">
          We provide innovative technology solutions that help businesses
          improve productivity, security, and digital transformation.
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

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Services;