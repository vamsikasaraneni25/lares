import ServiceTemplate from "../components/ServiceTemplate";
import cloudImg from "../assets/cloudservice.jpg";

function CloudComputing() {
  return (
    <ServiceTemplate
      banner={cloudImg}
      title="Cloud Computing"
      subtitle="Secure, Scalable & Reliable Cloud Solutions"
      description="We help businesses migrate, manage, and optimize cloud infrastructure using secure and scalable cloud technologies."

      features={[
        "Cloud Migration",
        "AWS & Azure Solutions",
        "Cloud Security",
        "Cloud Infrastructure Management",
        "Backup & Disaster Recovery",
      ]}

      technologies={[
        "Amazon Web Services (AWS)",
        "Microsoft Azure",
        "Google Cloud Platform",
        "Docker",
        "Kubernetes",
        "Terraform",
      ]}

      industries={[
        "Healthcare",
        "Finance",
        "Retail",
        "Manufacturing",
        "Education",
      ]}
    />
  );
}

export default CloudComputing;