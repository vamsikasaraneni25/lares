import TechnologyTemplate from "../components/TechnologyTemplate";
import aiImg from "../assets/aiTech.jpg";

function AITechnology() {
  return (
    <TechnologyTemplate
      banner={aiImg}
      title="Artificial Intelligence"
      subtitle="Building Intelligent Solutions"
      description="Artificial Intelligence enables businesses to automate processes, analyze data, improve decision-making, and deliver personalized customer experiences using advanced algorithms and machine learning."

      features={[
        "Machine Learning",
        "Deep Learning",
        "Natural Language Processing",
        "Computer Vision",
        "Generative AI",
        "Predictive Analytics",
      ]}

      tools={[
        "Python",
        "TensorFlow",
        "PyTorch",
        "OpenAI",
        "LangChain",
        "Scikit-Learn",
      ]}

      applications={[
        "Healthcare",
        "Finance",
        "Retail",
        "Education",
        "Manufacturing",
        "Customer Support",
      ]}
    />
  );
}

export default AITechnology;