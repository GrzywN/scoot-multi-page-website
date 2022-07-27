import React from "react";
import SmallHero from "../common/components/SmallHero";
import AboutSections from "/src/pages/about/AboutSections";
import FAQs from "/src/common/components/FAQs";

const faqsData = [
  {
    title: "How it works",
    content: [
      {
        control: "How do I download the app?",
        panel: `
        To download the Scoot app, you can search “Scoot” in both the App and Google Play stores. 
        An even simpler way to do it would be to click the relevant link at the bottom of this 
        page and you’ll be re-directed to the correct page.`,
      },
      {
        control: "Can I find a nearby Scoots?",
        panel: `
        Definitely! Simply open up the app and allow us to find your location while using it. We'll 
        show you all of the closest Scoots and some extra useful information.`,
      },
      {
        control: "Do I need a license to ride?",
        panel: `
        Yup! We provide information inside the app regarding local laws and the license you need to be 
        able to ride our Scoots.`,
      },
    ],
  },
  {
    title: "Safe driving",
    content: [
      {
        control: "Should I wear a helmet?",
        panel: `
        Yes, please do! All cities have different laws. But we strongly strongly strongly recommend 
        always wearing a helmet regardless of the local laws. We like you and we want you to be as 
        safe as possible while Scooting.`,
      },
      {
        control: "How about the rules & regulations?",
        panel: `
        Now is not the time to be a rule breaker. Be sure you're complying with all local laws and 
        regulations. Also, just be a good human being. Be sure not to park your Scoot where it can 
        block access to buildings or get in people's way.`,
      },
      {
        control: "What if I damage my Scoot?",
        panel: `
        Be sure to read our terms and conditions carefully. Not the most fun job we know but we make 
        it as clear as possible. There's an option to add insurance for each trip, or you can sign 
        up for annual insurance if you're a regular Scooter.`,
      },
    ],
  },
];

function About() {
  return (
    <>
      <SmallHero
        className="
        bg-about-hero-mobile
        md:bg-about-hero-tablet
        xl:bg-about-hero-desktop"
        title="About"
      />
      <AboutSections />
      <FAQs className="mb-[7.5rem] xl:mb-40" faqsData={faqsData} />
    </>
  );
}

export default About;
