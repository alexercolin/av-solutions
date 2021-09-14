import styles from "./styles.module.scss";
import About from "../About/index";
import React from "react";
import Alex from "../Alex";

export default function MainContainer() {
  return (
    <div>
      <div className={styles.container}>
        <About />
      </div>
      {/* <div className={styles.container}>
        <Team />
      </div> */}
      <div className={styles.container}>
        <Alex />
      </div>
    </div>
  );
}
