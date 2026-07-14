import "./About.css";

import PageBanner from "../components/PageBanner";

import aboutBanner from "../assets/banners/about-banner.jpg";
import aboutImage from "../assets/about-image.jpg";

function About() {
  return (
    <div className="about-page">

      <PageBanner
        title="About Us"
        image={aboutBanner}
      />

      <section className="about-section">

        <div className="about-image">
          <img src={aboutImage} alt="About Lares Dynamics" />
        </div>

        <div className="about-content">

          <h5>WHO WE ARE</h5>

          <h2>Innovating Businesses Through Technology</h2>

          <p>
            Lares Dynamics is a technology-driven company committed to helping
            businesses grow through Artificial Intelligence, Cloud Computing,
            Internet of Things (IoT), Software Development, Automation, and
            Digital Transformation.
          </p>

          <p>
            We design scalable, secure, and innovative solutions that improve
            efficiency, reduce operational costs, and accelerate digital
            growth for startups, enterprises, and organizations.
          </p>

          <p>
            Our experienced engineers and technology consultants deliver
            high-quality products using modern development practices,
            cutting-edge technologies, and customer-focused strategies.
          </p>

          <div className="about-features">

            <div className="feature">✔ Artificial Intelligence Solutions</div>

            <div className="feature">✔ Cloud & DevOps Services</div>

            <div className="feature">✔ IoT & Smart Automation</div>

            <div className="feature">✔ Enterprise Software Development</div>

            <div className="feature">✔ Digital Transformation</div>

            <div className="feature">✔ 24×7 Technical Support</div>

          </div>

        </div>

      </section>

      <section className="about-stats">

        <div className="stat">
          <h2>50+</h2>
          <p>Projects Completed</p>
        </div>

        <div className="stat">
          <h2>30+</h2>
          <p>Happy Clients</p>
        </div>

        <div className="stat">
          <h2>15+</h2>
          <p>Technology Experts</p>
        </div>

        <div className="stat">
          <h2>24/7</h2>
          <p>Customer Support</p>
        </div>

      </section>

    </div>
  );
}

export default About;