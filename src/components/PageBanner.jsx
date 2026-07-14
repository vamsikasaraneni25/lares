import "./PageBanner.css";

function PageBanner({ title, image }) {
  return (
    <section
      className="page-banner"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="overlay">
        <h1>{title}</h1>

        <p>
          Home <span>›</span> {title}
        </p>
      </div>
    </section>
  );
}

export default PageBanner;