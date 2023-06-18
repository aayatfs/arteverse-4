import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./AboutUs.module.css";
const AboutUs = () => {
  const navigate = useNavigate();

  const onHomeTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onAboutUsText1Click = useCallback(() => {
    navigate("/about-us");
  }, [navigate]);

  const onWhyUsTextClick = useCallback(() => {
    navigate("/why-us");
  }, [navigate]);

  const onSignInTextClick = useCallback(() => {
    navigate("/sign-in-page");
  }, [navigate]);

  return (
    <div className={styles.aboutUs}>
      <div className={styles.aboutUs1}>About Us</div>
      <div className={styles.weIncludeThe}>
        We include the following technologies:
      </div>
      <b className={styles.virtualReality}>Virtual Reality</b>
      <div
        className={styles.toCreateImmersive}
      >{`To create immersive 3D experience and transport you into a mesmerizing world of art. `}</div>
      <b className={styles.artificialIntelligence}>Artificial Intelligence</b>
      <div className={styles.forTransformingText}>
        For transforming text into breathtaking artwork right before your eyes.
      </div>
      <img
        className={styles.screenshot20230614At921}
        alt=""
        src="/screenshot-20230614-at-921-1@2x.png"
      />
      <div className={styles.rectangleParent}>
        <a className={styles.groupChild} target="_blank" />
        <b className={styles.home} onClick={onHomeTextClick}>
          Home
        </b>
        <b className={styles.aboutUs2} onClick={onAboutUsText1Click}>
          About Us
        </b>
        <b className={styles.whyUs} onClick={onWhyUsTextClick}>
          Why Us?
        </b>
        <b className={styles.signIn} onClick={onSignInTextClick}>
          Sign in
        </b>
        <img className={styles.groupItem} alt="" src="/ellipse-1@2x.png" />
      </div>
    </div>
  );
};

export default AboutUs;
