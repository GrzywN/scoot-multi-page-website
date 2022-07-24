import React from "react";
import Hero from "/src/pages/home/components/Hero";
import Stepper from "/src/pages/home/components/Stepper";
import HomeSections from "/src/pages/home/components/HomeSections";

function Home() {
  return (
    <>
      <Hero />
      <Stepper />
      <HomeSections />
    </>
  );
}

export default Home;
