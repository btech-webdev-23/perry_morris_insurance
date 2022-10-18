import lighthouse from "../../assets/lighthouse.png";

import Button from "../UI/Button";
import classes from "./IntroSection.module.css";

const IntroSection = () => {
  const buttonRedirectHandler = (event) => {
    document.location.href = `#${event.target.dataset.tag}`;
  };

  return (
    <section>
      <img src={lighthouse} alt="Lighthouse" />
      <div className={classes["section-text"]}>
        <p>Our number one priority is you!</p>
        <h2>
          <span className={classes.emphasis}>Insurance</span> to make you feel
          safe and secure
        </h2>
        <Button onClick={buttonRedirectHandler} tag="insurance">
          Insurance Policies
        </Button>
        <Button onClick={buttonRedirectHandler} tag="contact">
          Get In Contact
        </Button>
      </div>
    </section>
  );
};

export default IntroSection;
