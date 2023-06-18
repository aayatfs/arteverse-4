import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Classroom.module.css";
const Classroom = () => {
  const navigate = useNavigate();

  const onHomeClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onAboutUsTextClick = useCallback(() => {
    navigate("/about-us");
  }, [navigate]);

  const onWhyUsTextClick = useCallback(() => {
    navigate("/why-us");
  }, [navigate]);

  const onSignInTextClick = useCallback(() => {
    navigate("/sign-in-page");
  }, [navigate]);

  return (
    <div className={styles.classroom}>
      <div className={styles.experienceArtIn}>
        Experience Art in a Whole New Way! Learn and explore art through
        Arteverse with VR headsets. Join our immersive lectures and dive into a
        world of creativity like never before.
      </div>
      <div className={styles.discoverTheArtContainer}>
        <span>{`Discover the `}</span>
        <span className={styles.artLecture}>Art Lecture</span>
        <span>{` of Your Dreams! `}</span>
      </div>
      <div className={styles.rectangleParent}>
        <a className={styles.frameChild} target="_blank" />
        <a className={styles.home} onClick={onHomeClick}>
          Home
        </a>
        <b className={styles.aboutUs} onClick={onAboutUsTextClick}>
          About Us
        </b>
        <b className={styles.whyUs} onClick={onWhyUsTextClick}>
          Why Us?
        </b>
        <b className={styles.signIn} onClick={onSignInTextClick}>
          Sign in
        </b>
        <img className={styles.frameItem} alt="" src="/ellipse-1@2x.png" />
      </div>
    </div>
  );
};

export default Classroom;
