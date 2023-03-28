import React from "react";
import { Link } from "react-router-dom";
import Search from "../Search/Search";
import Styles from "./Nav.module.css";


const Nav = () => {
    return(
    <>
      <header className={Styles.menu}>
        <nav>
          <ul>
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/form">Create Activity</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>
        </nav>
        <Search />
      </header>
      
    </>
    )
};

export default Nav;

