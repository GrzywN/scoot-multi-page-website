import React from "react";
import Hero from "../components/Hero";
import Stepper from "../components/Stepper";
import HomeSections from "../containers/HomeSections";

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
