import hero from "../assets/hero.png";
import "./Hero.css";

function Hero() {
  return (
    <section id="home"
    className="hero">
      <div className="hero-text">
        <div className="hero-heading">
  <h1>FORWARD.</h1>
  <h1>INNOVATE.</h1>
  <h1>DYNAMICS.</h1>
</div>

        <p>
          We deliver innovative technology solutions in AI, Software,
          Cloud, IoT, Automation and Digital Transformation.
        </p>
      </div>

      <div className="hero-image">
        <img src={hero} alt="Hero" />
      </div>
    </section>
  );
}

export default Hero;