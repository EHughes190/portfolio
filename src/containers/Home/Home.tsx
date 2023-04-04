import styles from "./Home.module.scss";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

//Props are passed from Routes
export const Home = (): JSX.Element => {
  return (
    <>
      <section
        className={styles.landingPage}
      >
        <div className={styles.title}>
          <h1 className={styles.title__heading}>ed hughes.</h1>
          <h3 className={styles.title__subHeading}>software developer.</h3>
        </div>
        <div className={styles.landingPage__btn}>
          <Link to="projects" className={styles.btn_primary}>
            View my work <FaArrowRight className={styles.arrowSpan} />
          </Link>
        </div>
      </section>
    </>
  );
};
