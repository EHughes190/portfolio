import styles from "./Navbar.module.scss";
import { FaIgloo } from "react-icons/fa";
import { NavLink } from "react-router-dom";

export const Navbar = (): JSX.Element => {

  return (
    <nav className={styles.nav}>
      <div>
        <NavLink exact to="/" key="nav:home">
          <FaIgloo className={styles.igloo} />
        </NavLink>
      </div>
    </nav>
  );
};
