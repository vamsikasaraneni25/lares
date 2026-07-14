import ServiceTemplate from "../components/ServiceTemplate";
import iotImg from "../assets/iot.jpg";

function InternetOfThings() {
  return (
    <ServiceTemplate
      banner={iotImg}
      title="Internet of Things"
      subtitle="Connecting Devices. Creating Smart Solutions."
      description="We design secure IoT systems that connect devices, collect data, and automate operations."

      features={[
        "Smart Sensors",
        "Industrial IoT",
        "Real-Time Monitoring",
        "Remote Device Management",
        "IoT Analytics",
        "Automation",
      ]}

      technologies={[
        "Arduino",
        "Raspberry Pi",
        "MQTT",
        "Node.js",
        "AWS IoT",
        "Azure IoT",
      ]}

      industries={[
        "Agriculture",
        "Healthcare",
        "Manufacturing",
        "Smart Cities",
        "Transportation",
      ]}
    />
  );
}

export default InternetOfThings;