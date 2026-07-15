import TechnologyTemplate from "../components/TechnologyTemplate";
import cloudImg from "../assets/cloudTech.jpg";

function CloudTechnology() {
  return (
    <TechnologyTemplate
      banner={cloudImg}
      title="Cloud Computing"
      subtitle="Scalable Cloud Infrastructure"

      description="Cloud computing provides flexible, secure, and scalable infrastructure that allows businesses to deploy applications faster while reducing operational costs."

      features={[
        "Cloud Migration",
        "Cloud Security",
        "Virtual Machines",
        "Serverless Computing",
        "Storage Solutions",
        "Disaster Recovery",
      ]}

      tools={[
        "AWS",
        "Microsoft Azure",
        "Google Cloud",
        "Docker",
        "Kubernetes",
        "Terraform",
      ]}

      applications={[
        "Web Hosting",
        "Enterprise Applications",
        "Data Backup",
        "DevOps",
        "Big Data",
        "AI Infrastructure",
      ]}
    />
  );
}

export default CloudTechnology;