import Card from "../UI/Card";
import pic from "../../assets/coverage.jpg";
import classes from "./CoverageSection.module.css";

const CoverageSection = (props) => {
  return (
    <div className={classes.box} id="box">
      <p data-aos="fade-up">Get The Perfect Insurance For You</p>
      {/*FIXME*/}
      <h2 data-aos="fade-up" onClick={props.onShowModal}>
        The coverage we provide.
      </h2>{" "}
      {/* //!The onClick event here is just for demonstration until you learn about class inheritance through React*/}
      <div className={classes.boxMenu} data-aos="fade-up">
        <Card src={pic} alt="Coverage Umbrella" onClick={props.onShowModal}>
          <h4>Individuals</h4>
          <p>Find out about our retirement options, or our individual plans.</p>
        </Card>
        <Card src={pic} alt="Coverage Umbrella" onClick={props.onShowModal}>
          <h4>Families</h4>
          <p>Find out about our retirement options, or our individual plans.</p>
        </Card>
        <Card src={pic} alt="Coverage Umbrella" onClick={props.onShowModal}>
          <h4>Small Businesses</h4>
          <p>Find out about our retirement options, or our individual plans.</p>
        </Card>
        <Card src={pic} alt="Coverage Umbrella" onClick={props.onShowModal}>
          <h4>Retired</h4>
          <p>Find out about our retirement options, or our individual plans.</p>
        </Card>
      </div>
    </div>
  );
};

export default CoverageSection;
