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
          <a
            className={classes.email}
            href="mailto:pmorris@insurewithcompass.com"
          >
            <FontAwesomeIcon
              icon={faEnvelopeOpen}
              className="i-email"
              aria-hidden="true"
            />
            &nbsp; pmorris@insurewithcompass.com
          </a>
          <a className={classes.phone} href="tel:+13608998760">
            <FontAwesomeIcon
              icon={faPhone}
              className="i-phone"
              aria-hidden="true"
            />
            &nbsp; (360)899-8760
          </a>
        </div>
      </div>
      <Navigation className={classes.footNav} />
    </div>
  );
};

export default Footer;
