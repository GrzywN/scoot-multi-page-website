import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./common/components/Navbar";
import Home from "./routes/Home";
import About from "./routes/About";
import Careers from "./routes/Careers";
import Locations from "./routes/Locations";
import Download from "/src/common/components/Download";
import Footer from "/src/common/components/Footer";

function App() {
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
