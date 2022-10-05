import classes from "./Card.module.css";

const Card = (props) => {
  return (
    <div
      className={`${classes.card} ${props.className}`}
      onClick={props.onShowModal}
    >
      <img src={props.src} alt={props.alt} />
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

export default Card;
