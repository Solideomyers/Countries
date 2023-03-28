import React from "react";
import { Link } from "react-router-dom";
import Styles from "./LandingPage.module.css";
// import img from "../../assets/continents3D.jfif"

const LandingPage = () => {
  return (
    <div className={Styles.Landing}>
    <div className={Styles.box} >
      <h1 className={Styles.title}>Welcome!</h1>
      <div className={Styles.texto}>
        <span>
          Welcome to my project <br /> about countries around the world.<br />
          Here you can find information relative each country.
        </span>
      </div>
      <Link to="/home">
        <button className={Styles.buttonLanding}>
          <span>Let's Start</span>
        </button>
      </Link>
      </div>
    </div>
  );
};

export default LandingPage;