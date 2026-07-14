import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../assets/company-logo.png";

import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";

function Navbar() {
  return (
    <nav className="navbar">

      {/* Logo */}
      <div className="nav-logo">
        <Link to="/">
          <img
            src={logo}
            alt="Lares Dynamics Logo"
            className="logo"
          />
        </Link>
      </div>

      {/* Navigation Links */}
      <ul className="nav-links">

        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/about">About</Link>
        </li>

        <li className="dropdown">

    <span>Services ▾</span>

    <ul className="dropdown-menu">

        <li>
            <Link to="/services">
                All Services
            </Link>
        </li>

        <li>
            <Link to="/services/artificial-intelligence">
                Artificial Intelligence
            </Link>
        </li>

        <li>
            <Link to="/services/cloud-computing">
                Cloud Computing
            </Link>
        </li>

        <li>
            <Link to="/services/iot">
                Internet of Things
            </Link>
        </li>

        <li>
            <Link to="/services/software-development">
                Software Development
            </Link>
        </li>

        <li>
            <Link to="/services/automation">
                Automation
            </Link>
        </li>

        <li>
            <Link to="/services/digital-transformation">
                Digital Transformation
            </Link>
        </li>

    </ul>

</li>

        <li>
          <Link to="/technologies">Technologies</Link>
        </li>

        <li>
          <Link to="/projects">Projects</Link>
        </li>

        <li>
          <Link to="/contact">Contact</Link>
        </li>

      </ul>

      {/* Social Media Icons */}
      <div className="navbar-social">

        {/* Facebook */}
        <a
          href="https://www.facebook.com/login"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
        >
          <FaFacebookF />
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/login"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedinIn />
        </a>

        {/* Twitter / X */}
        <a
          href="https://x.com/i/flow/login"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Twitter"
        >
          <FaTwitter />
        </a>

        {/* Instagram */}
        <a
          href="https://www.instagram.com/accounts/login/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <FaInstagram />
        </a>

      </div>

    </nav>
  );
}

export default Navbar;