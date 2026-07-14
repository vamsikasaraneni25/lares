import "./technologies.css";

function Technologies() {
  const techs = [
    "React",
    "Java",
    "Python",
    "Spring Boot",
    "Node.js",
    "AWS",
    "Azure",
    "Docker",
    "Kubernetes",
    "MySQL",
    "MongoDB",
    "Git"
  ];

  return (
    <section id="technology" 
    className="technologies">
      <h2>Technologies We Work With</h2>

      <div className="tech-grid">
        {techs.map((tech, index) => (
          <div className="tech-card" key={index}>
            {tech}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Technologies;