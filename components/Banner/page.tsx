import React from "react";
import styles from "./banner.module.css";

const Banner = () => {
  return (
    <div>
      <div className={styles.mainBanner}>
        <div className={styles.heading}>
          <h1>
            Universal <br />
            Money Markets
          </h1>
        </div>
        <div className={styles.description}>
          <p>
            Simple and powerful community-driven
            <br />
            finance for the entire globe.
          </p>
        </div>
        <div>
          <a href="" target="_blank" className={styles.launchBtn}>
            Launch App
          </a>
        </div>
        <div className={styles.buttonGroup}>
          <a href="" target="_blank" className={styles.links}>
            Lend &#x279D;
          </a>
          <a href="" target="_blank" className={styles.links}>
            Borrow &#x279D;
          </a>
          <a href="" target="_blank" className={styles.links}>
            Earn &#x279D;
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
