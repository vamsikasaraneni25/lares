import "./TechnologyTemplate.css";
import { Link } from "react-router-dom";

function TechnologyTemplate({
  banner,
  title,
  subtitle,
  description,
  features,
  tools,
  applications,
}) {
  return (
    <div className="technology-page">

      {/* Banner */}
      <section className="technology-hero">
        <img
          src={banner}
          alt={title}
          className="technology-banner"
        />

        <div className="technology-overlay">
          <h1>{title}</h1>
          <p>{subtitle}</p>
        </div>
      </section>

      {/* Content */}
      <section className="technology-content">

        <div className="container">

          <h2>Overview</h2>

          <p>{description}</p>

          <h2>Key Features</h2>

          <div className="technology-grid">
            {features.map((feature, index) => (
              <div
                className="technology-box"
                key={index}
              >
                {feature}
              </div>
            ))}
          </div>

          <h2>Tools & Frameworks</h2>

          <div className="technology-grid">
            {tools.map((tool, index) => (
              <div
                className="technology-box"
                key={index}
              >
                {tool}
              </div>
            ))}
          </div>

          <h2>Applications</h2>

          <div className="technology-grid">
            {applications.map((application, index) => (
              <div
                className="technology-box"
                key={index}
              >
                {application}
              </div>
            ))}
          </div>

          {/* CTA */}

          <div className="technology-cta">

            <h2>Interested in This Technology?</h2>

            <p>
              Let Lares Dynamics help you leverage modern technologies
              to build secure, scalable, and innovative digital solutions.
            </p>

            <Link to="/contact">
              <button>
                Contact Us
              </button>
            </Link>

          </div>

        </div>

      </section>

    </div>
  );
}

export default TechnologyTemplate;