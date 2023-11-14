import React from "react";
import styles from './style.module.css'

const StyleWithCSSModule = () => {
  return (
    <div className={styles.box}>
      <div className={styles.header}>
        <h3>This Style is from global css file</h3>
        <p className={styles.paragraph}>I am learning react</p>
      </div>
      <div className={styles.header}>
        <h3>This Style is from global css file</h3>
        <p className={styles.paragraph}>I am learning react</p>
      </div>
      <div className={styles.header}>
        <h3>This Style is from global css file</h3>
        <p className={styles.paragraph}>I am learning react</p>
      </div>
      
    </div>
  );
};

export default StyleWithCSSModule;
