import Navbar from "@/components/navbar/page";
import React from "react";
import styles from "./venus.module.css";
import Banner from "@/components/Banner/page";
import Markets from "@/components/Markets/page";
import Cards from "@/components/Cards/page";
import Footer from "@/components/Footer/page";

const Venus = () => {
  return (
    <div className={styles.mainContainer}>
      <Navbar />
      <Banner />
      <Markets />
      <Cards />
      <Footer />
    </div>
  );
};

export default Venus;
