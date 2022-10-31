import Form from "../UI/Form";
import classes from "./ContactSection.module.css";

const ContactSection = () => {
  const formSubmissionHandler = (isSubmitting) => {
    console.log(isSubmitting);
    console.log("submitting");
    if (isSubmitting) {
      setFormSubmitting(true);
    } else {
      setFormSubmitting(false);
    }
  };

  const submissionCompleteHandler = (complete) => {
    console.log(complete);
    console.log("complete");
    if (complete) {
      setSubmitComplete(true);
    } else {
      setSubmitComplete(false);
    }
  };

  return (
    <div className={classes.contact} id="contact">
      <div className={classes.form}>
        <h2 data-aos="fade-up">
          Send us a message! You will be contacted within one business day.
        </h2>
        <Form
          onSubmitForm={formSubmissionHandler}
          onSubmitComplete={submissionCompleteHandler}
        />
      </div>
    </div>
  );
};

export default ContactSection;
