import styles from "./styles.module.scss";
import About from "../About";
import React from "react";
import Alex from "../Alex";
import Vitor from "../Vitor";
import Contact from "../Contact";

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
      <div className={styles.container}>
        <Vitor />
      </div>
      <div className={styles.container}>
        <Contact />
      </div>
    </div>
  );
}
