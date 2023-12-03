import React from "react";
import Projects from "../../components/Projects";
import Overlay from "../../components/Overlay";
import ProjectsTop from "../../components/ProjectsTop";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

function Project() {
  return (
    <>
      <Overlay head="Project">
        <Link to="/">Home</Link>
        <FontAwesomeIcon icon="fa-solid fa-arrow-right" />
        <Link to="/project">Project</Link>
      </Overlay>
      <ProjectsTop/>
      <Projects />
    </>
  );
}

export default Project;
