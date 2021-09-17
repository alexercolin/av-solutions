import styles from "./styles.module.scss";

export default function Header() {
  return (
    <nav className={styles.menu}>
      <ul>
        <li>
          <h1>AV Solutions</h1>
        </li>
        <li>
          <a href="#about">Sobre</a>
        </li>
        <li>
          <a href="#alex">Alex</a>
        </li>
        <li>
          <a href="#vitor">Vitor</a>
        </li>
        <li>
          <a href="#salve">Manda um salve!</a>
        </li>
        <li>
          <a href="#">Blog dos devs</a>
        </li>
      </ul>
    </nav>
  );
}
