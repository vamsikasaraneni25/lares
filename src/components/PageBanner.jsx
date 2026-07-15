import React from "react";
import { Link } from "react-router-dom";
import "./PageBanner.css";

function PageBanner({ title, image }) {
  return (
    <section
      className="page-banner"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,.55), rgba(0,0,0,.55)), url(${image})`,
      }}
    >
      <div className="page-banner-content">
        <h1>{title}</h1>

        <div className="breadcrumb">
          <Link to="/" className="breadcrumb-home">
            Home
          </Link>

          <span className="separator">›</span>

          <span>{title}</span>
        </div>
      </div>
    </section>
  );
}

export default PageBanner;