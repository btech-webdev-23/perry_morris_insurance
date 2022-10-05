import { Fragment } from "react";

import IntroSection from "./IntroSection";
import CoverageSection from "./CoverageSection";
import InfoSection from "./InfoSection";
import ContactSection from "./ContactSection";

const Home = (props) => {
  return (
    <Fragment>
      <IntroSection />
      <CoverageSection onShowModal={props.onShowModal} />
      <InfoSection />
      <ContactSection />
    </Fragment>
  );
};

export default Home;
