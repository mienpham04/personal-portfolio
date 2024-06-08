import { getImageURL } from "../../utils";
import styles from "./Education.module.css";
import { FcGraduationCap } from "react-icons/fc";

const Education = () => {
  return (
    <section className={styles.container} id="education">
      <h2 className={styles.title}>Education</h2>
      <div className={styles.eduContent}>
        <div className={styles.text}>
          <FcGraduationCap style={{ width: "60px", height: "60px" }} />
          <p>Computer Science and Economics Double Major</p>
          <p className={styles.grad}>Graduation: Expected May 2026 </p>

          <div className={styles.courses}>
            <ul className={styles.courseList}>
              <div className={styles.courseName}>Computer Science</div>
              <li>Computer Science I</li>
              <li>Computer Science II</li>
              <li>Discrete Mathematics</li>
              <li>Data Structures and Algorithms</li>
            </ul>
            <ul className={styles.courseList}>
              <div className={styles.courseName}>Mathematics</div>
              <li>Caculus II (Honors)</li>
              <li>Linear Algebra</li>
            </ul>
            <ul className={styles.courseList}>
              <div className={styles.courseName}>Economics</div>
              <li>Intermediate Microeconomic Theory</li>
              <li>Intermediate Macroeconomic Theory</li>
              <li>Introductory Economics and Business Statistics</li>
              <li>Gender Issues in Economics</li>
              <li>Econometrics</li>
            </ul>
          </div>
        </div>

        <img
          src={getImageURL("edu/logo.png")}
          style={{ width: "400px", height: "400px" }}
          alt="school logo"
        />
      </div>
    </section>
  );
};

export default Education;
