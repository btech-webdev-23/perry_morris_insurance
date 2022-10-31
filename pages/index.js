import { Fragment } from "react";

import IntroSection from "../components/Home/IntroSection";
import InsuranceSection from "../components/Home/InsuranceSection";
import InfoSection from "../components/Home/InfoSection";
import ContactSection from "../components/Home/ContactSection";

const HomePage = (props) => {
  return (
    <Fragment>
      <IntroSection />
      <InsuranceSection onShowModal={props.onShowModal} />
      <InfoSection />
      <ContactSection />
    </Fragment>
  );
};

export default HomePage;
