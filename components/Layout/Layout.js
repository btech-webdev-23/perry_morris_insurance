import Header from "./Navigation/Header";
import Footer from "./Navigation/Footer";
import classes from "./Layout.module.css";

const Layout = (props) => {
  return (
    <div className={classes["main-container"]}>
      <Header />
      <main className={classes.content}>{props.children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
