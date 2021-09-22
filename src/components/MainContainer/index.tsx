import styles from "./styles.module.scss";
import About from "../About";
import Footer from "../Footer";
import React from "react";
import Salve from "../Salve";
import Profile from "../Profile";

interface IUser {
  name: string;
  fullName: string;
  description: string;
  imageOrder: ImagePosition;
}

enum ImagePosition {
  right,
  left,
}

export default function MainContainer() {
  const alex: IUser = {
    name: "alexercolin",
    fullName: "Alex Ercolin Oliveira",
    description: "Alex Ercolin Oliveira",
    imageOrder: ImagePosition.left,
  };

  const vitor: IUser = {
    name: "ViBrandao",
    fullName: "Vitor Lima Siqueira Brandão",
    description: "Vitor Lima Siqueira Brandão",
    imageOrder: ImagePosition.right,
  };

  return (
    <div>
      <div id="about" className={styles.container}>
        <About />
      </div>
      <div id="alex" className={styles.container}>
        <Profile user={alex} />
      </div>
      <div id="vitor" className={styles.container}>
        <Profile user={vitor} />
      </div>
      <div id="salve" className={styles.container}>
        <Salve />
      </div>
      <Footer />
    </div>
  );
}
