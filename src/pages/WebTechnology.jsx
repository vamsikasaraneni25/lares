import TechnologyTemplate from "../components/TechnologyTemplate";
import webImg from "../assets/webTech.jpg";

function WebTechnology() {
  return (
    <TechnologyTemplate
      banner={webImg}
      title="Web Technologies"
      subtitle="Modern Web Development"

      description="We develop responsive, scalable, and high-performance websites and web applications using the latest frontend and backend technologies."

      features={[
        "Responsive Design",
        "REST APIs",
        "Progressive Web Apps",
        "Single Page Applications",
        "Secure Authentication",
        "Performance Optimization",
      ]}

      tools={[
        "React",
        "Angular",
        "Node.js",
        "Express.js",
        "Spring Boot",
        "Laravel",
      ]}

      applications={[
        "Business Websites",
        "E-Commerce",
        "CRM Systems",
        "ERP Systems",
        "Admin Dashboards",
        "Enterprise Portals",
      ]}
    />
  );
}

export default WebTechnology;