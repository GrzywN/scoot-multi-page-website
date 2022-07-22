import React from "react";
import Navbar from "./common/components/Navbar";
import Hero from "./pages/home/components/Hero";
import Stepper from "./pages/home/components/Stepper";
import SectionContainer from "./pages/home/containers/SectionContainer";

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
        <SectionContainer />
      </main>
    </>
  );
}

export default App;
