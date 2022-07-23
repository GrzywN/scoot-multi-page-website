import React from "react";
import Navbar from "./common/components/Navbar";
import Hero from "./pages/home/components/Hero";
import Stepper from "./pages/home/components/Stepper";
import SectionsContainer from "./pages/home/containers/Sections/SectionsContainer";

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
        <SectionsContainer />
      </main>
    </>
  );
}

export default App;
