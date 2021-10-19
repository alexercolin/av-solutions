import { useState } from "react";
import styles from "./styles.module.scss";
import { FaSun, FaMoon } from "react-icons/fa";

export default function Header() {
  const [activeLink, setActiveLink] = useState(0);

  return (
    <main>
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
          <li className={styles.switchContent}>
            <FaSun size={20} />
            <label className={styles.switch}>
              <input
                type="checkbox"
                onClick={() => {
                  const element = document.body;
                  element.classList.toggle("darkMode");
                }}
              />
              <span className={styles.slider}></span>
            </label>
            <FaMoon />
          </li>
        </ul>
      </nav>
    </main>
  );
}
