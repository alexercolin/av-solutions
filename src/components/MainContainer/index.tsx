import styles from "./styles.module.scss";
import About from "../About";
import Footer from "../Footer";
import React from "react";
import Alex from "../Alex";
import Vitor from "../Vitor";
import Salve from "../Salve";

export default function MainContainer() {
  return (
    <div>
      <div id="about" className={styles.container}>
        <About />
      </div>
      <div id="alex" className={styles.container}>
        <Alex />
      </div>
      <div id="vitor" className={styles.container}>
        <Vitor />
      </div>
      <div id="salve" className={styles.container}>
        <Salve />
      </div>
      <Footer />
    </div>
  );
}
