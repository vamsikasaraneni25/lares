import "./Home.css";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import Slider from "../components/Slider";
import aiService from "../assets/ai.jpg";
import cloudService from "../assets/cloudservice.jpg";
import iotService from "../assets/iot.jpg";
import softwareService from "../assets/software.jpg";
import automationService from "../assets/automationImg.jpg";
import digitalService from "../assets/digitalTransformationImg.jpg";


function Home() {
  return (
    <>
    {/* Technology Showcase Slider */}
      <Slider />
      
      {/* Hero Section */}
      <Hero />

      {/* About Section */}
      <section className="home-about">
        <div className="container">
          <h2>About Lares Dynamics</h2>

          <p>
            Lares Dynamics is a technology company delivering innovative
            software solutions in Artificial Intelligence, Cloud Computing,
            Internet of Things (IoT), Software Development, Automation, and
            Digital Transformation. Our mission is to help businesses embrace
            modern technology and achieve sustainable growth.
          </p>
        </div>
      </section>

     {/* Services Section */}
<section className="home-services">
  <div className="container">

    <h2>Our Core Services</h2>

    <div className="service-grid">

      <div className="service-card">
  <img
    src={aiService}
    alt="Artificial Intelligence"
    className="home-service-image"
  />

  <h3>Artificial Intelligence</h3>

  <p>
    Smart AI solutions that automate processes and improve
    business decision-making.
  </p>

 <button
  className="learn-more-btn"
  onClick={() => console.log("Clicked")}
>
  Learn More
</button>
</div>

      <div className="service-card">
        <img
          src={cloudService}
          alt="Cloud Computing"
          className="home-service-image"
        />

        <h3>Cloud Computing</h3>

        <p>
          Secure, scalable cloud infrastructure designed for modern
          businesses and enterprises.
        </p>

        <Link
          to="/services/cloud-computing"
          className="learn-more-btn"
        >
          Learn More
        </Link>
      </div>

      <div className="service-card">
        <img
          src={iotService}
          alt="Internet of Things"
          className="home-service-image"
        />

        <h3>Internet of Things</h3>

        <p>
          Connecting smart devices to create intelligent and efficient
          digital ecosystems.
        </p>
        <Link
        to="/services/iot"
        className="learn-more-btn"
>
         Learn More
         </Link>
      </div>

      <div className="service-card">
        <img
          src={softwareService}
          alt="Software Development"
          className="home-service-image"
        />

        <h3>Software Development</h3>

        <p>
          Custom software solutions built to meet your unique business
          requirements.
        </p>
        <Link
          to="/services/software-development"
          className="learn-more-btn"
        >
          Learn More
        </Link>
      </div>

      <div className="service-card">
        <img
          src={automationService}
          alt="Automation"
          className="home-service-image"
        />

        <h3>Automation</h3>

        <p>
          Streamline workflows and reduce manual effort with intelligent
          automation solutions.
        </p>
        <Link
  to="/services/automation"
  className="learn-more-btn"
>
  Learn More
</Link>
      </div>

      <div className="service-card">
        <img
          src={digitalService}
          alt="Digital Transformation"
          className="home-service-image"
        />

        <h3>Digital Transformation</h3>

        <p>
          Modernize your business with innovative technologies that
          accelerate digital growth.
        </p>
        <Link
          to="/services/digital-transformation"
          className="learn-more-btn"
        >
          Learn More
        </Link>
      </div>

    </div>

  </div>
</section>

      {/* Why Choose Us Section */}
      <section className="why-choose">
        <div className="container">
          <h2>Why Choose Us</h2>

          <p className="subtitle">
            We combine innovation, expertise, and customer-focused solutions
            to help businesses succeed in the digital era.
          </p>

          <div className="choose-grid">
            <div className="choose-card">
              <div className="choose-icon">💡</div>
              <h3>Innovation</h3>
              <p>
                We leverage the latest technologies to deliver smart,
                future-ready solutions.
              </p>
            </div>

            <div className="choose-card">
              <div className="choose-icon">👨‍💻</div>
              <h3>Experienced Team</h3>
              <p>
                Our skilled professionals ensure quality, reliability,
                and timely project delivery.
              </p>
            </div>

            <div className="choose-card">
              <div className="choose-icon">🤝</div>
              <h3>Customer Focus</h3>
              <p>
                Every solution is tailored to meet your business goals
                and deliver measurable results.
              </p>
            </div>

            <div className="choose-card">
              <div className="choose-icon">🛠️</div>
              <h3>24/7 Support</h3>
              <p>
                We provide continuous technical support and maintenance
                to keep your business running smoothly.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;