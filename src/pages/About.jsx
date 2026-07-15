import "./About.css";
import PageBanner from "../components/PageBanner";

import aboutBanner from "../assets/banners/about-banner.png";
import aboutImage from "../assets/about-image.jpg";

function About() {
  return (
    <>
      <PageBanner
        title="About Us"
        image={aboutBanner}
      />

      <section className="about-section">
        <div className="about-content">
          <div className="about-text">
            <h2>Who We Are</h2>

            <p>
              Lares Dynamics is a forward-thinking technology company
              specializing in Artificial Intelligence, Cloud Computing,
              Internet of Things (IoT), Software Development, Automation,
              and Digital Transformation.
            </p>

            <p>
              We help businesses embrace emerging technologies and build
              innovative digital solutions that improve productivity.
            </p>
          </div>

          <div className="about-image">
            <img src={aboutImage} alt="About Us" />
          </div>
        </div>
      </section>
    </>
  );
}

export default About;