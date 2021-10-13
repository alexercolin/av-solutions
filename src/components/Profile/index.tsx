/* eslint-disable @next/next/no-img-element */
import React from "react";
import styles from "./styles.module.scss";
import ReposHive from "../ReposHive";
import { AiFillGithub } from "react-icons/ai";
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

interface ProfileProps {
  user: IUser;
}

export default function Profile({ user }: ProfileProps) {
  const { name, fullName, description, imageOrder } = user;
  return (
    <main>
      <Head>
        <title>Empresa AV Tech - Soluções de tecnlogia</title>
        <meta name="description" content="Perfis dos integrantes" />
      </Head>
      {imageOrder === ImagePosition.right ? (
        <>
          <div className={`${styles.container} + ${styles.reversedContainer}`}>
            <div className={styles.content}>
              <ReposHive userName={name} />
            </div>
            <div className={styles.content}>
              <img
                className={styles.companyImage}
                src={`/images/${name}.png`}
                alt="Alex Ercolin"
              />
            </div>
          </div>
          <div className={styles.secondaryContainer}>
            <h2>
              Projetos no GitHub{" "}
              <AiFillGithub size={35} className={styles.reactIcon} />
            </h2>
            <h2>{fullName}</h2>
          </div>
        </>
      ) : (
        <>
          <div className={styles.container}>
            <div className={styles.content}>
              <img
                className={styles.companyImage}
                src={`/images/${name}.png`}
                alt="Vitor Brandão"
              />
            </div>
            <div className={styles.content}>
              <ReposHive userName={name} />
            </div>
          </div>
          <div className={styles.secondaryContainer}>
            <h2>{fullName}</h2>
            <h2>
              Projetos no GitHub
              <AiFillGithub size={35} className={styles.reactIcon} />
            </h2>
          </div>
        </>
      )}
      <div className={styles.content}>
        <p>{description}</p>
      </div>
    </main>
  );
}
