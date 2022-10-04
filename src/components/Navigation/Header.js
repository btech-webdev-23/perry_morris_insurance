import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import logo from "../../assets/logo.PNG";

import Navigation from "./Navigation";
import classes from "./Header.module.css";

const Header = () => {
  const [navDisplay, setNavDisplay] = useState(false);

  const iconEventHandler = () => {
    if (!navDisplay) {
      setNavDisplay(true);
    } else {
      setNavDisplay(false);
    }
  };

  return (
    <div className={classes.navbar}>
      <a className={classes.heroTitle} href="#home">
        <img className={classes.logo} src={logo} alt="Perry Morris Logo" />
      </a>
      <Navigation className={`${navDisplay ? classes["nav-show"] : ""}`} />
      <a href="\">
        <FontAwesomeIcon
          icon={faYoutube}
          className={classes.icons}
          aria-hidden="true"
        />
      </a>
      <FontAwesomeIcon
        icon={faBars}
        className={classes.bar}
        aria-hidden="true"
        onClick={iconEventHandler}
      />
    </div>
  );
};

export default Header;
