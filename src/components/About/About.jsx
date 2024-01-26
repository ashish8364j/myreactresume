import React from 'react'
import styles from "./About.module.css";


export const About = () => {
  return (
    <section className={styles.container} id="about">
      <div className={styles.content}>
        <img
        src={"../../../img/newnew3.jpg"}
        alt="Hero image of me"
        className={styles.heroImg}
      />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <div className={styles.aboutItemText}>
              <h3>Full-stack Developer</h3>
              <p>
                I'm a full stack developer with experience in building responsive
                and optimized sites 
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <p>
                I have experience developing fast and optimised back-end systems
                and APIs
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <div className={styles.aboutItemText}>
              <h3>App Developer</h3>
              <p>
                I am also a App developer
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};