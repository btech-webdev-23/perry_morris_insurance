import classes from "./InfoSection.module.css";

const InfoSection = () => {
  return (
    <section className={classes.container}>
      <div className={classes.content} data-aos="fade-up">
        <h3>Locations</h3>
        <br />
        <h5>Areas Served</h5>
        <p>AZ, UT, ID, WA</p>
        <h5>Located In</h5>
        <p>Logan, UT</p>
      </div>
      <div className={classes.content} data-aos="fade-up">
        <h3>Working hours</h3>
        <br />
        <h5>Monday - Friday</h5>
        <p>7:00 AM - 10:00 PM</p>
        <h5>Sunday</h5>
        <p>Closed</p>
        <br />
      </div>
    </section>
  );
};

export default InfoSection;
