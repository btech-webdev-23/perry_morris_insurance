import { Fragment, useState } from "react";

import Modal from "./components/UI/Modal";
import Header from "./components/Navigation/Header";
import Home from "./components/Home/Home";
import Footer from "./components/Navigation/Footer";
import "./App.module.css";

const modalDescriptions = [
  "Some sample text for individual coverage.",
  "Some sample text for family coverage.",
  "Some sample text for small business coverage.",
  "Some sample text for retired coverage.",
];

function App() {
  const [modalIsShown, setModalIsShown] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [modalDescription, setModalDescription] = useState("");

  const showModalHandler = (event) => {
    const eventCurrentTarget = event.currentTarget.classList;

    if (eventCurrentTarget.contains("card_ind")) {
      setModalTitle("Individuals");
      setModalDescription(modalDescriptions[0]);
    } else if (eventCurrentTarget.contains("card_fam")) {
      setModalTitle("Families");
      setModalDescription(modalDescriptions[1]);
    } else if (eventCurrentTarget.contains("card_smb")) {
      setModalTitle("Small Businesses");
      setModalDescription(modalDescriptions[2]);
    } else {
      setModalTitle("Retired");
      setModalDescription(modalDescriptions[3]);
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
      <main id="home">
        <Home onShowModal={showModalHandler} />
      </main>
      <Footer />
    </Fragment>
  );
}

export default App;
