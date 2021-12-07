import React from "react";
import Footer from "../components/Footer";
import HeroImage from "../components/HeroImage";
import Navbar from "../components/Navbar";
import AboutSection from "../components/About";

const About = () => {
  return (
    <div>
      <Navbar />
      <HeroImage heading="ABOUT." text="Finest Civilian Apartment" />
      <AboutSection />
      <Footer />
    </div>
  );
};

export default About;
