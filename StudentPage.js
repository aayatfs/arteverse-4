// StudentPage.js
import { useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./StudentPage.module.css";

const StudentPage = () => {
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

  const onRectangleButtonClick = useCallback(() => {
    navigate("/ai-generator");
  }, [navigate]);

  const onRectangleButton1Click = useCallback(() => {
    navigate("/quiz");
  }, [navigate]);

  const onRectangleButton2Click = useCallback(() => {
    navigate("/art-gallery");
  }, [navigate]);

  const onRectangleButton3Click = useCallback(() => {
    navigate("/classroom");
  }, [navigate]);

  const onRectangleButton4Click = useCallback(() => {
    navigate("/customize-avatar");
  }, [navigate]);

  return (
    <div className={styles.studentPage}>
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
      <button
        className={styles.studentPageChild}
        onClick={onRectangleButtonClick}
      />
      <b className={styles.generateArtwork}>Generate Artwork</b>
      <button
        className={styles.studentPageItem}
        onClick={onRectangleButton1Click}
      />
      <b className={styles.solveQuiz}>Solve Quiz</b>
      <button
        className={styles.studentPageInner}
        onClick={onRectangleButton2Click}
      />
      <b className={styles.visitGallery}>Visit Gallery</b>
      <button
        className={styles.rectangleButton}
        onClick={onRectangleButton3Click}
      />
      <b className={styles.attendLecture}>Attend Lecture</b>
      <button
        className={styles.studentPageChild1}
        onClick={onRectangleButton4Click}
      />
      <b className={styles.customizeAvatar}>Customize Avatar</b>
      <div className={styles.helloStudentName}>Hello Student</div>
    </div>
  );
};

export default StudentPage;
