import React from "react";
import PageBanner from "../components/PageBanner";
import servicesBanner from "../assets/banners/services-banner.png";

import {
  FaCode,
  FaCloud,
  FaMobileAlt,
  FaLaptopCode,
  FaDatabase,
  FaShieldAlt
} from "react-icons/fa";

import "./Services.css";

function Services() {
  const services = [
    {
      icon: <FaCode />,
      title: "Web Development",
      description:
        "We build modern, responsive, and high-performance websites using the latest technologies."
    },
    {
      icon: <FaCloud />,
      title: "Cloud Solutions",
      description:
        "Secure and scalable cloud solutions to improve business efficiency and performance."
    },
    {
      icon: <FaMobileAlt />,
      title: "Mobile Application Development",
      description:
        "Custom mobile applications designed for Android and iOS platforms."
    },
    {
      icon: <FaLaptopCode />,
      title: "Software Development",
      description:
        "Powerful software solutions developed according to your business requirements."
    },
    {
      icon: <FaDatabase />,
      title: "Database Management",
      description:
        "Reliable database design, management, and optimization services."
    },
    {
      icon: <FaShieldAlt />,
      title: "Cyber Security",
      description:
        "Protecting your digital assets with secure and advanced security solutions."
    }
  ];

  return (
    <>
      {/* Page Banner */}
      <PageBanner
        title="Our Services"
        image={servicesBanner}
      />

      {/* Services Section */}
      <section className="services-section">

        <div className="services-intro">
          <h2>Our Technology Services</h2>
          <p>
            We provide innovative IT solutions that help businesses grow,
            automate processes, and achieve digital transformation.
          </p>
        </div>


        <div className="services-container">

          {services.map((service, index) => (
            <div className="service-card" key={index}>

              <div className="service-icon">
                {service.icon}
              </div>

              <h3>
                {service.title}
              </h3>

              <p>
                {service.description}
              </p>

            </div>
          ))}

        </div>

      </section>
    </>
  );
}

export default Services;