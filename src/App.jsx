import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./routes/Home";
import About from "./routes/About";
import Careers from "./routes/Careers";
import Locations from "./routes/Locations";
import Download from "./components/Download";
import Footer from "./components/Footer";

function App() {
  useEffect(() => {
    let resizeTimer;
    const stopAnimations = () => {
      document.body.classList.add("resize-animation-stopper");
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        document.body.classList.remove("resize-animation-stopper");
      }, 500);
    };
    stopAnimations();
    window.addEventListener("resize", stopAnimations);
  }, []);

  return (
    <>
      <Navbar />
      <main
        className="
        mt-16 overflow-x-hidden
        md:mt-0"
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/locations" element={<Locations />} />
        </Routes>
      </main>
      <Download />
      <Footer />
    </>
  );
}

export default App;
