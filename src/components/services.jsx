import { useState } from "react";
import "./services.css";

function Services() {
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    {
      id: "ai",
      title: "🤖 Artificial Intelligence",
      short: "AI-powered applications and automation.",
      details:
        "We develop AI-powered applications, Machine Learning models, NLP solutions, Computer Vision systems, AI Chatbots, Predictive Analytics, and Intelligent Automation tailored to your business."
    },
    {
      id: "cloud",
      title: "☁ Cloud Computing",
      short: "Scalable cloud infrastructure.",
      details:
        "Our cloud services include AWS, Azure, Google Cloud deployment, migration, security, DevOps, backup solutions, and infrastructure management."
    },
    {
      id: "iot",
      title: "🌐 Internet of Things",
      short: "Smart IoT solutions.",
      details:
        "We build smart IoT systems with connected devices, remote monitoring, predictive maintenance, industrial automation, and real-time analytics."
    },
    {
      id: "software",
      title: "💻 Software Development",
      short: "Custom software solutions.",
      details:
        "We develop responsive websites, enterprise software, mobile apps, APIs, ERP systems, CRM solutions, and custom business applications."
    },
    {
      id: "automation",
      title: "⚙ Automation",
      short: "Business process automation.",
      details:
        "Automate repetitive business tasks using workflow automation, RPA, AI automation, document processing, and system integration."
    },
    {
      id: "digital",
      title: "📊 Digital Transformation",
      short: "Modernize your business.",
      details:
        "We help organizations modernize legacy systems, improve customer experience, adopt digital technologies, and optimize operations."
    }
  ];

  return (
    <section id="services" className="services">
      <h2>Our Services</h2>

      <div className="service-container">
        {services.map((service, index) => (
          <div
            id={service.id}
            key={index}
            className="card"
            onClick={() => setSelectedService(service)}
          >
            <h3>{service.title}</h3>
            <p>{service.short}</p>
          </div>
        ))}
      </div>

      {selectedService && (
        <div
          className="modal-overlay"
          onClick={() => setSelectedService(null)}
        >
          <div
            className="modal"
            onClick={(e) => e.stopPropagation()}
          >
            <h2>{selectedService.title}</h2>

            <p>{selectedService.details}</p>

            <button
              className="close-btn"
              onClick={() => setSelectedService(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

export default Services;