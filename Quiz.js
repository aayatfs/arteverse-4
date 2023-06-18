import { useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./Quiz.module.css";
const Quiz = () => {
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
    <div className={styles.quiz}>
      <div className={styles.takeTheArteverseContainer}>
        <span>{`Take the `}</span>
        <span className={styles.arteverseQuiz}>Arteverse Quiz</span>
        <span> and Showcase Your Mastery!</span>
      </div>
      <div
        className={styles.putYourKnowledge}
      >{`Put your knowledge to the test, enhance your learning experience, and earn a well-deserved certificate showcasing your mastery of the course material. `}</div>
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

export default Quiz;
