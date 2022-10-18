import { useState, useRef } from "react";

import Button from "./Button";
import classes from "./Form.module.css";

const isEmpty = (value) => value.trim() === "";
const isTenChars = (value) => value.trim().length >= 10;
const validEmail = (value) => value.includes("@");

const Form = (props) => {
  //! Placeholder validity! This validity should be updated!!
  const [formInputValid, setFormInputValid] = useState({
    name: true,
    email: true,
    provider: true,
    message: true,
  });
  const nameInputRef = useRef();
  const emailInputRef = useRef();
  const providerInputRef = useRef();
  const messageInputRef = useRef();

  const onSubmitHandler = (e) => {
    e.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredEmail = emailInputRef.current.value;
    const enteredProvider = providerInputRef.current.value;
    const enteredMessage = messageInputRef.current.value;

    const enteredNameIsValid = !isEmpty(enteredName);
    const enteredProviderIsValid = !isEmpty(enteredProvider);
    const enteredMessageIsValid = isTenChars(enteredMessage);
    const enteredEmailIsValid = validEmail(enteredEmail);

    setFormInputValid({
      name: enteredNameIsValid,
      email: enteredEmailIsValid,
      provider: enteredProviderIsValid,
      message: enteredMessageIsValid,
    });

    const formIsValid =
      enteredNameIsValid &&
      enteredEmailIsValid &&
      enteredProviderIsValid &&
      enteredMessageIsValid;

    console.log(enteredMessage.length);
    console.log(enteredMessageIsValid);

    if (!formIsValid) {
      return;
    }
  };

  return (
    <form
      className={classes.submit}
      data-aos="fade-up"
      onSubmit={onSubmitHandler}
    >
      <label htmlFor="name">Name</label>
      <input
        id="name"
        type="text"
        name="name"
        placeholder="Name"
        ref={nameInputRef}
        className={`${!formInputValid.name ? classes.invalid : ""}`}
      />
      {!formInputValid.name && (
        <p className={classes.errorMessage}>Please enter a valid name</p>
      )}
      <label htmlFor="email">Email</label>
      <input
        id="email"
        type="email"
        name="email"
        placeholder="Email"
        ref={emailInputRef}
        className={`${!formInputValid.email ? classes.invalid : ""}`}
      />
      {!formInputValid.email && (
        <p className={classes.errorMessage}>Please enter a valid email</p>
      )}
      <label htmlFor="provider">Who is your current provider?</label>
      <input
        id="provider"
        type="text"
        name="provider"
        placeholder="current provider"
        ref={providerInputRef}
        className={`${!formInputValid.provider ? classes.invalid : ""}`}
      />
      {!formInputValid.provider && (
        <p className={classes.errorMessage}>Please enter a valid provider</p>
      )}
      <label htmlFor="message">How can we help you?</label>
      <textarea
        id="message"
        name="message"
        placeholder="Message"
        ref={messageInputRef}
        className={`${!formInputValid.message ? classes.invalid : ""}`}
      ></textarea>
      {!formInputValid.message && (
        <p className={classes.errorMessage}>
          Your message should be at least 10 characters long
        </p>
      )}
      <Button type="submit">Send Message</Button>
    </form>
  );
};

export default Form;
