import Image from "next/image";

import classes from "./Card.module.css";

const Card = (props) => {
  return (
    <div
      className={`${classes.card} ${props.className}`}
      onClick={props.onShowModal}
    >
      <Image
        className={classes.card_img}
        src={props.src}
        alt={props.alt}
        width={340}
        height={200}
      />
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

export default Card;
