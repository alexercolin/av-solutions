/* eslint-disable @next/next/no-img-element */
import React from "react";
import styles from "./styles.module.scss";
import ReposHive from "../ReposHive";

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
    <>
      {imageOrder === ImagePosition.right ? (
        <>
          <div className={styles.container}>
            <div className={styles.content}>
              <ReposHive userName={name} />
            </div>
            <div className={styles.content}>
              <img
                className={styles.companyImage}
                src={`/images/${name}.png`}
                alt={`Picture of ${name}`}
              />
            </div>
          </div>
          <div className={styles.secondaryContainer}>
            <h2>Projetos no GitHub</h2>
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
                alt={`Picture of ${name}`}
              />
            </div>
            <div className={styles.content}>
              <ReposHive userName={name} />
            </div>
          </div>
          <div className={styles.secondaryContainer}>
            <h2>{fullName}</h2>
            <h2>Projetos no GitHub</h2>
          </div>
        </>
      )}
      <div className={styles.content}>
        <p>{description}</p>
      </div>
    </>
  );
}
