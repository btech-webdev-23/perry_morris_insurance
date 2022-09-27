import classes from "./Navigation.module.css";

const Navigation = (props) => {
  return (
    <ul className={`${classes.nav} ${props.className}`}>
      <li>
        <a href="#home">Home</a>
      </li>
      <li>
        <a href="about.html">About</a>
      </li>
      <li>
        <a href="#box">Insurance</a>
      </li>
      <li>
        <a href="#contact">Contact Us</a>
      </li>
    </ul>
  );
};

export default Navigation;
