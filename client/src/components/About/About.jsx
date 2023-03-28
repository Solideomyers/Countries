import React from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Styles from "./About.module.css";

const About = () => {
  return (
    <div className={Styles.containerAbout}>
      <Link to="/home" className={Styles.link}>
        <button className={Styles.btnAbout}>Go Home</button>
      </Link>
      <div className={Styles.content}>
        <h1 className={Styles.title}>I'm Francisco Myers</h1>
        <p className={Styles.subtitle}>
          Student of SOYHENRY, new passenger in the developer ship.
        </p>
      </div>
      <div className={Styles.icons}>
        <a
          href="https://github.com/Solideomyers"
          target="_blank"
          rel="noopener noreferrer"
          className={Styles.iconLink}
        >
          <FaGithub className={Styles.icon} />
        </a>
        <a
          href="https://www.linkedin.com/feed/"
          target="_blank"
          rel="noopener noreferrer"
          className={Styles.iconLink}
        >
          <FaLinkedin className={Styles.icon} />
        </a>
      </div>
    </div>
  );
};

export default About;