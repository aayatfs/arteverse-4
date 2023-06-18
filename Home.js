import { useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./Home.module.css";
const Home = () => {
  const navigate = useNavigate();

  const onAboutUsTextClick = useCallback(() => {
    navigate("/about-us");
  }, [navigate]);

  const onWhyUsTextClick = useCallback(() => {
    navigate("/why-us");
  }, [navigate]);

  const onSignInTextClick = useCallback(() => {
    navigate("/sign-in-page");
  }, [navigate]);

  const onRectangle1Click = useCallback(() => {
    navigate("/register-page");
  }, [navigate]);

  const onRectangle2Click = useCallback(() => {
    navigate("/sign-in-page");
  }, [navigate]);

  return (
    <div className={styles.home}>
      <div className={styles.welcomeToArteverseContainer}>
        <span>{`Welcome to `}</span>
        <span className={styles.arteverse}>Arteverse</span>
      </div>
      <div className={styles.getReadyForContainer}>
        <p
          className={styles.getReadyFor}
        >{`Get ready for an extraordinary opportunity that will transport you into a realm of creativity like never before. `}</p>
        <p className={styles.braceYourselvesFor}>
          Brace yourselves for an immersive journey as we combine the realms of
          technology and art, transcending boundaries and opening doors to
          infinite possibilities.
        </p>
      </div>
      <div className={styles.rectangleParent}>
        <a className={styles.frameChild} target="_blank" />
        <a className={styles.home1}>Home</a>
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
      <div className={styles.homeChild} />
      <img
        className={styles.homeItem}
        alt=""
        src="/rectangle-4.svg"
        onClick={onRectangle1Click}
      />
      <img
        className={styles.homeInner}
        alt=""
        src="/rectangle-5.svg"
        onClick={onRectangle2Click}
      />
      <Link className={styles.register} to="/register-page">
        Register
      </Link>
      <Link className={styles.signIn1} to="/sign-in-page">
        Sign In
      </Link>
      <img className={styles.rectangleIcon} alt="" src="/rectangle-14@2x.png" />
    </div>
  );
};

export default Home;
