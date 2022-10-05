import Card from "../UI/Card";
import pic from "../../assets/coverage.jpg";
import classes from "./CoverageSection.module.css";

const CoverageSection = (props) => {
  return (
    <div className={classes.box} id="box">
      <p data-aos="fade-up">Get The Perfect Insurance For You</p>
      <h2 data-aos="fade-up" onClick={props.onShowModal}>
        The coverage we provide.
      </h2>{" "}
      <div className={classes.boxMenu} data-aos="fade-up">
        <Card
          className="card_ind"
          src={pic}
          alt="Coverage Umbrella"
          onShowModal={props.onShowModal}
        >
          <h4>Individuals</h4>
          <p>Find out about our retirement options, or our individual plans.</p>
        </Card>
        <Card
          className="card_fam"
          src={pic}
          alt="Coverage Umbrella"
          onShowModal={props.onShowModal}
        >
          <h4>Families</h4>
          <p>Find out about our retirement options, or our individual plans.</p>
        </Card>
        <Card
          className="card_smb"
          src={pic}
          alt="Coverage Umbrella"
          onShowModal={props.onShowModal}
        >
          <h4>Small Businesses</h4>
          <p>Find out about our retirement options, or our individual plans.</p>
        </Card>
        <Card
          className="card_ret"
          src={pic}
          alt="Coverage Umbrella"
          onShowModal={props.onShowModal}
        >
          <h4>Retired</h4>
          <p>Find out about our retirement options, or our individual plans.</p>
        </Card>
      </div>
    </div>
  );
};

export default CoverageSection;
