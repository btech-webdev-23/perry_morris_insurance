import { Fragment, useState } from "react";

import Modal from "./components/UI/Modal";
import Header from "./components/Navigation/Header";
import IntroSection from "./components/Home/IntroSection";
import CoverageSection from "./components/Home/CoverageSection";
import InfoSection from "./components/Home/InfoSection";
import ContactSection from "./components/Home/ContactSection";
import Footer from "./components/Navigation/Footer";

function App() {
  const [modalIsShown, setModalIsShown] = useState(false);

  const showModalHandler = () => {
    setModalIsShown(true);
  };

  const hideModalHandler = () => {
    setModalIsShown(false);
  };

  return (
    <Fragment>
      {modalIsShown && <Modal onCloseModal={hideModalHandler} />}
      <Header />
      <IntroSection />
      <CoverageSection onShowModal={showModalHandler} />
      <InfoSection />
      <ContactSection />
      <Footer />
    </Fragment>
  );
}

export default App;
