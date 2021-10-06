import styles from "./styles.module.scss";
import About from "../About";
import Footer from "../Footer";
import React from "react";
import Salve from "../Salve";
import Profile from "../Profile";
import Head from "next/head";

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
  const livingDaysAlex = Math.round(
    (new Date().getTime() - new Date(1997, 11, 14).getTime()) / 86400000
  );
  const livingDaysVitor = Math.round(
    (new Date().getTime() - new Date(1993, 9, 13).getTime()) / 86400000
  );

  const alex: IUser = {
    name: "alexercolin",
    fullName: "Alex Ercolin Oliveira",
    description: `Olá usuários da internet ✌️ Meu nome é Alex. Sou formado em Engenharia de Produção pela FACENS. Tenho dias de idade ${livingDaysAlex} (a gente fez a continha com js). Iniciei minha trajetória profissional  ̶f̶a̶z̶e̶n̶d̶o̶ ̶m̶u̶i̶t̶o̶s̶ ̶c̶a̶f̶é̶s̶ no setor de vendas e passei um bom tempo em engenheria de processos, mas sempre com um pé em Tecnologia. Aí o gerente ficou louco e decidiu começar do zero e se tornar um desenvolvedor. Atualmente atuo como Full-Stack Developer (nome chique né?) trabalhando com a minha linguagem de programação favorita: JavaScript. `,
    imageOrder: ImagePosition.left,
  };

  const vitor: IUser = {
    name: "ViBrandao",
    fullName: "Vitor Lima Siqueira Brandão",
    description: `Primeiro eu queria cumprimentar os internautas. Oi Internautas! 👋 Me chamo Vitor. Sou formado em Análise e Desenvolvimento de Sistemas pela Fatec Sorocaba. Tenho ${livingDaysVitor} dias de idade (a gente fez a continha com js). Iniciei minha jornada profissional fazendo aquele tipo de 'serviço de estagiário', onde resolvia pequenos bugs e fui apresentado a santíssima trindade do front end:  html, css e javascript. Desde então,  ̶f̶o̶i̶ ̶s̶ó̶ ̶l̶a̶d̶e̶i̶r̶a̶ ̶a̶ ̶b̶a̶i̶x̶o̶ evoluí demais. Hoje atuo como desenvolvedor Full Stack. As linguagens que mais gosto de trabalhar são: C# e JavaScript.`,
    imageOrder: ImagePosition.right,
  };

  return (
    <main>
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
    </main>
  );
}
