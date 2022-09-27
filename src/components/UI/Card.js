import classes from "./Card.module.css";

const Card = (props) => {
  return (
    <div className={classes.card}>
      <img src={props.src} alt={props.alt} />
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

export default Card;
