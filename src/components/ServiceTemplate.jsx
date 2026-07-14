import "./ServiceTemplate.css";
import { Link } from "react-router-dom";

function ServiceTemplate({
  banner,
  title,
  subtitle,
  description,
  features = [],
  technologies = [],
  industries = [],
}) {
  return (
    <div className="service-page">

      {/* Hero Section */}
      <section className="service-hero">
        {banner && (
          <img
            src={banner}
            alt={title}
            className="service-banner"
          />
        )}

        <div className="service-overlay">
          <h1>{title}</h1>
          <p>{subtitle}</p>
        </div>
      </section>

      {/* Content */}
      <section className="service-content">
        <div className="container">

          <h2>Overview</h2>
          <p>{description}</p>

          {features.length > 0 && (
            <>
              <h2>Key Features</h2>

              <div className="service-grid">
                {features.map((feature, index) => (
                  <div className="service-box" key={index}>
                    {feature}
                  </div>
                ))}
              </div>
            </>
          )}

          {technologies.length > 0 && (
            <>
              <h2>Technologies We Use</h2>

              <div className="service-grid">
                {technologies.map((tech, index) => (
                  <div className="service-box" key={index}>
                    {tech}
                  </div>
                ))}
              </div>
            </>
          )}

          {industries.length > 0 && (
            <>
              <h2>Industries We Serve</h2>

              <div className="service-grid">
                {industries.map((industry, index) => (
                  <div className="service-box" key={index}>
                    {industry}
                  </div>
                ))}
              </div>
            </>
          )}

          <div className="service-cta">
            <h2>Ready to Start Your AI Journey?</h2>

            <p>
              Let Lares Dynamics help you build intelligent solutions that
              improve productivity, reduce costs, and accelerate business growth.
            </p>

            <Link to="/contact">
              <button>Contact Us</button>
            </Link>
          </div>

        </div>
      </section>

    </div>
  );
}

export default ServiceTemplate;