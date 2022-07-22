import React from "react";
import Navbar from "./common/components/Navbar";
import Hero from "./pages/home/components/Hero";
import Stepper from "./pages/home/components/Stepper";
import { RightArrowSection } from "./common/components/ImageSections";

function App() {
  return (
    <>
      <Navbar />
      <main
        className="
        mt-16 overflow-x-hidden
        md:mt-0"
      >
        <Hero />
        <Stepper />
        <RightArrowSection />
      </main>
    </>
  );
}

export default App;
