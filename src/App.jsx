import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import Technologies from "./components/Technologies";
import Contact from "./pages/Contact";
import ArtificialIntelligence from "./pages/ArtificialIntelligence";
import CloudComputing from "./pages/CloudComputing";
import InternetOfThings from "./pages/InternetOfThings";
import SoftwareDevelopment from "./pages/SoftwareDevelopment";
import Automation from "./pages/Automation";
import DigitalTransformation from "./pages/DigitalTransformation";

function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/technologies" element={<Technologies />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services/artificial-intelligence" element={<ArtificialIntelligence />} />

<Route path="/services/cloud-computing" element={<CloudComputing />} />

<Route path="/services/iot" element={<InternetOfThings />} />

<Route path="/services/software-development" element={<SoftwareDevelopment />} />

<Route path="/services/automation" element={<Automation />} />

<Route path="/services/digital-transformation" element={<DigitalTransformation />} />
      </Routes>

      <Footer />

    </BrowserRouter>
  );
}

export default App;