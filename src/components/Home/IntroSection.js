import React, { Fragment } from "react";

import Button from "../UI/Button";
import classes from "./IntroSection.module.css";

const IntroSection = (props) => {
  const buttonRedirectHandler = () => {
    document.location.href = "#contact";
  };

  return (
    <Fragment>
      <div className={classes.back}>
        <div className={classes.overlay}></div>
        {/* <figcaption>
                    Photo by
                    <a
                        href="https://unsplash.com/@abelycosta?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
                        >Abel Y Costa</a
                    >
                    on
                    <a
                        href="https://unsplash.com/s/photos/lighthouse?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
                        >Unsplash</a
                    >
                </figcaption>  */}
      </div>
      <div className={classes["section-text"]}>
        <p>You are our number one priority!</p>
        <h2>Insurance to make you feel safe and secure</h2>
        <Button onClick={buttonRedirectHandler}>Get In Contact</Button>
      </div>
    </Fragment>
  );
};

export default IntroSection;
