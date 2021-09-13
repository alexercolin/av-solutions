import styles from "./styles.module.scss";
import About from "../About/index";
import Team from "../Team/index";

export default function MainContainer() {
  return (
    <div>
      <div className={styles.container}>
        <About />
      </div>
      <div className={styles.container}>
        <Team />
      </div>
    </div>
  );
}
