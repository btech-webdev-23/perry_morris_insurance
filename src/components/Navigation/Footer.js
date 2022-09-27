import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelopeOpen } from "@fortawesome/free-solid-svg-icons";

import Navigation from "./Navigation";
import classes from "./Footer.module.css";

const Footer = (props) => {
  return (
    <div className={classes.footer}>
      <div className={classes.info}>
        <p>
          Copyright ©<br />
        </p>
        <div className={classes.contact}>
          <FontAwesomeIcon
            icon={faEnvelopeOpen}
            className="i-email"
            aria-hidden="true"
          />
          <span className="email">pmorris@insurewithcompass.com</span>
          <FontAwesomeIcon
            icon={faPhone}
            className="i-phone"
            aria-hidden="true"
          />
          <span className="phone">(360)899-8760</span>
        </div>
      </div>
      <Navigation className={classes.footNav} />
    </div>
  );
};

export default Footer;
