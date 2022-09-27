import classes from "./Button.module.css";

const Button = (props) => {
  return (
    <button
      type={props.type || "button"}
      className={classes.btn}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;
