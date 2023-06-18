// SignInPage.js
import { useCallback, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./SignInPage.module.css";

const SignInPage = () => {
  const navigate = useNavigate();
  const [userType, setUserType] = useState("");

  const onRegisterNowClick = useCallback(() => {
    navigate("/register-page");
  }, [navigate]);

  const onHomeClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onAboutUsTextClick = useCallback(() => {
    navigate("/about-us");
  }, [navigate]);

  const onWhyUsTextClick = useCallback(() => {
    navigate("/why-us");
  }, [navigate]);

  const onSignInClick = useCallback(() => {
    if (userType === "instructor") {
      navigate("/instructor-page");
    } else if (userType === "student") {
      navigate("/student-page");
    } else {
      navigate("/sign-in-page");
    }
  }, [navigate, userType]);

  return (
    <div className={styles.signInPage}>
      <img className={styles.signInPageChild} alt="" src="/rectangle-91.svg" />
      <div className={styles.radioButton}>
        <b className={styles.asAdmin}>As Admin</b>
        <input
          className={styles.radioButton3}
          type="radio"
          name="user-type"
          onChange={() => setUserType("")}
        />
      </div>
      <div className={styles.radioButton1}>
        <b className={styles.asAdmin}>As Instructor</b>
        <input
          className={styles.radioButton3}
          type="radio"
          name="user-type"
          value="instructor"
          onChange={() => setUserType("instructor")}
        />
      </div>
      <div className={styles.radioButton4}>
        <b className={styles.asStudent}>As Student</b>
        <input
          className={styles.radioButton11}
          type="radio"
          name="user-type"
          value="student"
          onChange={() => setUserType("student")}
        />
      </div>
      <img className={styles.signInPageItem} alt="" src="/rectangle-51.svg" />
      <div className={styles.signIn}>Sign In</div>
      <input
        className={styles.signInPageInner}
        type="email"
        placeholder="Email"
        maxLength
        minLength
      />
      <input
        className={styles.rectangleInput}
        type="password"
        placeholder="Password"
        maxLength
        minLength
      />
      <b className={styles.dontHaveAn}>Don’t have an account?</b>
      <Link
        className={styles.registerNow}
        to="/register-page"
        onClick={onRegisterNowClick}
      >
        Register Now
      </Link>
      <button className={styles.signIn1} onClick={onSignInClick}>
        Sign In
      </button>
      <img
        className={styles.untitledDesign2RemovebgPreIcon}
        alt=""
        src="/untitled-design2removebgpreview-1@2x.png"
      />
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
        <b className={styles.signIn2}>Sign in</b>
        <img className={styles.frameItem} alt="" src="/ellipse-1@2x.png" />
      </div>
    </div>
  );
};

export default SignInPage;
