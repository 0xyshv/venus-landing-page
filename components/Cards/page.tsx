import React from "react";
import styles from "./cards.module.css";

const Cards = () => {
  return (
    <div className={styles.featureCards}>
      <div className={styles.featureContent}>
        <p>
          <span>&#x232c;</span>
        </p>
        <br />
        <br />
        <br />
        <br />
        <h3>Decentralized</h3>
        <br />
        <p>
          Access an immutable money market <br />
          directly on-chain.
        </p>
      </div>
      <div className={styles.featureContent}>
        <p>
          <span>&#13038;</span>
        </p>
        <br />
        <br />
        <br />
        <br />
        <h3>BEP-30</h3>
        <br />
        <p>
          All Venus Protocol assets are bound
          <br />
          by the BEP-20 standard.
        </p>
      </div>
      <div className={styles.featureContent}>
        <p>
          <span>&#x2026;</span>
        </p>
        <br />
        <br />
        <br />
        <br />
        <h3>Scalable</h3>
        <br />
        <p>
          Built on BNB Chain for fast, secure, <br />
          and low cost transactions.
        </p>
      </div>
    </div>
  );
};

export default Cards;
