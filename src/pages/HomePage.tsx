import React, {useState, useEffect} from "react";
import { useLocation } from "react-router-dom";
import {
    Navigation,
    FadeIn,
    Main,
    Skills,
    Career,
    Project,
    Contact,
    Footer
} from "../components";

function HomePage() {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.section) {
      const element = document.getElementById(location.state.section);

      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <FadeIn transitionDuration={700}>
      <Main />
      <Skills />
      <Career />
      <Project />
      <Contact />
    </FadeIn>
  );
}

export default HomePage;