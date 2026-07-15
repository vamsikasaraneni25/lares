import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import Technologies from "./pages/Technologies";
import Contact from "./pages/Contact";

import ArtificialIntelligence from "./pages/ArtificialIntelligence";
import CloudComputing from "./pages/CloudComputing";
import InternetOfThings from "./pages/InternetOfThings";
import SoftwareDevelopment from "./pages/SoftwareDevelopment";
import Automation from "./pages/Automation";
import DigitalTransformation from "./pages/DigitalTransformation";

// Technology Pages
import AITechnology from "./pages/AITechnology";
import CloudTechnology from "./pages/CloudTechnology";
import WebTechnology from "./pages/WebTechnology";
import MobileTechnology from "./pages/MobileTechnology";
import CyberSecurityTechnology from "./pages/CyberSecurityTechnology";
import DevOpsTechnology from "./pages/DevOpsTechnology";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        {/* Main Pages */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/technologies" element={<Technologies />} />
        <Route path="/contact" element={<Contact />} />

        {/* Service Pages */}
        <Route
          path="/services/artificial-intelligence"
          element={<ArtificialIntelligence />}
        />
        <Route
          path="/services/cloud-computing"
          element={<CloudComputing />}
        />
        <Route
          path="/services/iot"
          element={<InternetOfThings />}
        />
        <Route
          path="/services/software-development"
          element={<SoftwareDevelopment />}
        />
        <Route
          path="/services/automation"
          element={<Automation />}
        />
        <Route
          path="/services/digital-transformation"
          element={<DigitalTransformation />}
        />

        {/* Technology Pages */}
        <Route
          path="/technologies/artificial-intelligence"
          element={<AITechnology />}
        />
        <Route
          path="/technologies/cloud-computing"
          element={<CloudTechnology />}
        />
        <Route
          path="/technologies/web-technologies"
          element={<WebTechnology />}
        />
        <Route
          path="/technologies/mobile-technologies"
          element={<MobileTechnology />}
        />
        <Route
          path="/technologies/cyber-security"
          element={<CyberSecurityTechnology />}
        />
        <Route
          path="/technologies/devops-infrastructure"
          element={<DevOpsTechnology />}
        />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;