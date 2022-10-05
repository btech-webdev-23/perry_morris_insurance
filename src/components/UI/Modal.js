import { Fragment } from "react";
import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

import classes from "./Modal.module.css";

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClose}></div>;
};

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const portal = document.getElementById("overlay");

const Modal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop onClose={props.onCloseModal} />, portal)}
      {ReactDOM.createPortal(
        <ModalOverlay>
          <div className={classes.header}>
            <h3>{props.title}</h3>
            <FontAwesomeIcon
              icon={faXmark}
              className={classes["header-icon"]}
              onClick={props.onCloseModal}
            />
          </div>
          <p>{props.description}</p>
        </ModalOverlay>,
        portal
      )}
    </Fragment>
  );
};

export default Modal;
