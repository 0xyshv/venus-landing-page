"use client";

import Navbar from "@/components/navbar/page";
import React from "react";
import styles from "./venus.module.css";
import Banner from "@/components/Banner/page";
import Card from "@/components/Cards/page";
import Footer from "@/components/Footer/page";
import AssetRow from "@/components/AssetRow/page";

const cards = [
  {
    logo: "a",
    title: "Decentralized",
    description: "Access an immutable money market directly on-chain.",
  },
  {
    logo: "b",
    title: "BEP-20",
    description: "All Venus Protocol assets are bound by the BEP-20 standard.",
  },
  {
    logo: "c",
    title: "Scalable",
    description:
      "Built on BNB Chain for fast, secure, and low cost transactions.",
  },
];

const assets = [
  { logo: "&#x232c", title: "ABC", description: "vkuwk cwjdcbiw" },
];

const Venus = () => {
  return (
    <div className={styles.mainContainer}>
      <Navbar />
      <Banner />

      {/* Market Section */}
      <div className={styles.assets}>
        {" "}
        {assets.map((asset) => (
          <AssetRow />
        ))}
      </div>

      {/* card section */}
      <div className={styles.featureCards}>
        {" "}
        {cards.map((card) => (
          <Card
            logo={card.logo}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>

      <Footer />
    </div>
  );
};

export default Venus;
