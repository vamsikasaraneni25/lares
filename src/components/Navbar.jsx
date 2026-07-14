import { Link } from "react-router-dom";
import "./navbar.css";
import logo from "../assets/company-logo.png";

function Navbar() {
  return (
    <nav className="navbar">

      <div className="nav-logo">
        <Link to="/">
          <img
            src={logo}
            alt="Lares Dynamics Logo"
            className="logo"
          />
        </Link>
      </div>

      <ul className="nav-links">

        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/about">About</Link>
        </li>

        <li>
          <Link to="/services">Services</Link>
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

    </nav>
  );
}

export default Navbar;