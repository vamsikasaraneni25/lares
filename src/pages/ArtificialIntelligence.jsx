import ServiceTemplate from "../components/ServiceTemplate";
import aiImg from "../assets/ai.jpg";

function ArtificialIntelligence() {
  return (
    <ServiceTemplate
      banner={aiImg}
      title="Artificial Intelligence"
      subtitle="Empowering Businesses with Intelligent Solutions"
      description="We build AI-powered applications that automate processes, improve decision-making, and enhance customer experiences."

      features={[
        "Machine Learning",
        "AI Chatbots",
        "Computer Vision",
        "Natural Language Processing",
        "Predictive Analytics",
        "Recommendation Systems",
      ]}

      technologies={[
        "Python",
        "TensorFlow",
        "PyTorch",
        "OpenAI",
        "Scikit-Learn",
        "LangChain",
      ]}

      industries={[
        "Healthcare",
        "Finance",
        "Retail",
        "Education",
        "Manufacturing",
      ]}
    />
  );
}

export default ArtificialIntelligence;