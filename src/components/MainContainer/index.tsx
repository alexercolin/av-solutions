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
    description:
      "Primeiro eu queria cumprimentar os internautas. -Oi Internautas! Depois dizer que o meio ambiente é sem dúvida nenhuma uma ameaça ao desenvolvimento sustentável. E isso significa que é uma ameaça pro futuro do nosso planeta e dos nossos países. O desemprego beira 20%, ou seja, 1 em cada 4 portugueses.A população ela precisa da Zona Franca de Manaus, porque na Zona franca de Manaus, não é uma zona de exportação, é uma zona para o Brasil. Portanto ela tem um objetivo, ela evita o desmatamento, que é altamente lucravito. Derrubar arvores da natureza é muito lucrativo!",
    imageOrder: ImagePosition.left,
  };

  const vitor: IUser = {
    name: "ViBrandao",
    fullName: "Vitor Lima Siqueira Brandão",
    description:
      "Primeiro eu queria cumprimentar os internautas. -Oi Internautas! Depois dizer que o meio ambiente é sem dúvida nenhuma uma ameaça ao desenvolvimento sustentável. E isso significa que é uma ameaça pro futuro do nosso planeta e dos nossos países. O desemprego beira 20%, ou seja, 1 em cada 4 portugueses.A população ela precisa da Zona Franca de Manaus, porque na Zona franca de Manaus, não é uma zona de exportação, é uma zona para o Brasil. Portanto ela tem um objetivo, ela evita o desmatamento, que é altamente lucravito. Derrubar arvores da natureza é muito lucrativo!",
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
      {/* <div id="vitor" className={styles.container}>
        <Profile user={vitor} />
      </div> */}
      {/* <div id="salve" className={styles.container}>
        <Salve />
      </div> */}
      <Footer />
    </div>
  );
}
