import { useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./CustomizeAvatar.module.css";

const CustomizeAvatar = () => {
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
    <div className={styles.customizeAvatar}>
      <div className={styles.personalizeYourArtisticContainer}>
        <span>{`Personalize your `}</span>
        <span className={styles.artisticIdentity}>artistic identity</span>
        <span>{` in Arteverse! `}</span>
      </div>
      <div className={styles.customizeYourAvatar}>
        Customize your avatar to reflect your unique style, preferences, and
        artistic flair. Dive into the virtual world of Arteverse and bring your
        digital persona to life like never before.
      </div>
      <div className={styles.customAvatarGeneratorContainer}>
        <custom-avatar-generator
          shape="square"
          enable-background="true"
          display-download="true"
          texts='{"everything":"EVERYTHING","allColors":"All colors","background":"Background","skin":"Skin","hair":"Hair","hairStyle":"Hair Style","accessory":"Accessory","clothes":"Clothes","clothing":"Clothing","print":"Print"}'
        />
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

export default CustomizeAvatar;
