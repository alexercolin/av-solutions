import styles from "./styles.module.scss";
import { DiReact } from "react-icons/di";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>AV Tech - 2021</p>
      <a
        href="https://github.com/alexercolin/av-solutions"
        target="_blank"
        rel="noreferrer"
      >
        This site was built with Next.js
        <DiReact size={35} className={styles.reactIcon} />
      </a>
      <p>av.tech.sorocaba@gmail.com</p>

    </footer>
  );
}
