import { useCallback } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import styles from "./InstructorPage.module.css";

const InstructorPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  const onHomeClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  // Extract firstName and lastName from the location state
  const { firstName, lastName } = location.state || {};

  return (
    <div className={styles.instructorPage}>
      <div className={styles.rectangleParent}>
        <a className={styles.groupChild} target="_blank" />
        <Link className={styles.home} to="/" onClick={onHomeClick}>
          Home
        </Link>
        <Link
          className={styles.aboutUs}
          to="/about-us"
        >
          About Us
        </Link>
        <Link className={styles.whyUs} to="/why-us">
          Why Us?
        </Link>
        <Link
          className={styles.signIn}
          to="/sign-in-page"
        >
          Sign in
        </Link>
        <img className={styles.groupItem} alt="" src="/ellipse-1@2x.png" />
      </div>
      <button
        className={styles.instructorPageChild}
      />
      <b className={styles.visitGallery}>Visit Gallery</b>
      <button
        className={styles.instructorPageItem}
      />
      <b className={styles.assignAQuiz}>Assign a Quiz</b>
      <button
        className={styles.instructorPageInner}
      />
      <b className={styles.deliverLecture}>Deliver Lecture</b>
      <div className={styles.helloInstructorName}>Hello {firstName} {lastName}</div>
    </div>
  );
};

export default InstructorPage;
