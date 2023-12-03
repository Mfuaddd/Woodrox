import React from "react";
import Projects from "../../components/Projects";
import Feature from "../../components/Feature";
import ClietsLogo from "../../components/ClientsLogo";
import Overlay from "../../components/Overlay";
import AboutArea from "../../components/AboutArea";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

function About() {
  return (
    <>
      <Overlay head="About Us">
        <Link to="/">Home</Link>
        <FontAwesomeIcon icon="fa-solid fa-arrow-right" />
        <Link to="/about">About Us</Link>
      </Overlay>
      <AboutArea />
      <Projects />
      <Feature />
      <ClietsLogo />
    </>
  );
}

export default About;
