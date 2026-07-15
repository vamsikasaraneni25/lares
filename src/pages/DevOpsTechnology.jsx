import TechnologyTemplate from "../components/TechnologyTemplate";
import devopsImg from "../assets/devopsTech.jpg";

function DevOpsTechnology() {
  return (
    <TechnologyTemplate
      banner={devopsImg}
      title="DevOps & Infrastructure"
      subtitle="Automation and Continuous Delivery"

      description="DevOps integrates development and operations to accelerate software delivery, improve reliability, and automate infrastructure management."

      features={[
        "CI/CD Pipelines",
        "Infrastructure as Code",
        "Containerization",
        "Monitoring",
        "Automation",
        "Cloud Deployment",
      ]}

      tools={[
        "Docker",
        "Kubernetes",
        "Jenkins",
        "GitHub Actions",
        "Terraform",
        "Ansible",
      ]}

      applications={[
        "Cloud Deployment",
        "Enterprise Infrastructure",
        "Microservices",
        "Automation",
        "Monitoring",
        "Scalable Systems",
      ]}
    />
  );
}

export default DevOpsTechnology;