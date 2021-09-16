import styles from "./styles.module.scss";
import { DiReact } from "react-icons/di";


export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>AV Solutions - 2021</p>
      <p>This site was built with Next.js <DiReact className={styles.reactIcon} /> </p>
      <p>This site was built with Next.js <DiReact /> </p>
      <p>This site was built with Next.js <DiReact /> </p>
      <p>This site was built with Next.js <DiReact /> </p>
    </footer>
  );
}
