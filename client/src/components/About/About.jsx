import React from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Styles from "./About.module.css";

const About = () => {
  return (
    <div className={Styles.containerAbout}>
      <Link to="/home" className={Styles.linkAbout}>
        <button className={Styles.btnAbout}>Go Home</button>
      </Link>
      <div className={Styles.contentAbout}>
        <h1 className={Styles.titleAbout}>I'm Francisco Myers</h1>
        <p className={Styles.subtitleAbout}>
          Student of SOYHENRY, new passenger in the developer ship.
        </p>
      </div>
      <div className={Styles.iconsAbout}>
        <a
          href="https://github.com/Solideomyers"
          target="_blank"
          rel="noopener noreferrer"
          className={Styles.iconLinkAbout}
        >
          <FaGithub className={Styles.iconAbout} />
        </a>
        <a
          href="https://www.linkedin.com/feed/"
          target="_blank"
          rel="noopener noreferrer"
          className={Styles.iconLinkAbout}
        >
          <FaLinkedin className={Styles.iconAbout} />
        </a>
      </div>
    </div>
  );
};

export default About;