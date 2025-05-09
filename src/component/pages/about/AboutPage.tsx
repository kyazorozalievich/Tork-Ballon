import React from "react";
import AboutMain from "./AboutMain";
import AboutValues from "./AboutValues";
import Consultation from "../products/Consultation";
import AboutCharacter from "./AboutCharacter";
import AboutGalery from "./AboutGalery";

const AboutPage = () => {
  return (
    <div
      style={{
        background:
          "linear-gradient(180deg, rgba(0,70,140,0.07279408345369398) 0%, rgba(0,70,140,0.07279408345369398) 100%)",
      }}
    >
      <AboutMain />
      <AboutCharacter />
      <AboutGalery />
      <AboutValues />
      <Consultation />
    </div>
  );
};

export default AboutPage;
