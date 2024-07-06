import Link from "next/link";
import classes from "./main-header.module.css";

function MainHeader(props) {
  return (
    <header className={classes.header}>
      {/* logo */}
      <div className={classes.logo}>
        <Link href="/">Next Events</Link>
      </div>
      {/* navbar */}
      <nav className={classes.navigation}>{props.navigation}</nav>
    </header>
  );
}

export default MainHeader;
