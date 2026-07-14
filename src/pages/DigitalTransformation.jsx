import ServiceTemplate from "../components/ServiceTemplate";
import digitalImg from "../assets/digital.jpg";

function DigitalTransformation() {
  return (
    <ServiceTemplate
      banner={digitalImg}
      title="Digital Transformation"
      subtitle="Driving Innovation Through Technology"
      description="We help organizations modernize their operations using digital technologies and cloud-first strategies."

      features={[
        "Digital Strategy",
        "Business Modernization",
        "Cloud Adoption",
        "Process Optimization",
        "Data Analytics",
        "Technology Consulting",
      ]}

      technologies={[
        "Cloud Computing",
        "AI",
        "IoT",
        "Power BI",
        "React",
        "Spring Boot",
      ]}

      industries={[
        "Healthcare",
        "Retail",
        "Education",
        "Government",
        "Manufacturing",
      ]}
    />
  );
}

export default DigitalTransformation;