import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./RegisterPage.module.css"; // Update with your module styles

const RegisterPage = () => {
  const navigate = useNavigate();
  const [userType, setUserType] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onWhyUsTextClick = () => {
    navigate("/why-us");
  };

  const onSignInTextClick = () => {
    navigate("/sign-in-page");
  };

  const onHomeClick = () => {
    navigate("/");
  };

  const onAboutUsText1Click = () => {
    navigate("/about-us");
  };

  const onWhyUsText1Click = () => {
    navigate("/why-us");
  };

  const onSignInText1Click = () => {
    navigate("/sign-in-page");
  };

  const onRegisterClick = () => {
    if (userType === "instructor" && firstName && lastName && email && password) {
      navigate("/instructor-page", { state: { firstName, lastName } });
    } else if (userType === "student" && firstName && lastName && email && password) {
      navigate("/student-page");
    } else {
      // Handle registration validation/error
    }
  };
  

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleUserTypeChange = (event) => {
    setUserType(event.target.value);
  };

  return (
    <div className={styles.registerPage}>
      {/* Add your register page content and styling */}
      <b className={styles.aboutUs}>About Us</b>
      <b className={styles.whyUs} onClick={onWhyUsTextClick}>
        Why Us?
      </b>
      <b className={styles.guide}>Guide</b>
      <b className={styles.tuitionFees}>Tuition Fees</b>
      <img className={styles.registerPageChild} alt="" src="/rectangle-9.svg" />
      <img className={styles.registerPageItem} alt="" src="/rectangle-51.svg" />
      <div className={styles.register}>Register</div>
      <input
        className={styles.registerPageInner}
        type="text"
        placeholder="First Name"
        value={firstName}
        onChange={handleFirstNameChange}
      />
      <input
        className={styles.rectangleInput}
        type="text"
        placeholder="Last Name"
        value={lastName}
        onChange={handleLastNameChange}
      />
      <input
        className={styles.registerPageChild1}
        type="email"
        placeholder="Email"
        value={email}
        onChange={handleEmailChange}
      />
      <input
        className={styles.registerPageChild2}
        type="password"
        placeholder="Password"
        value={password}
        onChange={handlePasswordChange}
      />
      <b className={styles.alreadyHaveAn}>Already have an account?</b>
      <b className={styles.signIn} onClick={onSignInTextClick}>
        Sign In
      </b>
      <button className={styles.register1} onClick={onRegisterClick}>
        Register
      </button>
      <img
        className={styles.untitledDesign3RemovebgPreIcon}
        alt=""
        src="/untitled-design3removebgpreview-1@2x.png"
      />
      <div className={styles.radioButton}>
        <b className={styles.asAdmin}>As Admin</b>
        <input
          className={styles.radioButton3}
          type="radio"
          name="user-type"
          value=""
          checked={userType === ""}
          onChange={handleUserTypeChange}
        />
      </div>
      <div className={styles.radioButton1}>
        <b className={styles.asAdmin}>As Instructor</b>
        <input
          className={styles.radioButton3}
          type="radio"
          name="user-type"
          value="instructor"
          checked={userType === "instructor"}
          onChange={handleUserTypeChange}
        />
      </div>
      <div className={styles.radioButton4}>
        <b className={styles.asStudent}>As Student</b>
        <input
          className={styles.radioButton11}
          type="radio"
          name="user-type"
          value="student"
          checked={userType === "student"}
          onChange={handleUserTypeChange}
        />
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
        <b className={styles.signIn1} onClick={onSignInText1Click}>
          Sign in
        </b>
        <img className={styles.frameItem} alt="" src="/ellipse-1@2x.png" />
      </div>
    </div>
  );
};

export default RegisterPage;
