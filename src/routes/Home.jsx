import React from "react";
import Hero from "/src/pages/home/components/Hero";
import Stepper from "/src/pages/home/components/Stepper";
import HomeSections from "/src/pages/home/components/HomeSections";
import Download from "/src/common/components/Download";

function Home() {
  return (
    <>
      <Hero />
      <Stepper />
      <HomeSections />
      <Download
        className="
        mt-[7.5rem]
        md:mt-[6.5rem]
        xl:mt-[12.5rem]"
      />
    </>
  );
}

export default Home;
