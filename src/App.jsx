import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
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
    </div>
  );
};

export default App;
