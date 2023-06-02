import React from "react";
import styles from "./navbar.module.css";

const Navbar = () => {
  return (
    <>
      <div className={styles.container1}>
        <h2>VENUS</h2>
        <div className={styles.container2}>
          <a href="" target="_blank" className={styles.links}>
            Whitepaper
          </a>
          <a href="" target="_blank" className={styles.links}>
            Docs
          </a>
          <a href="" target="_blank" className={styles.links}>
            Market
          </a>
        </div>
        <a href="" target="_blank" className={styles.launchBtn}>
          Launch App
        </a>
      </div>
    </>
  );
};

export default Navbar;
