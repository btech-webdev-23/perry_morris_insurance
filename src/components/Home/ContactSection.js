import Form from "../UI/Form";
import classes from "./ContactSection.module.css";

const ContactSection = () => {
  return (
    <div className={classes.contact} id="contact">
      <div className={classes.form}>
        <h2 data-aos="fade-up">
          Send us a message! You will be contacted within one business day.
        </h2>
        <Form></Form>
      </div>
    </div>
  );
};

export default ContactSection;
