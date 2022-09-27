import Button from "./Button";
import classes from "./Form.module.css";

const Form = (props) => {
  const onSubmitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <form
      className={classes.submit}
      data-aos="fade-up"
      onSubmit={onSubmitHandler}
    >
      <label htmlFor="contact">Name</label>
      <input type="text" name="" placeholder="Name" />
      <label htmlFor="contact">Email</label>
      <input type="email" name="" placeholder="Email" />
      <label htmlFor="contact">Who is your current provider?</label>
      <input type="text" name="" placeholder="current provider" />
      <label htmlFor="contact">How can we get started helping you?</label>
      <textarea placeholder="Message"></textarea>
      <Button type="submit">Send Message</Button>
    </form>
  );
};

export default Form;
