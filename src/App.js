import { Fragment, useState } from "react";

import Modal from "./components/UI/Modal";
import Header from "./components/Navigation/Header";
import Home from "./components/Home/Home";
import Footer from "./components/Navigation/Footer";
import "./App.module.css";

function App() {
  const [modalIsShown, setModalIsShown] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [modalDescription, setModalDescription] = useState("");

  const showModalHandler = (event) => {
    const eventCurrentTarget = event.currentTarget.classList;

    if (eventCurrentTarget.contains("card_ind")) {
      setModalTitle("Individuals");
      setModalDescription("Some sample text for individual coverage.");
    } else if (eventCurrentTarget.contains("card_fam")) {
      setModalTitle("Families");
      setModalDescription("Some sample text for family coverage.");
    } else if (eventCurrentTarget.contains("card_smb")) {
      setModalTitle("Small Businesses");
      setModalDescription("Some sample text for small business coverage.");
    } else {
      setModalTitle("Retired");
      setModalDescription("Some sample text for retired coverage.");
    }
    setModalIsShown(true);
  };

  const hideModalHandler = () => {
    setModalIsShown(false);
  };

  return (
    <Fragment>
      {modalIsShown && (
        <Modal
          onCloseModal={hideModalHandler}
          title={modalTitle}
          description={modalDescription}
        />
      )}
      <Header />
      <main>
        <Home onShowModal={showModalHandler} />
      </main>
      <Footer />
    </Fragment>
  );
}

export default App;
