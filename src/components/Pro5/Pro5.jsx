import React from "react";
import { getImageURL } from "../../utils";
import styles from "./Pro5.module.css";

const Pro5 = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Mien</h1>
        <p className={styles.description}>
          Computer Science and Mathematical Economics double major
        </p>
        <p className={styles.description}>@ Gettysburg College</p>
        <a
          href="https://drive.google.com/file/d/1yGogq9lerZwrnq9vPWu_Ef8mS44dT-hf/view?usp=drive_link"
          className={styles.contactBtn}
        >
          My Resume
        </a>
      </div>
      <img
        src={getImageURL("main/mainImage.png")}
        style={{ width: "400px", height: "400px", borderRadius: "50%" }}
        alt="me"
        className={styles.eduImage}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};

export default Pro5;
