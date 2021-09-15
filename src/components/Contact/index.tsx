import { useState } from "react";
import styles from "./styles.module.scss";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [telephone, setTelephone] = useState("");
  const [company, setCompany] = useState("");
  const [message, setMessage] = useState("");

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h2>Manda um salve!</h2>
        <div className={styles.grid}>
          <form method="post">
            <p>
              <label htmlFor="name">Name</label>
              <input
                required
                id="name"
                type="text"
                name="name"
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
            </p>
            <p>
              <label htmlFor="email">Email</label>
              <input
                required
                id="email"
                type="email"
                name="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
            </p>
            <p>
              <label htmlFor="telephone">Telefone</label>
              <input
                required
                id="telephone"
                type="tel"
                name="telephone"
                value={telephone}
                onChange={(event) => setTelephone(event.target.value)}
              />
            </p>
            <p>
              <label htmlFor="company">Empresa</label>
              <input
                required
                id="company"
                type="text"
                name="company"
                value={company}
                onChange={(event) => setCompany(event.target.value)}
              />
            </p>
            <p>
              <label htmlFor="message">Message</label>
              <textarea
                required
                id="message"
                name="message"
                value={message}
                onChange={(event) => setMessage(event.target.value)}
              />
            </p>
            <p>
              <button>Submit</button>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
