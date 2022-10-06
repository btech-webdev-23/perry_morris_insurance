import lighthouse from "../../assets/lighthouse.jpg";

import Button from "../UI/Button";
import classes from "./IntroSection.module.css";

const IntroSection = (props) => {
  const buttonRedirectHandler = () => {
    document.location.href = "#contact";
  };

  return (
    <section>
      <img src={lighthouse} alt="Lighthouse" />
      <div className={classes["section-text"]}>
        <p>You are our number one priority!</p>
        <h2>
          <span className={classes.emphasis}>Insurance</span> to make you feel
          safe and secure
        </h2>
        <Button onClick={buttonRedirectHandler}>Get In Contact</Button>
      </div>
    </section>
  );
};

export default IntroSection;
