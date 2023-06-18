import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./AIGenerator.module.css";
const AIGenerator = () => {
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
    <div className={styles.aiGenerator}>
      <div className={styles.unleashYourCreativityContainer}>
        <span>{`Unleash Your Creativity with Our `}</span>
        <span className={styles.aiArtworkGenerator}>AI Artwork Generator</span>
        <span>!</span>
      </div>
      <div className={styles.ourRevolutionaryAi}>
        Our revolutionary AI Artwork Generator will astound you as it transforms
        your input into captivating artwork. From vivid landscapes to abstract
        expressions, our cutting-edge technology harnesses the power of
        artificial intelligence to bring your imagination to life.
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

export default AIGenerator;
