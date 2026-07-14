import ServiceTemplate from "../components/ServiceTemplate";
import automationImg from "../assets/automationImg.jpg";

function Automation() {
  return (
    <ServiceTemplate
      banner={automationImg}
      title="Automation"
      subtitle="Automating Business Processes Efficiently"
      description="We automate repetitive workflows to increase productivity, reduce errors, and improve efficiency."

      features={[
        "Workflow Automation",
        "Business Process Automation",
        "RPA Solutions",
        "AI Automation",
        "Data Automation",
        "Task Scheduling",
      ]}

      technologies={[
        "UiPath",
        "Python",
        "Power Automate",
        "Zapier",
        "Selenium",
        "Java",
      ]}

      industries={[
        "Finance",
        "Healthcare",
        "Retail",
        "Manufacturing",
        "IT Services",
      ]}
    />
  );
}

export default Automation;