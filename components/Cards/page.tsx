import React, { Component } from "react";
import styles from "./cards.module.css";
import AutoAwesomeMotionOutlined from "@mui/icons-material/AutoAwesomeMotionOutlined";
import SafetyCheck from "@mui/icons-material/SafetyCheck";
import MoreHoriz from "@mui/icons-material/MoreHoriz";

interface Props {
  logo: string;
  title: string;
  description: string;
}

const Card = ({ logo, title, description }: Props) => {
  return (
    <div className={styles.featureContent}>
      <p>
        <span>
          {logo == "a" ? <AutoAwesomeMotionOutlined /> : <></>}
          {logo == "b" ? <SafetyCheck /> : <></>}
          {logo == "c" ? <MoreHoriz /> : <></>}
        </span>
      </p>
      <br />
      <br />
      <br />
      <br />
      <h3>{title}</h3>
      <br />
      <p>{description}</p>
    </div>
  );
};

export default Card;
