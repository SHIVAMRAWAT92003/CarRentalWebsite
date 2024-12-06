import React from "react";
import Hero from "./Hero/Hero";
import Services from "./Services/Services";
import Testimonial from "./Testimonial/Testimonial";
import AppStoreBanner from "./AppStoreBanner/AppStoreBanner";
import About from "./About/About";
import Contact from "./Contact/Contact";
import Footer from "./Footer/Footer";

const HomePage = ({ theme }) => {
  return (
    <>
      <Hero theme={theme} />
      <Services />
      <Testimonial />
      <AppStoreBanner />
      <About />
      <Contact />
      <Footer />
    </>
  );
};

export default HomePage;
