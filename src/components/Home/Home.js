import { Fragment } from "react";

import IntroSection from "./IntroSection";
import InsuranceSection from "./InsuranceSection";
import InfoSection from "./InfoSection";
import ContactSection from "./ContactSection";

const Home = (props) => {
  return (
    <Fragment>
      <IntroSection />
      <InsuranceSection onShowModal={props.onShowModal} />
      <InfoSection />
      <ContactSection />
    </Fragment>
  );
};

export default Home;
