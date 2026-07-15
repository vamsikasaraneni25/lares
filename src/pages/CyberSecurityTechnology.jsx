import TechnologyTemplate from "../components/TechnologyTemplate";
import cyberImg from "../assets/cybersecurityTech.jpg";

function CyberSecurityTechnology() {
  return (
    <TechnologyTemplate
      banner={cyberImg}
      title="Cyber Security"
      subtitle="Protecting Digital Assets"

      description="Cybersecurity solutions safeguard applications, networks, and business data against modern cyber threats through proactive monitoring and secure practices."

      features={[
        "Network Security",
        "Threat Detection",
        "Data Encryption",
        "Identity Management",
        "Vulnerability Assessment",
        "Penetration Testing",
      ]}

      tools={[
        "Wireshark",
        "Metasploit",
        "Nmap",
        "Burp Suite",
        "Kali Linux",
        "Splunk",
      ]}

      applications={[
        "Enterprise Security",
        "Financial Systems",
        "Healthcare Security",
        "Cloud Security",
        "Government",
        "Data Protection",
      ]}
    />
  );
}

export default CyberSecurityTechnology;