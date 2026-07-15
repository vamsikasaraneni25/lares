import TechnologyTemplate from "../components/TechnologyTemplate";
import mobileImg from "../assets/mobileTech.jpg";

function MobileTechnology() {
  return (
    <TechnologyTemplate
      banner={mobileImg}
      title="Mobile Technologies"
      subtitle="Smart Mobile Applications"

      description="We create Android and iOS applications with intuitive interfaces, high performance, and seamless user experiences."

      features={[
        "Native Apps",
        "Cross Platform Apps",
        "Offline Support",
        "Push Notifications",
        "Secure Login",
        "Cloud Integration",
      ]}

      tools={[
        "Flutter",
        "React Native",
        "Kotlin",
        "Swift",
        "Firebase",
        "SQLite",
      ]}

      applications={[
        "Healthcare Apps",
        "Banking Apps",
        "Food Delivery",
        "Education",
        "Travel",
        "Business Apps",
      ]}
    />
  );
}

export default MobileTechnology;