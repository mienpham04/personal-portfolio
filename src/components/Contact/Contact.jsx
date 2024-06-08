import React from "react";
import { getImageURL } from "../../utils";
import styles from "./Contact.module.css";
import { MdEmail } from "react-icons/md";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <MdEmail className={styles.icon}/>
          <a href="mailto:phammo01@gettysburg.edu">phammo01@gettysburg.edu</a>
        </li>

        <li className={styles.link}>
          <FaLinkedin className={styles.icon}/>
          <a href="https://www.linkedin.com/in/mien-pham/">linkedin.com/mien-pham</a>
        </li>

        <li className={styles.link}>
          <FaGithub className={styles.icon}/> 
          <a href="https://github.com/mienpham04">github.com/mienpham04</a>
        </li>
      </ul>
    </footer>
  );
};

export default Contact;
