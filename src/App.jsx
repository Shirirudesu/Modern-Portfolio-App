import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Certificates from "./components/Certificates";
import About from "./components/About";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Aos from "aos";
import "aos/dist/aos.css";

const App = () => {
  useEffect(() => {
    Aos.init(
      {
        duration: 1000,
        once: false,
        offset: 100,
        delay: 0,
        easing: "ease-in-out",
      },
      [],
    );
  });
  return (
    <div
      className="bg-linear-to-br from-gray-900 via-[#0d182e]
    to-gray-900 min-h-screen"
    >
      <Navbar />
      <Hero />
      <About />
      <Certificates />
      <Education />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
