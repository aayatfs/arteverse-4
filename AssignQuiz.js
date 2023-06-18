import { useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./AssignQuiz.module.css";
const AssignQuiz = () => {
  const navigate = useNavigate();

  const onHomeClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onAboutUsClick = useCallback(() => {
    navigate("/about-us");
  }, [navigate]);

  const onWhyUsClick = useCallback(() => {
    navigate("/why-us");
  }, [navigate]);

  const onSignInClick = useCallback(() => {
    navigate("/sign-in-page");
  }, [navigate]);

  return (
    <div className={styles.assignQuiz}>
      <div className={styles.assignAQuizContainer}>
        <span>{`Assign a `}</span>
        <span className={styles.quiz}>Quiz</span>
        <span> for your students!</span>
      </div>
      <div className={styles.letStudentsPut}>
        Let students put their knowledge to the test, and enhance their learning
        experience.
      </div>
      <div className={styles.rectangleParent}>
        <a className={styles.groupChild} target="_blank" />
        <Link className={styles.home} to="/" onClick={onHomeClick}>
          Home
        </Link>
        <Link
          className={styles.aboutUs}
          to="/about-us"
          onClick={onAboutUsClick}
        >
          About Us
        </Link>
        <Link className={styles.whyUs} to="/why-us" onClick={onWhyUsClick}>
          Why Us?
        </Link>
        <Link
          className={styles.signIn}
          to="/sign-in-page"
          onClick={onSignInClick}
        >
          Sign in
        </Link>
        <img className={styles.groupItem} alt="" src="/ellipse-1@2x.png" />
      </div>
    </div>
  );
};

export default AssignQuiz;
