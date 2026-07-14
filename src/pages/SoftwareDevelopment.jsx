import ServiceTemplate from "../components/ServiceTemplate";
import softwareImg from "../assets/software.jpg";

function SoftwareDevelopment() {
  return (
    <ServiceTemplate
      banner={softwareImg}
      title="Software Development"
      subtitle="Custom Software Built for Your Business"
      description="We develop reliable, scalable, and modern software solutions tailored to your business needs."

      features={[
        "Web Applications",
        "Mobile Apps",
        "Enterprise Software",
        "API Development",
        "UI/UX Design",
        "Maintenance & Support",
      ]}

      technologies={[
        "React",
        "Java",
        "Spring Boot",
        "Node.js",
        "MySQL",
        "MongoDB",
      ]}

      industries={[
        "Healthcare",
        "Education",
        "Retail",
        "Finance",
        "Government",
      ]}
    />
  );
}

export default SoftwareDevelopment;