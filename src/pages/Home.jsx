import "./Home.css";
import Hero from "../components/Hero";

function Home() {
  return (
    <>
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
              🤖
              <h3>Artificial Intelligence</h3>
              <p>Smart AI solutions for modern businesses.</p>
            </div>

            <div className="service-card">
              ☁
              <h3>Cloud Computing</h3>
              <p>Secure and scalable cloud infrastructure.</p>
            </div>

            <div className="service-card">
              🌐
              <h3>Internet of Things</h3>
              <p>Connected smart devices and automation.</p>
            </div>

            <div className="service-card">
              💻
              <h3>Software Development</h3>
              <p>Custom web and mobile applications.</p>
            </div>

            <div className="service-card">
              ⚙
              <h3>Automation</h3>
              <p>Business process automation solutions.</p>
            </div>

            <div className="service-card">
              📊
              <h3>Digital Transformation</h3>
              <p>Helping businesses modernize operations.</p>
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
                Our skilled professionals ensure quality,
                reliability, and timely project delivery.
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