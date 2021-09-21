import { useState } from "react";
import styles from "./styles.module.scss";

export default function Header() {
  const [activeLink, setActiveLink] = useState(0);

  return (
    <nav className={styles.menu}>
      <ul>
        <li>
          <h1>AV Tech</h1>
        </li>
        <li>
          <a
            href="#about"
            onClick={() => setActiveLink(0)}
            className={activeLink === 0 ? styles.active : ""}
          >
            Sobre
          </a>
        </li>
        <li>
          <a
            href="#alex"
            onClick={() => setActiveLink(1)}
            className={activeLink === 1 ? styles.active : ""}
          >
            Alex
          </a>
        </li>
        <li>
          <a
            href="#vitor"
            onClick={() => setActiveLink(2)}
            className={activeLink === 2 ? styles.active : ""}
          >
            Vitor
          </a>
        </li>
        <li>
          <a
            href="#salve"
            onClick={() => setActiveLink(3)}
            className={activeLink === 3 ? styles.active : ""}
          >
            Manda um salve!
          </a>
        </li>
      </ul>
    </nav>
  );
}
