import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./ArtGallery.module.css";
const ArtGallery = () => {
  const navigate = useNavigate();

  const onHomeClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onAboutUsText1Click = useCallback(() => {
    navigate("/about-us");
  }, [navigate]);

  const onWhyUsText1Click = useCallback(() => {
    navigate("/why-us");
  }, [navigate]);

  const onSignInTextClick = useCallback(() => {
    navigate("/sign-in-page");
  }, [navigate]);

  return (
    <div className={styles.artGallery}>
      <b className={styles.aboutUs}>About Us</b>
      <b className={styles.whyUs}>Why Us?</b>
      <div className={styles.stepIntoAnContainer}>
        <span>{`Step into an Unforgettable `}</span>
        <span className={styles.artGallery1}>Art Gallery</span>
        <span> Experience!</span>
      </div>
      <div className={styles.escapeIntoA}>
        Escape into a virtual realm of artistic wonder as you enter our
        extraordinary art gallery in Arteverse. With the power of VR headsets,
        immerse yourself in breathtaking exhibitions, where masterpieces come
        alive with unparalleled realism. Explore the vibrant brushstrokes,
        intricate details, and rich narratives of renowned artworks from around
        the world. Unleash your imagination and embark on a journey through the
        gallery of your dreams. Discover, appreciate, and be inspired by the
        beauty of art in the digital age.
      </div>
      <div className={styles.rectangleParent}>
        <a className={styles.frameChild} target="_blank" />
        <a className={styles.home} onClick={onHomeClick}>
          Home
        </a>
        <b className={styles.aboutUs1} onClick={onAboutUsText1Click}>
          About Us
        </b>
        <b className={styles.whyUs1} onClick={onWhyUsText1Click}>
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

export default ArtGallery;
