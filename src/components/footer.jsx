import "./Footer.css";

import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaTwitter
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* Left */}
        <div className="footer-about">
          <h3>Lares Dynamics</h3>

          <p>
            Delivering innovative solutions in AI, Cloud Computing,
            IoT, Software Development and Digital Transformation.
          </p>

          <div className="social-icons">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaLinkedinIn /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaTwitter /></a>
          </div>
        </div>

        {/* Center */}
        <div className="footer-links">
          <h3>Quick Links</h3>

          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/services">Services</a>
          <a href="/projects">Projects</a>
          <a href="/contact">Contact</a>
        </div>

        {/* Right */}
        <div className="footer-contact">
          <h3>Contact</h3>

          <p>
            <FaEnvelope className="icon" />
            info@laresdynamics.com
          </p>

          <p>
            <FaPhoneAlt className="icon" />
            +91 9876543210
          </p>

          <p>
            <FaMapMarkerAlt className="icon" />
            Hyderabad, India
          </p>
        </div>

      </div>

      <div className="footer-bottom">
        © 2026 Lares Dynamics Innovations Pvt. Ltd. All Rights Reserved.
      </div>

    </footer>
  );
}

export default Footer;