/* eslint-disable @next/next/no-img-element */
import styles from "./styles.module.scss";

export default function About() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h2>About</h2>
        <p>
          A AV Solutions, ou melhor dizendo, Alex e Vitor Solutions inicia sua
          jornada em 2021. Nosso objetivo é trazer ao setor de tecnologia
          brasileiro uma nova abordagem meio Z e Millennial, mas fique
          tranquilo, não vamos te chamar de cringe e nem colocar um tiktok no
          seu site, só se você quiser.
        </p>
        <p>
          Queremos unir custo benefício, agilidade, design, boas práticas,
          simplicidade e descontração. Nossos ideais podem ser grandiosos, mas
          nossas soluções se adequam a qualquer organização.Podemos resolver
          desde aquele bugzinho no seu sistema, até criar uma nova solução do
          zero, utilizando as melhores tecnologias atuais.
        </p>
        <p>
          Entre em contato com a gente, prometemos fazer uma avaliação honesta e
          clara e te entregar a melhor proposta.
        </p>
      </div>
      <div className={styles.content}>
        <img
          className={styles.companyImage}
          src="/images/AVSolutions.png"
          alt="Picture to represent the partnership"
        />
      </div>
    </div>
  );
}
