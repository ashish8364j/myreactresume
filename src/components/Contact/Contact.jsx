import React from "react";
import styles from "./Contact.module.css";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img
        src={"../../../img/gmail.png"}
        alt="Hero image of me"
        className={styles.heroImg}
      />
          <a href="mailto:ashishsingh822003@gmail.com">ashishsingh822003@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img
        src={"../../../img/linkedin.gif"}
        alt="Hero image of me"
        className={styles.heroImg}
      />
          <a href="https://www.linkedin.com/in/ashish-singh-8412ba285?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">Visit Profile</a>
        </li>
        <li className={styles.link}>
          <img
        src={"../../../img/CALLICON.jpeg"}
        alt="Hero image of me"
        className={styles.heroImgg}
      />
          <a >8357980532,7247377393</a>
        </li>
      </ul>
    </footer>
  );
};