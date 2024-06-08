import React from "react";

import styles from "./About.module.css";
import { getImageURL } from "../../utils.js";

const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageURL("about/aboutImage.png")}
          alt="Another me"
          className={styles.aboutImage}
          style={{ width: "400px", height: "400px", borderRadius: "50%" }}
        />

        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageURL("about/cursorIcon.png")} alt="UI Icon" />
            <div className={styles.aboutItemText}>
              <h3> Full-stack Developer</h3>
              <p>A full-stack developer with experience building a website with both backend and frontend skills </p>
            </div>
          </li>

          <li className={styles.aboutItem}>
            <img src={getImageURL("about/cursorIcon.png")} alt="UI Icon" />
            <div className={styles.aboutItemText}>
              <h3> Data Analysis/ Business Intelligence</h3>
              <p>A data analysis with experience in data analysing, dashboard visualization, and data story-telling</p>
            </div>
          </li>

          <li className={styles.aboutItem}>
            <img src={getImageURL("about/cursorIcon.png")} alt="UI Icon" />
            <div className={styles.aboutItemText}>
              <h3> Software Engineer</h3>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default About;
